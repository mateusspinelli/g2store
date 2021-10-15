import React from 'react'
import { useStateValue } from "./StateProvider";


import './css/Carrinho.css'

import ProdutoCarrinho from "./ProdutoCarrinho";
import Subtotal from "./Subtotal";

function Carrinho() {



    const [{carrinho, user}, dispatch] = useStateValue();



    
    return (
        <div>
            <div className="carrinho">
                <div className="carrinho__1">
                    {carrinho?.length === 0 ? (
                        <div>
                            <h2 className="carrinho__titulo">Seu Carrinho de Compras está vazio</h2>
                            <p>Compre ofertas do dia</p>
                        </div>
                    ) : (
                        <div>
                            <h3 className="carrinho__titulo">Olá, {!user ? "faça login para continuar" : user.email}</h3>
                            <h2 className="carrinho__titulo">Seu Carrinho de Compras</h2>
                            <hr></hr>
                            {carrinho?.map((item) => (
                                <ProdutoCarrinho
                                    id = {item.id}
                                    titulo = {item.titulo}
                                    img = {item.img}
                                    preco = {item.preco}
                                />
                            ))}
                            
                        </div>
                    )}
                </div>
            </div>


            {carrinho.length > 0 && (
                <div className="carrinho__2">
                    <Subtotal />
                </div>
            )}

            
        </div>
    )
}

export default Carrinho
