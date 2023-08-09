// delete.js
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function deleteRestaurant() {
  try {
    const response = await fetch(`http://localhost:5000/restaurants/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Error deleting restaurant");
    }

    alert("Restaurant deleted successfully!");
    window.location.href = "index.html";
  } catch (error) {
    console.error("Error deleting restaurant:", error);
  }
}

document.getElementById("delete-btn").addEventListener("click", deleteRestaurant);
