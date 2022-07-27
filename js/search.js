let formSearch = document.querySelector('#search');

const getResultsSearch = (results) => {

    if(results.length == 0){
        let msgError = document.createElement("div");
        msgError.classList.add("text-center");
        msgError.innerHTML = `<h1>No results found</h1>`
        resultsCards.appendChild(msgError);
    }
    else{
        getCards(results);
    }
}

formSearch.addEventListener("submit", (evt) => {
    evt.preventDefault();
   
    let {searchAnime} = evt.target;
    clear();
    divTitle.innerHTML = "";

    fetch(`${URL}/anime?letter=${searchAnime.value}`)
        .then(response => response.json())
        .then(data => getResultsSearch(data.data)); 
});