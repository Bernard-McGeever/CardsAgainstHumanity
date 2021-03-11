fetch('../data/CAH_Data.json')
    .then(reponse => reponse.json())
    .then(data => retriveData(data));

function retriveData(cardData) {
    const blackCard = cardData.data.black[Math.floor(Math.random() * cardData.data.black.length)];
    const whiteCards = [];
    for (i = 0; i < blackCard.pick; i++){
        whiteCards.push(cardData.data.white[Math.floor(Math.random() * cardData.data.white.length)])
    }

    console.log(blackCard.text);
    whiteCards.forEach(card => console.log(card.text));
}