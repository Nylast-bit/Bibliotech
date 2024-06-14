import LogIn from "./pages/authentications/login";
import SignUp from "./pages/authentications/signUp";
import Navbar from "./shared/layout/NavBar";
import Home from "./pages/Navigation/home";
import MenuBook from "./pages/Navigation/MenuBook";
import Payments from "./pages/Navigation/payments";
import P6 from "./pages/Navigation/P6";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />


        <Route path="/" element={<Navbar />}>
          <Route path="home" element={<Home />} />
          <Route path="menubook" element={<MenuBook />} />
          <Route path="payments" element={<Payments />} />
          <Route path="P6" element={<P6 />} />          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
