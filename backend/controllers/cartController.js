import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;

  const quantity = Number(qty);

  if (!productId || !quantity)
    return res.status(400).json({ message: "productId and qty required" });

  let cart = await Cart.findOne({ userId: "guest" });
  if (!cart) cart = await Cart.create({ userId: "guest", items: [] });

  const productExists = await Product.findById(productId);
  if (!productExists)
    return res.status(404).json({ message: "Product not found" });

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === productId
  );

  if (itemIndex >= 0) {
    cart.items[itemIndex].qty += quantity;
  } else {
    cart.items.push({ productId, qty: quantity });
  }

  await cart.save();
  res.json(cart);
};



export const removeFromCart = async (req, res) => {
  const { id } = req.params;

  let cart = await Cart.findOne({ userId: "guest" });
  if (!cart) return res.json({ message: "Cart empty" });

  cart.items = cart.items.filter(
  item => item.productId.toString() !== id
);


  await cart.save();
  res.json(cart);
};

export const getCart = async (req, res) => {
  let cart = await Cart.findOne({ userId: "guest" }).populate("items.productId");

  if (!cart) return res.json({ items: [], total: 0 });

  const items = cart.items.map((item) => ({
    _id: item.productId._id,
    name: item.productId.name,
    price: item.productId.price,
    imageUrl: item.productId.imageUrl,
    qty: item.qty,
    lineTotal: item.qty * item.productId.price,
  }));

  const total = items.reduce((sum, item) => sum + item.lineTotal, 0);

  res.json({ items, total });
};

export const updateQty = async (req, res) => {
  const { id } = req.params;  
  const { qty } = req.body;

  const quantity = Number(qty);
  if (quantity < 0) return res.status(400).json({ message: "Invalid qty" });

  let cart = await Cart.findOne({ userId: "guest" });
  if (!cart) return res.json({ message: "Cart empty" });

  const itemIndex = cart.items.findIndex(
    (item) => item.productId.toString() === id
  );

  if (itemIndex < 0) {
    return res.status(404).json({ message: "Item not found" });
  }

  
  if (quantity === 0) {
    cart.items = cart.items.filter(
      (item) => item.productId.toString() !== id
    );
  } else {
    cart.items[itemIndex].qty = quantity;
  }

  await cart.save();
  res.json(cart);
};

