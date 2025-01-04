let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
    //rock,paper,scissors.
};
const drawgame=() =>{
    msg.innerText="Game Was Draw. play again.";
    msg.style.backgroundColor="#081b31";
};
const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;

        msg.innerText=`You lost.${compchoice} beats Your ${userchoice}`;
        msg.style.backgroundColor="red";

    }
};

const playgame=(userchoice)=>{
    //generate computer choice->modular.
    const compchoice=gencompchoice();

    if(userchoice===compchoice)
    {
        //draw game.
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissors,paper
         userwin=compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice=== "scissors" ?false: true;
        }

        else{
                compchoice==="rock" ? false:true;
            
        }
        showwinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choice)=>{


    choice.addEventListener("click",() => {
            const userchoice=choice.getAttribute("id")
        console.log("choice Was Clicked",userchoice);
            playgame(userchoice);
    });
});