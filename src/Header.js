import React from 'react'
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider'
import { auth } from "./firebase"

import './css/Style.css'

function Header() {
    const [{carrinho, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }







    const showMenu = (toggleId, navId) =>{
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)
    
        if(toggle && nav){
            toggle.addEventListener('click', ()=>{
                nav.classList.add('show')
            })
        }
    }
    

    showMenu('nav-toggle','nav-menu')
    
    const navLink = document.querySelectorAll('.nav__link')
    function linkAction(){
        //Active link
        navLink.forEach(n => n.classList.remove('active'))
        this.classList.add('active')
    
        // Remov menu mobile
        const navMenu = document.getElementById('nav-menu')
        navMenu.classList.remove('show')
    }
    
    navLink.forEach(n => n.addEventListener('click', linkAction))

    
    


    return (
        <header className="l-header">

            <nav className="nav bd-grid">

                <Link to="/">    
                    <div>
                        <a className="nav__logo nav__link">G2 Esports</a>
                    </div>
                </Link>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                    
                        <Link to="/">
                            <li className="nav__item"><a className="nav__link">Home</a></li>
                        </Link>

                        <Link to="/produtos">
                            <li className="nav__item"><a className="nav__link">Produtos</a></li>
                        </Link>

                        <Link to={"/pedidos"}>
                                <li className="nav__item"><span className="nav__link">{!user ? "Usuário" : user.email}</span></li>
                        </Link>

                        
                        <Link to={!user && "/login"}>
                                <li className="nav__item"><span className="nav__link" onClick={handleAuthentication}>{user ? " Sair da Conta" : "Faça seu login"}</span></li>
                        </Link>
                        
                    </ul>


                </div>








                <div>
                <Link to="/carrinho" className="nav__link">
                    <i className="bx bx-cart nav__cart"></i>
                    <span className="nav__cartN">{carrinho?.length}</span>  
                </Link>
                    <i className="bx bx-menu nav__toggle" id="nav-toggle"></i>
                </div>




            </nav>

        </header>
    )
}

export default Header
