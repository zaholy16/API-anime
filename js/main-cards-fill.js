let cards = [];
let detailCard = " ";
let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let containerInfo = document.querySelector('#infoCard-container');

let divTitle = document.createElement("div");
divTitle.setAttribute("id", "titleStyle")
title.append(divTitle);

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
            <p class="fs-4"><b>Episodes:</b> ${episodes}</p>
            <p class="fs-4"><b>Aired:</b> ${date}</p>
        </div>
        <div id="ranked" class="row d-flex justify-content-center align-items-center">
            <div id="container-ranked" class="d-flex justify-content-around align-items-center rounded">
                <div id="left" class="text-center border-end">
                    <div class="icon">
                        <svg id="i-compose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
                        </svg>
                    </div>
                    <b><p class="fs-4">Score</b></p>
                    <p class="fs-5">${score}</p>
                </div>
                <div id="center" class="text-center border-end">
                    <div class="icon">
                        <svg id="i-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <circle cx="17" cy="15" r="1" />
                            <circle cx="16" cy="16" r="6" />
                            <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
                        </svg>
                    </div>
                    <p class="fs-4"><b>Popularity</b></p>
                    <p class="fs-5">${popularity}</p>
                </div>
                <div id="right" class="text-center fs-4"">
                    <div class="icon">
                        <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
                        </svg>
                    </div>
                    <p class="fs-4"><b>Favorites</b></p>
                    <p class="fs-5">${favorites}</p>
                </div>
            </div>
        </div>`

        synopsis = document.createElement("div");
        synopsis.setAttribute("id", "synopsisInfo");
        synopsis.classList.add("container");

        synopsis.innerHTML = `<div><h1>Synopsis</h1>
            <p>${synopsis}</p></div>`

        containerInfo.appendChild(detailCard);
        containerInfo.appendChild(synopsis);
    });
}

fetch(`${URL_ANIME}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => getDataCards(data)); 

