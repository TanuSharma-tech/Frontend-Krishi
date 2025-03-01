import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const PaymentPage = () => {
  const [selectedCrops, setSelectedCrops] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const { id } = useParams();

  // Fetch order details
  const fetchOrder = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/order/${id}`);
      setSelectedCrops(res.data);
      setTotalAmount(res.data.amount);
    } catch (error) {
      console.error("Error fetching order:", error);
    }
  };

  useEffect(() => {
    fetchOrder();
  }, []);

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Failed to load Razorpay SDK. Check your connection.");
      return;
    }

    try {
      const paymentData = await fetch("/api/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount: totalAmount }),
      }).then((res) => res.json());

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
        amount: paymentData.amount, // Amount in paisa
        currency: paymentData.currency,
        name: "KrishiConnect", // Name of your app or business
        description: "Purchase of Crops",
        image: "https://example.com/logo.png", // Replace with your logo URL
        order_id: paymentData.id, // Razorpay order ID from backend
        handler: function (response) {
          alert(
            `Payment successful! Payment ID: ${response.razorpay_payment_id}`
          );
          // TODO: Save transaction details or update the order status in your backend
        },
        prefill: {
          name: selectedCrops.buyer_name, // Replace with logged-in user's name
          email: selectedCrops.buyer_email, // Replace with user's email
          contact: selectedCrops.buyer_phone, // Replace with user's phone number
        },
        theme: {
          color: "#3399cc",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Summary</h1>

      {/* Display selected crops and their details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {selectedCrops ? (
          <>
            <div className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">Buyer Details</h2>
              <p className="text-white-600">Name: {selectedCrops.buyer_name}</p>
              <p className="text-white-600">
                Phone: {selectedCrops.buyer_phone}
              </p>
              <p className="text-white-600">
                State: {selectedCrops.buyer_state}
              </p>
              <p className="text-white-600">
                District: {selectedCrops.buyer_district}
              </p>
            </div>
            <div className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold">Crop Details</h2>
              <p className="text-white-600">Crops: {selectedCrops.crop_name}</p>
              <p className="text-white-600">
                Quantity: {selectedCrops.order_quantity}
              </p>
              <p className="text-white-600">Total Amount: ₹{totalAmount}</p>
            </div>
          </>
        ) : (
          <p>Loading order details...</p>
        )}
      </div>

      {/* Total amount */}
      <div className="border-t-2 border-white-300 pt-4 mb-5">
        <h2 className="text-2xl font-semibold">Total Amount: ₹{totalAmount}</h2>
      </div>

      {/* Payment Button */}
      <Link
        // onClick={handlePayment}
        to={"/userOrder"}
        className="mt-12 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-200"
      >Check Order Status</Link>
    </div>
  );
};

export default PaymentPage;
