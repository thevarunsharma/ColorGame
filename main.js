var h1=document.querySelector("h1")
var rgb=document.getElementById("rgb")
var play=document.getElementById("play")
var result=document.getElementById("result")
var easy=document.getElementById("easy")
var medium=document.getElementById("medium")
var hard=document.getElementById("hard")
var boxes=document.querySelectorAll(".box")
var correct
var num=3
function activate(yes,no1,no2){
  yes.classList.add('pressed')
  no1.classList.remove('pressed')
  no2.classList.remove('pressed')
}
function getcolors(n){
  var arr=[]
  for(var i=0;i<n;i++){
    var r=randomNum(0,255)
    var g=randomNum(0,255)
    var b=randomNum(0,255)
    arr.push([r,g,b])
  }
  return(arr)
}
function randomNum(min,max){
  return Math.floor(Math.random()*(max+1-min))+min
}
function rightAnswer(correct,n){
  for(i=0;i<n;i++){
    boxes[i].style.visibility='visible'
  }
  boxes.forEach((data)=>{
    data.style.backgroundColor=correct
  })
  h1.style.backgroundColor=correct
  result.innerText="Correct!"
  play.innerText="PLAY AGAIN?"
}
function addClick(correct,n){
  console.log(boxes)
  for(var j=0;j<n;j++){
  boxes[j].addEventListener('click',function(){
    var mycolor=this.style.backgroundColor
    console.log(mycolor)
    if(mycolor===correct){
      rightAnswer(correct,n)}
    else{
      result.innerText="Try Again..."
      this.style.visibility='hidden'
    }
  })
}}
function newGame(n){
  h1.style.backgroundColor='rgb(51,58,127)'
  play.innerText="NEW COLORS"
  result.innerText=""
  var colors=getcolors(n)
  for(var i=0;i<n;i++){
    boxes[i].style.display="block"
    boxes[i].style.backgroundColor="rgb("+colors[i].join(', ')+")"
  }
  for(var k=n;k<9;k++){
    boxes[k].style.display="none"
  }
  correct=colors[randomNum(0,n-1)]
  rgb.innerText="RGB("+correct.join(', ')+')'
  correct="rgb("+correct.join(', ')+')'
  if(n==3){
    activate(easy,medium,hard)}
  else if(n==6){
    activate(medium,hard,easy)}
  else{
    activate(hard,medium,easy)}
  addClick(correct,n)

}

newGame(num)
hard.addEventListener('click',()=>{newGame(9);num=9;})
medium.addEventListener('click',()=>{newGame(6);num=6;})
easy.addEventListener('click',()=>{newGame(3);num=3;})
play.addEventListener('click',()=>{newGame(num)})
