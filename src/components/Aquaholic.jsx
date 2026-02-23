import React, { useState } from "react";
import AquaData from "./AquaData";
import "./Aqua.css";

function Aquaholic() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return (
      <div className="container">
        <h1 className="title">{selected.title}</h1>
        <img src={selected.image} alt={selected.title} className="detail-img" />
        <p><strong>Color:</strong> {selected.color}</p>
        <p>{selected.info}</p>
        <button onClick={() => setSelected(null)} className="btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">🚢 Aqua Info</h1>

      <div className="image-row">
        {AquaData.map((item) => (
          <div key={item.id} className="card">
            <img
              src={item.image}
              alt={item.title}
              onClick={() => setSelected(item)}
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aquaholic;