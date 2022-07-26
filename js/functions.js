
let resultsCards = document.querySelector('#cards-container');
let containerInfo = document.querySelector('#infoCard-container');
let containerSynopsis = document.querySelector('#synopsis-container');

const clear = () => {
    resultsCards.innerHTML = " ";
    detailCard.innerHTML = " ";
    containerSynopsis.innerHTML = " ";
}

const sortByName = () => {
    animes.sort(function (a1, a2) {
        return a1.title > a2.title ? 1 : -1;
    });
};
      

const drawCard = (image, title, type, episodes, status, date, stringGenres, score, popularity, favorites, synopsis) => {
    let divCard = document.createElement("div");
    divCard.classList.add("card", "text-center", "d-flex", "align-items-center", "fw-bolder", "justify-content-center");
    divCard.setAttribute("id", "cardStyle");

    divCard.innerHTML = `
    <img src="${image}" class="rounded" id="imgCard">
    <div class="card-body d-flex align-items-center justify-content-center" id="titleCard">
        <p class="fs-5">${title}</p>
    </div> `;

    resultsCards.append(divCard);

    divCard.addEventListener("click", () => {

        clear();
        divTitle.innerHTML = "";
        footerNav.hidden = true;
        drawDetails(image, title, type, episodes, status, date, stringGenres, score, popularity, favorites, synopsis);
    });
}

const drawDetails = (image, title, type, episodes, status, date, stringGenres, score, popularity, favorites, synopsis) => {

    clear();
    
    detailCard = document.createElement("div");
    detailCard.classList.add("container", "d-flex", "flex-row", "justify-content-around");
    detailCard.setAttribute("id", "infoCard");

    let poster = document.createElement("div");
    poster.setAttribute("id", "poster");

    poster.innerHTML = `
    <div class="row d-flex justify-content-center align-items-center">
        <img src="${image}" class="rounded" id="imgCard">
        <p class="fs-5 rounded text-center" id="status"><b>${status}</b></p>
    </div>`

    let about = document.createElement("div");
    about.setAttribute("id", "about");

    about.innerHTML = `
    <div id="titleAbout"><b><h1>${title}</b></h1></div>
    <div class="rounded text-center" id="type"><h4>${type}</h4></div>
    <p class="fs-4"><b>Episodes:</b> ${episodes}</p>
    <p class="fs-4"><b>Aired:</b> ${date}</p>
    <p class="fs-4"><b>Genres:</b> ${stringGenres}</p>
    `;

    let ranked = document.createElement("div");
    ranked.classList.add("row", "d-flex", "justify-content-center","align-items-center")
    ranked.setAttribute("id", "ranked");

    let containerRanked = document.createElement("div");
    containerRanked.classList.add("d-flex", "justify-content-around","align-items-center", "rounded");
    containerRanked.setAttribute("id", "container-ranked");

    left = document.createElement("div");
    left.classList.add("text-center", "border-end");
    left.setAttribute("id", "left");

    left.innerHTML = `
    <div class="icon">
        <svg id="i-compose" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M27 15 L27 30 2 30 2 5 17 5 M30 6 L26 2 9 19 7 25 13 23 Z M22 6 L26 10 Z M9 19 L13 23 Z" />
        </svg>
    </div>
    <b><p class="fs-4">Score</b></p>
    <p class="fs-5">${score}</p>
    </div>`;

    center = document.createElement("div");
    center.classList.add("text-center", "border-end");
    center.setAttribute("id", "center");

    center.innerHTML = `
    <div class="icon">
        <svg id="i-eye" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <circle cx="17" cy="15" r="1" />
            <circle cx="16" cy="16" r="6" />
            <path d="M2 16 C2 16 7 6 16 6 25 6 30 16 30 16 30 16 25 26 16 26 7 26 2 16 2 16 Z" />
        </svg>
    </div>
    <p class="fs-4"><b>Popularity</b></p>
    <p class="fs-5">${popularity}</p>`;

    right = document.createElement("div");
    right.classList.add("text-center", "fs-4");
    right.setAttribute("id", "right");

    right.innerHTML = `
    <div class="icon">
        <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z" />
        </svg>
    </div>
    <p class="fs-4"><b>Favorites</b></p>
    <p class="fs-5">${favorites}</p>`;

    containerRanked.append(left, center, right);
    ranked.append(containerRanked);
    detailCard.append(poster, about, ranked);

    containerSynopsis.innerHTML = `
        <h1><i>Synopsis</i></h1>
        <p class="fs-4">${synopsis}</p>`;

    containerInfo.append(detailCard);
}