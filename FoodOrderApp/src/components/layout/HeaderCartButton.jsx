import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../app/context/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = ({ onClick }) => {
   const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const { items } = useContext(CartContext);
   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`;

   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      setBtnIsHighlighted(true);

      const timer = setTimeout(() => {
         setBtnIsHighlighted(false);
      }, 300);

      return () => {
         clearTimeout(timer);
      };
   }, [items]);

   const cartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);
   return (
      <button type="button" className={btnClasses} onClick={onClick}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>Your Cart</span>
         <span className={classes.badge}>{cartItems}</span>
      </button>
   );
};
export default HeaderCartButton;

HeaderCartButton.propTypes = {
   onClick: PropTypes.func.isRequired
};
