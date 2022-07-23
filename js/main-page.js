let cards = [];
let detailCard = " ";

let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let containerInfo = document.querySelector('#infoCard-container');
let containerSynopsis = document.querySelector('#synopsis-container');

let divTitle = document.createElement("div");
divTitle.setAttribute("id", "titleStyle")
title.append(divTitle);

divTitle.innerHTML = `<h1>Top</h1>`;

fetch(`${URL_TOP}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => getDataCards(data)); 

const getDataCards = (data) => {
    
    cards.push(data.data);
    cards.forEach(cardsBase => {
        cardsBase.forEach(card => {
            drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
        });
    });
}

const drawCard = (image, title, type, episodes, status, date, score, popularity, favorites, synopsis) => {

    let divCard = document.createElement("div");
    divCard.classList.add("card", "text-center", "d-flex", "align-items-center", "fw-bolder", "justify-content-center");
    divCard.setAttribute("id", "cardStyle");

    divCard.innerHTML = `
    <img src="${image}" class="rounded" id="imgCard">
    <div class="card-body d-flex align-items-center justify-content-center" id="titleCard">
        <p class="fs-5">${title}</p>
    </div> `;

    resultsCards.append(divCard);

    divCard.addEventListener("click", () => {

        resultsCards.innerHTML = " "; 
        divTitle.innerHTML = " ";
       
        drawDetailCard(image, title, type, episodes, status, date, score, popularity, favorites, synopsis);
    });
}


