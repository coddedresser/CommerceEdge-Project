const express=require("express")
const cors=require('cors');

const app=express();

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({message:"welcome to ecommerce api - node"})
})

const authRouter=require("./routes/auth.js")
app.use("/auth",authRouter)

const userRouter=require("./routes/user.js");
app.use("/api/users",userRouter)

const productRouter=require("./routes/product.js");
app.use("/api/products",productRouter);

// const adminProductRouter=require("./routes/product.admin.routes.js");
// app.use("/api/admin/products",adminProductRouter);

const cartRouter=require("./routes/cart.js")
app.use("/api/cart", cartRouter);

const cartItemRouter=require("./routes/cartItem.js")
app.use("/api/cart_items",cartItemRouter);

const orderRouter=require("./routes/order.js");
app.use("/api/orders",orderRouter);

// const paymentRouter=require("./routes/payment.js");
// app.use('/api/payments',paymentRouter)

const reviewRouter=require("./routes/review.js");
app.use("/api/reviews",reviewRouter);

const ratingRouter=require("./routes/rating.js");
app.use("/api/ratings",ratingRouter);

// admin routes handler
// const adminOrderRoutes=require("./routes/adminOrder.js");
// app.use("/api/admin/orders",adminOrderRoutes);

module.exports = app; 
