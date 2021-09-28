let team1Score = document.getElementById("team1-score");
let team2Score = document.getElementById("team2-score");
let button = document.getElementById("btn");
let result = document.getElementById("winner");
let turn;

let team1 = {
  shots: [],
  score: 0,
};

let team2 = {
  shots: [],
  score: 0,
};

window.onload = function () {
  team1Score.innerHTML = "0";
  team2Score.innerHTML = "0";
  chooseTurn();
  updateButtonText();
};

const chooseTurn = () => {
  turn = Math.floor(Math.random() * 2);
};

const updateButtonText = () => {
  button.innerText = "SHOOT " + `${turn === 0 ? "(FCB)" : "(RM)"}`;
};




const updateScore = function (arr) {
  return arr
    .map((shot) => {
      return shot;
    })
    .reduce((total, shot) => total + shot);
};



const updateGoals=function(id,arr){
let scoreBoard=document.getElementById(id).children
arr.forEach((goal,index)=>{
  if(goal==0){
    scoreBoard[index].style.backgroundColor="red"
  }else{
    scoreBoard[index].style.backgroundColor="green"
  }
})

}



const checkStatus = function () {
  if (team1.shots.length == 5 && team2.shots.length == 5) {
    button.style.display = "none";
    console.log(team1);
    console.log(team2);
    findWinner();
  }
};



const findWinner = function () {
  if (team1.score > team2.score) {
    result.innerHTML = "FC Barcelona Won";
  } else if (team2.score > team1.score) {
    result.innerHTML = "Real Madrid Won";
  } else {
    result.innerHTML = "Match tied";
  }
};


button.addEventListener("click", function () {
  if (turn == 0) {
    team1.shots.push(Math.floor(Math.random() * 2));
    team1.score = updateScore(team1.shots);
    team1Score.innerText=team1.score
    updateGoals("team1-goals",team1.shots)
    turn = 1;
  } else {
    team2.shots.push(Math.floor(Math.random() * 2));
    team2.score = updateScore(team2.shots);
    team2Score.innerText=team2.score
    updateGoals("team2-goals",team2.shots)
    turn = 0;
  }

  checkStatus();
  updateButtonText();
});
