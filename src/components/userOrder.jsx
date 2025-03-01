// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from "axios";

// export default function UserOrder() {
//   const navigate = useNavigate();
//   const order = useSelector((state) => state.orders);
//   const [orders, setOrders] = useState(order);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         // Retrieve the user object from localStorage and parse it if it's a JSON object
//         const storedUser = localStorage.getItem("user");
//         const user = JSON.parse(storedUser); // Assuming user is stored as a JSON object
//         const userId = user; // Get the user ID from the stored user object

//         console.log("User ID from localStorage:", userId);

//         // Fetch orders from the API
//         const response = await axios.get(`http://localhost:5000/order`);
//         console.log("Response data:", response.data);

//         // Filter crops based on the user's ID
//         const filteredCrops = response.data.filter((crop) => {
//           console.log("Buyer ID from crop:", crop.buyer_id._id);
//           return crop.buyer_id._id === userId; // Compare user ID
//         });

//         console.log("Filtered Crops:", filteredCrops);
//         setOrders(filteredCrops); // Set the filtered crops in state
//       } catch (error) {
//         console.error("Error fetching crops", error);
//       }
//     };

//     fetchOrder();
//   }, []); // Empty dependency array to run effect only once

//   // Handle navigation to the status update page
//   const handleUpdateStatus = (order_id) => {
//     navigate(`/${order_id}`); // Navigate to the new page with order_id in the URL
//   };

//   // Function to apply the correct status color
//   const getStatusClass = (status) => {
//     if (status === "Reject") return "text-red-500"; // Red for Reject
//     if (status === "Pending") return "text-yellow-500"; // Yellow for Pending
//     if (status === "Accept") return "text-green-500"; // Green for Accept
//     return "";
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {" "}
//       {/* Centering the content */}
//       <div className="max-w-4xl w-full p-6">
//         {" "}
//         {/* Maximum width to limit content width */}
//         <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
//           Orders List
//         </h2>{" "}
//         {/* Centered title */}
//         {orders?.length > 0 ? (
//           orders.map((ord, index) => (
//             <div
//               key={ord._id}
//               className="bg-white shadow-md rounded-lg p-6 mb-6"
//             >
//               {" "}
//               {/* Card for each order */}
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">
//                 Order {index + 1}
//               </h3>
//               <p className="text-gray-600">
//                 <strong>Farmer ID:</strong> {ord.farmer_id._id}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Buyer ID:</strong> {ord.buyer_id._id}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Crop Name:</strong> {ord.crop_name}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Amount:</strong> {ord.amount}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Quantity:</strong> {ord.order_quantity}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Order ID:</strong> {ord._id}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Buyer District:</strong> {ord.buyer_id.district}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Buyer State:</strong> {ord.buyer_id.state}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Status:</strong>{" "}
//                 <span className={getStatusClass(ord.status)}>{ord.status}</span>
//               </p>
//               <p className="text-gray-600">
//                 <strong>Buyer Phone Number:</strong> {ord.buyer_id.phone_number}
//               </p>
//                          </div>
//           ))
//         ) : (
//           <p className="text-gray-500 text-center">No orders available.</p>
//         )}
//       </div>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function UserOrder() {
  const navigate = useNavigate();
  const order = useSelector((state) => state.orders);
  const [orders, setOrders] = useState(order);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const user = JSON.parse(storedUser);
        const userId = user;

        const response = await axios.get(`http://localhost:5000/order`);
        const filteredCrops = response.data.filter(
          (crop) => crop.buyer_id._id === userId
        );
        setOrders(filteredCrops);
      } catch (error) {
        console.error("Error fetching crops", error);
      }
    };

    fetchOrder();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (confirmation) {
      try {
        await axios.delete(`http://localhost:5000/order/${orderId}`);
        setOrders(orders.filter((ord) => ord._id !== orderId));
      } catch (error) {
        console.error("Error deleting order", error);
      }
    }
  };

  const handleUpdateStatus = (order_id) => {
    navigate(`/${order_id}`);
  };

  const getStatusClass = (status) => {
    if (status === "Reject") return "text-red-500";
    if (status === "Pending") return "text-yellow-500";
    if (status === "Accept") return "text-green-500";
    return "";
  };

  return (
    <div className="flex justify-center items-center min-h-screen mt-5 bg-gray-100">
      <div className="max-w-4xl w-full p-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Orders List
        </h2>
        {orders?.length > 0 ? (
          orders.map((ord, index) => (
            <div
              key={ord._id}
              className="bg-white shadow-md rounded-lg p-6 mb-6"
            >
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Order {index + 1}
              </h3>
              <p className="text-gray-600">
                <strong>Farmer ID:</strong> {ord.farmer_id._id}
              </p>
              <p className="text-gray-600">
                <strong>Buyer ID:</strong> {ord.buyer_id._id}
              </p>
              <p className="text-gray-600">
                <strong>Crop Name:</strong> {ord.crop_name}
              </p>
              <p className="text-gray-600">
                <strong>Amount:</strong> {ord.amount}
              </p>
              <p className="text-gray-600">
                <strong>Quantity:</strong> {ord.order_quantity}
              </p>
              <p className="text-gray-600">
                <strong>Order ID:</strong> {ord._id}
              </p>
              <p className="text-gray-600">
                <strong>Buyer District:</strong> {ord.buyer_id.district}
              </p>
              <p className="text-gray-600">
                <strong>Buyer State:</strong> {ord.buyer_id.state}
              </p>
              <p className="text-gray-600">
                <strong>Status:</strong>
                <span className={getStatusClass(ord.status)}>{ord.status}</span>
              </p>
              <p className="text-gray-600">
                <strong>Buyer Phone Number:</strong> {ord.buyer_id.phone_number}
              </p>

              {(ord.status === "Reject" || ord.status === "Pending") && (
                <button
                  onClick={() => handleDeleteOrder(ord._id)}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete Order
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No orders available.</p>
        )}
      </div>
    </div>
  );
}
