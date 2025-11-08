import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qty:{
        type: Number,
        required: true,
        default: 1
    }
});

const CartSchema = new mongoose.Schema({
  userId: { type: String, default: "guest" },
  items: [cartItemSchema]
});


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;
