# 🛒 MockCart – Full-Stack E-Commerce Cart Application

MockCart is a full-stack, production-styled **shopping cart application** built using the **MERN stack**.  
It showcases essential e-commerce flows such as viewing products, adding items to cart, updating quantity, removing items, checkout, and generating a real-time receipt.

This project was developed as part of a coding assignment and demonstrates clean UI/UX, API integration, state management, database persistence, and professional frontend design.

---

## 📌 **Features**

### ✅ **Product Browsing**
- Displays list of products fetched from backend  
- Beautiful modern grid layout  
- Loading skeletons for smooth UX  

### ✅ **Cart Management**
- Add items to cart  
- Update quantity (+/-)  
- Remove items  
- Realtime cart summary & subtotal  
- Persistent cart for a mock user  

### ✅ **Checkout Flow**
- User enters name + email  
- Displays order summary  
- On submit, generates receipt  

### ✅ **Receipt Page**
- Shows customer details  
- Lists all items with line totals  
- Displays final total  
- Timestamp included  
- Clean, invoice-like layout  

### ✅ **Modern Frontend UI**
- TailwindCSS minimal white theme  
- Responsive design  
- Soft shadows & rounded cards  
- Framer Motion animations  
- Toast notifications  
- Clean & premium look (Apple-style)

---

## 💡 **Bonus Features Implemented**
- Mock user persistence  
- Error handling & toast-based feedback  
- Image fallback  
- Loading skeletons  
- Premium animated UI interactions  

---

## 🧰 **Tech Stack**

### **Frontend**
- React (Vite)
- TailwindCSS  
- ShadCN UI (selected components)  
- Axios  
- React Router  
- React Hot Toast  
- Lucide Icons  
- Framer Motion (animations)

### **Backend**
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- REST API architecture  

---

## 📂 **Folder Structure**

MockCart/
│
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── services/
│ ├── server.js
│ └── .env
│
└── frontend/
├── src/
│ ├── pages/
│ ├── context/
│ ├── lib/
│ ├── components/
│ ├── App.jsx
│ └── main.jsx
└── index.html

yaml
Copy code

---

## ⚙️ **Backend Setup**

### 1. Navigate to backend directory:
```bash
cd backend
2. Install dependencies:
bash
Copy code
npm install
3. Create .env file:
ini
Copy code
MONGODB_URI=your_mongodb_connection_string
PORT=5000
4. Start server:
bash
Copy code
npm start
API will run at:

bash
Copy code
http://localhost:5000/api
🎨 Frontend Setup
1. Navigate to frontend directory:
bash
Copy code
cd frontend
2. Install dependencies:
bash
Copy code
npm install
3. Create .env file:
bash
Copy code
VITE_API_URL=http://localhost:5000/api
4. Start frontend:
bash
Copy code
npm run dev
App will run at:

arduino
Copy code
http://localhost:5173
📡 API Endpoints
✅ Products
Method	Endpoint	Description
GET	/api/products	Get product list

✅ Cart
Method	Endpoint	Description
POST	/api/cart	Add item to cart
GET	/api/cart	Fetch cart items + total
PATCH	/api/cart/:productId	Update quantity
DELETE	/api/cart/:id	Remove item from cart

✅ Checkout
Method	Endpoint	Description
POST	/api/checkout	Generate order receipt
