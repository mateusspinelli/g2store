import { Link, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useStateValue } from "./StateProvider"
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./firebase";

import ProdutoCarrinho from './ProdutoCarrinho';

import './css/Pagamento.css'



function Pagamento() {
    const [{carrinho, user}, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);




    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(carrinho) * 100}`
            });
            setClientSecret(response.data.clientSecret);
        }

        getClientSecret();
    }, [carrinho])







    const handleSubmit = async event => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                 carrinho: carrinho,
                 amount: paymentIntent.amount,
                 created: paymentIntent.created
             })

            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/pedidos')
        })
    }





    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }





    return (
        <div className="pagamento">
            <div className="pagamento__container">

                <h1>
                    Carrinho (<Link to="/carrinho" className="pagamento__item">{carrinho?.length} Itens </Link>)
                </h1>



                <hr className="pagamento__hr"></hr>




                <div className="pagamento__section">


                    <h3 className="pagamento__titulo">Endereço</h3>


                    <form>
                        <input type="email" placeholder="Email" value={user?.email}></input>
                        <input type="text" placeholder="CEP"></input>
                        <input type="text" placeholder="Rua"></input>
                        <input type="text" placeholder="Bairro"></input>
                    </form>
                <br></br>


                </div>


                <hr></hr>

                <div className="pagamento__section">


                    <h3 className="pagamento__titulo">Itens: </h3>


                    <div className="pagamento__itens">
                        {carrinho.map(item => (
                            <ProdutoCarrinho
                            id = {item.id}
                            titulo = {item.titulo}
                            img = {item.img}
                            preco = {item.preco}
                            avaliacao = {item.avaliacao}
                            />
                        ))}
                    </div>
                    
                </div>


                <hr></hr>


                <div className="pagamento__section">
                    

                    <div className="pagamento__detalhes">


                    <h3 className="pagamento__titulo">Pagamento</h3>
                    
                    
                            <form onSubmit={handleSubmit}>
                            <br></br>
                            {error && <div>{error}</div>}
                                <CardElement
                                    onChange={handleChange}
                                    options={{
                                        style: {
                                        base: {
                                            fontSize: '20px',
                                            color: '#424770',
                                            '::placeholder': {
                                            color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                        },
                                    }}
                                    />

                                   
                    
                                <hr></hr>
                                <br></br>

                                    <CurrencyFormat
                                        renderText={(value) => (
                                                <h3 className="pagamento__titulo">
                                                    Total: {value}
                                                </h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(carrinho)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"R$"}
                                    />

                                    
                                <br></br>

                                    <button className="button3"disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processando</p> : "Compre Agora"}</span>
                                    </button>





                            </form>
                    </div>

                </div>
                

            </div>
        </div>
    )
}

export default Pagamento
