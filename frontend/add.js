const addResto = async () => {
    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const imageurl = document.getElementById("imageurl").value;
    if (name && type && imageurl) {
        // call API
        const params = {
            name: name,
            type: type,
            imageurl: imageurl,
        };
        try {
            const restaurant = await fetch("http://localhost:5000/restaurants", {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(params),
            }).then((response) => {
                return response.json();
            }).then((restaurant) => {
                alert("New restaurant id " + restaurant.id + " is created");
            });
        } catch (error) {
            alert("Cannot add new restaurant");
        }
    } else {
        alert("All fields are required !!");
    }
};
