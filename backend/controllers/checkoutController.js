const  checkoutController  =  ( req ,  res )  =>  {
    const {cartItems , name, email} = req.body;
    if(!name || !email || !cartItems || cartItems.length === 0) {
        return res.status(400).json({message: "Name, email and cart items are required"});
    }
     const totalAmount = cartItems.reduce((total, item) => total + item.price * item.qty, 0);

     res.status(200).json({
        receipt: {
        name,
        email,
        cartItems,
        totalAmount,
        timestamp: new Date(),
        }
    });
}

export default checkoutController;
