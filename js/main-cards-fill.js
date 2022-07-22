let cards = [];

let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let infoCards = document.querySelector('#infoCard-container');
let detailCard = document.querySelector('#infoCard');

let divTitle = document.createElement("div");
divTitle.setAttribute("id", "titleStyle")
title.append(divTitle);

const getDataCards = (data) => {
    
    cards.push(data.data);
    cards.forEach(cardsBase => {
        cardsBase.forEach(card => {
            drawCard(card.images.jpg.image_url, card.title, card.mal_id);
        });
    });
}

const drawCard = (image, title) => {

    let divCard = document.createElement("div");
    divCard.classList.add("card", "text-center", "d-flex", "align-items-center", "justify-content-center");
    divCard.setAttribute("id", "cardStyle");

    divCard.innerHTML = `
    <img src="${image}" class="rounded" id="imgCard">
    <div class="card-body d-flex align-items-center justify-content-center" id="titleCard">
        <p>${title}</p>
    </div> `;

    resultsCards.append(divCard);

    divCard.addEventListener("click", () => {

        resultsCards.innerHTML = " "; 
        divTitle.innerHTML = " ";

        detailCard.innerHTML = `
        <div id="poster">
            <img src="${image}" class="rounded" id="imgCard">
        </div>
        <div id="about">
            <h3>${title}</h3>
        </div>`

        infoCards.append(detailCard);
    });
}

fetch(`${URL_ANIME}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => getDataCards(data)); 

