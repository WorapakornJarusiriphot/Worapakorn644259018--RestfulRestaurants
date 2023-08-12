
// delete.js
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

// Fetching the restaurant data to get the name
fetch(`http://localhost:5000/restaurants/${id}`)
  .then(response => response.json())
  .then(data => {
    const restaurantName = data.name;
    document.getElementById("restaurant-id").innerText = restaurantName;
  })
  .catch(error => console.error("Error fetching restaurant:", error));

async function deleteRestaurant() {
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting restaurant");
    }

    const restaurantData = await response.json();
    const restaurantName = restaurantData.name;

    alert(`คุณได้ทำการลบร้าน ${id} ไปแล้ว`);
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error deleting restaurant:", error);
  }
}


