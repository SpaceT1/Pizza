const Pizza = require("../models/pizza"); // Assuming your pizza model is in "models/pizza.js"

const router = require("express").Router();

// Get all pizzas
router.get("/pizzas", async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.status(200).json(pizzas);
    } catch (err) {
        console.error(err);
        res.status(400).json({ error: err.message });
    }
});

// Get a specific pizza by ID
router.get("/pizzas/:id", async (req, res) => {
    try {
        const pizza = await Pizza.findById(req.params.id);
        if (!pizza) {
            return res.status(404).json({ message: "Pizza not found" });
        }
        res.status(200).json(pizza);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Create a new pizza
router.post("/pizzas", async (req, res) => {
    try {
        const newPizza = new Pizza(req.body);
        const savedPizza = await newPizza.save();
        res.status(201).json(savedPizza);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Update a pizza by ID
router.put("/pizzas/:id", async (req, res) => {
    try {
        const updatedPizza = await Pizza.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPizza) {
            return res.status(404).json({ message: "Pizza not found" });
        }
        res.status(200).json(updatedPizza);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Delete a pizza by ID
router.delete("/pizzas/:id", async (req, res) => {
    try {
        const deletedPizza = await Pizza.findByIdAndDelete(req.params.id);
        if (!deletedPizza) {
            return res.status(404).json({ message: "Pizza not found" });
        }
        res.status(200).json({ message: "Pizza deleted successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
