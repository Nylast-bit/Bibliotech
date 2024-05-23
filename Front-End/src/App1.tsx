import { useState } from 'react'
import CarritoCompras from './assets/CarritoCompras.png'
import Libreria from './assets/SignUpFondo.png'
import './App1.css'

function App1() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="container">
      <div id="Controls">
        <div id="Register">
          <h1 id="h1Welcomeback">Welcome back!</h1>
          <img id="imgCarrito_de_compras" src={CarritoCompras}/>
          <input id="Username" className="Username_y_Password" placeholder="Username" tabIndex={1} type='text'/>
          <input id="Password" className="Username_y_Password" placeholder="Password" tabIndex={2} type='text'/>
          <div style={{ position: 'relative', top: '-3.3%', left: '-2%' ,display: 'flex', flexDirection: 'row' }}>
            <input type="checkbox" id="chbxRemenberMe" value="Remeber Me"/>
            <h4 id="h4RemenberMe"> Remenber Me</h4>
            <a href="https://www.youtube.com" className='Links' style={{ position: 'relative', top: '29%', left: '39.5%', height: '40%', font: '1em Comic Sans MS', color: '#D1E9F9' }}>Forgot Password?</a>
          </div>
          <input id="LogIn" type='button' tabIndex={3} value='Log In'/>
          <div id="divLinks">
            <a href="https://www.youtube.com" className='Links' style={{ color: '#D1E9F9' }}>Don’t have an account yet?</a>
            <a href="https://www.youtube.com" className='Links' style={{ color: '#1E608E' }}>Create an account</a>
          </div>
        </div>
      </div>
      <img id="imgFondo" src={Libreria}/>
      </div>
    </>
  )
}

export default App1