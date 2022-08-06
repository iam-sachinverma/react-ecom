import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const IncrementQuantityHandler = () => addItemToCart(cartItem);

  const DecrementQuantityHandler = () => removeItemFromCart(cartItem);

  const clearItemHandler = () => clearItemFromCart(cartItem);

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

      <div className='remove-button' onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
