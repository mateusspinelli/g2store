import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

import "./css/Login.css"

import login1 from "./img/login1.webp"

function CriarConta() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) =>{
            console.log(auth);
            if (auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
 
    return (
        <div>
            <section className="login">
                <div className="container active">
                    <div className="user signupBx">
                        <div className="formBx">
                            <form>
                                <h2>Criar uma conta</h2>
                                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" required></input>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Crie uma senha" required></input>
                                <input type="submit" onClick={register} value="Criar"></input>
                                <p className="signup">Já tem uma conta? <Link to="/login"><a href="#">Logar.</a></Link></p>
                            </form>
                        </div>
                        <div className="imgBx"><img src= {login1} ></img></div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default CriarConta
