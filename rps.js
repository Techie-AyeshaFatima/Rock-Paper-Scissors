let uscore = 0;
let cscore = 0;

const choices = document.querySelectorAll(".choice");
const c1 = document.querySelector(".choice1");
const c2 = document.querySelector(".choice2");
const c3 = document.querySelector(".choice3");
const msg = document.querySelector("#msg");

const uscorep = document.querySelector("#you");
const cscorep = document.querySelector("#comp");

const genChoice = () =>{
    //rock.paper.scissors
    let options = ["rock", "paper", "scissors"];
    const ran = Math.floor(Math.random() * 3);
    return options[ran];
}

const drawgame = () =>{
    msg.innerText = "its a draw!";
    msg.style.backgroundColor = "black";
}

const show = (uwin) => {
    if(uwin){
        uscore++;
        uscorep.innerText = uscore;
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }else {
        cscore++;
        cscorep.innerText = cscore;
        msg.innerText = "you lose!";
        msg.style.backgroundColor = "red";
    }
}

const playgame =(uchoice) =>{
    console.log("user choice", uchoice);
    //generate computer choice
    const cchoice = genChoice();
    if(cchoice === "rock"){
        c1.style.backgroundColor = "black";
        c2.style.backgroundColor = "white";
        c3.style.backgroundColor = "white";
    }else if(cchoice === "paper"){
        c2.style.backgroundColor = "black";
        c1.style.backgroundColor = "white";
        c3.style.backgroundColor = "white";
    }else {
        c3.style.backgroundColor = "black";
        c2.style.backgroundColor = "white";
        c1.style.backgroundColor = "white";
    };
    console.log("comp choice", cchoice);
    //upchoice(cchoice);

    if(uchoice === cchoice){
        drawgame();
    }else{
        let uwin = true;
        if(uchoice === "rock"){
            //s or p
            uwin = cchoice === "paper" ? false : true ;
        }else if(uchoice=== "paper"){
            //r or s
            uwin = cchoice === "scissors" ? false : true;
        }else {
            // r or p
            uwin = cchoice === "rock" ? false : true;
        }
        show(uwin);
    }
}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click",() => {
        const uchoice = choice.getAttribute("id");
        playgame(uchoice);
    });
});