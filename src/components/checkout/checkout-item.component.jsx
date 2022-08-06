import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart } = useContext(CartContext);

  const quantityHandler = (event) => {
    event.preventDefault();
    addItemToCart(cartItem);
  };

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>

      <div className='quantity'>
        <span className='arrow' onClick={quantityHandler}>
          +
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow'>-</span>
      </div>

      <span className='price'>{price}</span>

      <button className='remove-button'> X </button>
    </div>
  );
};

export default CheckoutItem;
