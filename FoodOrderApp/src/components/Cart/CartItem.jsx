import PropTypes from "prop-types";
import classes from "./CartItem.module.css";

const CartItem = ({ name, price, amount, onRemove, onAdd }) => {
   const displayPrice = `$${price.toFixed(2)}`;

   return (
      <li className={classes["cart-item"]}>
         <div>
            <h2>{name}</h2>
            <div className={classes.summary}>
               <span className={classes.price}>{displayPrice}</span>
               <span className={classes.amount}>x {amount}</span>
            </div>
         </div>
         <div className={classes.actions}>
            <button type="button" onClick={onRemove}>
               −
            </button>
            <button type="button" onClick={onAdd}>
               +
            </button>
         </div>
      </li>
   );
};

export default CartItem;

CartItem.propTypes = {
   name: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired,
   amount: PropTypes.number.isRequired,
   onRemove: PropTypes.func.isRequired,
   onAdd: PropTypes.func.isRequired
};
