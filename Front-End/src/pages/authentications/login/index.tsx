import { useState } from 'react'
import CarritoCompras from '@/assets/CarritoCompras.png'
import Libreria from '@/assets/SignUpFondo.png'
import './index.css'

function LogIn() {


    return (
        <>
            <div className="container">
                <div id="Controls">
                    <div id="Register">
                        <h1 id="h1Welcomeback">Welcome!</h1>
                        <img id="imgCarrito_de_compras" src={CarritoCompras} />
                        <input id="Username" className="Username_y_Password" placeholder="Username" tabIndex={1} type='text' />
                        <input id="Password" className="Username_y_Password" placeholder="Password" tabIndex={2} type='text' />
                        <div style={{ position: 'relative', alignItems: 'center', justifyContent: 'space-between', left: '-2.5%', marginTop: '-5%', display: 'flex', flexDirection: 'row', width: '89%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <input type="checkbox" id="chbxRemenberMe" value="Remeber Me" />
                                <h4 id="h4RemenberMe"> Remenber Me</h4>
                            </div>
                            <a href="https://www.youtube.com" className='Links' style={{ position: 'relative', height: '40%', maxHeight: '40%', font: '1em Oswald MS', color: '#D1E9F9', left: '-5%' }}>Forgot Password?</a>
                        </div>
                        <input id="LogIn" type='button' tabIndex={3} value='Log In' />
                        <div id="divLinks1">
                            <a href="https://www.youtube.com" className='Links1' style={{ color: '#D1E9F9' }}>Don’t have an account yet?</a>
                            <a href="https://www.youtube.com" className='Links1' style={{ color: '#1E608E' }}>Create an account</a>
                        </div>
                    </div>
                </div>
                <img id="imgFondo" src={Libreria} />
            </div>
        </>
    )
}

export default LogIn