fetch('../data/CAH_Data.json')
    .then(reponse => reponse.json())
    .then(data => retriveData(data));

function retriveData(cardData) {
    console.log(cardData);
}