import React, { createContext, useState } from 'react';

const drumSound = [
  {
    type: 'Heater Kit',
    sounds: [
      {
        id: 'Heater-1',
        keyTrigger: 'Q',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
      },
      {
        id: 'Heater-2',
        keyTrigger: 'W',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
      },
      {
        id: 'Heater-3',
        keyTrigger: 'E',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
      },
      {
        id: 'Heater-4',
        keyTrigger: 'A',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
      },
      {
        id: 'Clap',
        keyTrigger: 'S',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
      },
      {
        id: 'Open HH',
        keyTrigger: 'D',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
      },
      {
        id: "Kick n' Hat",
        keyTrigger: 'Z',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
      },
      {
        id: 'Kick',
        keyTrigger: 'X',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
      },
      {
        id: 'Closed HH',
        keyTrigger: 'C',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
      }
    ]
  },
  {
    type: 'Smooth Piano Kit',
    sounds: [
      {
        id: 'Chord-1',
        keyTrigger: 'Q',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
      },
      {
        id: 'Chord-2',
        keyTrigger: 'W',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
      },
      {
        id: 'Chord-3',
        keyTrigger: 'E',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
      },
      {
        id: 'Shaker',
        keyTrigger: 'A',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
      },
      {
        id: 'Open HH',
        keyTrigger: 'S',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
      },
      {
        id: 'Closed HH',
        keyTrigger: 'D',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
      },
      {
        id: 'Punchy Kick',
        keyTrigger: 'Z',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
      },
      {
        id: 'Side Stick',
        keyTrigger: 'X',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
      },
      {
        id: 'Snare',
        keyTrigger: 'C',
        url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
      }
    ]
  }
];

export const DrumMachineContext = createContext();

export const DrumMachineProvider = ({ children }) => {
  const [sounds, setSounds] = useState(drumSound);
  const [soundType, setSoundType] = useState('Heater Kit');

  return (
    <DrumMachineContext.Provider
      value={{ sounds, setSounds, soundType, setSoundType }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
};
