
let tv = document.querySelector("#navbar-tv");
let movie = document.querySelector("#navbar-movie");

tv.addEventListener("click", () => {

    resultsCards.innerHTML = " ";
    // divInfoCard.innerHTML = " ";
    divTitle.innerHTML = `<h1>Animes</h1>`

    cards.forEach(cardsTV => {
        cardsTV.forEach(cardTV => {
            let {type} = cardTV;
            
            if(type == "TV"){
                drawCard(cardTV.images.jpg.image_url, cardTV.title);
            }
        });
    });
});

movie.addEventListener("click", () => {
   
    resultsCards.innerHTML = " ";
    // divInfoCard.innerHTML = " ";
    divTitle.innerHTML = `<h1>Movies</h1>`

    cards.forEach(cardsMovie => {
        cardsMovie.forEach(cardMovie => {
            let {type} = cardMovie;
            
            if(type == "Movie"){
                drawCard(cardMovie.images.jpg.image_url, cardMovie.title);
            }
        });
    });
});