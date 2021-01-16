import React from "react";

function Switch(props) {
  //   console.log(props.switch);

  return (
    <div className="button-wrapper">
      <div
        className={props.switch ? "button-on" : "button-off"}
        onClick={() => {
          props.setSwitch(true);
        }}
      >
        ON
      </div>
      <div
        className={props.switch ? "button-off" : "button-on"}
        onClick={() => {
          props.setSwitch(false);
        }}
      >
        OFF
      </div>
    </div>
  );
}

export default Switch;
