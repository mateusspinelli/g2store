import React, {useState} from 'react'
import {Link, useHistory} from "react-router-dom";
import { auth } from './firebase';

import "./css/Login.css"

import login2 from "./img/login2.jpg"

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    const signIn = e =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }



    return (
        <div>
            <section className="login">
                <div className="container">
                    <div className="user signinBx">
                        <div className="imgBx"><img src={login2}></img></div>
                        <div className="formBx">
                            <form>
                                <h2>Entrar na sua conta</h2>
                                <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder="Nome de usuário"></input>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha"></input>
                                <input type="submit" onClick={signIn} value="Login"></input>
                                <p className="signup">Não tem uma conta? <Link to="/criarconta"><a>Crie uma!</a></Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
