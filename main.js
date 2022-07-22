var start = document.getElementById('start');
var reset = document.getElementById('reset');

var h = document.getElementById('hour');
var m = document.getElementById('minute');
var s = document.getElementById('sec');


// store a  reference to the variable
var startTimer = null;

function timer(){
    if (h.value == 0 && m.value == 0 && s.value == 0){
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0){
        s.value--;
    } else if (m.value != 0 && s.value == 0){
        s.value = 59;
        m.value--;
    } else if(h.value != 0 && m.value == 0){
        m.value = 60;
        h.value--;
    } 
    return;

}

function stopTimer(){
    clearInterval(startTimer);
}

start.addEventListener('click', function(){
    // initialise the variable startTimer
    function startInterval(){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
    }
})

reset.addEventListener('click', function(){
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer()
})