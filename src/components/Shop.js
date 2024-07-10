// Shop.js
import React from 'react';
import './Shop.css';

const products = [
  { id: 1, category: 'daycare', name: 'Moisturiser', price: 579, image: 'https://m.media-amazon.com/images/I/518I10DUtjL._AC_UF1000,1000_QL80_.jpg' },
  { id: 2, category: 'daycare', name: 'Toner', price: 875, image: 'https://i.pinimg.com/originals/66/f5/f5/66f5f5783affc5f3948fc2e7a155c413.jpg'},
  { id: 3, category: 'nightcare', name: 'NightCream', price: 2000, image: 'https://images.squarespace-cdn.com/content/v1/5c68192165a70771b7c1dc78/1682606779118-9FTEL5K8KRZBJI93SJCY/2304_Sebum%2BControl%2BMoisturizer%2B2.jpg?format=1000w'},
  { id: 4, category: 'sunprotection', name: 'Sunscreen', price: 2500, image: 'https://manscapeaesthetics.com.au/cdn/shop/files/hydrating-moisturiser-3.jpg?v=1688622600'}];

const Shop = ({ addToCart }) => {
  return (
    <div className="shop-container">
      <h1 className="shop-header">Shop</h1>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
