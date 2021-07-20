document.body.addEventListener("keyup", (e) => {
  playSound(e.code.toLowerCase());
});
const keys = document.querySelector(".keys");

keys.addEventListener("click", (e) => {
  console.log(e.target.dataset.key);
  if (e.target.dataset.key) {
    playSound(e.target.dataset.key);
  }
});

document.querySelector(".composer button").addEventListener("click", (e) => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();

    toggleActive(keyElement);
  }

  if (keyElement) {
    toggleActive(keyElement);
  }
}

function toggleActive(keyElement) {
  keyElement.classList.add("active");

  setTimeout(() => {
    keyElement.classList.remove("active");
  }, 300);
}
function playComposition(songArray) {
  let wait = 0;
  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);
    wait += 250;
  }
}
