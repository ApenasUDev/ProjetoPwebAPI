from django.shortcuts import render
import requests
from django.http import JsonResponse,HttpResponse,response
from pocketbase import PocketBase  # Client also works the same
# from pocketbase.client import FileUpload


# Create your views here.
def FilterCard(resultados):
    if resultados["type"] == "Trap Card" or resultados["type"] == "Spell Card": # erifica se o tipo da carta ("type") é igual a "Trap Card" ou "Spell Card".
        # Se for, cria um dicionário cards_info contendo informações específicas para cartas de armadilha ("Trap Card") ou cartas de feitiço ("Spell Card").
        cards_info = {
            "id": resultados["id"],
            "image": resultados["card_images"][0]["image_url"],
            "name": resultados["name"],
            "type": resultados["type"],
            "desc": resultados["desc"],                     
            "race": resultados["race"],
        }
    else: # Se o tipo da carta não for "Trap Card" ou "Spell Card", assume-se que seja uma carta de monstro e cria um dicionário cards_info com informações específicas para cartas de monstro.
        # Além das informações presentes para cartas de armadilha e feitiço, inclui também as propriedades de ataque ("atk"), defesa ("def"), nível ("level"), atributo ("attribute").
        cards_info = {
            "id": resultados["id"],
            "image": resultados["card_images"][0]["image_url"],
            "image_small": resultados["card_images"][0]["image_url_small"],
            "name": resultados["name"],
            "type": resultados["type"],
            "desc": resultados["desc"],
            "atk": resultados.get("atk", None),  # Use get() para obter "atk" com um valor padrão se estiver ausente
            "def": resultados.get("def", None),  # Use get() para obter "def" com um valor padrão se estiver ausente
            "level": resultados.get("level", None),  # Use get() para obter "level" com um valor padrão se estiver ausente
            "race": resultados["race"],
            "attribute": resultados.get("attribute",None),
        }
    return cards_info # Retorna o dicionário cards_info contendo as informações reformatadas da carta.
def responseApI(base):
        response = requests.get(base) # cria uma solicitação HTTP GET usando a biblioteca requests para o URL fornecido como argumento base.
        response.raise_for_status() # verifica se a solicitação HTTP foi bem-sucedida. 
        data = response.json() # analisa a resposta da solicitação como JSON.
        return data #  retorna os dados da resposta da API

def visucards(request):
    base_url = "https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt" # Define a URL base para a API que será consultada
  # Try e except, o try é para que o Python tente executar aquele código e caso não consiga executar por conta de um erro ele vai retornar o que temos dentro do except.
    try:
        cards = []  # Lista para armazenar os dados dos cards
        data =responseApI(base_url) # chama a função responseAPI para obter os dados da api com a url base passada como paranmetro

        if data["data"]: # verifica se a dados válidos na resposta da API.
            for resultados in data["data"]: # intera sobre os resultados
                cards_info = FilterCard(resultados) # chama a função FilterCard para formatar as informações dos cards
                cards.append(cards_info) # adiciona as informações na lista cards.

            # # Use slice para pegar apenas os primeiros 125 itens
            cards = cards[:125]

            contexto = {"cards": cards} # Prepara um contexto para renderizar o template, incluindo a lista de cartas na página atual.
            print(len(cards))
 
    except requests.exceptions.RequestException as e:
        print(f"Erro na solicitação HTTP: {e}")
        contexto = {"cards": []}  # Em caso de uma exceção do tipo requests.exceptions.
                                  # RequestException (por exemplo, um erro na solicitação HTTP), imprime uma mensagem de erro e define um contexto com uma lista vazia de cartas.
    print(JsonResponse(contexto))
    print(len(contexto))
    return JsonResponse(contexto) # Retorna um json com o contexto preparado.

def buscar_card(request):
    nome_card = request.GET.get('nome_card', '') # Obtém o parâmetro 'nome_card' da solicitação GET. Se não for fornecido, assume uma string vazia como padrão.
    try:
        tipo_selecionado = request.GET.get("tipo") # Obtém o parâmetro 'tipo' da solicitação GET, que parece indicar o critério de pesquisa selecionado.
        # Com base no valor de tipo_selecionado, a função constrói a URL da API (BASE_URL) com diferentes parâmetros de pesquisa (nome, tipo, atributo ou raça).
        if tipo_selecionado == "opcao1":
            BASE_URL = f"https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&type={nome_card}"
        elif tipo_selecionado == "opcao2":
            BASE_URL = f"https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&attribute={nome_card}"
        elif tipo_selecionado == "opcao3":
            BASE_URL = f"https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&race={nome_card}"
        else:
            BASE_URL = f"https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&name={nome_card}"

        cards = []  # Lista para armazenar os dados dos cards
        data = responseApI(BASE_URL) # obter os dados da API com a URL construída.
        if data["data"]: # v
            for resultados in data["data"]: # Se houver, itera sobre os resultados 
                cards_info = FilterCard(resultados) # chama a função FilterCard para formatar as informações de cada carta.
                cards.append(cards_info)

      
            contexto = {"cards": cards} # Prepara um contexto para renderizar o template, incluindo a lista de cartas na página atual.

    except requests.exceptions.RequestException as e: 
        # Em caso de uma exceção do tipo requests.exceptions.RequestException (por exemplo, um erro na solicitação HTTP), imprime uma mensagem de erro e define um contexto com uma lista vazia de cartas.
        print(f"Erro na solicitação HTTP: {e}")
        contexto = {"cards": []}  # Lista vazia em caso de erro

    return JsonResponse(contexto) #     Retorna o json  com o contexto preparado.

## poketbase

def autenticar(username, password):
    pb = PocketBase('https://pocketbase-production-e3fc.up.railway.app')
    
    try:
        auth_data = pb.collection('users').auth_with_password(username_or_email=username, password=password)
        pb.auth_store.clear()
        return JsonResponse({'status': 'success'})
    except Exception as e:
        print(f"Erro na autenticação: {e}")
        return JsonResponse({'status': 'error', 'message': 'Erro na autenticação'})

def register(request):
    if request.method == 'GET':
        pb = PocketBase('https://pocketbase-production-e3fc.up.railway.app')

        username = request.GET.get('username', '')
        email = request.GET.get('email', '')
        password = request.GET.get('password', '')
        password_confirm = request.GET.get('password_confirm', '')
        name = request.GET.get('name', '')

        data = {
            "username": username,
            "email": email,
            "emailVisibility": True,
            "password": password,
            "passwordConfirm": password_confirm,
            "name": name
        }

        try:
            record = pb.collection('users').create(data)
            autenticar(username, password)
            return JsonResponse({'status': 'success'})
        except Exception as e:
            print(f"Erro no registro: {e}")
            return JsonResponse({'status': 'error', 'message': 'Erro no registro'})

def login(request):
    pb = PocketBase('https://pocketbase-production-e3fc.up.railway.app')
    username = request.GET.get('username','')
    if request.method == 'GET':
        listusers = pb.collection('users').get_full_list({filter:f'users == "{username}'})
        print(listusers)