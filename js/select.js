let select = document.querySelector("#select");
let idGenre;

const renderSelectGenres = (genres) => {

    genres.forEach(genre => {
        let option = document.createElement("option");
        option.setAttribute("value", genre.mal_id);
        option.innerText = genre.name;

        select.appendChild(option);
    });
}

fetch(`${URL}/genres/anime`)
.then(response => response.json())
.then(data => renderSelectGenres(data.data)); 

select.addEventListener("change", (evt) => {

    idGenre = parseInt(evt.target.value);
    clear();

    if(idGenre == 0){
        window.location.reload();
    }

    fetch(`${URL}/anime?genres=${idGenre}`) 
    .then(response => response.json())
    .then(data => getCards(data.data)); 
});

