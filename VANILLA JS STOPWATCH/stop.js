window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var newTens = document.getElementById('tens');
    var newSeconds = document.getElementById('seconds');
    var start = document.getElementById('start');
    var stop = document.getElementById('stop');
    var reset = document.getElementById('reset');
    var Interval;


    start.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    stop.onclick = function () {
        clearInterval(Interval);
    }

    reset.onclick = function () {
        clearInterval(Interval);
        tens = '00';
        seconds = '00';
        
        newTens.innerHTML = tens;
        newSeconds.innerHTML = seconds;
    }



    function startTimer () {
        tens++;

        if(tens <= 9){
            newTens.innerHTML = '0' + tens;
        }

        if(tens > 9){
            newTens.innerHTML = tens;
        }

        if(tens > 99){
            console.log('seconds');
            seconds++;

            newSeconds.innerHTML = '0' + seconds;
            tens = 0;
            
            newTens.innerHTML = '0' + 0;
        }

        if(seconds > 9){
            newSeconds.innerHTML = seconds;
        }
    }
}