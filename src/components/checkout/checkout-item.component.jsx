import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const IncrementQuantityHandler = (event) => {
    event.preventDefault();
    addItemToCart(cartItem);
  };

  const DecrementQuantityHandler = () => removeItemFromCart(cartItem);

  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>

      <div className='quantity'>
        <span className='arrow' onClick={IncrementQuantityHandler}>
          +
        </span>
        <span className='value'>{quantity}</span>
        <span className='arrow' onClick={DecrementQuantityHandler}>
          -
        </span>
      </div>

      <span className='price'>{price}</span>

      <button className='remove-button'> X </button>
    </div>
  );
};

export default CheckoutItem;
