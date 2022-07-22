let cards = [];

let resultsCards = document.querySelector('#cards-container');
let titleElement = document.querySelector('#container-title');
let infoCard = document.querySelector('#infoCard-container');

let divTitle = document.createElement("div");
divTitle.setAttribute("id", "titleStyle")
divTitle.innerHTML = `<h2>All</h2>`
titleElement.append(divTitle);

fetch(`${URL_ANIME}`) //Promesa para traer datos de la API
  .then(response => response.json())
  .then(data => mainCards(data)); 

const mainCards = (data) => {
    
    cards.push(data.data);
    cards.forEach(cardsBase => {
        cardsBase.forEach(card => {
            drawCard(card.images.jpg.image_url, card.title)
        });
    });
}

const drawCard = (image, title) => {

    let divCard = document.createElement("div");
    divCard.classList.add("card");
    divCard.setAttribute("id", "cardStyle");

    divCard.innerHTML = `
    <img src="${image}" class="rounded" id="imgCard">
    <div class="card-body d-flex align-items-center justify-content-center">
        <p>${title}</p>
    </div> `

    resultsCards.append(divCard);

    divCard.addEventListener("click", () => {
        resultsCards.innerHTML = " "; 
        divTitle.innerHTML = " ";

        let divInfoCard = document.createElement("div");
        divInfoCard.classList.add("container", "d-flex", "flex-row", "justify-content-around");
        divInfoCard.setAttribute("id", "infoCard");

        divInfoCard.innerHTML = `
        <div id="poster">
            <img src="${image}" class="rounded" id="imgCard">
        </div>
        <div id="about">
            <h3>${title}</h3>
        </div>`

        infoCard.append(divInfoCard);

    });
}

