let typeAnime = [];
let typeMovie = [];

let tv = document.querySelector("#navbar-tv");
let movie = document.querySelector("#navbar-movie");

const getCardTV = (data) => {

    typeAnime.push(data.data);
    typeAnime.forEach(cardsTV => {
        cardsTV.forEach(card => {
            let {type} = card;
            
            if(type == "TV"){
                drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
            }
        });
    });
    console.log(typeAnime);
}

const getCardMovie = (data) => {

    typeMovie.push(data.data);
    typeMovie.forEach(base => {
        base.forEach(card => {
            
            let {type} = card;

            if(type == "Movie"){
                drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
            }
        });
    });
    console.log(typeMovie);
}


tv.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = `<h1>TV</h1>`;

    fetch(`${URL_TV}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCardTV(data)); 

    typeAnime.pop();
    
});

movie.addEventListener("click", () => {
   
    clear();
    divTitle.innerHTML = `<h1>Movies</h1>`

    fetch(`${URL_MOVIE}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCardMovie(data)); 

    typeMovie.pop();
});