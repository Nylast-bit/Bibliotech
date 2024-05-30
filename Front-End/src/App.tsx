import { useState } from 'react'
import LogIn from './pages/authentications/login';
import SignUp from './pages/authentications/singUp';
import Home from './pages/authentications/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

function App() {


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />

          </ Route>

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App