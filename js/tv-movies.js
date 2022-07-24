let tv = document.querySelector("#navbar-tv");
let movie = document.querySelector("#navbar-movie");

const getCardTV = (tvs) => {
    tvs.forEach(card => {
        let {type} = card;
        
        if(type == "TV"){
            drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
        }
    });
}

const getCardMovie = (movies) => {
    movies.forEach(card => {
        let {type} = card;

        if(type == "Movie"){
            drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
        }
    });
}

tv.addEventListener("click", () => {
    clear();
    divTitle.innerHTML = `<h1>TV</h1>`;

    fetch(`${URL}/top/anime?type=TV`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCardTV(data.data)); 
});

movie.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = `<h1>Movies</h1>`

    fetch(`${URL}/top/anime?=Movie`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCardMovie(data.data)); 
});