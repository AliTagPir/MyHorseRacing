"use strict"
/*
let firstName= prompt("what is your first name?")
let secondName= prompt("what is your secondname?")
let bDay= prompt("What year were you born?")

let userName=firstName.substr(0,2)+secondName+bDay.substr(-2)
alert(`your username is ${userName}`)
userName.indexOf(secondName)
let position 


let sentence= "the quick brown fox leaped around and got the hunter angry"
let position=sentence.indexOf("fox")
sentence= sentence.replace.All("a", "*")
alert(sentence)*/
const numHorses= 5
let horses=[]
let horseX=[]

let colors=["red","blue","orange","cyan","magenta","yello","black","turqoise","lilac","white"]




for(let h=0;h<numHorses;h++){
    horses[h]=document.createElement("div")
    horses[h]
    horses[h].classList.add("horse")
    horses[h].style.top= 50 + h*18 + "px"
    horses[h].style.backgroundColor=colors[h]
    horseX[h]=0
    document.body.appendChild(horses[h])
}



const finish=800

function move(){
    for(let h=0;h<numHorses;h++){
        horses[h].style.left=horseX[h] + "px"
        horseX[h] += Math.floor(Math.random()*10)
        if(horseX[h] >=finish){
            alert(`Congrats, ${colors[h]} horse wins!`);restartRace();
        }
    }


}

function restartRace(){
    for(let h=0;h<numHorses;h++){
        horseX[h]=0
    }
}



function startRace(){

    setInterval(move,50)  

}
