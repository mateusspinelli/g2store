import React from 'react'
import {Link} from "react-router-dom";

import './css/Style.css'

import g2germanyjersey20203 from "./img/G2 GERMANY JERSEY 2020 3.png"
import g2germanyjersey20204 from "./img/G2 GERMANY JERSEY 2020 4.png"


import logitechgproxwirelessheadset1 from "./img/LOGITECH G PRO X WIRELESS HEADSET 1.jpg"
import logitechgproxwirelessheadset2 from "./img/LOGITECH G PRO X WIRELESS HEADSET 2.jpg"


import secretlabomega2020g2edition1 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 1.jpg"
import secretlabomega2020g2edition2 from "./img/SECRETLAB OMEGA 2020 G2 EDITION 2.jpg"


import g2samuraitshirtblack1 from "./img/G2 SAMURAI T-SHIRT – BLACK 1.jpg"
import g2samuraitshirtblack2 from "./img/G2 SAMURAI T-SHIRT – BLACK 2.jpg"


import z490aorusultrag21 from "./img/Z490 AORUS ULTRA G2 1.jpg"
import z490aorusultrag22 from "./img/Z490 AORUS ULTRA G2 2.jpg"


import g2prokitjersey20211 from "./img/G2 PRO KIT JERSEY 2021 1.jpg"
import g2prokitjersey20212 from "./img/G2 PRO KIT JERSEY 2021 2.jpg"

import g2proplayerjersey20201 from "./img/G2 PRO PLAYER JERSEY 2020 1.jpg"
import g2proplayerjersey20202 from "./img/G2 PRO PLAYER JERSEY 2020 2.jpg"

import g2proplayerhoodie20201 from "./img/G2 PRO PLAYER HOODIE 2020 1.jpg"
import g2proplayerhoodie20202 from "./img/G2 PRO PLAYER HOODIE 2020 2.jpg"

import g2samurailongsleeveblack1 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 1.jpg"
import g2samurailongsleeveblack2 from "./img/G2 SAMURAI LONG SLEEVE TEE – BLACK 2.jpg"

import g2samuraicodehoodie1 from "./img/G2 SAMURAI CODE HOODIE 1.jpg"
import g2samuraicodehoodie2 from "./img/G2 SAMURAI CODE HOODIE 2.jpg"


function Home() {
    return (
    <main className="l-main">
        
        <section className="home" id="home">
            <div className="home__container bd-grid">
            </div>
        </section>








        <section className="colecao section">
            <div className="colecao__container bd-grid">


                <div className="colecao__box">

                    <Link to="/produtos">
                        <img src={g2germanyjersey20203} alt="" className="colecao__img"></img>
                    </Link>

                    <div className="colecao__data">
                        <h2 className="colecao__title">G2 GERMANY JERSEY 2020</h2>
                        <Link to="/produtos">
                            <a className="colecao__view">Ver Coleção</a>
                        </Link>
                    </div>
                </div>

                <div className="colecao__box">
                    <div className="colecao__data">
                        <h2 className="colecao__title">G2 PRO PLAYER JERSEY 2020</h2>
                        <Link to="/produtos">
                            <a className="colecao__view">Ver Coleção</a>
                        </Link>
                    </div>
                    <Link to="/produtos">
                        <img src={g2germanyjersey20204} alt="" className="colecao__img"></img>
                    </Link>
                </div>


            </div>
        </section>









        <section className="destaque section" id="destaque">
            <h2 className="section__title">Produtos em destaque: </h2>
            <a href="#"></a>

            <div className="destaque__container bd-grid">


                <div className="destaque__product">
                    <Link to="/H0000001">
                        <div className="destaque__box">    
                            <div className="destaque__novidades">NOVIDADE!</div>
                            <img src={logitechgproxwirelessheadset1} alt="" className="destaque__img"></img>
                            <img src={logitechgproxwirelessheadset2} alt="" className="destaque__img2"></img>
                        </div>
                    </Link>

                    <div className="destaque__data">
                        <h3 className="destaque__name">LOGITECH G PRO X WIRELESS</h3>
                        <span className="destaque__price">R$ 690,00</span>
                    </div>
                </div>





           
                <div className="destaque__product">
                    <Link to="/H0000002">
                        <div className="destaque__box">    
                            <div className="destaque__novidades">NOVIDADE!</div>
                            <img src={secretlabomega2020g2edition1} alt="" className="destaque__img"></img>
                            <img src={secretlabomega2020g2edition2} alt="" className="destaque__img2"></img>
                        </div>
                    </Link>
                    
                    <div className="destaque__data">
                        <h3 className="destaque__name">SECRETLAB OMEGA G2 EDITION</h3>
                        <span className="destaque__price">R$ 1700,00</span>
                    </div>
                </div>
            






            
                <div className="destaque__product">
                    <Link to="/S0000001">
                        <div className="destaque__box">    
                            <div className="destaque__novidades">NOVIDADE!</div>
                            <img src={g2samuraitshirtblack1} alt="" className="destaque__img"></img>
                            <img src={g2samuraitshirtblack2} alt="" className="destaque__img2"></img>
                        </div>
                    </Link>

                    <div className="destaque__data">
                        <h3 className="destaque__name">G2 SAMURAI T-Shirt</h3>
                        <span className="destaque__price">R$ 30,00</span>
                    </div>
                </div>





                
                <div className="destaque__product">
                    <Link to="/H0000004">
                        <div className="destaque__box">    
                            <div className="destaque__novidades">NOVIDADE!</div>
                            <img src={z490aorusultrag21} alt="" className="destaque__img"></img>
                            <img src={z490aorusultrag22} alt="" className="destaque__img2"></img>
                        </div>
                    </Link>                   
                    <div className="destaque__data">
                        <h3 className="destaque__name">Z490 AORUS ULTRA G2</h3>
                        <span className="destaque__price">R$ 450,00</span>
                    </div>
                </div>

                





            </div>
        </section>













        <section className="oferta section">
            <div className="oferta__bg">
                <div className="oferta__data">
                    <h2 className="oferta_title">SAMURAI COLLECTION G2</h2>
                    <p className="oferta__description">Ofertas Especiais!</p>
                    <Link to="/produtos">
                        <a className="button">COMPRE AGORA</a>
                    </Link>
                </div>
            </div>
        </section>













        <section className="novidades section" id="novidades">
            <h2 className="section__title">NOSSOS PRODUTOS</h2>

            
            <Link to="/produtos">
                <a className="section__all">Ver Todos</a>
            </Link>

            <div className="novidades__container bd-grid">



                <Link to="P0000002">
                    <div className="novidades__box">
                        <img src={g2prokitjersey20211} alt="" className="novidades__img"></img>
                        <img src={g2prokitjersey20212} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>



                <Link to="P0000007">
                    <div className="novidades__box">
                        <img src={g2proplayerjersey20201} alt="" className="novidades__img"></img>
                        <img src={g2proplayerjersey20202} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a href="#" className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>



                <Link to="P0000008">
                    <div className="novidades__box">
                        <img src={g2proplayerhoodie20201} alt="" className="novidades__img"></img>
                        <img src={g2proplayerhoodie20202} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a href="#" className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>


                <Link to="S0000001">
                    <div className="novidades__box">
                        <img src={g2samuraitshirtblack1} alt="" className="novidades__img"></img>
                        <img src={g2samuraitshirtblack2} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>



                <Link to="S0000002">
                    <div className="novidades__box">
                        <img src={g2samurailongsleeveblack1} alt="" className="novidades__img"></img>
                        <img src={g2samurailongsleeveblack2} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a href="#" className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>


                <Link to="S0000004">
                    <div className="novidades__box">
                        <img src={g2samuraicodehoodie1} alt="" className="novidades__img"></img>
                        <img src={g2samuraicodehoodie2} alt="" className="novidades__img2"></img>

                        <div className="novidades__link">
                            <a href="#" className="button">VER PRODUTO</a>
                        </div>
                    </div>
                </Link>


            </div>
        </section>























        <section className="patrocinadores section">
            <div className="patrocinadores__container bd-grid">

                <div className="patrocinadores__logo">
                    <a href="https://www.logitech.com/pt-br" target="_blank"><img src="https://logodownload.org/wp-content/uploads/2018/03/logitech-logo-2.png" alt=""></img></a>
                </div>

                <div className="patrocinadores__logo">
                    <a href="https://www.aorus.com/" target="_blank"><img src="https://logodownload.org/wp-content/uploads/2020/10/aorus-logo-2.png" alt=""></img></a>
                </div>

                <div className="patrocinadores__logo">
                    <a href="http://www.aoc.com.br/" target="_blank"><img src="https://gamepress.com.br/wp-content/uploads/2019/05/1200px-Aoc_international_logo.svg.png" alt=""></img></a>
                </div>

                <div className="patrocinadores__logo">
                    <a href="https://secretlab.eu/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Transparent_SecretLab_Logo%28black_font%29%281%29.png" alt=""></img></a>
                </div>

            </div>
        </section>

    </main>
    )
}

export default Home
