import { useState } from "react";
import "./Rate.css";

export default function Rate(props) {
  const buttons = [1, 2, 3, 4, 5];

  return (
    <div className="container">
      <div className="img-div">
        <img src="./assets/star.svg" />
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="descrip">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="button-div">
        {buttons.map((items) => {
          return (
            <button
              onClick={() => {
                props.setValue(items);
              }}
              className={items === props.value ? "active" : ""}
            >
              {items}
            </button>
          );
        })}
      </div>
      <button
        className="submit"
        onClick={() => {
          if (props.value) {
            props.setSubmit(true);
          }
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}
