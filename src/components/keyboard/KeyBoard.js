import React from "react";
import "./keyboard.scss";

function KeyBoard(props) {
  const ref = React.useRef();
  const ref2 = React.useRef();

  function clickHandler() {
    ref.current.play();
    ref2.current.classList.add("active");
  }

  React.useEffect(() => {
    ref.current.addEventListener("ended", () => {
      ref2.current.classList.remove("active");
    });
    ref2.current.addEventListener("click", () => {
      const display = document.getElementById("display");
      display.innerText = ref2.current.attributes[1].value;
    });
  });

  return (
    <div>
      <button
        ref={ref2}
        className="drum-pad"
        id={props.name}
        onClick={clickHandler}
      >
        {props.sound}
        <audio
          ref={ref}
          className="clip"
          src={props.audio}
          id={props.sound}
        ></audio>
      </button>
    </div>
  );
}

document.addEventListener("keydown", (e) => {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  const display = document.getElementById("display");
  const parent = audio.parentNode;

  if (audio) {
    audio.play();
    parent.classList.add("active");
    display.innerText = parent.attributes[1].value;
  }
});

export default KeyBoard;
