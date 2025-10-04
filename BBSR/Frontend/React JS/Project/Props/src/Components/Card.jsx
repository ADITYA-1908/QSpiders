import React from "react";
import CardData from "./CardData";
import CardProps from "./CardProps";

const Card = () => {
  return (
    <div className="container mt-5">
      {CardData.map((category, index) => (
        <div key={index}>
          <h2 className="mb-4">{category.title}</h2>
          <div className="row">
            {category.items.map((item, idx) => (
              <CardProps
                key={idx}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
