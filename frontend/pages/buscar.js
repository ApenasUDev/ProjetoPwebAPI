// pages/busca.js
import React, { useState } from 'react';
import axios from 'axios';

const Busca = () => {
    const [nomeCard, setNomeCard] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('opcao1'); // Valor padrão, ajuste conforme necessário
    const [cards, setCards] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8001/buscarcards/', {
                params: { nome_card: nomeCard, tipo: tipoSelecionado }
            });

            setCards(response.data.cards);
        } catch (error) {
            console.error('Erro na busca:', error);
            setCards([]); // Limpa os resultados em caso de erro
        }
    };

    return (
        <div>
            <a href='../'><h1>voltar</h1></a>

            <input
                type="text"
                placeholder="digite ..."
                value={nomeCard}
                onChange={(e) => setNomeCard(e.target.value)}
            />

            <select value={tipoSelecionado} onChange={(e) => setTipoSelecionado(e.target.value)}>
                <option value="opcao1">type</option>
                <option value="opcao2">attribute</option>
                <option value="opcao3">race</option>
                {/* Adicione outras opções conforme necessário */}
            </select>

            <button onClick={handleSearch}>Buscar</button>

            <ul>
                {cards.map((card) => (
                    <li key={card.id}>
                        <img src={card.image} alt={card.name} />
                        <p>{card.name}</p>
                        <p>{card.type}</p>
                        {/* Adicione outras propriedades que deseja exibir */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Busca;
