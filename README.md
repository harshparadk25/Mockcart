 MockCart

**MockCart** is a full-stack e-commerce shopping cart application built as a task for screening.  
The app supports product showcasing, cart management (add/remove/update qty), checkout with receipt, and simple UI/backend mechanics.

## 🧰 Tech Stack

### Frontend  
- React (with Vite)  
- TailwindCSS for styling  
- ShadCN UI (if used)  
- Framer Motion for animations (optional)  
- Axios for HTTP calls  
- React Router Dom for routing  
- React-Hot-Toast for notifications  

### Backend  
- Node.js + Express  
- MongoDB (Atlas or local)  
- Mongoose for ODM  
- REST API endpoints for products, cart, checkout  
- JWT auth omitted (since assignment didn’t require login)  

## 🚀 Features

- List of products fetched from backend  
- Add items to cart, update quantity, remove items  
- Cart summary with total  
- Checkout page where user enters name + email  
- Receipt page showing order details (items, total, timestamp)  
- Responsive design for mobile & desktop  
- Modern UI with clean layout  

## 🔧 Setup Instructions

### Backend  
1. Clone the repo and navigate to `/backend`.  
2. Create a `.env` file and add:  
   ```env
   MONGODB_URI=your_mongo_connection_string
Run npm install.

Seed the database (if seeder file provided).

Start the server: npm run dev (or node server.js).

API available at http://localhost:5000/api/....

Frontend
Go to /frontend.

Run npm install.

In .env or Vite config set:

bash
Copy code
VITE_API_URL=http://localhost:5000/api
Start the dev server: npm run dev.

Open http://localhost:5173 in your browser.

🗂 Folder Structure (High-level)
bash
Copy code
/backend
  server.js
  /routes
  /controllers
  /models
  /services
/frontend
  /src
    App.jsx
    /pages
    /components
    /lib
      axios.js
    /context
✅ API Endpoints
Method	Endpoint	Description
GET	/api/products	Get list of products
POST	/api/cart	Add item to cart
GET	/api/cart	Get current cart and total
PATCH	/api/cart/:productId	Update item quantity
DELETE	/api/cart/:id	Remove item from cart
POST	/api/checkout	Place order, return receipt
