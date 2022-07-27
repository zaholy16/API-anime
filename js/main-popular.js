
let animes = [];
let genres = [];
let stringGenres = "";
let detailCard = "";
let idGenre;

let home = document.querySelector('#home');
let title = document.querySelector('#title-container');

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

fetch(`${URL}/top/anime`)
.then(response => response.json())
.then(data => {
    animes = data.data;
    sortByName();
    getCards(data.data);
    footerNav.hidden = true;
});












