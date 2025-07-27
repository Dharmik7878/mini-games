let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

let usp = document.querySelector("#user-score")
let csp = document.querySelector("#comp-score")

const gencompchoice = () =>{
    const option = ["rock", "paper", "scissor"];
    const ranidx = Math.floor(Math.random() * 3)
    return option[ranidx];
}

const drow = () => {
    console.log("Game was drow!")
    msg.innerText = "Turm Is Drow"
    msg.style.backgroundColor = "#081b31"
}
const showwinner = (userwin) => {
    if(userwin){
        userscore++;
        usp.innerText = userscore;
        msg.innerText = "You win"
        msg.style.backgroundColor = "green"
    } else {
        compscore++;
        csp.innerText = compscore;
        console.log("You lose!")
        msg.innerText = "You lose"
        msg.style.backgroundColor = "red"
    }
}

const playgame = (userchoice) => {
    console.log("user choice:", userchoice)
    const compchoice = gencompchoice();
    console.log("comp choice:", compchoice)

    if(userchoice === compchoice){
        drow();
    }else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
            userwin = compchoice === "scissor" ? false : true;
        } else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin, userchoice, compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    })
})