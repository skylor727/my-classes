const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

// Define the Route to create a review
// POST /movies/:id/reviews
router.post("/classes/:id/reviews", reviewsCtrl.create);

//delete request to /review/:id
router.delete("/reviews/:id", reviewsCtrl.delete);

module.exports = router;
