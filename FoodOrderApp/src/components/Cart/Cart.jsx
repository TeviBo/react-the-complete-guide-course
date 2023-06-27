import PropTypes from "prop-types";
import { useContext, useState } from "react";
import CartContext from "../../app/context/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = ({ onClose }) => {
   const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
   const [isCheckout, setIsCheckout] = useState(false);
   const displayTotalAmount = `$${totalAmount.toFixed(2)}`;
   const hasItems = items.length > 0;

   const cartItemRemoveHandler = (id) => {
      removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      addItem({ ...item, amount: 1 });
   };

   const cartItems = (
      <ul className={classes["cartt-items"]}>
         {items.map((item) => (
            <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
         ))}
      </ul>
   );
   const orderHandler = () => {
      setIsCheckout(true);
   };

   const modalActions = (
      <div className={classes.actions}>
         {hasItems && (
            <button type="button" className={classes.button} onClick={orderHandler}>
               Order
            </button>
         )}
         <button onClick={onClose} type="button" className={classes["buton--alt"]}>
            Close
         </button>
      </div>
   );

   return (
      <Modal onClose={onClose}>
         {cartItems}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{displayTotalAmount}</span>
         </div>
         {isCheckout && <Checkout onCancel={onClose} />}
         {!isCheckout && modalActions}
      </Modal>
   );
};

Cart.propTypes = {
   onClose: PropTypes.func.isRequired
};

export default Cart;
