import PropTypes from "prop-types";
import { useContext } from "react";
import CartContext from "../../../app/context/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = ({ id, name, description, price }) => {
   const displayPrice = `$${price.toFixed(2)}`;

   const { addItem } = useContext(CartContext);

   const addToCartHandler = (amount) => {
      addItem({
         id,
         name,
         amount,
         price
      });
   };

   return (
      <li className={classes.meal}>
         <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{displayPrice}</div>
         </div>
         <div>
            <MealItemForm id={id} onAddToCart={addToCartHandler} />
         </div>
      </li>
   );
};

MealItem.propTypes = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired,
   price: PropTypes.number.isRequired
};

export default MealItem;
