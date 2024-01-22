import './App.css'

const audioClips = [
  {
    "name": "Heater 1",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    "keyTrigger": "Q",
  },
  {

    "name": "Heater 2",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    "keyTrigger": "W",
  },
  {
    "name": "Heater 3",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    "keyTrigger": "E",
  },
  {
    "name": "Heater 4",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    "keyTrigger": "A",
  },
  {
    "name": "Clap",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    "keyTrigger": "S",
  },
  {
    "name": "Open HH",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    "keyTrigger": "D",
  },
  {
    "name": "Kick n' Hat",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    "keyTrigger": "Z",
  },
  {
    "name": "Kick",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    "keyTrigger": "X",
  },
  {
    "name": "Closed HH",
    "src": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    "keyTrigger": "C",
  }
]

interface AudioClip {
  name: string;
  src: string;
  keyTrigger: string;
}

function App() {
  return (
    <>
      <div id="drum-machine" >
        <h2>Drum Machine</h2>
        <div className="drum-pads" >
          {audioClips.map((audioClip) => (
            <Drum key={`key-${audioClip.keyTrigger}`} audioClip={audioClip} />
          ))}
        </div>
        <div id="display">Click a drum pad to start</div>
      </div>
    </>
  )
}

interface DrumProps {
  audioClip: AudioClip;
}

function Drum({ audioClip }: DrumProps) {
  return (
    <>
      <button className='drum-pad' id={`drum-pad-${audioClip.keyTrigger}`} onClick={() => playOnClick(audioClip)} onKeyDown={(e) => playOnKeyDown(e)}>
        <audio src={audioClip.src} className='clip' id={audioClip.keyTrigger}></audio>
        {audioClip.keyTrigger}
      </button>
    </>
  )
}

const playOnClick = (audioClip: AudioClip) => {
  (document.getElementById(audioClip.keyTrigger) as HTMLAudioElement).play().catch(console.error);
  document.getElementById("display")!.innerText = audioClip.name;
};

const playOnKeyDown = (e: React.KeyboardEvent) => {
  const localClip = audioClips.find((audioClip) => audioClip.keyTrigger === e.key.toUpperCase());

  if (localClip) {
    (document.getElementById(localClip.keyTrigger) as HTMLAudioElement).play().catch(console.error);
    document.getElementById("display")!.innerText = localClip.name;
    document.getElementById(`drum-pad-${localClip.keyTrigger}`)?.focus();
  }
};

export default App
