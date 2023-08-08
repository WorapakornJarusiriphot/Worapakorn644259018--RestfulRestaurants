const init = async() =>{
    //Get parameters from URL
    const params = new URL(document.location).searchParams;
    const id = params.get("id");
    if(id){
        //get restaurant by ID
        try {
            const url = "http://localhost:5000/restaurants/";
            //console.log(url+id);
            const restaurant = await fetch(url + id, {
              method: "GET",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
            }).then((response) => response.json());
            //console.log(restaurant);
              document.getElementById("id").value  = restaurant.id;
              document.getElementById("name").value = restaurant.name;
              document.getElementById("type").value = restaurant.type;
              document.getElementById("imageURL").value = restaurant.imageURL;
        } catch (error) {
            alert(`Restaurant id ${id} is not found`)
        }
    }
    else{
        alert("Restaurant id is missing")
    }
}

const edit = async () =>{
    const id = getRestaurantIdFromUrl();
    if(id){
        //Update data
         const params = {
           id: id,
           name: document.getElementById("name").value,
           type: document.getElementById("type").value,
           imageURL: document.getElementById("imageURL").value,
         };
         try {
            const url = "http://localhost:5000/restaurants/";
            //console.log(url+id);
            const restaurant = await fetch(url + id, {
              method: "PUT",
              mode: "cors",
              cache: "no-cache",
              credentials: "same-origin",
              headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(params),
            }).then((response) => response.json())
            .then(()=>{
                alert(`Restaurant ID ${id} is updated!`)
            })
         } catch (error) {
            console(error)
         }
    }
    else{
        alert("Restaurant ID is empty");
    }
}