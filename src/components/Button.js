import PropTypes from "prop-types";

function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "steelblue",
  text: "Add",
};

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default Button;
