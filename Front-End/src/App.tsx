import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Señorita from './assets/Señorita.png'
import Libreria from './assets/SignUpFondo.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <img id="imgFondo" src={Libreria}/>
      <div id="Controls" className="Controls">
        <div id="Register" className="Register">
          <h1 id="h1CreateAccount">Create Account</h1>
          <img id="imgSeñorita" src={Señorita}/>
          <div id="divName_y_Username">
            <input id="Name" className="Name_y_Username" placeholder="Name" tabIndex={1} type='text'/>
            <input id="Username" className="Name_y_Username" placeholder="Username" tabIndex={2} type='text'/>
          </div>
          <input id="Email" className="Email_y_Password" placeholder="Email" tabIndex={3} type='text'/>
          <input id="Password" className="Email_y_Password" placeholder="Password" tabIndex={4} type='text'/>
          <input id="SignUp" type='button' tabIndex={5} value='Sign Up'/>
          <div id="divLinks">
            <a href="https://www.youtube.com" className='Links' tabIndex={6} style={{ color: '#D1E9F9' }}>Already have an account?</a>
            <a href="https://www.youtube.com" className='Links' tabIndex={7} style={{ color: '#1E608E' }}>Log in</a>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default App