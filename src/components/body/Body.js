import React from "react";
import Buttons from "../buttons/Buttons";
// import Controls from "../controls/Controls";
import "./body.scss";

function Body() {
  const sounds = [
    {
      id: "Q",
      name: "Heater-1",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      id: "W",
      name: "Heater-2",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      id: "E",
      name: "Heater-3",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      id: "A",
      name: "Heater-4",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      id: "S",
      name: "Clap",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      id: "D",
      name: "Open-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      id: "Z",
      name: "Kick-n'-Hat",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      id: "X",
      name: "Kick",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      id: "C",
      name: "Closed-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const soudns2 = [
    {
      id: "Q",
      name: "Chord-1",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
    },
    {
      id: "W",
      name: "Chord-2",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
    },
    {
      id: "E",
      name: "Chord-3",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
    },
    {
      id: "A",
      name: "Shaker",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
    },
    {
      id: "S",
      name: "Open-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
    },
    {
      id: "D",
      name: "Closed-HH",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
    },
    {
      id: "Z",
      name: "Punchy-Kick",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
    },
    {
      id: "X",
      name: "Side-Stick",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
    },
    {
      id: "C",
      name: "Snare",
      audio: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
    },
  ];

  return (
    <div className="body" id="drum-machine">
      <Buttons sounds={sounds} sounds2={soudns2} />
    </div>
  );
}

export default Body;
