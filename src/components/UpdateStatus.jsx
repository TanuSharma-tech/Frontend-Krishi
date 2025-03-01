import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateOrderStatus } from "../redux/actions/orderActions";
export default function UpdateStatus() {
  const { id } = useParams(); // Get the order_id from the URL
  const [status, setStatus] = useState("pending"); // Default status is 'pending'
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Handle form submission to update the status
    const handleSubmit = async (e) => {
        e.preventDefault();

        // You will replace this with your actual API call to update the status in the backend


        const handleStatusUpdate = async (id) => {
  
            try {
                console.log(status)
                // API call to update status in the database for a specific order
                const response = await axios.put(
                  `http://localhost:5000/order/update/${id}`,{status:status}
                );
             
                    alert("success to update status");
                
            } catch (error) {
                console.error("Error updating status:", error);
                alert("An error occurred while updating status");
            }
        };
      handleStatusUpdate(id);
      navigate("/FarmerOrders");
    }
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold">Update Order Status</h2>
      <p>
        <strong>Order ID:</strong> {id}
      </p>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label
            htmlFor="status"
            className="block text-sm font-medium text-gray-700"
          >
            Select Order Status
          </label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="block w-full p-2 border rounded"
          >
            <option value="pending">Pending</option>
            <option value="accept">Accept</option>
            <option value="reject">Reject</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" 
        >
          Update Status
        </button>
      </form>
    </div>
  );
}
