// explore.js

window.addEventListener("DOMContentLoaded", init);

const synth = window.speechSynthesis;

let voices = [];

function init() {
    setTimeout(() => {
      voices = synth.getVoices();
  
      for (let i = 0; i < voices.length; i++) {
          const option = document.createElement("option");
          option.textContent = `${voices[i].name} (${voices[i].lang})`;
          option.setAttribute("data-lang", voices[i].lang);
          option.setAttribute("data-name", voices[i].name);
          document.getElementById('voice-select').appendChild(option);
      }
    }, 100);

    document.querySelector("button").addEventListener("click", () => {
        const utterThis = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
        const selectedOption = document.getElementById("voice-select").selectedOptions[0];

        for (let voice in voices) {
            if (voice.name === selectedOption.getAttribute("data-name")) {
                utterThis.voice = voice;
            }
        }

        synth.speak(utterThis);
    });
}
