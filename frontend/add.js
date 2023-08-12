const addResto = async () => {
  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const imageURL = document.getElementById("imageURL").value;
  if (name && type && imageURL) {
    //call API
    const params = {
      name: name,
      type: type,
      imageURL: imageURL,
    };
    try {
    const restaurant = await fetch("http://localhost:5000/restaurants", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((response) => {
        return response.json();
      })
      .then((restaurant) => {
        alert("New restaurant id " + restaurant.id + " is created");
        window.location.href = "/add.html";
      });
    } catch (error) {
    alert("cannot add new restaurant",error);
      console.error(error)
      alert(error.message);
      window.location.href = "/";
    }
    return false;
  } else {
    alert("All fields are required !!");
    window.location.href = "/";
  }
};
