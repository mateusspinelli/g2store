import React from 'react'
import { useStateValue } from "./StateProvider"
import {Link} from "react-router-dom";

import './css/Style.css'
import './css/Produto.css'

function Produto({id, titulo, preco, img, img2}) {

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


    return (
        <div className="produto">


            <div className="produto__box">
                <Link to={id}>
                    <img className="produto__img" src={img} alt=""></img>
                    <img className="produto__img2" src={img2} alt=""></img>
                </Link>
                    <div className="produto__link">
                        <button className="produto__button" onClick={addAoCarrinho}>Adicionar ao carrinho</button>
                    </div>

            </div>


            <div className="produto__info">

                <p className="produto__titulo">{titulo}</p>

                <p className="produto__preco">
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>
            </div>
        </div>
    )
}

export default Produto
