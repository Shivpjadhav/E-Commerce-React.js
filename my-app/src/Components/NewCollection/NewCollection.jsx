import React from "react";
import "./NewCollection.css";
import new_collection from '../Assets/NewCollection'; // assuming this is an array of objects

const NewCollection = () => {
  return (
    <div className="new-collection">
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collection-items">
        {new_collection.map((item) => (
          <div className="collection-item" key={item.id}>
            <img src={item.image} className="imgs" alt={item.name} />
            <h3>{item.name}</h3>
            <p>
              ${item.new_price}{" "}
              <span style={{ textDecoration: "line-through", color: "#999" }}>
                ${item.old_price}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
