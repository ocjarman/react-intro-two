import React from "react";
import PropTypes from "prop-types"

const Box = ({ color, setSelectedColor }) => {
  const boxStyles = {
    background: props.color,
    width: "100px",
    height: "100px",
  };
  return <div style={boxStyles}></div>;
};

Box.propTypes = {
  color: PropTypes.string,
  setSelectedColor: PropTypes.func
};

export default Box;
