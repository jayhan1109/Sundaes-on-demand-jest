import React from "react";
import Options from "./Options";

const OptionEntry = () => {
  return (
    <div>
      <Options optionType={"scoops"} />
      <Options optionType={"toppings"} />
    </div>
  );
};

export default OptionEntry;
