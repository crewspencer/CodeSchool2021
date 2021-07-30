var quiz = {
    title:"My quiz",
    questions: [
    {        
        text:"Question 1",
        responses: [
            {text: "Wrong, too bad"},
            {text: "Right!", correct:true}

        ]
    },
    {
        text:"Question 2",
        responses: [
            {text: "Right Answer", correct:true},
            {text: "Wrong Answer"}
          ]
       }
    ]
 };



var app = new Vue ({
    el: "#app",
    data:{
        quiz:quiz,
        questionIndex:0,
        userResponses:Array(quiz.questions.length).fill(false)

    },
    methods:{
        next: function(){
            this.questionIndex++;
        },
        prev:function(){
            this.questionIndex--;
        },
        score:function(){
            return this.userResponses.filter(function(val){return val}).length
        }

    }
});