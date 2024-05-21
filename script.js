let photo = document.getElementById("photo").innerHTML;
let titling = document.getElementById("titling").innerHTML;


window.x1 = {
    audio: new Audio("Doomsday.mp3"),
    title: "Doomsday",
    author: "MF DOOM",
    cover: "OperationDoomsday"
};

window.x2 = {
    audio: new Audio("Accordion.mp3"),
    title: "Accordion",
    author: "Madvillain",
    cover: "Madvillainy"
};

window.x3 = {
    audio: new Audio("Fancy_Clown.mp3"),
    title: "Fancy Clown",
    author: "Madvillain",
    cover: "Madvillainy"
};

window.x4 = {
    audio: new Audio("victory lap.mp3"),
    title: "Victory Lap",
    author: "Diz",
    cover: "Diz"
};

window.x5 = {
    audio: new Audio("America's_Most_Blunted.mp3"),
    title: "America's Most Blunted",
    author: "Madvillain",
    cover: "Madvillainy"
};
window.x6 = {
    audio: new Audio("HAZARD DUTY PAY!.mp3"),
    title: "HAZRD DUTY PAY!",
    author: "JPEGmafia",
    cover: "offline"
};

window.x7 = {
    audio: new Audio("Belize_(feat. MF DOOM).mp3"),
    title: "Belize (ft. MF DOOM)",
    author: "Danger Mouse",
    cover: "CheatCodes"
};

window.x8 = {
  audio: new Audio("where's the confetti.mp3"),
  title: "where's the confetti?",
  author: "jev.",
  cover: "jevpho"
};

window.x9 = {
  audio: new Audio("Break_in_the_Action.mp3"),
  title: "Break in the Action",
  author: "MFDOOM & CZARFACE",
  cover: "supawhat"
};

window.x10 = {
  audio: new Audio("Bound 2.mp3"),
  title: "Bound 2",
  author: "Kanye West",
  cover: "yeezus"
};




limitation = 10;

let numeration = 1;
let currentSong = "x" + numeration;

let pausechange = false;

function start() {
    if (!pausechange) {
        window[currentSong].audio.play();
        document.getElementById("photo").innerHTML = '<img src="' + window[currentSong].cover + '.png" alt="" width="500px" height="500px">';
        document.getElementById("titling").innerHTML = window[currentSong].title;
        document.getElementById("mc").innerHTML = window[currentSong].author;
        document.getElementById("play").innerHTML = '<img src="pause.png" alt="" width="100px" height="100px">';
        pausechange = true;
    } else {
        window[currentSong].audio.pause();
        document.getElementById("play").innerHTML = '<img src="play.png" alt="" width="100px" height="100px">';
        pausechange = false;
    }
}

function skip() {
    window[currentSong].audio.pause();
    window[currentSong].audio.currentTime = 0;
    numeration++;
    if (numeration > limitation) {
        numeration = 1;
    }
    currentSong = "x" + numeration;
    document.getElementById("photo").innerHTML = '<img src="' + window[currentSong].cover + '.png" alt="" width="500px" height="500px">';
    document.getElementById("titling").innerHTML = window[currentSong].title
    document.getElementById("mc").innerHTML = window[currentSong].author
    window[currentSong].audio.play();  
}

function skipbackwards() {
    window[currentSong].audio.pause();
    window[currentSong].audio.currentTime = 0;
    numeration--;
    if (numeration < 1) {
        numeration = limitation;
    }
    currentSong = "x" + numeration;
    document.getElementById("photo").innerHTML = '<img src="' + window[currentSong].cover + '.png" alt="" width="500px" height="500px">';
    document.getElementById("titling").innerHTML = window[currentSong].title
    document.getElementById("mc").innerHTML = window[currentSong].author
    window[currentSong].audio.play();
}

function createlist() {
    const listElement = document.getElementById("list");
    listElement.innerHTML = "";
    
    for(let i = 0; i < (limitation + 1); i++) {
      const song = window["x" + (i + 1)];
      listElement.innerHTML += `
        <div id="sublist" class="listed" onclick="listPlay(${i})">
          <img src="${song.cover}.png" alt="" height="70px" width="70px">
          <div id="inlist">
            <p>${song.title}</p>
            <p>${song.author}</p>
          </div>
        </div>`;
    }
  }
  
  function resetsong() {
    window[currentSong].audio.currentTime = 0;
  }
  
  function listPlay(index) {
    stopCurrentSong();
    numeration = index + 1;
    currentSong = "x" + numeration;
    pausechange = false;
    start();
  }

  function stopCurrentSong() {
    if (currentSong && window[currentSong].audio) {
      window[currentSong].audio.pause();
      window[currentSong].audio.currentTime = 0;
    }
  }
