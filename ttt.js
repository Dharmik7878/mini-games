let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let ngbtn = document.querySelector("#new")
let msgcon = document.querySelector(".msg")
let p = document.querySelector("#msg")

let turn_o = true;
const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame = () => {
    turn_o = true;
    enableboxes();
    msgcon.classList.add("hide")
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn_o){
            box.innerText = "o";
            turn_o = false;
        } else{
            box.innerText = "x";
            turn_o = true;
        }
        box.disabled = true;
        checkwiner();
    })
})

let disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}

const showWinner = (winner) => {
    msgcon.innerText = `CONGRATULATION, WINNER IS ${winner}`;
    msgcon.classList.remove("hide");
    disableboxes();
}

const checkwiner = () => {
    for(let pattern of winpattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

    if(pos1val != "" && pos2val !="" && pos3val !=""){
        if(pos1val===pos2val && pos1val===pos3val){
            showWinner(pos1val);
            }
        }
    }
}

ngbtn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);