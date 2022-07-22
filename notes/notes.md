//Forma 1

<!-- // resultsCards.innerHTML += 
// `<div class="card" id="cards-characters">
//     <img src="./img/logoNaruto.png" class="card-img-top">
//     <div class="card-body">
//         <h5 class="card-title">${characters[character].name}</h5>
//         <p class="card-text">${characters[character].about}</p>
//     </div>
// </div>` -->

//Forma 2

// let divCard = document.createElement("div");
// divCard.classList.add("card");
// divCard.setAttribute("id", "cards-characters")

// let imgCard = document.createElement("img");
// imgCard.setAttribute("src", "./img/logoNaruto.png");
// imgCard.classList.add("card-img-top");

// let divCardBody = document.createElement("div");
// divCardBody.classList.add("card-body");

// let title = document.createElement("h5");
// title.classList.add("card-title");
// title.innerHTML = characters[character].name;

// let about = document.createElement("p");
// about.classList.add("card-text");
// about.innerHTML = characters[character].about;

// divCardBody.append(about);
// divCardBody.append(about);
// divCard.append(imgCard);
// divCard.append(divCardBody);

// resultsCards.append(divCard);