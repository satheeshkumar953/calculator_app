import React from "react";
import { Textfit } from "react-textfit";
import PropTypes from "prop-types";
import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <Textfit mode="single" max={40} className="screen">
      {value || "0"}
    </Textfit>
  );
};

Screen.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Screen.defaultProps = {
  value: "0",
};

export default Screen;
