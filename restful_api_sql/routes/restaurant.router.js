const express = require("express");
const router = express.Router();
const Restaurant = require("../controllers/restaurant.controllers");

// Insert new restaurant to DB
// http://localhost:5000/restaurants
router.post("/restaurants",async (req,res)=>{
    try {
    const newRestaurant = req.body;
    console.log(newRestaurant)
    const createRestaurant = await Restaurant.createRestaurant(newRestaurant);
    console.log(createRestaurant)
    res.status(201).json(createRestaurant);
   }catch (err){
    res.status(500).json({err:"Fail to create restaurant"});
    }
});

module.exports = router;