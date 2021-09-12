const url = "https://thronesapi.com/api/v2/characters";

const resultsContainer = document.querySelector(".results");

async function fetchCharacters() {

    try {
        const fetchUrl = await fetch(url)

        const json = await fetchUrl.json();

        console.log(json);

        resultsContainer.innerHTML = "";

        const characters = json;

        characters.forEach(function(card) {
            resultsContainer.innerHTML += `<div class="card">
                                            <a href="details.html?id=${card.id}" >
                                            <img src="${card.imageUrl}" alt="${card.image}" />
                                            <h2>${card.fullName}</h2></a>
                                            <p>${card.family}</p>
                                            </div>`;

        });
    }
    catch(error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError("An error has accoured. Please try again later.");
    }
}

fetchCharacters();
