let cards = [];
let detailCard = " ";
let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let infoCards = document.querySelector('#infoCard-container');

let divTitle = document.createElement("div");
divTitle.setAttribute("id", "titleStyle")
title.append(divTitle);

const getDataCards = (data) => {
    
    cards.push(data.data);
    cards.forEach(cardsBase => {
        cardsBase.forEach(card => {
            drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string);
        });
    });
}

const drawCard = (image, title, type, episodes, status, date) => {

    // console.log(image, title, type, episodes, status, date);
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

        detailCard = document.createElement("div");
        detailCard.classList.add("container", "d-flex", "flex-row", "justify-content-around");
        detailCard.setAttribute("id", "infoCard");

        detailCard.innerHTML = `
        <div id="poster">
            <img src="${image}" class="rounded" id="imgCard">
            <div class="rounded text-center" id="status"><p class="fs-6"><b>${status}</b></p></div>  
        </div>
        <div id="about">
            <div class="titleAbout"><b><h1>${title}</b></h1></div>
            <div class="rounded text-center" id="type"><h4>${type}</h4></div>
            <p class="fs-5"><b>Episodes:</b> ${episodes}</p>
            <p class="fs-5"><b>Aired:</b> ${date}</p>
        </div>`
        
        infoCards.append(detailCard);
    });
}

fetch(`${URL_ANIME}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => getDataCards(data)); 

