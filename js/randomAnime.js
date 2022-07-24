let random = document.querySelector('#navbar-random');
let randomAnime = [];

let getRandomAnime = (data) => {

    randomAnime.push(data.data);
    randomAnime.forEach(random => {
        drawDetails(random.images.jpg.image_url, random.title, random.type, random.episodes, random.status, random.aired.string, random.score, random.popularity, random.favorites, random.synopsis);
    });
}

random.addEventListener("click", () => {

    clear();

    fetch(`${URL}/random/anime`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getRandomAnime(data)); 

});