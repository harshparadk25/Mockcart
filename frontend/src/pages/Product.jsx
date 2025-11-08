import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import toast from "react-hot-toast";
import { ShoppingCart, Star } from "lucide-react";
// OPTIONAL: uncomment if you install Framer Motion
// import { motion } from "framer-motion";

function ProductSkeleton() {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <div className="w-full h-48 bg-gray-200 rounded-lg animate-pulse" />
      <div className="h-4 w-3/4 bg-gray-200 rounded mt-4 animate-pulse" />
      <div className="h-4 w-1/3 bg-gray-200 rounded mt-2 animate-pulse" />
      <div className="h-10 w-full bg-gray-200 rounded mt-4 animate-pulse" />
    </div>
  );
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [addingId, setAddingId] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get("/products");
        setProducts(res.data || []);
      } catch {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const addToCart = async (productId) => {
    try {
      setAddingId(productId);
      await api.post("/cart", { productId, qty: 1 });
      toast.success("Added to cart");
    } catch {
      toast.error("Unable to add item");
    } finally {
      setAddingId(null);
    }
  };

  const formatINR = (n) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(n);

  const handleImgError = (e) => {
    e.currentTarget.src =
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"; // neutral shirt fallback
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">New Arrivals</h1>
          <p className="text-gray-500">Premium cotton tees—simple, comfy, everyday.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-amber-500">
          <Star className="h-5 w-5 fill-amber-500" />
          <span className="text-sm text-gray-600">Bestsellers</span>
        </div>
      </div>

      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="rounded-xl border p-8 text-center text-gray-600">
          No products found.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const isAdding = addingId === p._id;

            
            return (
              <div
                key={p._id}
                className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={p.imageUrl}
                    alt={p.name}
                    onError={handleImgError}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
                    {formatINR(p.price)}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  {p.subtitle ? (
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{p.subtitle}</p>
                  ) : (
                    <p className="mt-1 text-sm text-gray-500">100% cotton • Regular fit</p>
                  )}

                  <button
                    onClick={() => addToCart(p._id)}
                    disabled={isAdding}
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-900 bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.98] disabled:opacity-60"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {isAdding ? "Adding..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
