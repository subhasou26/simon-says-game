let gameSeq=[];
let userSeq=[];
let highestScore=0;
let btns=["red","yellow","green","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("Game started");
        levelUp();
        
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}
function gameFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },200);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    // rendom button chose
    let randIdx=Math.floor(Math.random()*4); // random nunber 0 to 3
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    highest(level);
    btnFlash(randbtn);
};

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function btnPress(){
  
    let btn=this;
   // console.log(btn);
    let userColor=btn.getAttribute("id");
    
    userSeq.push(userColor); // user enter color pusg to userseq
   // console.log(userSeq);
   gameFlash(btn);
   check(userSeq.length-1);
}

function check(idx){
    //console.log(level);
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{

    
        h2.innerHTML=`Sorry game is over your score is ${level}<br>Press any key to start`;
        reSet();
    }
}

function reSet(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}


let h3=document.querySelector("h3");
function highest(level){
    if(level>highestScore){
        highestScore=level;
    }
    h3.innerHTML=`Highest score is ${highestScore}`;
}