var hr = 0;
var min = 0;
var sec = 0;
var msec = 0;

var hrHeading = document.getElementById("hr")
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var strt =document.getElementById("strtbtn") 
var interval;

function timer(){
    msec++
    msecHeading.innerHTML = msec;
    if(msec >= 100){
      sec++
    secHeading.innerHTML = sec;
    msec = 0;
    }
    else if (sec >= 60){
    min++
    minHeading.innerHTML = min;
    sec = 0;
    }
    else if (min >= 60){
        hr++
        hrHeading.innerHTML = hr;
        min = 0;

    }
    else if(hr >= 60){
      hr = 0;
      hrHeading.innerHTML = hr;
    }
}


function start(){
  interval = setInterval(timer,10)
  strt.disabled= true
}

// function disable(){
//   interval = setInterval(timer,10)
//    document.getElementById("dis").disable = true
// }






function pause(){
  clearInterval(interval)
  strt.disabled= false;
}


function reset(){
  var hr = 0;
  var min = 0;
  var sec = 0;
  var msec= 0;
  hrHeading.innerHTML = hr;
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  msecHeading.innerHTML = msec;
  clearInterval(interval)
  strt.disabled= false;
}


