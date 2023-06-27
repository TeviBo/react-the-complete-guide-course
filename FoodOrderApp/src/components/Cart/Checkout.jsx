import PropTypes from "prop-types";
import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = ({ onCancel }) => {
   const [formInputValidity, setFormInputValidity] = useState({
      name: true,
      street: true,
      city: true,
      postalCode: true
   });
   const nameInputRef = useRef();
   const streetInputRef = useRef();
   const postalCodeInputRef = useRef();
   const cityInputRef = useRef();

   const isEmpty = (value) => value.trim() === "";
   const isSixChars = (value) => value.trim().length === 6;

   const confirmHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;

      const enteredNameIsValid = !isEmpty(enteredName);
      const enteredStreetIsValid = !isEmpty(enteredStreet);
      const enteredPostalCodeIsValid = isSixChars(enteredPostalCode);
      const enteredCityIsValid = !isEmpty(enteredCity);

      setFormInputValidity({
         name: enteredNameIsValid,
         street: enteredStreetIsValid,
         postalCode: enteredPostalCodeIsValid,
         city: enteredCityIsValid
      });

      const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalCodeIsValid && enteredCityIsValid;

      if (!formIsValid) {
         return;
      }

      // Submit the cart data
   };

   const nameControlClases = `${classes.control} ${formInputValidity.name ? "" : classes.invalid}`;
   const streetControlClases = `${classes.control} ${formInputValidity.street ? "" : classes.invalid}`;
   const postalCodeControlClases = `${classes.control} ${formInputValidity.postalCode ? "" : classes.invalid}`;
   const cityControlClases = `${classes.control} ${formInputValidity.city ? "" : classes.invalid}`;
   return (
      <form className={classes.form} onSubmit={confirmHandler}>
         <div className={nameControlClases}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" ref={nameInputRef} />
            {!formInputValidity.name && <p>Please enter a valid name.</p>}
         </div>
         <div className={streetControlClases}>
            <label htmlFor="street">Street</label>
            <input type="text" id="street" ref={streetInputRef} />
            {!formInputValidity.street && <p>Please enter a valid street.</p>}
         </div>
         <div className={postalCodeControlClases}>
            <label htmlFor="postal">Postal Code</label>
            <input type="text" id="postal" ref={postalCodeInputRef} />
            {!formInputValidity.postalCode && <p>Please enter a valid postal code.</p>}
         </div>
         <div className={cityControlClases}>
            <label htmlFor="city">City</label>
            <input type="text" id="city" ref={cityInputRef} />
            {!formInputValidity.city && <p>Please enter a valid city.</p>}
         </div>
         <div className={classes.actions}>
            <button type="button" onClick={onCancel}>
               Cancel
            </button>
            <button type="submit" className={classes.submit}>
               Confirm
            </button>
         </div>
      </form>
   );
};

Checkout.propTypes = {
   onCancel: PropTypes.func.isRequired
};

export default Checkout;
