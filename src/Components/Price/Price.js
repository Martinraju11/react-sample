import React, { useContext } from "react";
import "./Price.css";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
export const Price = () => {
  const { state, dispatch } = useContext(Context);
  let n = useNavigate();
  const goToDetails = (val) => {
    dispatch({ type: "detailsUpdate", payload: val });
    window.scrollTo(0, 0);
    n("/detail");
  };
  return (
    <div>
      <div className="pri-container">
        <h2>Find Cars matching your budget</h2>
        <div className="pri-row">
          {state.filterPrice.map((v, i) => {
            return (
              <div className="pri-col">
                <div className="pri-card">
                  <div className="pri-img">
                    <img src={v.source} alt="car" />
                  </div>
                  <div className="pri-details">
                    <p>{v.name}</p>
                    <h3>{v.price}</h3>
                    <p>Emi @ {v.emi} for 5 years</p>
                  </div>
                  <div className="pri-btn">
                    <button onClick={() => goToDetails(v)}>View Details</button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="pri-col"></div>
        </div>
      </div>
    </div>
  );
};
