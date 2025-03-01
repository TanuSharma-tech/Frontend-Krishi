// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// function PlaceOrder() {
//   const { state } = useLocation(); // Retrieve the passed state
//   const { orderConfirmation, buyerData } = state || {};
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate(); // For navigation after order placement
//     const [farmerData, setFarmerData] = useState();
//     useEffect(() => {
//       async function getFarmer(id) {
//         const farmerObject = await axios.get(
//           `http://localhost:5000/auth/users/${id}`
//         );
//         setFarmerData(farmerObject.data);
//       }
//       getFarmer(orderConfirmation[0].farmer_id);
//         console.log(orderConfirmation[0].farmer_id);
//               console.log(farmerData);

//     }, [buyerData.farmer_id]);
//   const placeOrder = async () => {
//     setIsLoading(true);
//       try {
//         const data = {
//           farmer_id: orderConfirmation[0].farmer_id, // Replace with actual farmer ID
//           buyer_id: buyerData._id, // Use buyer's ID
//           order_quantity: orderConfirmation.reduce(
//             (total, item) => total + item.quantity,
//             0
//           ),
//           amount: orderConfirmation.reduce(
//             (total, item) => total + item.price * item.quantity,
//             0
//             ),
//           buyer_name:buyerData.name,
//           buyer_state: buyerData.state,
//           buyer_district: buyerData.district,
//           farmer_state: farmerData.state, // Replace with actual farmer's state
//           farmer_district: farmerData.district, // Replace with actual farmer's district
//           crop_name: orderConfirmation.map((item) => item.cropName).join(", "),
//           buyer_phone: buyerData.phone_number, // Use buyer's phone number
//           farmer_phone: farmerData.phone_number, // Replace with actual farmer's phone number
//           farmer_name: farmerData.name, // Replace with actual farmer's name
//         };
//         console.log(data)
//       const response = await axios.post("http://localhost:5000/order/add",data );

//       // Redirect to a success page or display a success message
//       console.log("Order placed successfully:", response.data);
//     //   navigate("/success"); // Redirect to a success page
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Failed to place the order. Please try again later.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Place Order</h1>
//       {orderConfirmation && orderConfirmation.length > 0 ? (
//         <div>
//           <h2 className="text-2xl font-semibold">Order Details:</h2>
//           <ul>
//             {orderConfirmation.map((item, index) => (
//               <li key={index}>
//                 {item.cropName} - {item.price} INR x {item.quantity}
//               </li>
//             ))}
//           </ul>
//           <h2 className="text-lg font-semibold mt-4">Buyer Information:</h2>
//           <p>Name: {buyerData.name}</p>
//           <p>Phone: {buyerData.phone_number}</p>
//           <p>State: {buyerData.state}</p>
//           <p>District: {buyerData.district}</p>
//           {/* Add more buyer information as needed */}

//           <button
//             onClick={placeOrder}
//             className={`mt-4 ${
//               isLoading ? "bg-gray-500" : "bg-green-500"
//             } text-white rounded px-4 py-2`}
//             disabled={isLoading}
//           >
//             {isLoading ? "Placing Order..." : "Place Order"}
//           </button>
//         </div>
//       ) : (
//         <p>No order details available.</p>
//       )}
//     </div>
//   );
// }

// export default PlaceOrder;


import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

function PlaceOrder() {
  const { state } = useLocation(); // Retrieve the passed state
  const { orderConfirmation, buyerData } = state || {};
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // For navigation after order placement
  const [farmerData, setFarmerData] = useState();

  useEffect(() => {
    async function getFarmer(id) {
      const farmerObject = await axios.get(
        `http://localhost:5000/auth/users/${id}`
      );
      setFarmerData(farmerObject.data);
    }
    getFarmer(orderConfirmation[0].farmer_id);
  }, [buyerData.farmer_id]);

  const placeOrder = async () => {
    setIsLoading(true);
    console.log(buyerData)
    try {
      const data = {
        farmer_id: orderConfirmation[0].farmer_id,
        buyer_id: buyerData._id,
        order_quantity: orderConfirmation.reduce(
          (total, item) => total + item.quantity,
          0
        ),
        amount: orderConfirmation.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        buyer_name: buyerData.name,
        buyer_state: buyerData.state,
        buyer_district: buyerData.district,
        farmer_state: farmerData.state,
        farmer_district: farmerData.district,
        crop_name: orderConfirmation
          .map((item) => `${item.cropName} ${" "} ${item.quantity*100}kg`)
          .join(` ,`),
        buyer_phone: buyerData.phone_number,
        farmer_phone: farmerData.phone_number,
        farmer_name: farmerData.name,
      };
      console.log(data);

      const response = await axios.post(
        "http://localhost:5000/order/add",
        data
      );
      console.log(response.data)
      
      navigate(`/payment/${response.data._id}`);
      console.log("Order placed successfully:", response.data);
      
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place the order. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Place Order
      </h1>
      {orderConfirmation && orderConfirmation.length > 0 ? (
        <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">
            Order Details
          </h2>
          <ul className="space-y-2">
            {orderConfirmation.map((item, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium">{item.cropName}</span> - ₹
                {item.price} x {item.quantity}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6 text-green-600">
            Buyer Information
          </h2>
          <div className="text-gray-700">
            <p>
              <strong>Name:</strong> {buyerData.name}
            </p>
            <p>
              <strong>Phone:</strong> {buyerData.phone_number}
            </p>
            <p>
              <strong>State:</strong> {buyerData.state}
            </p>
            <p>
              <strong>District:</strong> {buyerData.district}
            </p>
          </div>

          <button
            onClick={placeOrder}
            className={`mt-6 w-full px-4 py-2 text-white font-semibold rounded ${
              isLoading
                ? "bg-gray-500"
                : "bg-green-500 hover:bg-green-600 transition"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No order details available.</p>
      )}
    </div>
  );
}

export default PlaceOrder;
