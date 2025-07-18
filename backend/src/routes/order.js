const express=require("express");
const authenticate = require("../middleware/authenticate.js");
const router=express.Router();
const orderController=require("../controllers/order.js")

router.post("/",authenticate,orderController.createOrder);
router.get("/user",authenticate,orderController.orderHistory);
router.get("/:id",authenticate,orderController.findOrderById);


module.exports=router;