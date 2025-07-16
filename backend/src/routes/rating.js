const express = require("express");
const authenticate = require("../middleware/authenticate.js");
const router = express.Router();
const ratingController = require("../services/rating.js");

router.get("/create",authenticate,ratingController.createRating);
router.put("/product/:productId",authenticate,ratingController.getProductsRating);


module.exports=router;