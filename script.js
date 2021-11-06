var h1 = 300;
var h2 = 300;
var h3 = 300;
var h4 = 300;
var h5 = 300;

var column1 = document.getElementById("column1");
var column2 = document.getElementById("column2");
var winnerBlock = document.getElementById("winnerblock");

document.addEventListener("keyup", rise);

function rise(e){
    console.log(e.keyCode);
    if (e.keyCode==32)
    {
        h1+=10
        column1.style.height =h1+"px";
    }
    else if (e.keyCode==49)
    {
        h2+=10
        column2.style.height =h2+"px";
    }

    else if (e.keyCode==48)
    {
        h3+=10
        column3.style.height =h3+"px";
    }

    else if (e.keyCode==13)
    {
        h4+=10
        column4.style.height =h4+"px";
    }

    else if (e.keyCode==8)
    {
        h5+=10
        column5.style.height =h5+"px";
    }

    if (h1>550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display="inline";
        winnerBlock.style.left="50px";
        winnerBlock.innerHTML="Blue wins!";
    }
    else if (h2>550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display="inline";
        winnerBlock.style.left="200px";
        winnerBlock.innerHTML="Red wins!";
    }

    else if (h3>550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display="inline";
        winnerBlock.style.left="350px";
        winnerBlock.innerHTML="Orange wins!";
    }

    else if (h4>550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display="inline";
        winnerBlock.style.left="500px";
        winnerBlock.innerHTML="Green wins!";
    }

    else if (h5>550){
        document.removeEventListener("keyup", rise);
        winnerBlock.style.display="inline";
        winnerBlock.style.left="650px";
        winnerBlock.innerHTML="Purple wins!";
    }
}

function newgame(){
        document.addEventListener("keyup", rise);
        h1 = 300;
        column1.style.height =h1+"px";
        h2 = 300;
        column2.style.height =h2+"px";
        h3 = 300;
        h4 = 300;
        h5 = 300;
        column3.style.height =h3+"px";
        column4.style.height =h4+"px";
        column5.style.height =h5+"px";
        winnerBlock.style.display="none";
}


