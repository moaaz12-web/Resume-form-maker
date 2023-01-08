import React from "react";
import Payments from "./components/Payments.jsx";
import ParentComp from "./components/ParentComp/ParentComp.jsx";
import "./index.css";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { useEffect, useState } from "react";
import ForceRedirect from "./components/ForceRedirect";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [isConnected, setIsconnected] = useState(false);

  const checkUserToken = () => {
    if (typeof window !== "undefined") {
      const user = JSON.parse(localStorage.getItem("user-token"));
      if (user) {
        setIsconnected(true);
      } else {
        setIsconnected(false);
      }
    }
  };
  useEffect(() => {
    checkUserToken();
  }, [isConnected]);

  const Logout = () => {
    if (localStorage.getItem("user-token")) {
      localStorage.clear();
      setIsconnected(false);
    }
  };

  return (
    <>
      <Navbar Logout={Logout} user={isConnected} />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute user={isConnected}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ForceRedirect user={isConnected}>
              <Signin />
            </ForceRedirect>
          }
        />
        <Route
          path="/signup"
          element={
            <ForceRedirect user={isConnected}>
              <Signup />
            </ForceRedirect>
          }
        />
        <Route path="*" element={<NotFound />} />

        {/* Maaz Routes */}

        <Route path="/payments" element={<Payments />} />
        <Route path="/green" element={<ParentComp />} />

        {/* ================== */}
      </Routes>
    </>
  );
}

export default App;
