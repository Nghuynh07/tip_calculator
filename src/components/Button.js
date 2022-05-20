import React from "react";

const Button = ({ className, tipPercent, dataTip, onChangeTip }) => {
  return (
    <button className={className} data-tip={dataTip} onClick={onChangeTip}>
      {tipPercent}
    </button>
  );
};

export default Button;
