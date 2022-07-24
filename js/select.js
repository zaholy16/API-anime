
let genres = [];

let select = document.querySelector("#select");

const getGenres = (data) => {

    genres.push(data.data);
    genres.forEach(genres => {
        genres.forEach(genre => {
            console.log(genre.name);

            let option = document.createElement("option");
            option.setAttribute("value", genre.mal_id);
            option.innerText = genre.name;

            select.appendChild(option);
        });
    });
}

fetch(`${URL_GENRES}`) //Promesa para traer datos de la API
    .then(response => response.json())
    .then(data => getGenres(data)); 
