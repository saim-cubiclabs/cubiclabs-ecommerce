"use client";

import { useState } from "react";
import ProductCard from "../components/productcard";
import LayoutWithSidebar from "../components/layout-with-sidebar";

export default function StoreProduct() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!productName || !price || !quantity) {
      alert("Please fill in required fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      productName,
      price,
      quantity,
      category,
      image: imagePreview,
    };

    setProducts([...products, newProduct]);

    // Reset form
    setProductName("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setImagePreview(null);
  };

  return (
    <LayoutWithSidebar>
      <div className="p-4 md:p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 text-center">
            Product Management
          </h1>

          {/* Add Product Form */}
          <form
            onSubmit={handleAddProduct}
            className="bg-white p-4 md:p-6 rounded-xl shadow-md space-y-4 mb-8"
          >
            <h2 className="text-xl font-semibold text-gray-800 text-center">
              Add a Product
            </h2>

            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product Name *"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price *"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity *"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
            />

            <div>
              <label className="block font-semibold mb-1 text-gray-700">
                Product Image (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Product Preview"
                  className="mt-2 h-20 w-20 object-cover rounded border"
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-xl hover:bg-black transition"
            >
              Add Product
            </button>
          </form>

          {/* Product List */}
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
            Your Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
