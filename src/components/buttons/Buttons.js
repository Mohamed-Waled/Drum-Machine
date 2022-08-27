import React from "react";
import KeyBoard from "../keyboard/KeyBoard";
import "./buttons.scss";

function Buttons(props) {
  let [button, setButton] = React.useState(true);
  let prop = props.sounds;

  function clickHandler() {
    setButton((prevState) => !prevState);
  }
  if (button === true) {
    prop = props.sounds;
  } else {
    prop = props.sounds2;
  }

  return (
    <>
      <div className="keyBoard">
        {prop.map((sound) => (
          <KeyBoard
            key={sound.id}
            sound={sound.id}
            name={sound.name}
            audio={sound.audio}
          />
        ))}
      </div>
      <div className="container">
        <button className="bank" onClick={clickHandler}>
          Bank
        </button>
        <div id="display">Click a Button</div>
      </div>
    </>
  );
}

export default Buttons;
