import PropTypes from "prop-types";
import { forwardRef } from "react";
import classes from "./Input.module.css";

const Input = forwardRef(({ label, input }, ref) => (
   <div className={classes.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input} />
   </div>
));

export default Input;

Input.propTypes = {
   label: PropTypes.string.isRequired,
   input: PropTypes.object.isRequired
};
