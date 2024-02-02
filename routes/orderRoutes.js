const Order = require("../models/order");


const router = require("express").Router();
  

router.get("/", async (req, res) => {    
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

router.post("/", async (req, res) => {
    try {
        const newOrder = new Order(req.body);
        const savedOrder = await newOrder.save();
        console.log("DFGHJKL")
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
