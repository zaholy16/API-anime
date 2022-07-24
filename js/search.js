let formSearch = document.querySelector('#search');

const getResultsSearch = (results) => {
    console.log(results);

   results.forEach(card => {
        drawCard(card.images.jpg.image_url, card.title, card.type, card.episodes, card.status, card.aired.string, card.score, card.popularity, card.favorites, card.synopsis);
   });   
}

formSearch.addEventListener("submit", (evt) => {
    evt.preventDefault();
   
    let {searchAnime} = evt.target;
    console.log(searchAnime.value);

    clear();

    fetch(`${URL}/anime?letter=${searchAnime.value}`) //Promesa para traer datos de la API
        .then(response => response.json())
        .then(data => getResultsSearch(data.data)); 
});

// let peticion = ['kimetsu', "naruto", "spy"];
// let result = peticion.filter(name => name.includes(searchAnime.value));
// console.log(result);