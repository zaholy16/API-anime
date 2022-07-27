let random = document.querySelector('#navbar-random');
let randomAnime = [];

let getRandomAnime = (data) => {

    randomAnime.push(data.data);
    randomAnime.forEach(random => {

        if(random.score == null) {
            random.score = 0;
        }else if(random.synopsis == null){
            random.synopsis = "No synopsis";
        }
        else{
            genres = random.genres;
            genres.forEach(genre => {
                stringGenres += genre.name + " | ";
            });
            drawDetails(random.images.jpg.image_url, random.title, random.type, random.episodes, random.status, random.aired.string, stringGenres, random.score, random.popularity, random.favorites, random.synopsis);
            stringGenres = "";
        }
    });
}

random.addEventListener("click", () => {

    clear();
    divTitle.innerHTML = "";

    fetch(`${URL}/random/anime`)
    .then(response => response.json())
    .then(data => {
        getRandomAnime(data);
        footerNav.hidden = true;
    }); 
});
