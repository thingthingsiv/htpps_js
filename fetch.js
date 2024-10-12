// fetch = Function used for making HTTP requests to fetch resources
//         (JSON style data, image , files)
//         Simplifies asynchronous data fetching in javascript and used for interacting
//         with APIs to retrieve and send data asynchronously over the web 
//         fetch(url, {options})
fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        if (pokemonSprite) {
            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } else {
            imgElement.style.display = "none";
        }
    }
    catch (error) {
        console.error(error);
        alert("Pokemon not found!");
    }

}