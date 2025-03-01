// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
 
// import Meta from './components/meta'
// import Signup from './components/Signup'
// import Login from './components/Login'
// import { Route, Routes } from 'react-router-dom'
// import ForgotPassword from './components/ForgotPassword'
// import LogoutButton from './components/LogoutButton'
// import AuthMiddleware from './components/AuthMiddleware'
// import Navbar from './components/Navbar'
// import FarmerDashboard from './components/FarmerDashboard'

// function App() {
 

//   return (
//     <>
//       <Routes>
//         <Route path={"/"} element={<Navbar />}>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route
//             path="/data"
//             element={
//               <AuthMiddleware>
//                 <Meta />
//               </AuthMiddleware>
//             }
//           />
//           <Route path="/ForgotPassword" element={<ForgotPassword />} />
//           <Route path="/farmerDashboard" element={ <FarmerDashboard />}/>
//         </Route>
//       </Routes>

     
//     </>
//   );
// }

// export default App


import { useState } from "react";
import "./App.css";

import Meta from "./components/meta";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import AuthMiddleware from "./components/AuthMiddleware";
import Navbar from "./components/Navbar";
import FarmerDashboard from "./components/FarmerDashboard";
import AdminDashboard from "./components/AdminDashboard"; // Ensure this component exists
import UserDashboard from "./components/UserDashboard"; // Ensure this component exists
import LogoutButton from "./components/LogoutButton";
import BuyPage from "./components/BuyPage";
import PlaceOrder from "./components/PlaceOrder";
import Home from "./components/Home";
import CropsData from "./components/CropsData";
import GovData from "./ReferneceData/GovData";
import FarmerOrder from "./components/FarmerOrder";
import UpdateStatus from "./components/UpdateStatus";
import LandingPage from "./components/LandingPage";
import PaymentComponent from "./components/PaymentComponent";
import UserOrder from "./components/userOrder";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/"  element={<LandingPage/>}/>

          {/* Protected Routes */}
          <Route path="/crops" element={<CropsData />} />
          <Route path="/fruits" element={<CropsData />} />
          <Route path="/vegetables" element={<CropsData />} />
          <Route path="/flowers" element={<CropsData />} />
          <Route path="/GovData" element={<GovData />} />
          <Route path="/FarmerOrders" element={<FarmerOrder />} />
          <Route path="/payment/:id" element={<PaymentComponent/>}/>
       <Route path="/:id"
            element={
              
                <UpdateStatus/>
           
            }
          />
            <Route path="/userOrder" element={<UserOrder/>}/>
          {/* Role-Based Dashboards */}
          <Route  
            path="/farmer/dashboard/:id"
            element={
              <AuthMiddleware>
                <FarmerDashboard />
              </AuthMiddleware>
            }
          />

          <Route
            path="/admin/dashboard/:id"
            element={
              <AuthMiddleware>
                <AdminDashboard />
              </AuthMiddleware>
            }
          />
          <Route
            path="/user/dashboard/:id"
            element={
              <AuthMiddleware>
                <UserDashboard />
              </AuthMiddleware>
            }
          />
          <Route path="/place-order" element={<PlaceOrder />} />
            <Route
            path="/buy/:id"
            element={
              <AuthMiddleware>
                <BuyPage />
              </AuthMiddleware>
            }
            />
        </Route>
      </Routes>
    </>
  );
}

export default App;
