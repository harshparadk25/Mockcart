import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URI, {
  dbName: "mockEcom",
});

await Product.deleteMany();

await Product.insertMany([
  {
    name: "Overflap Ash Grey Overshirt",
    price: 999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2624-02-M46.jpg?v=1759482222&quality=80",
  },
  {
    name: "Double Pocket Plaid Flannel",
    price: 1299,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2624-03-M44.jpg?v=1703238215&quality=80",
  },
  {
    name: "Overflap Elephant Grey Overshirt",
    price: 999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mos1043-02_1.jpg?v=1762104649&quality=80",
  },
  {
    name: "Double Pocket Plaid Flanne",
    price: 1399,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mos1043-02_1.jpg?v=1762104649&quality=80",
  },
  {
    name: "Clyster Maroon Overshirt",
    price: 999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-03-M32.jpg?v=1703681540&quality=80",
  },
  {
    name: "Double Pocket Plaid ",
    price: 899,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mos1042-01_1.jpg?v=1762104650&quality=80",
  },
  {
    name: "Clyster Olive Overshirt",
    price: 899,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-04-M45.jpg?v=1759753502&quality=80",
  },
  {
    name: "Double Pocket ",
    price: 649,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4mos1042-02_1.jpg?v=1762104652&quality=80",
  },
  {
    name: "Clyster Off-White Overshirt",
    price: 999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2623-02-M39.jpg?v=1703681512&quality=80",
  },
  {
    name: "Orange Flannel Checks Double",
    price: 999,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/adefa1325a52103e395724db20d8ffcd.jpg?v=1729521613&quality=80",
  },
]);

console.log("Database seeded successfully!");
process.exit();
