// import React, { useEffect,useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useDispatch,useSelector } from "react-redux";
// import axios from "axios";
// export default function FarmerOrder() {

//   const navigate = useNavigate();

//   const order = useSelector((state) => state.orders)
//   console.log(order)
//   const [orders, setOrders] = useState(order)
//   useEffect(() => {
//     const fetchOrder = async (farmerId) => {
//       try {
//         const response = await axios.get(`http://localhost:5000/order`);
//         const filteredCrops = response.data.filter(
//           (crop) => crop.farmer_id._id === farmerId
//         );
//         setOrders(filteredCrops);
//         console.log(response.data[0].farmer_id._id);
//         console.log(order.length);
//       } catch (error) {
//         console.error("Error fetching crops", error);
//       }
//     };

//     fetchOrder(order[0].farmer_id._id);
//   }, [orders])
//   // Assuming state contains the orders array


//   // Handle navigation to the status update page
//   const handleUpdateStatus = (order_id) => {
//     navigate(`/${order_id}`); // Navigate to the new page with order_id in the URL
//   };




//   const getStatusClass = (status) => {
//     if (status === "reject") return "text-red-500"; // Red for Reject
//     if (status === "Pending") return "text-yellow-500"; // Yellow for Pending
//     if (status === "accept") return "text-green-500"; // Green for Accept
//     return "";
//   };

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       {" "}
//       {/* Light gray background */}
//       <h2 className="text-2xl font-bold text-gray-700">Orders List</h2>{" "}
//       {/* Dark gray heading */}
//       {orders?.length > 0 ? (
//         orders.map((ord, index) => (
//           <div
//             key={ord._id}
//             className="mt-4 border-b-2 pb-4 bg-white shadow-md rounded-md p-4"
//           >
//             {" "}
//             {/* White card with shadow */}
//             <h3 className="text-lg font-semibold text-gray-700">
//               Order {index + 1}
//             </h3>
//             <p>
//               <strong>Farmer ID:</strong> {ord.farmer_id._id}
//             </p>
//             <p>
//               <strong>Buyer ID:</strong> {ord.buyer_id._id}
//             </p>
//             <p>
//               <strong>Crop Name:</strong> {ord.crop_name}
//             </p>
//             <p>
//               <strong>Amount:</strong> {ord.amount}
//             </p>
//             <p>
//               <strong>Quantity:</strong> {ord.order_quantity}
//             </p>
//             <p>
//               <strong>Order ID:</strong> {ord._id}
//             </p>
//             <p>
//               <strong>Buyer District:</strong> {ord.buyer_id.district}
//             </p>
//             <p>
//               <strong>Buyer State:</strong> {ord.buyer_id.state}
//             </p>
//             <p>
//               <strong>Status:</strong>{" "}
//               <span className={getStatusClass(ord.status)}>{ord.status}</span>
//             </p>{" "}
//             {/* Status color */}
//             <p>
//               <strong>Buyer Phone Number:</strong> {ord.buyer_id.phone_number}
//             </p>
//             <button
//               onClick={() => handleUpdateStatus(ord._id)}
//               className="mt-4 bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500"
//             >
//               Update Status
//             </button>
//           </div>
//         ))
//       ) : (
//         <p className="text-gray-500">No orders available.</p>
//       )}
//     </div>
//   );
// }

  // import React, { useEffect, useState } from "react";
  // import { useNavigate } from "react-router-dom";
  // import { useSelector } from "react-redux";
  // import axios from "axios";

  // export default function FarmerOrder() {
  //   const navigate = useNavigate();
  //   const order = useSelector((state) => state.orders);
  //   const [orders, setOrders] = useState(order);

  //   useEffect(() => {
  //     const fetchOrder = async (farmerId) => {
  //       try {
  //         const response = await axios.get(`http://localhost:5000/order`);
  //         const filteredCrops = response.data.filter(
  //           (crop) => crop.farmer_id._id === farmerId
  //         );
  //         setOrders(filteredCrops);
  //         console.log(filteredCrops)
  //       } catch (error) {
  //         console.error("Error fetching crops", error);
  //       }
  //     };

  //     fetchOrder(order[0]?.farmer_id._id);
  //   }, [orders]);

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
  //               <button
  //                 onClick={() => handleUpdateStatus(ord._id)}
  //                 className="mt-6 w-full bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition"
  //               >
  //                 Update Status
  //               </button>
  //             </div>
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

  export default function FarmerOrder() {
    const navigate = useNavigate();
    const order = useSelector((state) => state.orders);
    const [orders, setOrders] = useState(order);
    const [otp, setOtp] = useState("");
    const [otpSent, setOtpSent] = useState(false);
    const [currentOrder, setCurrentOrder] = useState(null); // Track current OTP process order

    useEffect(() => {
      const fetchOrder = async (farmerId) => {
        try {
          const response = await axios.get(`http://localhost:5000/order`);
          const filteredCrops = response.data.filter(
            (crop) => crop.farmer_id._id === farmerId
          );
          setOrders(filteredCrops);
          console.log(filteredCrops);
        } catch (error) {
          console.error("Error fetching crops", error);
        }
      };

      fetchOrder(order[0]?.farmer_id._id);
    }, [order]);

    // Handle navigation to the status update page
    const handleUpdateStatus = (order_id) => {
      navigate(`/${order_id}`); // Navigate to the new page with order_id in the URL
    };

    // Function to apply the correct status color
    const getStatusClass = (status) => {
      if (status === "Reject") return "text-red-500"; // Red for Reject
      if (status === "Pending") return "text-yellow-500"; // Yellow for Pending
      if (status === "Accept") return "text-green-500"; // Green for Accept
      return "";
    };

    // Send OTP via email
    const handleSendOtp = async (order) => {
      try {
        setCurrentOrder(order);
        const response = await axios.post(`http://localhost:5000/send-otp`, {
          email: order.buyer_id.email,
          orderId: order._id,
        });
        if (response.data.success) {
          setOtpSent(true);
          alert("OTP sent to buyer's email!");
        }
      } catch (error) {
        console.error("Error sending OTP:", error);
      }
    };

    // Verify OTP
    const handleVerifyOtp = async () => {
      try {
        const response = await axios.post(`http://localhost:5000/verify-otp`, {
          otp,
          orderId: currentOrder._id,
        });
        if (response.data.success) {
          alert("OTP verified successfully!");
          setOtpSent(false);
          setCurrentOrder(null);
          setOtp("");
          // Update order status to "Completed"
          const updatedOrders = orders.map((order) =>
            order._id === currentOrder._id
              ? { ...order, status: "Completed" }
              : order
          );
          setOrders(updatedOrders);
        } else {
          alert("Invalid OTP. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying OTP:", error);
      }
    };

    return (
      <div className="flex justify-center items-center mt-5 min-h-screen bg-gray-100">
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
                  <strong>Status:</strong>{" "}
                  <span className={getStatusClass(ord.status)}>
                    {ord.status}
                  </span>
                </p>
                {ord.status === "accept" && (
                  <div className="mt-4">
                    {!otpSent ? (
                      <button
                        onClick={() => handleSendOtp(ord)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Send OTP
                      </button>
                    ) : (
                      <div>
                        <input
                          type="text"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          placeholder="Enter OTP"
                          className="border rounded px-4 py-2 mr-2"
                        />
                        <button
                          onClick={handleVerifyOtp}
                          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                        >
                          Verify OTP
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <button
                  onClick={() => handleUpdateStatus(ord._id)}
                  className="mt-6 w-full bg-green-400 text-white px-4 py-2 rounded hover:bg-green-500 transition"
                >
                  Update Status
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No orders available.</p>
          )}
        </div>
      </div>
    );
  }
