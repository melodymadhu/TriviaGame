var totalTime = 30;
var handleSetInt;
var q1ans, q2ans;
var q1choice, q2choice;
var correct = 0;
var wrong = 0;

$(document).ready(function() {
	correct = 0;
	wrong = 0;
	handleSetInt = setInterval(reduceTime, 1000);
	$(".btn-default").click(function() {
		q1ans = $("#q1").data("answer");
		q2ans = $("#q2").data("answer");
		q1choice = $("input[name = 'a1']:checked").val();
		q2choice = $("input[name = 'a2']:checked").val();
		showScores(); 
		clearInterval(handleSetInt);
		//alert(q1ans);
		//alert(q2ans);
		//alert($("input[name = 'a1']:checked").val());
		//alert($("input[name = 'a2']:checked").val());
	})
})

function reduceTime() {
		totalTime--;
		inMins = Math.floor(totalTime/60);
		inSecs = totalTime%60;
		$("#timeleft").html(inMins+":"+inSecs);
		if (totalTime === 0) {
			clearInterval(handleSetInt);
			alert("YOUR TIME IS UP");
		}
}

function showScores() {
	if (q1choice === q1ans) {
			correct++;
		} else if (q1choice != q1ans ) {
			wrong++;
		}

		if (q2choice === q2ans) {
			correct++;
		} else if (q2choice != q2ans ) {
			wrong++;
		}
		alert("Your Score is --- Correct : " + correct + ", Wrong : " + wrong);
}
	