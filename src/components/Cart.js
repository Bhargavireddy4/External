// Cart.js
import React from 'react';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} className="cart-item">
            
            <p><img src={item.image} style={{width:'10%'}}/></p>
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
