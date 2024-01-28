let userScore =0;
let compScore =0;

const choices =document.querySelectorAll(".Choice");
const msg =document.querySelector("#messa");
const userScore1 =document.querySelector("#userScore");
const compScore1 =document.querySelector("#compScore");

const genCompChoices=()=>
{
    const options =["Rock","Paper","Scissors"];
    const randInx= Math.floor(Math.random()*3);
    return options[randInx];
};

const drawGame=()=>
{
    console.log("game is draw");
    msg.innerText="Draw";
    msg.style.backgroundColor = "aquamarine";
};

const showWinner =(userWin,userChoice,compChoice)=>
{
    if(userWin)
    {
        userScore++;
        userScore1.innerText=userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScore1.innerText=compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame =(userChoice)=>
{
    console.log("Your choice = ",userChoice)
    const compChoice= genCompChoices();
    console.log("comp choice = ", compChoice);

    if(userChoice===compChoice)
    {
        drawGame();
    }
    else
    {
        let userWin = true;
        if(userChoice === "Rock")
        {
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper")
        {
            userWin = compChoice === "Scissors" ? false: true;
        }
        else
        {
            userWin = compChoice === "Rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((Choice)=>
{
    Choice.addEventListener("click",()=>
    {
        const userChoice=Choice.getAttribute("id");
        playGame(userChoice);
    })
});