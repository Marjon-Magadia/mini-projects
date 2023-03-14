const sounds = [
    "fast-punch",
    "retro-game-over",
    "small-sweep",
    "toy-whistle"
];

var data = "";
sounds.forEach(sound => {
    data += `<audio id="${sound}" src="audio/${sound}.wav"></audio>`

    const btn = document.createElement('button');
    btn.classList.add('btn')
    btn.innerText = sound;
    btn.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
});
document.getElementById('audio').innerHTML = data;

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;
    })
}