import LogIn from "./pages/authentications/login";
import SignUp from "./pages/authentications/signUp";
import Navbar from "./shared/layout/NavBar";
import Home from "./pages/authentications/Home";
import MenuBook from "./pages/authentications/MenuBook";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
