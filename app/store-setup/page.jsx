"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LayoutWithSidebar from "../components/layout-with-sidebar";

export default function StoreSetup() {
  const router = useRouter();

  const [storeName, setStoreName] = useState("");
  const [storeURL, setStoreURL] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState(null);
  const [logoPreview, setLogoPreview] = useState(null);

  // Auto-generate URL
  useEffect(() => {
    const url = storeName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
    setStoreURL(url);
  }, [storeName]);

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setLogo(file);
      setLogoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!storeName || !category) {
      alert("Please fill in required fields");
      return;
    }

    const storeData = { storeName, storeURL, category, description, logo };
    console.log("Store Created:", storeData);

    // Redirect to dashboard
    router.push("/store-product");
  };

  return (
    <LayoutWithSidebar>
      <div className="p-4 md:p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 font-sans text-center">
            Store Setup
          </h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-4 md:p-6 rounded-xl shadow-md space-y-4"
          >
            <h2 className="text-xl font-semibold font-sans text-center">
              Create Your Store
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Store Name *</label>
                <input
                  type="text"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  placeholder="Your Store Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
                >
                  <option value="">Select Category</option>
                  <option value="fashion">Fashion</option>
                  <option value="food">Food</option>
                  <option value="electronics">Electronics</option>
                  <option value="books">Books</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1">Store URL</label>
              <input
                type="text"
                value={storeURL}
                onChange={(e) => setStoreURL(e.target.value)}
                placeholder="your-store-url"
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              <p className="text-gray-500 text-sm mt-1">
                This will be your store URL
              </p>
            </div>

            <div>
              <label className="block font-semibold mb-1">Description</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Write a short description about your store"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
                rows={3}
              />
            </div>

            <div>
              <label className="block font-semibold mb-1">
                Logo (optional)
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoChange}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-500"
              />
              {logoPreview && (
                <div className="mt-3 flex justify-center">
                  <img
                    src={logoPreview}
                    alt="Logo Preview"
                    className="h-20 w-20 object-cover rounded-full border-2 border-gray-200 shadow-sm"
                  />
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full font-sans bg-black text-white py-2 rounded-xl hover:bg-black transition"
            >
              Create Store
            </button>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
}
