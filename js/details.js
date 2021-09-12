const detailContainer = document.querySelector(".team-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://thronesapi.com/api/v2/characters/" + id;

async function fetchInfo() {
    try {
        const fetchDetails = await fetch(url)

        const details = await fetchDetails.json();

        console.log(details);

        createHtml(details);


    } catch(error) {
        console.log(error);
        detailContainer.innerHTML = displayError("error", error);
    }
};

fetchInfo();

function createHtml(details) {

    document.title = `${details.fullName}`;
  
    detailContainer.innerHTML = `<div class="detailCard">
                                <img src="${details.imageUrl}" alt="${details.image}" />
                                </div>
                                <div class="detailCardText"> 
                                <h1>${details.fullName}</h1>
                                <p>Title: ${details.title}</p>
                                <p>Family: ${details.family}</p>
                                </div>`
}; 



