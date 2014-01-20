$('#calc').on('click', function(){
        var ratio = $('#ratioSelect option:selected').val();
        var quantity = 0;
        if ($('#unitSelect option:selected').val()=='0.035274') {
		  	quantity = Math.round($('#quantityInput').val()*0.035274)/10;
		  	$('.units').text('Ounces');
		} else{
		  	quantity = $('#quantityInput').val();
		  	$('.units').text('Grams');
		};
    $('.output').text(quantity*ratio);
});

//when selection is set to ounces, take value and multiply by what user has entered
$('#unitSelect').on('change', function () {
	if ($('#unitSelect option:selected').val()=='0.035274') {
		$('.units').val('ounces');
		$('.units').text('Ounces');
	} else{
		$('.units').val('grams')
		$('.units').text('Grams');
	};
});

var currentTime = $('#time'),
    start = $('#start'),
    stop = $('#stop'),
    clear = $('#clear'),
    seconds = 0, minutes = 0, hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    currentTime.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
start.click = timer;

/* Stop button */
stop.on('click', function() {
    clearTimeout(t);
});

/* Clear button */
clear.on('click', function() {
    currentTime.textContent = "00:00:00";
    seconds = 0; minutes = 0; hours = 0;
});