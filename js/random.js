let random = document.querySelector('#navbar-random');
let randomAnime = [];

let getRandomAnime = (data) => {

    randomAnime.push(data.data);
    randomAnime.forEach(random => {
        genres = random.genres;
        genres.forEach(genre => {
            stringGenres += genre.name + " | ";
        });
        drawDetails(random.images.jpg.image_url, random.title, random.type, random.episodes, random.status, random.aired.string, stringGenres, random.score, random.popularity, random.favorites, random.synopsis);
    });
}

random.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = "";
    // footerNav.hidden = false;

    fetch(`${URL}/random/anime`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getRandomAnime(data)); 

});
