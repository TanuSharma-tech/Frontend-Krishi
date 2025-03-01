 
// import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg";

// const cropsList = [
//   { name: "Wheat", hindi: "गेंहू", image: "wheat.jpg" },
//   { name: "Rice", hindi: "चावल", image: "rice.jpg" },
//   { name: "Mustard", hindi: "सरसों", image: "mustard.jpg" },
//   { name: "Corn", hindi: "मक्का", image: "corn.jpg" },
// ];

// const SuccessPopup = ({ message, onClose }) => (
//   <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold">{message}</h2>
//       <button
//         className="mt-4 bg-blue-500 text-white p-2 rounded"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// const FarmerDashboard = ({ farmerId }) => {
//   const [crops, setCrops] = useState([]);
//   const [farmerData, setFarmerData] = useState([]);
//   const { id } = useParams();
//   const [newCrop, setNewCrop] = useState({
//     cropName: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: "",
//   });
//   const [editingCrop, setEditingCrop] = useState(null);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   // Fetch farmer data
//   async function getFarmer(id) {
//     const farmerObject = await axios.get(
//       `http://localhost:5000/auth/users/${id}`
//     );
//     setFarmerData(farmerObject.data);
//   }

//   // Fetch all crops for the logged-in farmer
//   const fetchCrops = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/crops`);
//       const filteredCrops = response.data.filter(
//         (crop) => crop.farmer_id._id === id
//       );
//       setCrops(filteredCrops || []); // Set to an empty array if response is null
//     } catch (error) {
//       console.error("Error fetching crops", error);
//     }
//   };

//   useEffect(() => {
//     fetchCrops(id);
//     getFarmer(id);
//   }, [id]);

//   // Handle input changes for adding or editing crop
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCrop({ ...newCrop, [name]: value });
//   };

//   // Handle crop selection
//   const handleCropSelect = (e) => {
//     const selectedCrop = cropsList.find((crop) => crop.name === e.target.value);
//     if (selectedCrop) {
//       setNewCrop({
//         ...newCrop,
//         cropName: selectedCrop.name,
//         image: selectedCrop.image,
//       });
//     }
//   };

//   // Show popup message
//   const showPopup = (message) => {
//     setPopupMessage(message);
//     setIsPopupVisible(true);
//     setTimeout(() => {
//       setIsPopupVisible(false);
//       setPopupMessage("");
//     }, 3000); // Hide after 3 seconds
//   };

//   // Add a new crop
//   const addCrop = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/crops/add", {
//         ...newCrop,
//         farmer_id: id,
//       });
//       // Directly add the new crop to the state
//       setCrops((prevCrops) => [...prevCrops, response.data]);
//       showPopup("Crop added successfully!");
//       resetNewCrop();
//     } catch (error) {
//       console.error("Error adding crop", error);
//     }
//   };

//   // Edit a crop
//   const editCrop = (crop) => {
//     setEditingCrop(crop);
//     setNewCrop({
//       cropName: crop.cropName,
//       description: crop.description,
//       price: crop.price,
//       quantity: crop.quantity,
//       image: crop.image,
//     });
//   };

//   // Update crop
//   const updateCrop = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/crops/update/${editingCrop._id}`,
//         newCrop
//       );
//       // Update the crops list with the updated crop
//       setCrops((prevCrops) =>
//         prevCrops.map((crop) =>
//           crop._id === editingCrop._id ? response.data : crop
//         )
//       );
//       showPopup("Crop updated successfully!");
//       resetEditingCrop();
//     } catch (error) {
//       console.error("Error updating crop", error);
//     }
//   };

//   // Delete crop
//   const deleteCrop = async (cropId) => {
//     try {
//       await axios.delete(`http://localhost:5000/crops/delete/${cropId}`);
//       setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== cropId));
//       showPopup("Crop deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting crop", error);
//     }
//   };

//   // Helper function to reset the new crop form
//   const resetNewCrop = () => {
//     setNewCrop({
//       cropName: "",
//       description: "",
//       price: "",
//       quantity: "",
//       image: "",
//     });
//   };

//   // Helper function to reset editing crop
//   const resetEditingCrop = () => {
//     setEditingCrop(null);
//     resetNewCrop();
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>
//       {isPopupVisible && (
//         <SuccessPopup
//           message={popupMessage}
//           onClose={() => setIsPopupVisible(false)}
//         />
//       )}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">
//           {editingCrop ? "Edit Crop" : "Add Crop"}
//         </h2>
//         <select
//           name="cropName"
//           onChange={handleCropSelect}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         >
//           <option value="">Select Crop</option>
//           {cropsList.map((crop) => (
//             <option key={crop.name} value={crop.name}>
//               {crop.name} / {crop.hindi}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newCrop.description}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={newCrop.price}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={newCrop.quantity}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         {editingCrop ? (
//           <button
//             onClick={updateCrop}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Update Crop
//           </button>
//         ) : (
//           <button
//             onClick={addCrop}
//             className="bg-green-500 text-white p-2 rounded"
//           >
//             Add Crop
//           </button>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Your Crops</h2>
//       {Array.isArray(crops) && crops.length > 0 ? (
//         <ul className="list-disc pl-5">
//           {crops.map((crop) => (
//             <li key={crop._id} className="mb-4 border p-4 rounded bg-white">
//               <h3 className="text-xl font-bold">{crop.cropName}</h3>
//               <p>{crop.description}</p>
//               <p className="font-semibold">Price: {crop.price}</p>
//               <p className="font-semibold">Quantity: {crop.quantity}</p>
//               <img
//                 src={`/images/${crop.image}`}
//                 alt={crop.cropName}
//                 className="w-32 h-32 object-cover"
//               />
//               <div className="mt-2">
//                 <button
//                   onClick={() => editCrop(crop)}
//                   className="bg-yellow-500 text-white p-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteCrop(crop._id)}
//                   className="bg-red-500 text-white p-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No crops available. Add a new crop to get started!</p>
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg";



// const SuccessPopup = ({ message, onClose }) => (
//   <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold">{message}</h2>
//       <button
//         className="mt-4 bg-blue-500 text-white p-2 rounded"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// const FarmerDashboard = ({ farmerId }) => {
//   const [crops, setCrops] = useState([]);
//   const [farmerData, setFarmerData] = useState([]);
//   const { id } = useParams();
//   const [newCrop, setNewCrop] = useState({
//     cropName: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: "",
//   });
//   const [editingCrop, setEditingCrop] = useState(null);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPopupVisible, setIsPopupVisible] = useState(false);

//   // Fetch farmer data
//   async function getFarmer(id) {
//     const farmerObject = await axios.get(
//       `http://localhost:5000/auth/users/${id}`
//     );
//     setFarmerData(farmerObject.data);
//   }

//   // Fetch all crops for the logged-in farmer
//   const fetchCrops = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/crops`);
//       const filteredCrops = response.data.filter(
//         (crop) => crop.farmer_id._id === id
//       );
//       console.log(response);
//       setCrops(filteredCrops || []); // Set to an empty array if response is null
//     } catch (error) {
//       console.error("Error fetching crops", error);
//     }
//   };

//   useEffect(() => {
//     fetchCrops(id);
//     getFarmer(id);
//   }, []);

//   // Handle input changes for adding or editing crop
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCrop({ ...newCrop, [name]: value });
//   };

//   // Handle crop selection
//   const handleCropSelect = (e) => {
//     const selectedCrop = cropsList.find((crop) => crop.name === e.target.value);
//     if (selectedCrop) {
//       setNewCrop({
//         ...newCrop,
//         cropName: selectedCrop.name,
//         image: selectedCrop.image,
//       });
//     }
//   };

//   // Show popup message
//   const showPopup = (message) => {
//     setPopupMessage(message);
//     setIsPopupVisible(true);
//     setTimeout(() => {
//       setIsPopupVisible(false);
//       setPopupMessage("");
//     }, 3000); // Hide after 3 seconds
//   };

//   // Add a new crop
//   const addCrop = async () => {
//     // Check if the crop already exists
//     const cropExists = crops.some((crop) => crop.cropName === newCrop.cropName);

//     if (cropExists) {
//       showPopup("You have already added this crop!");
//       return; // Stop further execution
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/crops/add", {
//         ...newCrop,
//         farmer_id: id,
//       });
//       // Directly add the new crop to the state
//       setCrops((prevCrops) => [...prevCrops, response.data]);
//       showPopup("Crop added successfully!");
//       resetNewCrop();
//     } catch (error) {
//       console.error("Error adding crop", error);
//     }
//   };

//   // Edit a crop
//   const editCrop = (crop) => {
//     setEditingCrop(crop);
//     setNewCrop({
//       cropName: crop.cropName,
//       description: crop.description,
//       price: crop.price,
//       quantity: crop.quantity,
//       image: crop.image,
//     });
//   };

//   // Update crop
//   const updateCrop = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/crops/update/${editingCrop._id}`,
//         newCrop
//       );
//       // Update the crops list with the updated crop
//       setCrops((prevCrops) =>
//         prevCrops.map((crop) =>
//           crop._id === editingCrop._id ? response.data : crop
//         )
//       );
//       showPopup("Crop updated successfully!");
//       resetEditingCrop();
//     } catch (error) {
//       console.error("Error updating crop", error);
//     }
//   };

//   // Delete crop
//   const deleteCrop = async (cropId) => {
//     try {
//       await axios.delete(`http://localhost:5000/crops/delete/${cropId}`);
//       setCrops((prevCrops) => prevCrops.filter((crop) => crop._id !== cropId));
//       showPopup("Crop deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting crop", error);
//     }
//   };

//   // Helper function to reset the new crop form
//   const resetNewCrop = () => {
//     setNewCrop({
//       cropName: "",
//       description: "",
//       price: "",
//       quantity: "",
//       image: "",
//     });
//   };

//   // Helper function to reset editing crop
//   const resetEditingCrop = () => {
//     setEditingCrop(null);
//     resetNewCrop();
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>
//       {isPopupVisible && (
//         <SuccessPopup
//           message={popupMessage}
//           onClose={() => setIsPopupVisible(false)}
//         />
//       )}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">
//           {editingCrop ? "Edit Crop" : "Add Crop"}
//         </h2>
//         <select
//           name="cropName"
//           onChange={handleCropSelect}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         >
//           <option value="">Select Crop</option>
//           {cropsList.map((crop) => (
//             <option key={crop.name} value={crop.name}>
//               {crop.name} / {crop.hindi}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newCrop.description}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={newCrop.price}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={newCrop.quantity}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         {editingCrop ? (
//           <button
//             onClick={updateCrop}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Update Crop
//           </button>
//         ) : (
//           <button
//             onClick={addCrop}
//             className="bg-green-500 text-white p-2 rounded"
//           >
//             Add Crop
//           </button>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Your Crops</h2>
//       {Array.isArray(crops) && crops.length > 0 ? (
//         <ul className="list-disc pl-5">
//           {crops.map((crop) => (
//             <li key={crop._id} className="mb-4 border p-4 rounded bg-white">
//               <h3 className="text-xl font-bold">{crop.cropName}</h3>
//               <p>{crop.description}</p>
//               <p className="font-semibold">Price: {crop.price}</p>
//               <p className="font-semibold">Quantity: {crop.quantity}</p>
//               <img
//                 src={`/images/${crop.image}`}
//                 alt={crop.cropName}
//                 className="w-32 h-32 object-cover"
//               />
//               <div className="mt-2">
//                 <button
//                   onClick={() => editCrop(crop)}
//                   className="bg-yellow-500 text-white p-2 rounded mr-2"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => deleteCrop(crop._id)}
//                   className="bg-red-500 text-white p-2 rounded"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No crops available. Add a new crop to get started!</p>
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;







// const SuccessPopup = ({ message, onClose }) => (
//   <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
//     <div className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold">{message}</h2>
//       <button
//         className="mt-4 bg-blue-500 text-white p-2 rounded"
//         onClick={onClose}
//       >
//         Close
//       </button>
//     </div>
//   </div>
// );

// const FarmerDashboard = () => {
//   const navigate = useNavigate();
//   const [crops, setCrops] = useState([]);
//   const [farmerData, setFarmerData] = useState({});
//   const { id } = useParams();
//   const [newCrop, setNewCrop] = useState({
//     cropName: "",
//     description: "",
//     price: "",
//     quantity: "",
//     image: "",
//   });
//   const [editingCrop, setEditingCrop] = useState(null);
//   const [popupMessage, setPopupMessage] = useState("");
//   const [isPopupVisible, setIsPopupVisible] = useState(false);
// const [order, setOrder] = useState([]);
//   // Fetch farmer data
//   const getFarmer = async (farmerId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:5000/auth/users/${farmerId}`
//       );
//       setFarmerData(response.data);
//     } catch (error) {
//       console.error("Error fetching farmer data", error);
//     }
//   };

//   // Fetch all crops for the logged-in farmer
//   const fetchCrops = async (farmerId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/crops`);
//       const filteredCrops = response.data.filter(
//         (crop) => crop.farmer_id === farmerId
//       );
//       setCrops(filteredCrops);
//     } catch (error) {
//       console.error("Error fetching crops", error);
//     }
//   };

//   const fetchOrder = async (farmerId) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/order`);
//       const filteredCrops = response.data.filter(
//         (crop) => crop.farmer_id._id === farmerId
//       );
//       setOrder(filteredCrops);
//       console.log(response.data[0].farmer_id._id);
//       console.log(order.length)
//     } catch (error) {
//       console.error("Error fetching crops", error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchCrops(id);
//       getFarmer(id);
//       fetchOrder(id)
//     }
//   }, [id]);

//   // Handle input changes for adding or editing crop
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewCrop({ ...newCrop, [name]: value });
//   };

//   // Handle crop selection from predefined crops
//   const handleCropSelect = (e) => {
//     const selectedCrop = cropsList.find((crop) => crop.name === e.target.value);
//     if (selectedCrop) {
//       setNewCrop({
//         ...newCrop,
//         cropName: selectedCrop.name,
//         image: selectedCrop.image,
//       });
//     }
//   };

//   // Show popup message
//   const showPopup = (message) => {
//     setPopupMessage(message);
//     setIsPopupVisible(true);
//     setTimeout(() => {
//       setIsPopupVisible(false);
//       setPopupMessage("");
//     }, 3000); // Hide after 3 seconds
//   };

//   // Add a new crop
//   const addCrop = async () => {
//     if (crops.some((crop) => crop.cropName === newCrop.cropName)) {
//       showPopup("You have already added this crop!");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/crops/add", {
//         ...newCrop,
//         farmer_id: id,
//       });
//       setCrops([...crops, response.data]);
//       showPopup("Crop added successfully!");
//       resetNewCrop();
//     } catch (error) {
//       console.error("Error adding crop", error);
//     }
//   };

//   // Edit crop
//   const editCrop = (crop) => {
//     setEditingCrop(crop);
//     setNewCrop({
//       cropName: crop.cropName,
//       description: crop.description,
//       price: crop.price,
//       quantity: crop.quantity,
//       image: crop.image,
//     });
//   };

//   // Update crop
//   const updateCrop = async () => {
//     try {
//       const response = await axios.put(
//         `http://localhost:5000/crops/update/${editingCrop._id}`,
//         newCrop
//       );
//       setCrops(
//         crops.map((crop) =>
//           crop._id === editingCrop._id ? response.data : crop
//         )
//       );
//       showPopup("Crop updated successfully!");
//       resetEditingCrop();
//     } catch (error) {
//       console.error("Error updating crop", error);
//     }
//   };

//   // Delete crop
//   const deleteCrop = async (cropId) => {
//     try {
//       await axios.delete(`http://localhost:5000/crops/delete/${cropId}`);
//       setCrops(crops.filter((crop) => crop._id !== cropId));
//       showPopup("Crop deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting crop", error);
//     }
//   };

//   // Reset the new crop form
//   const resetNewCrop = () => {
//     setNewCrop({
//       cropName: "",
//       description: "",
//       price: "",
//       quantity: "",
//       image: "",
//     });
//   };

//   // Reset editing crop state
//   const resetEditingCrop = () => {
//     setEditingCrop(null);
//     resetNewCrop();
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <div className="flex w-full flex-row justify-between">
//         {" "}
//         <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>{" "}
//         <div to="/FarmerOrders" className="text-2xl font-bold mb-6">
//           Orders{" "}
//           <sup
//             className="bg-green-800 rounded-full w-[20px] h-[15px] text-white"
//             onClick={() => navigate("/FarmerOrders", { state: { order } })}
//           >
//             {order.length + 1}
//           </sup>
//         </div>
//       </div>
//       {isPopupVisible && (
//         <SuccessPopup
//           message={popupMessage}
//           onClose={() => setIsPopupVisible(false)}
//         />
//       )}
//       <div className="mb-6">
//         <h2 className="text-2xl font-semibold mb-4">
//           {editingCrop ? "Edit Crop" : "Add Crop"}
//         </h2>
//         <select
//           name="cropName"
//           onChange={handleCropSelect}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         >
//           <option value="">Select Crop</option>
//           {cropsList.map((crop) => (
//             <option key={crop.name} value={crop.name}>
//               {crop.name} / {crop.hindi}
//             </option>
//           ))}
//         </select>
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newCrop.description}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Price"
//           value={newCrop.price}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         <input
//           type="number"
//           name="quantity"
//           placeholder="Quantity"
//           value={newCrop.quantity}
//           onChange={handleInputChange}
//           className="border border-gray-300 p-2 rounded mb-4 w-full"
//         />
//         {editingCrop ? (
//           <button
//             onClick={updateCrop}
//             className="bg-blue-500 text-white p-2 rounded"
//           >
//             Update Crop
//           </button>
//         ) : (
//           <button
//             onClick={addCrop}
//             className="bg-green-500 text-white p-2 rounded"
//           >
//             Add Crop
//           </button>
//         )}
//       </div>

//       <h2 className="text-2xl font-semibold mb-4">Your Crops</h2>
//       {crops.length > 0 ? (
//         <ul className="list-disc pl-5">
//           {crops.map((crop) => (
//             <li key={crop._id} className="mb-4 border p-4 rounded bg-white">
//               <h3 className="text-xl font-bold">{crop.cropName}</h3>
//               <p>{crop.description}</p>
//               <p className="font-semibold">Price: {crop.price}</p>
//               <p className="font-semibold">Quantity: {crop.quantity}</p>
//               <img
//                 src={crop.image}
//                 alt={crop.cropName}
//                 className="w-32 h-32 object-cover"
//               />
//               <button
//                 onClick={() => editCrop(crop)}
//                 className="mt-2 mr-2 bg-yellow-500 text-white p-2 rounded"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => deleteCrop(crop._id)}
//                 className="mt-2 bg-red-500 text-white p-2 rounded"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No crops available. Add a new crop to get started!</p>
//       )}
//     </div>
//   );
// };

// export default FarmerDashboard;



import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";                                                         const cropsList = [
  {
    name: "Wheat",
    hindi: "गेंहू",
    image:
      "https://th.bing.com/th/id/OIP.kv7ovGaBHcSUIIlap5hmAQHaHa?w=500&h=500&rs=1&pid=ImgDetMain",
  },
  {
    name: "Rice",
    hindi: "चावल",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322775_2200-800x1200.jpg",
  },
  {
    name: "Mustard",
    hindi: "सरसों",
    image:
      "https://www.abestfashion.com/wp-content/uploads/2019/12/Mustard-Seeds-2.1.jpg",
  },
  {
    name: "Corn",
    hindi: "मक्का",
    image:"",
  },
];                                                                                                                                                                                             const SuccessPopup = ({ message, onClose }) => (
  <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg">
      <h2 className="text-xl font-bold">{message}</h2>
      <button
        className="mt-4 bg-blue-500 text-white p-2 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);
import { useDispatch, useSelector } from "react-redux"
import {fetchOrders} from "../redux/slices/ordersSlice"
import PlaceOrder from "./PlaceOrder";
const FarmerDashboard = () => {
  const navigate = useNavigate();
  const [crops, setCrops] = useState([]);
  const [farmerData, setFarmerData] = useState({});
  const { id } = useParams();
   const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  console.log(orders)
  const [newCrop, setNewCrop] = useState({
    cropName: "",
    description: "",
    price: "",
    quantity: "",
    image: "",
  });
  const [editingCrop, setEditingCrop] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [order, setOrder] = useState([]);
  // Fetch farmer data
  const getFarmer = async (farmerId) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/auth/users/${farmerId}"
      );
      setFarmerData(response.data);
    } catch (error) {
      console.error("Error fetching farmer data", error);
    }
  };

  // Fetch all crops for the logged-in farmer
  const fetchCrops = async (farmerId) => {
    try {
      const response = await axios.get("http://localhost:5000/crops");
      console.log(response)
      const filteredCrops = response.data.filter(
        (crop) => crop.farmer_id._id === farmerId
      );
      setCrops(filteredCrops);
    } catch (error) {
      console.error("Error fetching crops", error);
    }
  };
  
 
  const fetchOrder = async (farmerId) => {
    try {
      const response = await axios.get("http://localhost:5000/order");
      const filteredCrops = response.data.filter(
        (crop) => crop.farmer_id._id === farmerId
      );
      setOrder(filteredCrops);
      console.log(response.data[0].farmer_id._id);
      console.log(order.length);
    } catch (error) {
      console.error("Error fetching crops", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchCrops(id);
      getFarmer(id);
    console.log(dispatch(fetchOrders(id)));
    }
  }, [id]);

  // Handle input changes for adding or editing crop
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCrop({ ...newCrop, [name]: value });
  };

  // Handle crop selection from predefined crops
  const handleCropSelect = (e) => {
    const selectedCrop = cropsList.find((crop) => crop.name === e.target.value);
    if (selectedCrop) {
      setNewCrop({
        ...newCrop,
        cropName: selectedCrop.name,
        image: selectedCrop.image,
      });
    }
  };

  // Show popup message
  const showPopup = (message) => {
    setPopupMessage(message);
    setIsPopupVisible(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      setPopupMessage("");
    }, 3000); // Hide after 3 seconds
  };

  // Add a new crop
  const addCrop = async () => {
    console.log(crops)
    if (crops.some((crop) => crop.cropName === newCrop.cropName)) {
      showPopup("You have already added this crop!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/crops/add", {
        ...newCrop,
        farmer_id: id,
      });
      setCrops([...crops, response.data]);
      showPopup("Crop added successfully!");
      resetNewCrop();
    } catch (error) {
      console.error("Error adding crop", error);
    }
  };

  // Edit crop
  const editCrop = (crop) => {
    setEditingCrop(crop);
    setNewCrop({
      cropName: crop.cropName,
      description: crop.description,
      price: crop.price,
      quantity: crop.quantity,
      image: crop.image,
    });
  };

  // Update crop
  const updateCrop = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5000/crops/update/${editingCrop._id}",
        newCrop
      );
      setCrops(
        crops.map((crop) =>
          crop._id === editingCrop._id ? response.data : crop
        )
      );
      showPopup("Crop updated successfully!");
      resetEditingCrop();
    } catch (error) {
      console.error("Error updating crop", error);
    }
  };

  // Delete crop
  const deleteCrop = async (cropId) => {
    try {
      await axios.delete("http://localhost:5000/crops/delete/${cropId}");
      setCrops(crops.filter((crop) => crop._id !== cropId));
      showPopup("Crop deleted successfully!");
    } catch (error) {
      console.error("Error deleting crop", error);
    }
  };

  // Reset the new crop form
  const resetNewCrop = () => {
    setNewCrop({
      cropName: "",
      description: "",
      price: "",
      quantity: "",
      image: "",
    });
  };

  // Reset editing crop state
  const resetEditingCrop = () => {
    setEditingCrop(null);
    resetNewCrop();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
    
      <div className="flex w-full flex-row justify-between">
        {" "}
        <h1 className="text-3xl font-bold mb-6">Farmer Dashboard</h1>{" "}
        <Link to="/FarmerOrders" className="text-2xl font-bold mb-6">
          Orders{" "}
          <sup className="bg-green-800 rounded-full w-[20px] h-[15px] text-white">
            {orders.length}
          </sup>
        </Link>
      </div>
      {isPopupVisible && (
        <SuccessPopup
          message={popupMessage}
          onClose={() => setIsPopupVisible(false)}
        />
      )}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          {editingCrop ? "Edit Crop" : "Add Crop"}
        </h2>
        <select
          name="cropName"
          onChange={handleCropSelect}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        >
          <option value="">Select Crop</option>
          {cropsList.map((crop) => (
            <option key={crop.name} value={crop.name}>
              {crop.name} / {crop.hindi}
            </option>
          ))}
        </select>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newCrop.description}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <input
          type="number"
          name="price"
          placeholder="Per 100kg"
          value={newCrop.price}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newCrop.quantity}
          onChange={handleInputChange}
          className="border border-gray-300 p-2 rounded mb-4 w-full"
        />
        {editingCrop ? (
          <button
            onClick={updateCrop}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Update Crop
          </button>
        ) : (
          <button
            onClick={addCrop}
            className="bg-green-500 text-white p-2 rounded"
          >
            Add Crop
          </button>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Your Crops</h2>
      {crops.length > 0 ? (
        <ul className="list-disc pl-5">
          {crops.map((crop) => (
            <li key={crop._id} className="mb-4 border p-4 rounded bg-white">
              <h3 className="text-xl font-bold">{crop.cropName}</h3>
              <p>{crop.description}</p>
              <p className="font-semibold">Price: {crop.price}</p>
              <p className="font-semibold">Quantity: {crop.quantity}</p>
              <img
                src={crop.image}
                alt={crop.cropName}
                className="w-32 h-32 object-cover"
              />
              <button
                onClick={() => editCrop(crop)}
                className="mt-2 mr-2 bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => deleteCrop(crop._id)}
                className="mt-2 bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No crops available. Add a new crop to get started!</p>
      )}
    </div>
  );
};

export default FarmerDashboard;