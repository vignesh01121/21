var card=document.getElementById("cards")
var sum=document.getElementById("sum")
var message=document.getElementById("message")
var ccard=document.getElementById("ccards")
var csum=document.getElementById("ctotal")
var player =prompt("enter  the name")
var bet=prompt("enter the stake")
var arr=[]
var total=0
var ctotal=0
var carr=[]
var win=false
var game=true
var gamestart=false

// function to add cards in array and update the player's score
function getrandom(){
    random=Math.floor(Math.random()*13)+1
    if(random>10){
        return 10
    }
    else if(random==1){
        return 11
    }
    else{
        return random
    }   
}
function startgame(){
    gamestart=true
    var fnum= getrandom()
    var snum= getrandom()
    var cfsum=getrandom()
    var csnum=getrandom()
    ctotal=cfsum+csnum
    total=fnum+snum
        arr=[fnum,snum]
    render()
}

function render(){
    card.innerHTML=`player card: `
    
    for(var i=0 ;i<arr.length;i++){
        card.innerHTML +=`${arr[i]} `
    }
    

    sum.innerHTML=`player sum:  ${total}`
    csum.innerHTML=`computer total: ${ctotal}`
   

if(total<21){
    message.innerHTML=`add a new card`
}
else if(total==21){
    bet *=2
    message.innerHTML=`congratualation ${player}you won Rs.${bet}`
    win=true
}
else{
    
    message.innerHTML=`your Rs.${bet} is govinda`
    game=false
  
}
}

function newcard(){

    if(win==false && game==true && gamestart==true){
        let num =getrandom();
        arr.push(num)
        total +=num

        while(ctotal<18){
            let cnum=getrandom()
            ctotal +=cnum
        }
        render()
     if(total>21){
        winner()
     }
        
    }    
}

function winner() {
    if(gamestart==true){
        if(ctotal<total){
        while (ctotal < 18 ) {
            let cnum = getrandom();
            ctotal += cnum;
        }
    }
        csum.innerHTML=`computer total: ${ctotal}`
        if (total > 21 || (ctotal <= 21 && ctotal > total)) {
            message.innerHTML=`${player} your Rs.${bet} is fucked up`
        } else if (ctotal === total) {
            message.innerHTML = `It's a tie`;
        } else {
            bet *=2
            message.innerHTML=`congratualation ${player} you won Rs.${bet}`
        }
      game=false
    }
   
 
}
