const audioImge = document.getElementById("imge");
const Prev = document.getElementById("previous");
const musicName = document.getElementById("music-name");
const Artist = document.getElementById("artist");
const mainAudio = document.getElementById("main-audio");
const musicTracker = document.getElementById("music-tracker");
const current_Time = document.getElementById("current-time");
const maxTime = document.getElementById("max-time");
const Play = document.getElementById("play");
const Pause = document.getElementById("pause");
const next = document.getElementById("next");

var listOfTracks = [
  {
    name: "my heart",
    artist: "jack mally",
    musicSrc: "DADA - Arwass ( Official Audio ).mp3",
  },
  {
    name: "the moon shine",
    artist: "barack obama",
    musicSrc: "DADA - KAMEHAMEHA (Prod. By YAN) [OFFICIAL MUSIC VIDEO].mp3",
  },
  {
    name: "together forever",
    artist: "harry appliencies",
    musicSrc: "DADA - MORAL ( Prod by YAN ).mp3",
  },
];

var indexOfMusic = 0;

mainAudio.addEventListener("ended", theTrackAfter);
setInterval(seekTo, 500);

function progressBar() {
  // var isAcrive = false;
  // musicTracker.style = `linear-gradient(to right, black ${musicTracker.value}% ,#54575a 0%)`;
  musicTracker.style.setProperty("--number", `${musicTracker.value}%`);
}
function whenChabged() {
  mainAudio.currentTime = (mainAudio.duration * musicTracker.value) / 100;
}

function uploadmusic() {
  mainAudio.play();
  Pause.style.display = "flex";
  Play.style.display = "none";
}

function stopmusic() {
  mainAudio.pause();
  Pause.style.display = "none";
  Play.style.display = "flex";
}

function theTrackBefor() {
  indexOfMusic -= 1;
  if (indexOfMusic >= 0) {
    var myMusic = listOfTracks[indexOfMusic];
    mainAudio.src = myMusic.musicSrc;
    musicName.innerHTML = myMusic.name;
    Artist.innerHTML = myMusic.artist;
    uploadmusic();
  } else {
    indexOfMusic = 2;
    var myMusic = listOfTracks[indexOfMusic];
    mainAudio.src = myMusic.musicSrc;
    musicName.innerHTML = myMusic.name;
    Artist.innerHTML = myMusic.artist;
    uploadmusic();
  }
}

function theTrackAfter() {
  indexOfMusic += 1;
  if (indexOfMusic <= 2) {
    var myMusic = listOfTracks[indexOfMusic];
    mainAudio.src = myMusic.musicSrc;
    musicName.innerHTML = myMusic.name;
    Artist.innerHTML = myMusic.artist;
    uploadmusic();
  } else {
    indexOfMusic = 0;
    var myMusic = listOfTracks[indexOfMusic];
    mainAudio.src = myMusic.musicSrc;
    musicName.innerHTML = myMusic.name;
    Artist.innerHTML = myMusic.artist;
    uploadmusic();
  }

  // mainAudio.setAttribute("")
}

function seekTo() {
  musicTracker.value = (100 * mainAudio.currentTime) / mainAudio.duration;
  musicTracker.style.setProperty("--number", `${musicTracker.value}%`);
  var Szero = "";
  var Mzero = "";
  var Sero = "";
  var Mero = "";
  var currentMinute = Math.floor(mainAudio.currentTime / 60);
  var currnentSecond = Math.floor(mainAudio.currentTime - currentMinute * 60);
  var minuteDuration = Math.floor(mainAudio.duration / 60);
  var secondDuration = Math.floor(mainAudio.duration - minuteDuration * 60);
  if (currnentSecond < 10) {
    Szero = "0";
  }
  if (currentMinute < 10) {
    Mzero = "0";
  }
  if (secondDuration < 10) {
    Sero = "0";
  }
  if (minuteDuration < 10) {
    Mero = "0";
  }
  current_Time.innerHTML = ` ${Mzero}${currentMinute} : ${Szero}${currnentSecond}`;
  maxTime.innerHTML = ` ${Mero}${minuteDuration} : ${Sero}${secondDuration}`;
}
