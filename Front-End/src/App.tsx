import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Señorita from './assets/Señorita.png'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <img className="FotoFondo"/>
      </div>
      <div id="Controls" className="Controls">
        <div id="Register" className="Register">
          <h1 id="CreateAccount">Create Account</h1>
          <img id="MyImage" src={Señorita}/>
          <div id="NamenUsername">
            <input id="Name" className="NamenUsername" placeholder="Name" tabIndex={1} type='text'/>
            <input id="Username" className="NamenUsername" placeholder="Username" tabIndex={2} type='text'/>
          </div>
          <input id="Email" className="TEXTS" placeholder="Email" tabIndex={3} type='text'/>
          <input id="Password" className="TEXTS" placeholder="Password" tabIndex={4} type='text'/>
          <input id="SignUp" type='button' tabIndex={5} value='Sign Up'/>
          <div id="Links">
            <a href="https://www.youtube.com" className='Links' style={{ color: '#D1E9F9' }}>Already have an account?</a>
            <a href="https://www.youtube.com" className='Links' style={{ color: '#1E608E' }}>Log in</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App