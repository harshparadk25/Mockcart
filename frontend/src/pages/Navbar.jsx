import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/70 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <Link 
          to="/" 
          className="text-2xl font-bold tracking-tight hover:opacity-80 transition"
        >
          MockCart
        </Link>

        <Link 
          to="/cart" 
          className="relative p-2 rounded-xl hover:bg-gray-100 transition active:scale-95"
        >
          <ShoppingCart size={24} className="text-gray-800" />
        </Link>
      </div>
    </nav>
  );
}
