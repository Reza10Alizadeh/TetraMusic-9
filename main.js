const playPauseBtn = document.querySelector(".play-pause");
const songProgress = document.querySelector(".song-progress");
const songTime = document.querySelector(".song-time");
let wavesurfer;

window.addEventListener("load", () => {
  wavesurfer = WaveSurfer.create({
    container: "#waveform",
    waveColor: "#ddd",
    progressColor: "#a1a6a5",
    url: "music/Faramarz Aslani - Parastoohaye Khaste (online-audio-converter.com).mp3",
    borderWidth: 4,
    responsive: true,
    height: 60,
    barRadius: 4,
  });
  wavesurfer.on("audioprocess", () => {
    songProgress.value = wavesurfer.getCurrentTime();
    updateSongTime();
  });
  songProgress.addEventListener("input", () => {
    wavesurfer.seekTo(songProgress.value / songProgress.max);
  });
});
function playPauseSong() {
  if (wavesurfer.isPlaying()) {
    wavesurfer.pause();
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
  } else {
    wavesurfer.play();
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
  }
}
playPauseBtn.addEventListener("click", playPauseSong);
// dark mode
const darkModeToggle = document.getElementById("dark-mode-toggle");

if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
}

darkModeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  } else {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  }
});
// loading
