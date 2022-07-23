let random = document.querySelector('#navbar-random');
let randomAnime = [];

let getRandomAnime = (data) => {

    randomAnime.push(data.data);
    randomAnime.forEach(random => {
        console.log(random);
        drawDetailCard(random.images.jpg.image_url, random.title, random.type, random.episodes, random.status, random.aired.string, random.score, random.popularity, random.favorites, random.synopsis);
    });
   
    console.log(randomAnime);
}

random.addEventListener("click", () => {

    fetch(`${URL_RANDOM}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getRandomAnime(data)); 

});