import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToDatabase from './services/database.js';
import productRoutes from './routes/productRoute.js';
import cartRoutes from './routes/cartRoute.js';
import checkRoutes from './routes/checkRoute.js';



dotenv.config();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToDatabase();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', checkRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});