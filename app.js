// var min = 0;
// var sec = 0;
// var milisec = 0;
// var minHeading = document.getElementById("min"); 
// var secHeading = document.getElementById("sec"); 
// var milisecHeading = document.getElementById("milisec"); 
// var interval;
// function timer(){
//     milisec++
//     milisecHeading.innerHTML = milisec;
//     if(milisec >= 100){
//         sec++
//         secHeading.innerHTML = sec;
//         milisec = 0;
//     }else if(sec >= 60){
//         min++
//         minHeading.innerHTML = min;
//         sec = 0;
//     }
// }
// function start(){
//     interval = setInterval(timer,10);
// }
// function pause(){
//     clearInterval(interval);
// }
// function reset(){
//     min = 0;
//     sec = 0;
//     milisec = 0;
//     minHeading.innerHTML = min;
//     secHeading.innerHTML = sec;
//     milisecHeading.innerHTML = milisec;
//     pause();
// }


// ========================      ================================
// ========================== X ===============================
// ========================      ================================

let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let htmlHour = document.getElementById("hour");
let htmlMin = document.getElementById("min");
let htmlSec = document.getElementById("sec");
let htmlMsec = document.getElementById("msec");
let interval;


function Start(){
    interval = setInterval(() => {
        msec++
        htmlMsec.innerHTML = msec;
        if (msec >= 100) {
            sec++
            htmlSec.innerHTML = sec;
            msec = 0;
        }else if (sec >= 60) {
            min++
            htmlMin.innerHTML = min
            sec = 0;
        }else if(min >= 60){
            hour++
            htmlHour.innerHTML = hour;
            min = 0;
            
        }
    },10)
    document.getElementById("disable").disabled = true;
    
}
function Stop(){
    clearInterval(interval);
    document.getElementById("disable").disabled = false;
}
function Reset(){
    let hour = 0;
    let min = 0;
    let sec = 0;
    let msec = 0;
    htmlHour.innerHTML = hour;
    htmlMin.innerHTML = min;
    htmlSec.innerHTML = sec;
    htmlMsec.innerHTML = msec;
    document.getElementById("disable").disabled = false;
    Stop();
}









