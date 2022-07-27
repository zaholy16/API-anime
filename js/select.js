let select = document.querySelector("#select");
let footerNav = document.getElementById("footer-nav");
let page1 = document.querySelector("#page1");
let page2 = document.querySelector("#page2");
let page3 = document.querySelector("#page3");

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
.then(data => {
    renderSelectGenres(data.data);
});

select.addEventListener("change", (evt) => {

    idGenre = parseInt(evt.target.value);

    if(idGenre == 0){
        window.location.reload();
    }

    pages(idGenre, 1);
}); 

const pages = (genre, page) => {

    clear();
    divTitle.innerHTML = "";
    fetch(`${URL}/anime?genres=${genre}&page=${page}`) 
    .then(response => response.json())
    .then(data => {
        animes = data.data;
        sortByName();
        footerNav.hidden = false;
        getCards(data.data);
    }); 
}

page1.addEventListener("click", () => {
    pages(idGenre, 1);
});

page2.addEventListener("click", () => {
    pages(idGenre, 2);
});

page3.addEventListener("click", () => {
    pages(idGenre, 3);
});
