//variables 
let order = []; //stores order of the buttons to be pushed
let playerOrder = []; //stores which order the played types the buttons in
let flash; //boolean that stores whether the button should flash or not
let turn=0; //stores which turn number the player is currently at
let good; //detects whether the player has already lost
let compTurn; //boolean that marks whether it's the computer's turn to flash
let interval; 
let win;
let on = false;
let flashblue;
let highScore = 0;
let audio1;
let speed;
let checkMusic;
let isStarted = false;


//difficulty 
let dif = document.getElementById("Diff");

//score tracking
const scoreTracker = document.querySelector("#score");
const hiScore = document.querySelector("#highScore");

//buttons
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

//settings
const audOn = document.querySelector("#audio");
const musOn = document.querySelector("#bgMusic");
const aboutUs = document.querySelector("#aboutUs");

//audio
let music = document.getElementById("backgroundMusic");
music.volume = 0.3;
let aud = document.getElementById("buttonLightUp");
aud.playbackRate = 2;


//AUDIO
if (audOn.checked == true) {
  let audio = document.getElementById("buttonLightUp");
  audio.play();
  audio1 = true;
} else {
  audio1 = false;
}
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



//GAMEPLAY
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
  if(isStarted == false)
  {
    play();
  }
});

function play() {
  isStarted = true;
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

  //checks for flashing
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

//flashing functions
   function one() {
  oneButt.style.backgroundColor = "sandybrown";
  setTimeout(() => {oneButt.style.backgroundColor = "whitesmoke";}, (speed-300));
  if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
 function two() {
    twoButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {twoButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
  
  function three() {
    threeButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {threeButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
  
   function four() {
    fourButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {fourButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }

   function five() {
    fiveButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {fiveButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }

  function six() {
    sixButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {sixButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
   function seven() {
    sevenButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {sevenButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
    {
    let audio = document.getElementById("buttonLightUp");
      audio.play();
    }
  }
   function eight() {
    eightButt.style.backgroundColor = "sandybrown";
    setTimeout(() => {eightButt.style.backgroundColor = "whitesmoke";}, (speed-300));
    if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
  }
   function nine() {
  nineButt.style.backgroundColor = "sandybrown";
  setTimeout(() => {nineButt.style.backgroundColor = "whitesmoke";}, (speed-300));
  if(audio1 == true)
  {
  let audio = document.getElementById("buttonLightUp");
    audio.play();
  }
}

//makes the board unflash
function clearColor() {
  oneButt.style.backgroundColor = "whitesmoke";
  twoButt.style.backgroundColor = "whitesmoke";
  threeButt.style.backgroundColor = "whitesmoke";
  fourButt.style.backgroundColor = "whitesmoke";
  fiveButt.style.backgroundColor = "whitesmoke";
  sixButt.style.backgroundColor = "whitesmoke";
  sevenButt.style.backgroundColor = "whitesmoke";
  eightButt.style.backgroundColor = "whitesmoke";
  nineButt.style.backgroundColor = "whitesmoke";
}

//flashes everything
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

//flashes everything red on loss
function flashRed() { 
  oneButt.style.backgroundColor = "rgb(254, 77, 77)";
  twoButt.style.backgroundColor = "rgb(254, 77, 77)";
  threeButt.style.backgroundColor = "rgb(254, 77, 77)";
  fourButt.style.backgroundColor = "rgb(254, 77, 77)";
  fiveButt.style.backgroundColor = "rgb(254, 77, 77)";
  sixButt.style.backgroundColor = "rgb(254, 77, 77)";
  sevenButt.style.backgroundColor = "rgb(254, 77, 77)";
  eightButt.style.backgroundColor = "rgb(254, 77, 77)";
  nineButt.style.backgroundColor = "rgb(254, 77, 77)";
  setTimeout(() => {oneButt.style.backgroundColor = "whitesmoke";}, (2000));
  setTimeout(() => {twoButt.style.backgroundColor = "whitesmoke";}, (500));
  setTimeout(() => {threeButt.style.backgroundColor = "whitesmoke";}, (2000));
  setTimeout(() => {fourButt.style.backgroundColor = "whitesmoke";}, (500));
  setTimeout(() => {fiveButt.style.backgroundColor = "whitesmoke";}, (2000));
  setTimeout(() => {sixButt.style.backgroundColor = "whitesmoke";}, (500));
  setTimeout(() => {sevenButt.style.backgroundColor = "whitesmoke";}, (2000));
  setTimeout(() => {eightButt.style.backgroundColor = "whitesmoke";}, (500));
  setTimeout(() => {nineButt.style.backgroundColor = "whitesmoke";}, (2000));

  setTimeout(() => {twoButt.style.backgroundColor = "rgb(254, 77, 77)";}, (1000));
  setTimeout(() => {fourButt.style.backgroundColor = "rgb(254, 77, 77)";}, (1000));
  setTimeout(() => {sixButt.style.backgroundColor = "rgb(254, 77, 77)";}, (1000));
  setTimeout(() => {eightButt.style.backgroundColor = "rgb(254, 77, 77)";}, (1000));

  setTimeout(() => {twoButt.style.backgroundColor = "whitesmoke";}, (1500));
  setTimeout(() => {fourButt.style.backgroundColor = "whitesmoke";}, (1500));
  setTimeout(() => {sixButt.style.backgroundColor = "whitesmoke";}, (1500));
  setTimeout(() => {eightButt.style.backgroundColor = "whitesmoke";}, (1500));
}

//detects button presses
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

//detects if the button selected is correct and win/loss detection
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
    order = [10];
    isStarted = false;
    if(audio1 == true)
    {
      let audLose = document.getElementById("loseSound");
      audLose.volume = 0.5;
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

//if you win
function winGame() {
 flashColor();
 scoreTracker.innerHTML = "You have the ultimate memory"
  win = true;
}