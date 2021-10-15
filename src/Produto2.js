import React from 'react'
import { useStateValue } from "./StateProvider"
import {Link} from "react-router-dom";

import './css/Produto2.css'

function Produto2({id, titulo, preco, cor, descricao, tecido, img, img2, img3, img4}) {

    const [{carrinho}, dispatch] = useStateValue();
    
    const addAoCarrinho = () => {
        dispatch({
            type: 'ADD_AO_CARRINHO',
            item: {
                id: id,
                titulo: titulo,
                preco: preco,
                img: img,
            }
        })
    };









    
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
        imgItem.addEventListener('click', (event) => {
            event.preventDefault();
            imgId = imgItem.dataset.id;
            slideImage();
        });
    });

    function slideImage(){
        const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

        document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);


    return (
    <div>   
            <div className="caminho">


                <Link to="/">
                    <h2 className="caminho__h2 caminho__link">Home</h2>
                </Link>

                
                <h2 className="caminho__h2">/</h2>


                <Link to="/produtos">
                    <h2 className="caminho__h2 caminho__link">Produtos</h2>
                </Link>

                <h2 className="caminho__h2">/</h2>

                <h2 className="caminho__h2">{id}</h2>
            </div>

            


        <div className = "card__wrapper">
            

            <div className = "card">
            
            
                <div className = "produto2__imgs">


                    <div className = "img-display">


                        <div className = "img-showcase">
                            <img src = {img} alt = ""></img>
                            <img src = {img2} alt = ""></img>
                            <img src = {img3} alt = ""></img>
                            <img src = {img4} alt = ""></img>
                        </div>


                    </div>


                    <div className = "img-select">


                        <div className = "img-item">
                            <a href = "" data-id = "1">
                                <img src = {img} alt = ""></img>
                            </a>
                        </div>


                        <div className = "img-item">
                            <a href = "" data-id = "2">
                                <img src = {img2} alt = ""></img>
                            </a>
                        </div>

                        <div className = "img-item">
                            <a href = "" data-id = "3">
                                <img src = {img3} alt = ""></img>
                            </a>
                        </div>

                        <div className = "img-item">
                            <a href = "" data-id = "4">
                                <img src = {img4} alt = ""></img>
                            </a>
                        </div>


                    </div>


                    </div>


                    <div className = "produto2__conteudo">

                        <h2 className = "produto2__titulo">{titulo}</h2>
                            

                        <div className = "produto2__preco">
                            <span>R${preco}</span>
                        </div>

                        <hr className="produto2__linha"></hr>

                        <div className = "produto2__detalhe">
                            <h2>Cor: </h2>
                            <a className="button2">{cor}</a>

                            <br></br>
                            <br></br>

                            <h2>Tamanho: </h2>
                            
                            <a className="button2">P</a>
                            <a className="button2">M</a>
                            <a className="button2">G</a>
                            <a className="button2">GG</a>
                            <a className="button2">XGG</a>


                            <br></br>
                            <br></br>
                            <hr className="produto2__linha"></hr>


                            <button onClick={addAoCarrinho} className = "button3"> Adicionar ao Carrinho </button>

                            <br></br>
                            <br></br>
                            <hr className="produto2__linha"></hr>
                            <p>{descricao}</p>
                            <br></br>
                            <p><strong>Tecido:</strong> {tecido}</p>
                            <p><strong>Entrega:</strong> Pode levar entre 4 - 6 semanas</p>



                            <br></br>
                            <hr className="produto2__linha"></hr>



                            <div class = "social__links">
                                <a href = "#">
                                <i class = "fab fa-facebook-f"></i>
                                </a>
                                <a href = "#">
                                <i class = "fab fa-twitter"></i>
                                </a>
                                <a href = "#">
                                <i class = "fab fa-instagram"></i>
                                </a>
                                <a href = "#">
                                <i class = "fab fa-whatsapp"></i>
                                </a>
                                <a href = "#">
                                <i class = "fab fa-pinterest"></i>
                                </a>
                            </div>

                    </div>







                </div>
            </div>
        </div>
    </div> 
    )
}

export default Produto2
