import React from "react";
import PropTypes from "prop-types";

const Title = (size, onClick, text, ...props) => {
  console.log(...props);
  return (
    <div {...props} onClick={onClick} className={`custom-title ${size}`}>
      {text}
    </div>
  );
};

Title.defaulProps = {
  size: "medium",
  onclick: undefined,
  text: "Başlık 1",
};

export default Title;
