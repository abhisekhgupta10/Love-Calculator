//Created By Abhsiekh

const btn = document.getElementById("btn")

btn.addEventListener("click",data)

function data() {
    
    const yourName = document.getElementById("nam")
    const partnerName = document.getElementById("pnam")
    let randomNumber = (Math.random()*100)+1
    let roundNumber = Math.floor(randomNumber)
    score = roundNumber+"%"
    if (yourName.value =="" && partnerName.value=="") {
        document.querySelector(".score").style.display="block"
        document.querySelector(".score").textContent="Enter the fields 📃"
    }

    else if(yourName.value!="" && partnerName.value==""){
        document.querySelector(".score").style.display="block"
        document.querySelector(".score").textContent="Enter partner's Name 🤦‍♀️ "
    }

    else if(yourName.value=="" && partnerName.value!="" ){
        document.querySelector(".score").style.display="block"
        document.querySelector(".score").textContent="Enter your name 😶"
    } 

    else if(yourName.value==123 && partnerName.value==123){
        document.querySelector(".score").style.display="block"
        document.querySelector(".score").textContent="I don't accept numbers 😫"
    }

    else{
    document.querySelector(".score").style.display="block"
    document.querySelector(".score").textContent=score
        }

    }
