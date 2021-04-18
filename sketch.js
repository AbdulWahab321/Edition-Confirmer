var DETECTER=1;
var FIRSTBG=2;
var computerDownloadingInstructions
var com,mobile,mobile1,computer,nox,blueStacks,gam,blueStacks1
var loading
var NOInternet
async function preload(){

}
async function setup(){
 
  createCanvas(250, 500);

  Pe=createButton("Police Chase")
  Pe.position(10,50)
  Pe.size(100,50)

  SPe=createButton("Standard Edition")
  SPe.position(150,50)
  SPe.size(100,50)
}
async function draw(){
 Pe.mousePressed(()=>{
   location.assign("https://abdulwahab321.github.io/Street-Racer-Police-Edition-1.1/")
 })

 SPe.mousePressed(()=>{
   location.assign("https://abdulwahab321.github.io/Street-Racer-10.5/")
 })


 
  
}
async function say(){
  sp=new SpeechSynthesisUtterance();
  sp.text="Hai Welcome To street Racer Game System Cofirmer"
  window.speechSynthesis.speak(sp)
}
