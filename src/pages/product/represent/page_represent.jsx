import React, { useState } from "react";
// import scale from "../../../../data/scale/allscale.json";
// import { Scalenav } from ".././scalenav";
// import { Product } from ".././product";
import ".././product.scss";
export const PageRepresent = (props) => {
  const scaless = [props];
  //   console.log(scaless[0].state);
  const scales = scaless[0].state;
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [state, setState] = useState([]);
  const changecontent = (scale) => {
    setState([scale]);
    setbuttonPopup(!buttonPopup);
  };
  return (
    <div className="content">
      <div className="container">
        {scales.map((scale) => (
          <div className="card" key={scale.id}>
            <div className="cardimg">
              <img src={scale.img} alt="" />
            </div>
            <div className="cardinfo">
              <em>Name: {scale.name}</em>
              <em>{scale.id}</em>
              <h3>Price: contact</h3>
              <button onClick={() => changecontent(scale)}>review</button>
            </div>
          </div>
        ))}
      </div>
      {buttonPopup && (
        <div className="popup">
          {state.map((scalez) => {
            return (
              <div className="popup-inner">
                <button className="close-btn" onClick={changecontent}>
                  x
                </button>
                <div className="popupinfo">
                  <img src={scalez.img} alt="" />
                  <div className="detailinfo">
                    <h2>{scalez.name}</h2>
                    <div>{scalez.id}</div>
                    <h3>Price: contact</h3>
                    <p>Chi tiet</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
