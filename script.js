//variables
var wr=0;
var xr=1; //keep track of current runing image
var wj = 0;
var xj = 1; //keep track of current jumping image
var xxj = 357; //vertical position

//score
var ssc = 0;
var wsc = 0;

//flames
var xf = 800;


//Event handling

function k(event){
    if(event.which == 13){
        
    }
}

//Audio contrall

var rs = new Audio("run.mp3")
rs.loop = true;

var re = new Audio("end.mp3")

//Image contraling

//Run image
function run(){
    xr = xr + 1;
    wj = 0;

    if(xr==9){
        xr = 1;
    }
    var current_runing_image = document.getElementById("boy");
    current_runing_image.src = "Run ("+xr+").png";
}

//Jump image
function jump(){
    xj = xj + 1;
    if(xj == 13){
        xj = 1;
        clearInterval(wj);
        wr = setInterval(run,100);
        if(wb == 0){
            wb = setInterval(back, 100);
        }
    }
    if(xj <=6){
        xxj = xxj-45;
    }
    if(xj >=7){
        xxj = xxj + 45;
    }
    var ij = document.getElementById("boy");
    ij.src = "Jump (" + xj + ").png";
    ij.style.marginTop = xxj + "px";

}

function score(){
    ssc = ssc+1;
    var sc = document.getElementById("score");
    sc.innerHTML = ssc;
}

