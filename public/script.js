const socket = io("http://localhost:3000");


console.log("welcome script is working")

// RAISE HAND CODE
var hand = document.querySelector("#hand");
var submit = document.querySelector("#submit");
var number=document.querySelector("#number"); 
var hscount=document.querySelector("#handscount");

hand.addEventListener("submit", function(e) {
  console.log(submit.innerText);
  e.preventDefault();
});
submit.addEventListener("click", function() {
  if (number.innerText == "Raise Hands") {
    number.innerText="Raised";
    submit.style.background = "red";
    setTimeout(function(){
    submit.style.background = "#EFEFEF";
    number.innerText ="Raise Hands";
  },6000)
    socket.emit("raise-hand");
  }
    
});


socket.on("handscount",function(data){
  hscount.innerHTML=data+"%";
  console.log(data+"handscount");
});

// CLAP CODE 
var clap = document.querySelector("#clap");
var submitclap = document.querySelector("#submitclap");
var clapnumber=document.querySelector("#clapnumber"); 
var cscount=document.querySelector("#clapscount");
clap.addEventListener("submit", function(e) {
  
  e.preventDefault();
});
submitclap.addEventListener("click", function() {
  if (clapnumber.innerText == "Claps") {
    clapnumber.innerText="Clapped";
    submitclap.style.background = "red";
    setTimeout(function(){
    submitclap.style.background = "#EFEFEF";
    clapnumber.innerText="Claps";
  },6000);
    socket.emit("clap-raised");
  }
    
});


socket.on("clapscount",function(data){
  cscount.innerHTML=data;
  console.log(data+"clapscount");
});


socket.on("pageOpened",function(id){
  console.log("session id = " +id);
});
