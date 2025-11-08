import { useEffect, useState, useContext } from "react";
import { api } from "../lib/axios";
import toast from "react-hot-toast";
import { ReceiptContext } from "../context/Context.jsx";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { setReceipt } = useContext(ReceiptContext);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await api.get("/cart");
      setItems(res.data.items || []);
      setTotal(res.data.total || 0);
    } catch {
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const placeOrder = async () => {
    if (!name.trim() || !email.trim()) {
      return toast.error("Please enter your name and email");
    }

    try {
      const res = await api.post("/checkout", {
        name,
        email,
        cartItems: items,
      });

      toast.success("Order placed!");
      setReceipt(res.data.receipt);
      navigate("/receipt");
    } catch {
      toast.error("Failed to place order");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72 text-xl text-gray-600">
        Loading checkout...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Your Details</h2>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Harsh Paradkar"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                placeholder="harsh@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full p-3 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-black/20 transition"
              />
            </div>
          </div>

          <button
            onClick={placeOrder}
            className="mt-6 w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-black/90 active:scale-95 transition"
          >
            Place Order
          </button>
        </div>

      
        <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          {items.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between py-3 border-b border-gray-100"
                >
                  <span className="text-gray-700">
                    {item.name} <span className="text-gray-500">(x{item.qty})</span>
                  </span>
                  <span className="font-medium">₹{item.lineTotal}</span>
                </div>
              ))}

              <div className="flex justify-between text-xl font-semibold pt-4">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
