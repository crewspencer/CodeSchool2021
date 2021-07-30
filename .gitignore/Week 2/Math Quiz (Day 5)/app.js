var correctAnswer;

function newRandomProblem(){
   var r1 = Math.floor(Math.random() * 100);
   var r2 = Math.floor(Math.random() * 100);
   var questionLeftSpan = document.querySelector("#questionleft");
   var questionRightSpan = document.querySelector("#questionright");
   questionLeftSpan.innerHTML = r1;
   questionRightSpan.innerHTML = r2;
   var correctAnswer = r1 + r2;
   return correctAnswer;
}

var correctAnswer = newRandomProblem();


var checkAnswerButton = document.querySelector("#submit-answer");
checkAnswerButton.onclick = function () {
    var answerInput = document.querySelector("#answer-field");
    var feedbackSpan = document.querySelector("#feedback");

    if (answerInput.value == correctAnswer) {
       feedbackSpan.innerHTML = "Correct!";
       feedbackSpan.style.color = "#00FF00";
       answerInput.value = "";
       correctAnswer = newRandomProblem();
    } else {
       feedbackSpan.innerHTML = "Incorrect!";
       feedbackSpan.style.color = "#FF0000";
    }

    
};


