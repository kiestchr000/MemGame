let order = []; //stores order of the buttons to be pushed
let playerOrder = []; //stores which order the played types the buttons in
let flash; //boolean that stores whether the button should flash or not
let turn=0; //stores which turn number the player is currently at
let good; //detects whether the player has already lost
let compTurn; //boolean that marks whether it's the computer's turn to flash
let interval; 
let musicInterval = 0;
let win;
let on = false;
let flashblue;
let highScore = 0;
let audio1;
let speed;
let checkMusic;

let dif = document.getElementById("Diff");
let aud = document.getElementById("buttonLightUp");
aud.playbackRate = 2;
const scoreTracker = document.querySelector("#score");
const hiScore = document.querySelector("#highScore");
const oneButt = document.querySelector("#b1");
const twoButt = document.querySelector("#b2");
const threeButt = document.querySelector("#b3");
const fourButt = document.querySelector("#b4");
const fiveButt = document.querySelector("#b5");
const sixButt = document.querySelector("#b6");
const sevenButt = document.querySelector("#b7");
const eightButt = document.querySelector("#b8");
const nineButt = document.querySelector("#b9");
const startButton = document.querySelector("#Start");
const audOn = document.querySelector("#audio");
const musOn = document.querySelector("#bgMusic");
const aboutUs = document.querySelector("#aboutUs");
let music = document.getElementById("backgroundMusic");
music.volume = 0.3;


audOn.addEventListener('click', (event) => {
  if (audOn.checked == true) {
    let audio = document.getElementById("buttonLightUp");
    audio.play();
    audio1 = true;
  } else {
    audio1 = false;
  }
});

musOn.addEventListener('click', (event) => {
  if(musOn.checked == true) {
    music.play();
  }
  if(musOn.checked == false) {
    music.pause();
    music.currentTime = 0;
  }
})

startButton.addEventListener('click', (event) => {
  if(dif.value == "eas")
  {
    speed = 1200;
  }
  if(dif.value == "med")
  {
    speed = 800;
  }
  if(dif.value == "har")
  {
    speed = 500;
  }
    play();
});

function play() {
  win = false;
  order = [];
  playerOrder = [];
  flash = 0;
  interval = 0;
  turn = 1;
  scoreTracker.innerHTML = "Score:" + 0;
  hiScore.innerHTML = "High Score:" + highScore;
  good = true;
  flashblue = true;
  for (var i = 0; i < 100; i++) {
    order.push(Math.floor(Math.random() * 9) + 1);
  }
  compTurn = true;
  interval = setInterval(gameTurn, speed);
}
 function gameTurn() {
  on = false;
  if (flash == turn) {
    clearInterval(interval);
    compTurn = false;
    clearColor();
    on = true;
  }

  if (compTurn) {
    clearColor();
    setTimeout(() => {
      if (order[flash] == 1) 
      {
        one();
      }
      if (order[flash] == 2) 
      {
        two();
      }
      if (order[flash] == 3)
      {
        three();
      }
      if (order[flash] == 4)
      {
        four();
      }
      if (order[flash] == 5)
      {
        five();
      }
      if (order[flash] == 6)
      {
        six();
      }
      if (order[flash] == 7)
      {
        seven();
      }
      if (order[flash] == 8)
      {
        eight();
      }
      if (order[flash] == 9)
      {
        nine();
      }
      flash = flash + 1;
    }, 100); //used to be 200
  }
}
   function one() {
  oneButt.style.backgroundColor = '#337CCF';
  setTimeout(() => {oneButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
  if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
 function two() {
    twoButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {twoButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
  
  function three() {
    threeButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {threeButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
  
   function four() {
    fourButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {fourButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }

   function five() {
    fiveButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {fiveButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }

  function six() {
    sixButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {sixButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
   function seven() {
    sevenButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {sevenButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
   function eight() {
    eightButt.style.backgroundColor = "#337CCF";
    setTimeout(() => {eightButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
    if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
   function nine() {
  nineButt.style.backgroundColor = "#337CCF";
  setTimeout(() => {nineButt.style.backgroundColor = "rgb(214, 214, 214)";}, (speed-300));
  if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
}

function clearColor() {
  oneButt.style.backgroundColor = "rgb(214, 214, 214)";
  twoButt.style.backgroundColor = "rgb(214, 214, 214)";
  threeButt.style.backgroundColor = "rgb(214, 214, 214)";
  fourButt.style.backgroundColor = "rgb(214, 214, 214)";
  fiveButt.style.backgroundColor = "rgb(214, 214, 214)";
  sixButt.style.backgroundColor = "rgb(214, 214, 214)";
  sevenButt.style.backgroundColor = "rgb(214, 214, 214)";
  eightButt.style.backgroundColor = "rgb(214, 214, 214)";
  nineButt.style.backgroundColor = "rgb(214, 214, 214)";
}

function flashColor() {
    oneButt.style.backgroundColor = "rgb(173, 216, 230)";
    twoButt.style.backgroundColor = "rgb(173, 216, 230)";
    threeButt.style.backgroundColor = "rgb(173, 216, 230)";
    fourButt.style.backgroundColor = "rgb(173, 216, 230)";
    fiveButt.style.backgroundColor = "rgb(173, 216, 230)";
    sixButt.style.backgroundColor = "rgb(173, 216, 230)";
    sevenButt.style.backgroundColor = "rgb(173, 216, 230)";
    eightButt.style.backgroundColor = "rgb(173, 216, 230)";
    nineButt.style.backgroundColor = "rgb(173, 216, 230)";
}

function flashRed() { //flashes all squares red
  oneButt.style.backgroundColor = "rgb(254, 40, 40)";
  twoButt.style.backgroundColor = "rgb(254, 40, 40)";
  threeButt.style.backgroundColor = "rgb(254, 40, 40)";
  fourButt.style.backgroundColor = "rgb(254, 40, 40)";
  fiveButt.style.backgroundColor = "rgb(254, 40, 40)";
  sixButt.style.backgroundColor = "rgb(254, 40, 40)";
  sevenButt.style.backgroundColor = "rgb(254, 40, 40)";
  eightButt.style.backgroundColor = "rgb(254, 40, 40)";
  nineButt.style.backgroundColor = "rgb(254, 40, 40)";
}

oneButt.addEventListener('click', (event) => {
  if(on == true)
  {
  playerOrder.push(1);
  check();
  if(flashblue == true){
  one();
 
  if(!win) {
    setTimeout(() => {
      clearColor();
    }, 300);
  }
  }
}
})
twoButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(2);
check();
if(flashblue == true){
two();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
}
}
})
threeButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(3);
check();
if(flashblue == true){
three();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
  }
}
})
fourButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(4);
check();
if(flashblue == true){
four();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
  }
}
})
fiveButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(5);
check();
if(flashblue == true){
five();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
  }
  }
})
sixButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(6);
check();
if(flashblue == true){
six();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
}
  }
})
sevenButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(7);
check();
if(flashblue == true){
seven();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
}
  }
})
eightButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(8);
check();
if(flashblue == true){
eight();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
}
  }
})
nineButt.addEventListener('click', (event) => {
  if(on == true)
  {
playerOrder.push(9);
check();
if(flashblue == true){
nine();

if(!win) {
  setTimeout(() => {
    clearColor();
  }, 300);
}
}
  }
})

function check() {
  if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1])
  {
    good = false;
  }
  if (playerOrder.length == 100 && good) 
  {
    winGame();
  }

  if (good == false) {
    scoreTracker.innerHTML = "You Lose!";
    flashRed();
    if(audio1 == true)
    {
      let audLose = document.getElementById("loseSound");
      audLose.play();
    }
        compTurn = true;
        flash = 0;
        playerOrder = [];
        good = true;
        flashblue = false;
        if (highScore < turn)
        {
          highScore = turn-1;
          hiScore.innerHTML = "High Score:" + highScore;
        }
  }

  if (turn == playerOrder.length && good && !win) {
    turn++;
    playerOrder = [];
    compTurn = true;
    flash = 0;
    scoreTracker.innerHTML = "Score:" + (turn - 1);
    interval = setInterval(gameTurn, speed);
    if (highScore < turn)
    {
      
      highScore = turn-1;
      hiScore.innerHTML = "High Score:" + highScore;
    }
  }

}

function winGame() {
 flashColor();
 scoreTracker.innerHTML = "You have the ultimate memory"
  win = true;
}
