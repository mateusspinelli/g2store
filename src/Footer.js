import React from 'react'
import {Link} from "react-router-dom";

import './css/Style.css'

function Footer() {
    return (
        <div className="footer">




            <footer class="footer section">






            <div class="footer__container bd-grid">
                
                <div class="footer__box">
                    <h3 class="footer__title">G2 Esports</h3>
                    <p class="footer__deal">Loja de Produtos</p>
                </div>






                <div class="footer__box">
                    <h3 class="footer__title">EXPLORE</h3>
                    <ul>
                        <li><a href="#home" class="footer__link">Home</a></li>
                        <li><a href="#destaques" class="footer__link">Destaques</a></li>
                        <li><a href="#novidades" class="footer__link">Novidades</a></li>
                    </ul>
                </div>







                <div class="footer__box">
                    <h3 class="footer__title">SUA CONTA</h3>
                    <ul>
                        <Link to="/login">
                            <li><a class="footer__link">Faça o Login</a></li>
                        </Link>
                        <Link to="/criarconta">
                            <li><a class="footer__link">Cadastrar Conta</a></li>
                        </Link>
                        <Link to="/carrinho">
                            <li><a class="footer__link">Carrinho</a></li>
                        </Link>
                    </ul>
                </div>







                <div class="footer__box">
                    <h3 class="footer__title">REDES SOCIAIS</h3>
                    <a href="https://www.facebook.com/G2esports/" target="_blank" class="footer__social"><i class="bx bxl-facebook-square"></i></a>
                    <a href="https://www.instagram.com/g2esports/" target="_blank" class="footer__social"><i class="bx bxl-instagram-alt"></i></a>
                    <a href="https://twitter.com/G2esports" target="_blank" class="footer__social"><i class="bx bxl-twitter"></i></a>
                </div>






            </div>

            <p class="footer__copy">&#169; 2020 copyright all right reserved</p>

            </footer>
        </div>
    )
}

export default Footer