let tv = document.querySelector("#navbar-tv");
let movie = document.querySelector("#navbar-movie");
let types = ["tv", "movie"];
let titles = ["Most popular TVs", "Most Popular Movies"];

tv.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = `<h1>TV</h1>`;

    if(idGenre == undefined){
        getTopMovieTV(types[0], titles[0]);
    }else {
        getTVMovieBySelect(types[0]);
    }
});

movie.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = `<h1>Movies</h1>`;
    
    if(idGenre == undefined){
        getTopMovieTV(types[1], titles[1]);
    }else {
        getTVMovieBySelect(types[1]);
    }
});

const getTopMovieTV = (type, title) => {

    divTitle.innerHTML = `<h1>${title}</h1>`;
    fetch(`${URL}/top/anime?type=${type}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCards(data.data)); 
}

const getTVMovieBySelect = (type) => {
    fetch(`${URL}/anime?genres=${idGenre}&type=${type}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getCards(data.data)); 
}
