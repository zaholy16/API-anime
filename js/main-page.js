let topCards = [];
let detailCard = " ";

let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let containerInfo = document.querySelector('#infoCard-container');
let containerSynopsis = document.querySelector('#synopsis-container');

let divTitle = document.createElement("div");
divTitle.classList.add("rounded", "text-center");
divTitle.setAttribute("id", "titleStyle");
title.append(divTitle);
divTitle.innerHTML = `<h1>Most polular</h1>`;

const getTopCards = (data) => {
    
    topCards.push(data.data);
    topCards.forEach(cards => {
        cards.forEach(data => {
            drawCard(data.images.jpg.image_url, data.title, data.type, data.episodes, data.status, data.aired.string, data.score, data.popularity, data.favorites, data.synopsis)
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
    
        drawDetails(image, title, type, episodes, status, date, score, popularity, favorites, synopsis);
    });
}

fetch(`${URL}/top/anime`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => {
    getTopCards(data);
}); 