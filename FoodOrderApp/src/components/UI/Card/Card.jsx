import PropTypes from "prop-types";
import classes from "./Card.module.css";

const Card = ({ children, className }) => <div className={`${classes.card} ${className}`}>{children}</div>;

export default Card;

Card.defaultProps = {
   className: ""
};

Card.propTypes = {
   children: PropTypes.object.isRequired,
   className: PropTypes.string
};
