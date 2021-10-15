import React, {useState, useEffect} from 'react';
import { db } from "./firebase";
import { useStateValue } from './StateProvider';

import Pedido from './Pedido';

import './css/Pedidos.css';

function Pedidos() {
    const [{carrinho, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);


    useEffect(() => {
        if(user){

        
            db
             .collection('users')
             .doc(user?.uid)
             .collection('orders')
             .orderBy('created', 'desc')
             .onSnapshot(snapshot => (
                 setOrders(snapshot.docs.map(doc => ({
                     id: doc.id,
                     data: doc.data()
                 })))
             ))


        }else{
            setOrders([])
        }
    }, [user])


    return (
        <div className="pedidos">
            <h1>Seus Pedidos</h1>

            <div className="pedidos__pedido">
                {orders?.map(order => (
                    <Pedido order={order} />
                ))}
            </div>
        </div>
    )
}

export default Pedidos
