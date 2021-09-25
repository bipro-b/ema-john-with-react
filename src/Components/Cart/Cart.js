import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart } = props;
    /*   const total = cart.reduce((previous, product) => previous + product.price, 0); */
    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total += product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }


    const shipping = 15;
    const tax = (total + shipping) * 0.1;
    const grandTotal = total + shipping + tax;
    return (
        <div className="internal-cart">
            <h2>Total Order summary</h2>
            <h3>Items ordered: {totalQuantity} </h3>
            <h3>Total Price: ${total.toFixed(2)} </h3>
            <p>Shipping: ${shipping}</p>
            <p>tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;