import requests
from django.http import JsonResponse,HttpResponse
from pocketbase import PocketBase  # Client also works the same
from .models import Usuario, Favorito

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

def auth_with_password(identity, password):
    # Make a request to the PocketBase API to authenticate the user
    api_url = 'https://pocketbase-production-e3fc.up.railway.app/api/collections/users/auth-with-password'
    data = {'identity': identity, 'password': password}
    response = requests.post(api_url, data=data)

    # Check if the request was successful
    if response.status_code == 200:
        # Extract the token and user data from the API response
        auth_data = response.json()
        token = auth_data.get('token')
        user_data = auth_data.get('record')

        return token, user_data

    # If authentication fails, return None
    return None, None

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
            # Create the user
            pb.collection('users').create(data)
            token, user_data = auth_with_password(email, password)
            # salvando no models
            usuario = Usuario()
            usuario.username = username
            usuario.email = email
            usuario.password = password
            usuario.password_confirm = password_confirm
            usuario.name = name
            usuario.token = token
            usuario.save()
            # Authenticate the user after successful registration
            print('teste de token')
            print(token)
            if token and user_data:
                # Login the user in Django
                return JsonResponse({'status': 'success', 'token': token, 'record': user_data})
            else:
                return JsonResponse({'status': 'error', 'message': 'Authentication failed'})

        except Exception as e:
            print(f"Erro no registro: {e}")
            return JsonResponse({'status': 'error', 'message': 'Erro no registro'})

# Função de login
def login(request):
    pb = PocketBase('https://pocketbase-production-e3fc.up.railway.app')

    # Obter parâmetros 'username' e 'password' da solicitação POST
    username = request.GET.get('username', '')
    password = request.GET.get('password', '')

    # Verificar se o usuário existe
    results = pb.collection('users').get_list(1, 1, {"filter": f'username = "{username}"'})

    if not results.items:
        return HttpResponse('Usuário não encontrado', status=404)

    user_id = str(results.items[0])
    user_record = pb.collection('users').get_one(user_id[9:24])

    try:
        # Autenticar usuário com PocketBase
        usuario = Usuario.objects.filter(username = username)
        for user in usuario:
            if  user.password == password:
                token = user.token
            else:
                return HttpResponse('login ou senha incorretos')

        if token:
            return JsonResponse({'status': 'success', 'token': token})
        else:
            return JsonResponse({'status': 'error', 'message': 'Authentication failed'})

    except Exception as e:
        print(f"Erro no registro: {e}")
        return JsonResponse({'status': 'error', 'message': 'Erro no registro'})
    
def dados_do_usuario(request):
    # Verificar se o token está presente no cabeçalho da solicitação
    token = request.headers.get('Authorization', '').replace('Bearer ', '')

    print(token)
    print(token[0:207])

    if not token:
        return JsonResponse({'status': 'error', 'message': 'Token não fornecido'}, status=401)

    try:
        print('teste try 1')
    
        print('teste try 2')

        # Puxando os dados do modelo Usuario 
        usuario = Usuario.objects.get(token=token)

        user_info = {
            'username': usuario.username,
            'email': usuario.email,
            'name': usuario.name
        }

        print('teste try 4')

        # Verificar se o usuário existe
        if user_info:
            print('teste if user_info')

            # Retorna os dados do usuário
            return JsonResponse({
                'status': 'success',
                'username': user_info['username'],
                'email': user_info['email'],
                'name': user_info['name']
                # Adicione mais informações do usuário conforme necessário
            })
        else:
            return JsonResponse({'status': 'error', 'message': 'Usuário não encontrado'}, status=404)

    except Usuario.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Usuário não encontrado'}, status=404)

    except Exception as e:
        print(f"Erro ao obter dados do usuário: {e}")
        return JsonResponse({'status': 'error', 'message': 'Erro ao obter dados do usuário'}, status=500)

def FavoritarCard(request):
    try:
        if request.method == 'GET':
            id_card = request.GET.get('id_card', '')
            usuario = request.GET.get('usuario', '')

            # Check if the card is already favorited by the user
            if Favorito.objects.filter(id_card=id_card, usuario=usuario).exists():
                return JsonResponse({'status': 'error', 'message': 'Card already favorited'}, status=400)

            # Favoriting the card
            favorito = Favorito()
            favorito.id_card = id_card
            favorito.usuario = usuario
            favorito.save()

            return JsonResponse({'status': 'success', 'message': 'Card favorited'})
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)

    except Exception as e:
        print(f"Error ao tentar favoritar card: {e}")
        return JsonResponse({'status': 'error', 'message': 'Error favoriting card'}, status=500)

def desfavoritar_card(request):
    try:
        if request.method == 'GET':
            id_card = request.GET.get('id_card', '')
            usuario = request.GET.get('usuario', '')
            
            # Check if the Favorito object exists
            favorito = Favorito.objects.filter(id_card=id_card, usuario=usuario).first()

            if favorito:
                favorito.delete()
                return JsonResponse({'status': 'success', 'message': 'Card removido com sucesso'})
            else:
                return JsonResponse({'status': 'error', 'message': 'Card não encontrado nos favoritos'}, status=400)
        else:
            return JsonResponse({'status': 'error', 'message': 'Invalid request method'}, status=400)
    except Exception as e:
        print(f"Error ao tentar desfavoritar card: {e}")
        return JsonResponse({'status': 'error', 'message': 'Error desfavoriting card'}, status=500)

def visufavoritos(request):
    token = request.headers.get('Authorization', '').replace('Bearer ', '')

    if not token:
        return JsonResponse({'status': 'error', 'message': 'Token não fornecido'}, status=401)

    try:
        usuario = Usuario.objects.get(token=token)
        favoritos = Favorito.objects.filter(usuario=usuario.username)

        cards = []
        for favorito in favoritos:
            base_url_Card = f'https://db.ygoprodeck.com/api/v7/cardinfo.php?language=pt&id={favorito.id_card}'
            try:
                data = responseApI(base_url_Card)
                if data["data"]:
                    for resultados in data["data"]:
                        cards_info = FilterCard(resultados)
                        cards.append(cards_info)

            except requests.exceptions.RequestException as e:
                print(f"Erro na solicitação HTTP: {e}")

        contexto = {"cards": cards}
        return JsonResponse(contexto)

    except Usuario.DoesNotExist:
        return JsonResponse({'status': 'error', 'message': 'Usuário não encontrado'}, status=404)

    except Exception as e:
        print(f"Erro ao obter dados do usuário: {e}")
        return JsonResponse({'status': 'error', 'message': 'Erro ao obter dados do usuário'}, status=500)
