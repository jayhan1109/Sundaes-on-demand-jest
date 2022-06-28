import React, { useEffect, useState } from "react";
import axios from "axios";
import ScoopOption from "./ScoopOption.js";
import Row from "react-bootstrap/Row";

const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3030/${optionType}`);
        setItems(data);
      } catch (err) {
        // TODO: handle error response
      }
    };

    fetchOptions();
  }, [optionType]);

  // TODO: replace 'null' with ToppingOption when available
  const ItemComponent = optionType === "scoops" ? ScoopOption : null;

  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));

  return <Row>{optionItems}</Row>;
};

export default Options;
