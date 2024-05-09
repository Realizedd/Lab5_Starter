// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
    const jsConfetti = new JSConfetti();
    
    document.getElementById('horn-select').addEventListener('change', (event) => {
        const name = `${event.target.value}`;
        document.querySelector('img').src = `assets/images/${name}.svg`;
        document.querySelector('audio').src =`assets/audio/${name}.mp3`;
        document.querySelector('audio').load();
    });

    document.querySelector('button').addEventListener('click', (event) => {
        event.preventDefault();
        document.querySelector('audio').play();

        if (document.getElementById('horn-select').value == 'party-horn') {
            jsConfetti.addConfetti();
        }
    });

    document.getElementById('volume').addEventListener('input', (event) => {
        const volume = event.target.value;
        const img = document.getElementsByTagName('img')[1];
        document.querySelector('audio').volume = volume / 100;

        if (volume == 0) {
            img.src = 'assets/icons/volume-level-0.svg';
        } else if (volume < 34) {
            img.src = 'assets/icons/volume-level-1.svg';
        } else if (volume < 67) {
            img.src = 'assets/icons/volume-level-2.svg';
        } else {
            img.src = 'assets/icons/volume-level-3.svg';
        }
    });
}