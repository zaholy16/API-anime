
let detailCard = " ";
let genres = [];
let names = [];
let stringGenres = "";

let resultsCards = document.querySelector('#cards-container');
let title = document.querySelector('#title-container');
let containerInfo = document.querySelector('#infoCard-container');
let containerSynopsis = document.querySelector('#synopsis-container');

let divTitle = document.createElement("div");
divTitle.classList.add("rounded", "text-center");
divTitle.setAttribute("id", "titleStyle");
title.append(divTitle);
divTitle.innerHTML = `<h1>Most popular</h1>`;

const getCards = (data) => {
    
    data.forEach(card => {

        genres = card.genres;
        genres.forEach(genre => {
            stringGenres += genre.name + " | ";
        });
        drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, stringGenres, card.score, card.popularity, card.favorites, card.synopsis);
        stringGenres = " ";
    });
}

fetch(`${URL}/top/anime`) //Promesa para traer datos de la API
.then(response => response.json())
.then(data => {
    getCards(data.data);
});

