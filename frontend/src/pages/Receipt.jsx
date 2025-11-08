import { useContext } from "react";
import { ReceiptContext } from "../context/Context.jsx";

export default function Receipt() {
  const { receipt } = useContext(ReceiptContext);

  if (!receipt) {
    return (
      <div className="p-10 text-center text-xl text-gray-600">
        No receipt found. Please place an order first.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">

     
      <h1 className="text-3xl font-bold tracking-tight mb-8">Order Receipt</h1>

     
      <div className="border border-gray-200 rounded-2xl bg-white shadow-sm p-8">

       
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>

        <div className="space-y-1 text-gray-700">
          <p><span className="font-medium">Name:</span> {receipt.name}</p>
          <p><span className="font-medium">Email:</span> {receipt.email}</p>
          <p>
            <span className="font-medium">Date:</span>{" "}
            {new Date(receipt.timestamp).toLocaleString()}
          </p>
        </div>

       
        <h2 className="text-xl font-semibold mt-8 mb-4">Order Items</h2>

        <div className="border border-gray-200 rounded-xl divide-y">
          {receipt.cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center px-4 py-3 text-gray-800"
            >
              <span>
                {item.name}{" "}
                <span className="text-gray-500">(x{item.qty})</span>
              </span>
              <span className="font-medium">₹{item.price * item.qty}</span>
            </div>
          ))}
        </div>

        
        <div className="flex justify-between items-center mt-8 text-xl font-semibold">
          <span>Total</span>
          <span>₹{receipt.totalAmount}</span>
        </div>

       
        <div className="mt-10 text-center">
          <a
            href="/"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-black/90 active:scale-95 transition"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
