import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom';

import "./css/Subtotal.css"

function Subtotal() {
    const history = useHistory();
    const [{carrinho}, dispatch] = useStateValue();

    return (
        <div className="subtotal">

            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className="subtotal__total">
                            Total ({carrinho.length} items): <strong>{value}</strong>
                        </p>
                    </>
                )}






                decimalScale={2}
                value={getBasketTotal(carrinho)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button onClick={e => history.push("/pagamento")}>Continue para o pagamento</button>
        </div>
    );
}

export default Subtotal
