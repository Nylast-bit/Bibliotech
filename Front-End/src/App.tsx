import { useState } from "react";
import LogIn from "./pages/authentications/login";
import SignUp from "./pages/authentications/signUp";
import Home from "./pages/authentications/home";
import Navbar from "./shared/layout/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100%", width: "100%", display: "flex", margin: 0 }}>
      <Navbar />

      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
