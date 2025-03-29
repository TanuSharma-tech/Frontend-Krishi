import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function BuyPage() {
  const location = useLocation();
  const { crop, farmer } = location.state; // Assuming we pass crop and farmer as state

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // Logic to add to cart with quantity, crop and farmer info
    const cartItem = {
      ...crop,
      quantity,
      farmerName: farmer.name,
      farmerPhone: farmer.phone_number,
      farmerState: farmer.state,
      farmerDistrict: farmer.district,
    };

    // Here, you can dispatch an action or call a function to update the cart
    console.log("Added to cart:", cartItem);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Buy {crop.cropName}</h1>
      <img
        src={crop.image}
        alt={crop.cropName}
        className="w-full h-40 object-cover mb-4"
      />
      <p>Price: {crop.price} INR</p>
      <div className="mb-4">
        <label className="block mb-2">Quantity:</label>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="border rounded px-4 py-2 w-full"
        />
      </div>
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
}
export default BuyPage; 