import React, { useEffect, useState } from 'react';

export default function Visu() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8001/visucards/');
            const data = await response.json();
            console.log(data); // Verifique se os dados são impressos corretamente
            setCards(data.cards);
            console.log(cards)
          } catch (error) {
            console.error('Erro ao buscar dados do backend:', error);
          }
        };
      
        fetchData();
      }, []);


    return (
        <div>
            <a href='../'><h1>voltar</h1></a>
            <h1>Cartas de Yu-Gi-Oh!</h1>
            <ul>
                 {cards.map(cards => ( 
                    <li key={cards.id}>
                        <img src={cards.image} alt={cards.name} />
                        <p>Name: {cards.name}</p>
                        <p>Type: {cards.type}</p>
                        <p>Attack: {cards.atk}</p> {/* Adicione estas linhas para exibir outras propriedades */}
                        <p>Defense: {cards.def}</p>
                        <p>Level: {cards.level}</p>
                        <p>Race: {cards.race}</p>
                        <p>Attribute: {cards.attribute}</p>
                        <p>Attribute: {cards.desc}</p>
                    </li>
                ))};
            </ul>
        </div>
    );
}

