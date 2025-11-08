import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import toast from "react-hot-toast";
import { Trash2 } from "lucide-react";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

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

  const updateQty = async (productId, newQty) => {
    try {
      await api.patch(`/cart/${productId}`, { qty: newQty });
      fetchCart();
    } catch {
      toast.error("Unable to update quantity");
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/cart/${id}`);
      fetchCart();
    } catch {
      toast.error("Unable to remove item");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-72 text-lg">
        Loading cart...
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold tracking-tight mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-gray-600 bg-white shadow-sm">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-5">
          {items.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-5 border border-gray-200 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
            >
              
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-28 h-28 rounded-xl object-cover border border-gray-100"
              />

             
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500 text-sm">₹{item.price}</p>

                
                <div className="flex items-center gap-3 mt-3">
                  <button
                    onClick={() => updateQty(item._id, item.qty - 1)}
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition active:scale-95"
                  >
                    -
                  </button>

                  <span className="text-lg font-medium w-6 text-center">
                    {item.qty}
                  </span>

                  <button
                    onClick={() => updateQty(item._id, item.qty + 1)}
                    className="h-9 w-9 flex items-center justify-center rounded-lg border border-gray-300 hover:bg-gray-100 transition active:scale-95"
                  >
                    +
                  </button>
                </div>

                <p className="text-gray-800 font-semibold mt-3">
                  Subtotal: ₹{item.lineTotal}
                </p>
              </div>

              
              <button
                onClick={() => removeItem(item._id)}
                className="p-3 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 active:scale-95 transition"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}

          
          <div className="mt-8 border-t pt-6">
            <div className="text-2xl font-semibold tracking-tight">
              Total: ₹{total}
            </div>
          </div>

          
          <div className="mt-6 flex justify-end">
            <a
              href="/checkout"
              className="bg-black text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-black/90 transition active:scale-95"
            >
              Proceed to Checkout
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
