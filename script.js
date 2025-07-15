var background_x = 0;
var run_tracker = 1;
var jump_tracker = 1;
var jump_position = 357;
var dead_tracker = 0;
var current_score = 0;
var flame_position = 800;

var run_speed = 0;
var score_speed = 0;
var flame_speed = 0;
var background_speed = 0;
var jump_speed = 0;
var dead_speed = 0;

var boy = document.getElementById("boy");

var start_sound = new Audio("run.mp3");
start_sound.loop = true;

var end_sound = new Audio("end.mp3");


//background

function move_bg(){
    var bg = document.getElementById("d");
    bx = bx -20;
    bg.style.backgroundPositionX = bx+"px";
}


//boy

function run(){
    run_tracker = run_tracker +1;
    if(run_tracker == 9){
        run_tracker = 1;
    }
    var run_img = boy;
    run_img.src = "Run ("+run_tracker+").png";
}

function jump(){
    jump_speed = 0;
    jump_tracker = jump_tracker +1;
    if(jump_tracker == 13){
        jump_tracker = 1;
        clearInterval(jump_speed);
        run_speed = setInterval(run, 100);
        if(background_speed == 0){
            background_speed = setInterval(move_bg, 100);
        }
    }
    if(jump_tracker <= 6){
        jump_position = jump_position - 45;
    }
    if(jump_tracker >=7){
        jump_position = jump_position + 45;
    }
    var jump_img = boy;
    jump_img.src = "Jump (" + jump_img + ").png";
    jump_img.style.marginTop = jump_position + "px";
}

function dead(){
    var dead_img = boy;
    dead_tracker = dead_tracker + 1;
    if(dead_tracker == 11){
        dead_tracker = 10;
        document.getElementById("end").style.visibility = "visible";
        document.getElementById("endscore").innerHTML = current_score;
    }
    dead_img.style.marginTop = "355px";
    dead_img.src = "Dead ("+dead_tracker+").png";
}


//score

function update_score(){
    current_score = current_score + 1;
    var score_bord = document.getElementById("score");
    score_bord.innerHTML = current_score;
}


//flames

function flames(){
    for(var fl = 0; fl < 40; fl++){
        //create flames
        var flame = document.createElement("img");
        flame.className = "flame";
        flame.src = "flame.gif";
        flame.style.marginLeft = flame_position + "px";

        if(fl <= 10){
            flame_position = flame_position + 750;
        }
        if(fl <= 20 & fl > 10){
            flame_position = flame_position + 500;
        }   
        if(fl <= 30 & fl > 20){
            flame_position = flame_position + 400;
        }
        if(fl >= 30){
            flame_position = flame_position + 350;
        }
        flame.id = "a" + fl;
        document.getElementById("d").appendChild(fla);
    }
}

function move_flame(){
    for(fl = 0; fl < 30; fl++){
        var flame = getComputedStyle(document.getElementById("a"+fl));
        var flame_p = parseInt(flame.marginLeft) - 30;
        document.getElementById("a"+fl).style.marginLeft = fm + "px";
        if(flame_p >= 140 & fm <= 240){
            if(jump_position >= 240){
                clearInterval(run_speed);
                run_speed = -1;
                clearInterval(jump_speed);
                jump_speed = -1;
                clearInterval(score_speed);
                clearInterval(background_speed);
                clearInterval(flame_speed);
                dead_speed = setInterval(dead, 100);
            }
        }
    }
}


//key events

function k(event){
    if(event.which == 13){
        flames();
        if(run_speed == 0){
            run_speed = setInterval(run,100);
            score_speed = setInterval(update_score, 100);
            flame_speed = setInterval(flames, 100);
            background_speed = setInterval(move_bg, 100);
       }
    }
    if(event.which == 32){
       if(jump_speed == 0){
            clearInterval(run_speed);
            if(flame_speed == 0){
                flame_speed = setInterval(flames, 100);
            }
            jump_speed = setInterval(jump, 100);
            if(score_speed == 0){
                score_speed = setInterval(update_score, 100);
            }
            if(background_speed == 0){
                background_speed = setInterval(move_bg, 100);
            }
            flames();
       }
    }
    if(event.which == 65){
        clearInterval(run_speed);
        run_speed = 0;
        clearInterval(jump_speed);
        jump_speed = 0;
        clearInterval(score_speed);
        score_speed = 0;
        clearInterval(background_speed);
        background_speed = 0;
        clearInterval(flame_speed);
        flame_speed = 0;
    }
}

//general options

function re(){
    location.reload();
}
function n(){
    location.reload();
}
function l(){
    document.getElementById("start").style.visibility = "hidden";
}