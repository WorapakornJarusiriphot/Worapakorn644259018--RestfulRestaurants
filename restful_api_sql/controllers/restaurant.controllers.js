const Restaurant = require("../models/restaurant.model")


Restaurant.createRestaurant = async(newRestaurant)=>{
    try{
        const createRestaurant = await Restaurant.create(newRestaurant);
        console.log("created restaurant:", createRestaurant.toJSON());
        return createRestaurant.toJSON();
    }catch (err) {
        console.log("err", err);
        throw err;
    }
}



module.exports = Restaurant;