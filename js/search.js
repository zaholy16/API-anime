let formSearch = document.querySelector('#search');

const getResultsSearch = (results) => {
    console.log(results);

    
}

formSearch.addEventListener("submit", (evt) => {
    evt.preventDefault();
   
    let {searchAnime} = evt.target;
    console.log(searchAnime.value);

    fetch(`${URL}/anime?letter=${searchAnime.value}`) //Promesa para traer datos de la API
        .then(response => response.json())
        .then(data => getResultsSearch(data.data)); 
});

// let peticion = ['kimetsu', "naruto", "spy"];
// let result = peticion.filter(name => name.includes(searchAnime.value));
// console.log(result);