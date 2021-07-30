var validate = function(valore, rightanswer, form, span) {
        
    var formname = document.getElementById(form)
    var spanname = document.getElementById(span)
    
        spanname.innerHTML = rightanswer;
    
    if (valore == rightanswer) {
        formname.innerHTML ="<div style='background-color:lightgreen'><h1>GREAT! YOU'RE RIGHT: The answer, in fact, was: " + rightanswer + "</h1></div>";
    }
    else {
    
        formname.innerHTML ="<div style='background-color:pink'><h1>Sorry, you where wrong: The answer was: " + rightanswer + "</h1></div>";
    }
    };