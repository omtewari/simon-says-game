let gameseq =[];
let userseq=[];
let btns=["yellow","red","purple","green"]
let started=false;
let level=0;
let h2 =document.querySelector("h2");
document.addEventListener("keypress", function(){
    if(started==false){ //to game start only one time
    console.log("game started");
    started=true;

    levelup();
}
});
function gameflashbtn(btn){
    btn.classList.add("gameflash");
    setTimeout(function(){ //to remove flash class so button can get its original color in 0.25 seconds
        btn.classList.remove("gameflash")
    },250);
}
function userflashbtn(btn){
    btn.classList.add("userflash");
    setTimeout(function(){ //to remove flash class so button can get its original color in 0.25 seconds
        btn.classList.remove("userflash")
    },250);
}

function levelup(){
    userseq=[]
    level++;
    h2.innerText= `level ${level}`;
    let randidx = Math.floor(Math.random()*3) //to select one color form array of btns
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(  `.${randcolor}`)
    gameseq.push(randcolor)
    console.log(gameseq)
    
   gameflashbtn(randbtn);
}

function checkans(idx){

    
    if(userseq[idx]===gameseq[idx]){
        if(gameseq.length==userseq.length){
            setTimeout(levelup,1000)
        }
    }else{
        h2.innerHTML= `game over!!  Your score was <b>${level}</b>please press any key to start again`;
        reset()
    }
}

function btnpress(){
   let btn=this;
   userflashbtn(btn)
   usercolor= btn.getAttribute("id")
   userseq.push(usercolor)
   checkans(userseq.length-1)
}

let allbtns= document.querySelectorAll(".btn")
for (btn of allbtns){
    btn.addEventListener("click",btnpress)
}


function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}