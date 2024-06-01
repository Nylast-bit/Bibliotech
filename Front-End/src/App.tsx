import { useState } from 'react'
import LogIn from './pages/authentications/login';
import SignUp from './pages/authentications/singUp';
import Home from './pages/authentications/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {


  return (
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="home" element={<Home />} />

          </ Route>

        </Routes>

      </BrowserRouter>
  )
}

export default App