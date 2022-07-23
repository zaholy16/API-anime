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
            drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites);
        });
    });
}

const drawCard = (image, title, type, episodes, status, date, score, popularity, favorites) => {

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
            <div class="row d-flex justify-content-center align-items-center">
                <img src="${image}" id="imgCard">
                <p class="fs-5 rounded text-center" id="status"><b>${status}</b></p>
            </div>
        </div>
        <div id="about">
            <div id="titleAbout"><b><h1>${title}</b></h1></div>
            <div class="rounded text-center container" id="type"><h4>${type}</h4></div>
            <p class="fs-5"><b>Episodes:</b> ${episodes}</p>
            <p class="fs-5"><b>Aired:</b> ${date}</p>
        </div>
        <div id="ranked" class="d-flex justify-content-center align-items-center">
            <div id="container-ranked" class="d-flex justify-content-around align-items-center rounded">
                <div id="left" class="text-center border-end">
                    <b><p class="fs-4">Score</b></p>
                    <p class="fs-5">${score}</p>
                </div>
                <div id="center" class="text-center border-end">
                    <p class="fs-4"><b>Popularity</b></p>
                    <p class="fs-5">${popularity}</p>
                </div>
                <div id="right" class="text-center fs-4"">
                    <p class="fs-4"><b>Favorites</b></p>
                    <p class="fs-5">${favorites}</p>
                </div>
            </div>
        </div>`

        infoCards.append(detailCard);
    });
}

fetch(`${URL_ANIME}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => getDataCards(data)); 

