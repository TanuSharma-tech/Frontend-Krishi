// import React from "react";

// const CropCard = ({ crop, addToCart }) => {
//   const { cropName, price, farmer_id, farmer_phone, farmer_district, farmer_state } = crop;

//   return (
//     <div className="border p-4 rounded shadow">
//       <h2 className="text-lg font-bold">{cropName}</h2>
//       <p>Price: {price} INR</p>
//       <p>Farmer ID: {farmer_id}</p>
//       <p>Farmer Phone: {farmer_phone}</p>
//       <p>Farmer District: {farmer_district}</p>
//       <p>Farmer State: {farmer_state}</p>
//       <button
//         onClick={() => addToCart({
//           cropName,
//           price,
//           farmer_id,
//           farmer_phone,
//           farmer_district,
//           farmer_state
//         })}
//         className="bg-blue-500 text-white px-2 py-1 rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default CropCard;
// //
//import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg";

//import React from "react";

// const CropCard = ({ crop, addToCart }) => {
//   const {
//     cropName,
//     price,
//     farmer_id,
//     farmer_phone,
//     farmer_district,
//       farmer_state,
//     image,
//   } = crop;
// console.log(image)
//   return (
//     <div className="border p-4 rounded shadow">
//       <img
//         src={image}
       
//         className="h-48 mr-2 w-[250px]"
//       />
//       <h2 className="text-lg font-bold">{cropName}</h2>
//       <p>Price: {price} INR</p>
//       <p>Farmer ID: {farmer_id}</p>
//       <p>Farmer Phone: {farmer_phone}</p>
//       <p>Farmer District: {farmer_district}</p>
//       <p>Farmer State: {farmer_state}</p>

//       <button
//         onClick={() =>
//           addToCart({
//             cropName,
//             price,
//             farmer_id,
//             farmer_phone,
//             farmer_district,
//             farmer_state,
//           })
//         }
//         className="bg-blue-500 text-white px-2 py-1 rounded"
//       >
//         Add to Cart
//       </button>
//     </div>
//   );
// };

// export default CropCard;

//ye maine comment out kiya h
/*import krishiLogo from "../assets/istockphoto-1315470694-1024x1024.jpg";
import React from "react";

const CropCard = ({ crop, addToCart, isHighlighted }) => {

  // Define styles for highlighted and non-highlighted cards
  const cardClasses = isHighlighted
    ? "border-4 border-green-500 p-4 rounded shadow-lg"
    : "border p-4 rounded shadow";

  const buttonClasses = isHighlighted
    ? "bg-green-500 text-white px-2 py-1 rounded mt-2"
    : "bg-blue-500 text-white px-2 py-1 rounded mt-2";

  return (
    <div className={cardClasses}>
      {/* Display a placeholder image if no image URL is available }
      <img
        src={crop.image || "https://via.placeholder.com/250"}
        alt={crop.cropName}
        className="h-48 mr-2 w-[250px] object-cover"
      />
      <h2 className="text-lg font-bold">{crop.cropName}</h2>
      <p>Price: {crop.price} INR</p>
      <p>Farmer ID: {crop.farmer_id._id}</p>
      <p>Farmer Phone: {crop.farmer_id.phone_number}</p>
      <p>Farmer District: {crop.farmer_id.district}</p>
      <p>Farmer State: {crop.farmer_id.state}</p>

      <button
        onClick={() =>
          addToCart({
            cropName: crop.cropName,
            price: crop.price,
            farmer_id: crop.farmer_id._id,
            farmer_phone: crop.farmer_id.phone_number,
            farmer_district: crop.farmer_id.district,
            farmer_state: crop.farmer_id.state,
            image: crop.image,
          })
        }
        className={buttonClasses}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CropCard; */


import React from "react";    
import "./CropCard.css";                                                                                                                                                                           

const CropCard = ({ crop, addToCart, isHighlighted }) => {
  // Define styles for highlighted and non-highlighted cards
  const cardClasses = isHighlighted
    ? "border-4 border-green-500 p-4 rounded shadow-lg"
    : "border p-4 rounded shadow";

  const buttonClasses = isHighlighted
    ? "bg-green-500 text-white px-2 py-1 rounded mt-2"
    : "bg-blue-500 text-white px-2 py-1 rounded mt-2";

  return (
    <div className="crop-card">
      {/* Display a placeholder image if no image URL is available */}
      <img
        src={crop.image || "https://via.placeholder.com/250"}
        alt={crop.cropName}
        className="h-48 mr-2 w-[250px] object-cover"
      />
      <h2 className="text-lg font-bold">{crop.cropName}</h2>
      <p><strong>Price:</strong> {crop.price} INR</p>
      <p><strong>Farmer ID:</strong> {crop.farmer_id._id}</p>
      <p><strong>Farmer Phone:</strong> {crop.farmer_id.phone_number}</p>
      <p><strong>Farmer District:</strong> {crop.farmer_id.district}</p>
      <p><strong>Farmer State:</strong> {crop.farmer_id.state}</p>

      <button
        onClick={() =>
          addToCart({
            cropName: crop.cropName,
            price: crop.price,
            farmer_id: crop.farmer_id._id,
            farmer_phone: crop.farmer_id.phone_number,
            farmer_district: crop.farmer_id.district,
            farmer_state: crop.farmer_id.state,
            image: crop.image,
          })
        }
        className={buttonClasses}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CropCard;
