







// const UserDashboard = () => {
//   const { id } = useParams(); // Extract buyer ID from URL
//   const navigate = useNavigate(); // Hook to programmatically navigate
//   const [crops, setCrops] = useState([]);
//   const [selectedCrop, setSelectedCrop] = useState("");
//   const [cart, setCart] = useState([]);
//   const [buyerData, setBuyerData] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [orderConfirmation, setOrderConfirmation] = useState([]);
//   const [highlightedFarmerId, setHighlightedFarmerId] = useState(null);
//   const order = useSelector((state) => state.orders);
//   const [orders, setOrders] = useState(order);

//   useEffect(() => {
//     const fetchOrder = async () => {
//       try {
//         const storedUser = localStorage.getItem("user");
//         const user = JSON.parse(storedUser);
//         const userId = user; // Get the user ID from the stored user object

//         // Fetch orders from the API
//         const response = await axios.get(`http://localhost:5000/order`);
//         const filteredCrops = response.data.filter(
//           (crop) => crop.buyer_id._id === userId
//         );
//         setOrders(filteredCrops); // Set the filtered crops in state
//       } catch (error) {
//         console.error("Error fetching crops", error);
//       }
//     };

//     fetchOrder();
//   }, []); // Empty dependency array for this useEffect

//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/crops");
//         const cropsWithFarmerInfo = response.data.map((crop) => ({
//           ...crop,
//           farmer_phone: crop.farmer_phone || "Not Available",
//           farmer_district: crop.farmer_district || "Not Available",
//           farmer_state: crop.farmer_state || "Not Available",
//         }));
//         setCrops(cropsWithFarmerInfo);
//       } catch (error) {
//         console.error("Error fetching crops:", error);
//         alert("Failed to fetch crops. Please try again later.");
//       }
//     };

//     const fetchBuyerData = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/auth/users/${id}`
//         );
//         setBuyerData(response.data);
//       } catch (error) {
//         console.error("Error fetching buyer data:", error);
//         alert("Failed to fetch buyer data. Please try again later.");
//       }
//     };

//     fetchCrops();
//     fetchBuyerData();
//   }, [id]);

//   const filteredCrops = crops.filter((crop) =>
//     selectedCrop
//       ? crop.cropName.toLowerCase() === selectedCrop.toLowerCase()
//       : true
//   );

//   const addToCart = (crop) => {
//     // Check if there's already a crop in the cart
//     if (cart.length > 0) {
//       const currentFarmerId = cart[0].farmer_id;
//       if (crop.farmer_id !== currentFarmerId) {
//         alert(
//           "You can order with one farmer at a time. If you want to buy from another farmer, please place your current order first."
//         );
//         return;
//       }
//     }

//     // Set the highlighted farmer ID
//     setHighlightedFarmerId(crop.farmer_id);

//     const existingItem = cart.find(
//       (item) =>
//         item.cropName === crop.cropName && item.farmer_id === crop.farmer_id
//     );

//     if (existingItem) {
//       const updatedCart = cart.map((item) =>
//         item.cropName === crop.cropName && item.farmer_id === crop.farmer_id
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//       alert(`${crop.cropName} quantity increased in the cart.`);
//     } else {
//       setCart([...cart, { ...crop, quantity: 1 }]);
//       alert(`${crop.cropName} added to the cart.`);
//     }
//   };

//   const deleteFromCart = (cropId) => {
//     const updatedCart = cart.filter((item) => item._id !== cropId);
//     setCart(updatedCart);
//   };

//   const updateCartItemQuantity = (cropId, newQuantity) => {
//     const updatedCart = cart.map((item) =>
//       item._id === cropId ? { ...item, quantity: newQuantity } : item
//     );
//     setCart(updatedCart);
//   };

//   const handleOrder = () => {
//     if (cart.length === 0) {
//       alert("Your cart is empty. Please add crops before confirming an order.");
//       return;
//     }
//     setOrderConfirmation(cart);
//     setIsModalOpen(true);
//   };

//   const confirmOrder = () => {
//     console.log(orderConfirmation);
//     navigate("/place-order", { state: { orderConfirmation, buyerData } });
//     setIsModalOpen(false);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
//       <Link to="/userOrder" className="text-2xl font-bold mb-6">
//         Orders{" "}
//         <sup className="bg-green-800 rounded-full w-[20px] h-[15px] text-white">
//           {orders.length + 1}
//         </sup>
//       </Link>

//       {/* Crop Selection */}
//       <div className="mb-6">
//         <label className="block text-lg font-semibold mb-2">
//           Select Predefined Crop:
//         </label>
//         <select
//           className="border rounded px-4 py-2 w-full"
//           value={selectedCrop}
//           onChange={(e) => setSelectedCrop(e.target.value)}
//         >
//           <option value="">-- Select Crop --</option>
//           {predefinedCrops.map((crop, index) => (
//             <option key={index} value={crop.name}>
//               {crop.name} ({crop.hindi})
//             </option>
//           ))}
//         </select>
//       </div>

//       {/* Display matching crops */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {filteredCrops.map((crop) => (
//           <CropCard
//             key={crop._id}
//             crop={crop}
//             addToCart={addToCart}
//             isHighlighted={highlightedFarmerId === crop.farmer_id}
//           />
//         ))}
//       </div>

//       {/* Cart Overview */}
//       <div className="mt-8">
//         <h2 className="text-2xl font-semibold">Cart</h2>
//         {cart.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           <ul>
//             {cart.map((item, index) => (
//               <li
//                 key={index}
//                 className="border rounded px-4 py-2 mb-2 flex justify-between items-center"
//               >
//                 {item.cropName} - {item.price} INR x {item.quantity}
//                 <button
//                   onClick={() => deleteFromCart(item._id)}
//                   className="bg-red-500 text-white rounded px-2 py-1 ml-4"
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//         )}
//         <button
//           onClick={handleOrder}
//           className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
//         >
//           Confirm Order
//         </button>
//       </div>

//       {/* Confirmation Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         ariaHideApp={false}
//         className="modal"
//       >
//         <h2 className="text-xl font-bold">Confirm Order</h2>
//         <p>Are you sure you want to place the order?</p>
//         <ul>
//           {orderConfirmation.map((item, index) => (
//             <li key={index}>
//               {item.cropName} - {item.price} INR x {item.quantity}
//             </li>
//           ))}
//         </ul>
//         <button
//           onClick={confirmOrder}
//           className="bg-green-500 text-white px-4 py-2 rounded"
//         >
//           Confirm
//         </button>
//         <button
//           onClick={closeModal}
//           className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
//         >
//           Cancel
//         </button>
//       </Modal>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams,useNavigate, Link } from "react-router-dom";
import CropCard from "./CropCard"; // Component for displaying individual crops
import Modal from "react-modal"; // Modal for confirmation
import { useSelector } from "react-redux";

const predefinedCrops = [
  { name: "Wheat", hindi: "गेंहू" },
  { name: "Rice", hindi: "चावल" },
  { name: "Mustard", hindi: "सरसों" },
  { name: "Corn", hindi: "मक्का" },
];
const UserDashboard = () => {
  const { id } = useParams(); // Extract buyer ID from URL
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [crops, setCrops] = useState([]);
  const [selectedCrop, setSelectedCrop] = useState("");
  const [cart, setCart] = useState([]);
  const [buyerData, setBuyerData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderConfirmation, setOrderConfirmation] = useState([]);
  const [highlightedFarmerId, setHighlightedFarmerId] = useState(null);
  const order = useSelector((state) => state.orders);
  const [orders, setOrders] = useState(order);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        const user = JSON.parse(storedUser);
        const userId = user; // Get the user ID from the stored user object

        // Fetch orders from the API
        const response = await axios.get(`http://localhost:5000/order`);
        const filteredCrops = response.data.filter(
          (crop) => crop.buyer_id._id === userId
        );

        setOrders(filteredCrops); // Set the filtered crops in state
      } catch (error) {
        console.error("Error fetching crops", error);
      }
    };

    fetchOrder();
  }, []); // Empty dependency array for this useEffect

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get("http://localhost:5000/crops");
        console.log(response)
        const cropsWithFarmerInfo = response.data.map((crop) => ({
          ...crop,
          farmer_phone: crop.farmer_id.farmer_phone || "Not Available",
          farmer_district: crop.farmer_id.farmer_district || "Not Available",
          farmer_state: crop.farmer_id.farmer_state || "Not Available",
        }));
        setCrops(cropsWithFarmerInfo);
      } catch (error) {
        console.error("Error fetching crops:", error);
        alert("Failed to fetch crops. Please try again later.");
      }
    };

    const fetchBuyerData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/auth/users/${id}`
        );
        setBuyerData(response.data);
      } catch (error) {
        console.error("Error fetching buyer data:", error);
        alert("Failed to fetch buyer data. Please try again later.");
      }
    };

    fetchCrops();
    fetchBuyerData();
  }, [id]);

  // Logic for filtering crops based on selected crop and farmer ID
  const filteredCrops = crops.filter((crop) =>
    selectedCrop
      ? crop.cropName.toLowerCase() === selectedCrop.toLowerCase()
      : highlightedFarmerId
      ? crop.farmer_id._id === highlightedFarmerId
        : true
    
  );
  console.log(filteredCrops)
console.log(highlightedFarmerId);
  const addToCart = (crop) => {
    // Check if there's already a crop in the cart
    if (cart.length > 0) {
      const currentFarmerId = cart[0].farmer_id;
      if (crop.farmer_id !== currentFarmerId) {
        alert(
          "You can order with one farmer at a time. If you want to buy from another farmer, please place your current order first."
        );
        return;
      }
    }

    // Set the highlighted farmer ID
    console.log(crop.farmer_id);
    setHighlightedFarmerId(crop.farmer_id);
      
    const existingItem = cart.find(
      (item) =>
        item.cropName === crop.cropName && item.farmer_id === crop.farmer_id
    );
  console.log(cart, "cart");
    console.log(existingItem ,"exiting crop")
    console.log(crop,"crop")
    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.cropName === crop.cropName && item.farmer_id === crop.farmer_id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
      alert(`${crop.cropName} quantity increased in the cart.`);
    } else {
      setCart([...cart, { ...crop, quantity: 1 }]);
      alert(`${crop.cropName} added to the cart.`);
    }
  };

  const deleteFromCart = (cropId) => {
    const updatedCart = cart.filter((item) => item._id !== cropId);
    setCart(updatedCart);

    // If the cart is empty after removal, reset the highlighted farmer ID
    if (updatedCart.length === 0) {
      setHighlightedFarmerId(null); // Reset to show all crops
    }
  };

  const updateCartItemQuantity = (cropId, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item._id === cropId ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
  };

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add crops before confirming an order.");
      return;
    }
    setOrderConfirmation(cart);
    setIsModalOpen(true);
  };

  const confirmOrder = () => {
    console.log(orderConfirmation);
    navigate("/place-order", { state: { orderConfirmation, buyerData } });
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">User Dashboard</h1>
      <Link to="/userOrder" className="text-2xl font-bold mb-6">
        Orders{" "}
        <sup className="bg-green-800 rounded-full w-[20px] h-[15px] text-white">
          {orders.length + 1}
        </sup>
      </Link>

      {/* Crop Selection */}
      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">
          Select Predefined Crop:
        </label>
        <select
          className="border rounded px-4 py-2 w-full"
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
        >
          <option value="">-- Select Crop --</option>
          {predefinedCrops.map((crop, index) => (
            <option key={index} value={crop.name}>
              {crop.name} ({crop.hindi})
            </option>
          ))}
        </select>
      </div>

      {/* Display matching crops */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredCrops.map((crop) => (
          <CropCard
            key={crop._id}
            crop={crop}
            addToCart={addToCart}
            isHighlighted={highlightedFarmerId === crop.farmer_id}
          />
        ))}
      </div>

      {/* Cart Overview */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li
                key={index}
                className="border rounded px-4 py-2 mb-2 flex justify-between items-center"
              >
                {item.cropName} - {item.price} INR x {item.quantity}
                <button
                  onClick={() => deleteFromCart(item._id)}
                  className="bg-red-500 text-white rounded px-2 py-1 ml-4"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          onClick={handleOrder}
          className="mt-4 bg-blue-500 text-white rounded px-4 py-2"
        >
          Confirm Order
        </button>
      </div>

      {/* Confirmation Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="modal text-center mt-[180px] bg-blue-300 border-[4px] pt-[70px] border-black w-[500px]  h-[270px] ml-[450px] z-[9999]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
      >
        <h2 className="text-2xl font-bold">Confirm Order</h2>
        <p className="text-2xl">Are you sure you want to place the order?</p>
        <ul>
          {orderConfirmation.map((item, index) => (
            <li key={index} className="text-2xl">
              {item.cropName} - {item.price} INR x {item.quantity}
            </li>
          ))}
        </ul>
        <button
          onClick={confirmOrder}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Confirm
        </button>
        <button
          onClick={closeModal}
          className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};


export default UserDashboard; 


