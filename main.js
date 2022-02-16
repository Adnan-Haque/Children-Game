var arr = [];
while(arr.length < 10){
    var r = Math.floor(Math.random() * 10) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
var count=1;
while(count < 11){
    document.getElementById("number"+count.toString()).innerHTML=arr.pop();
    count++;
}
var counting=1;
function checkingCorrect(num){
    if(document.getElementById("number"+num.toString()).innerHTML==counting)
    {
        counting++;
        document.getElementById("number"+num.toString()).disabled = true;
        console.log("Correct")
        document.getElementById("number"+num.toString()).style.backgroundColor = '#23bd00';
        document.getElementById("number"+num.toString()).style.border = '0px';
        // document.getElementById("number"+num.toString()).removeClass('noQuery');
        if(counting > 10){
            alert("Game Completed \n to restart the game click on restart :)");
        }
    }
    else{
        alert("Wrong Number");
        console.log("Wrong")
    }
}