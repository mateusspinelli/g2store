import React from 'react'
import { useStateValue } from "./StateProvider"

import './css/ProdutoCarrinho.css'

function ProdutoCarrinho({id, titulo, img, preco, hideButton}) {
    const [{carrinho}, dispatch] = useStateValue();

    const removerDoCarrinho = () => {
        dispatch({
            type: "REMOVER_DO_CARRINHO",
            id: id,
        })
    }


    return (
        <div className="produtoCarrinho">
            <img className="produtoCarrinho__img" src={img} alt=""></img>

            <div className="produtoCarrinho__info">

                <p className="produtoCarrinho__titulo">{titulo}</p>

                <p className="produtoCarrinho__preco">
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>
    
                {!hideButton && (
                <button onClick={removerDoCarrinho}>Remover do carrinho</button>
                )}

            </div>
        </div>
    )
}

export default ProdutoCarrinho
