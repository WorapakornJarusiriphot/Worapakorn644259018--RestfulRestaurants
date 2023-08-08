const genRestaurantCard = (restaurant) =>{
    const card = document.createElement("div");
    card.className ="card";
    card.style.width = "18rem";
    const restoCard = `
    <img src="${restaurant.imageURL}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${restaurant.name}</h5>
    <p class="card-text">${restaurant.type}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    card.innerHTML = restoCard;

    const restaurants = document.querySelector("#restaurants"); 
    restaurants.appendChild(card);
}

const onLoad= async () => {
    const allRestaurants = await fetch("http://localhost:5000/restaurants", { 
        method: "GET", 
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    });

    allRestaurants.forEach((restaurant) => {
        genRestaurantCard(restaurant);
    });
}

const main = () => {
  onLoad();
};

main();
