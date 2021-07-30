var app = new Vue ({
    el:"#app",

    data:{
        question:"",
        feedback:"Waiting for a question",
        answer:8


    },
    methods:{
        checkQuestion: function(){
            if(this.question == ""){
                this.feedback= "Waiting for a question..."
            }else if(this.question[this.question.lenth-1]!= "?"){
                this.feedback = "Questions usually end with a '?'";
            }else {
                this.feedback = "I'm ready to give an answer";
            }

        },
        askQuestion: function(){
            var possible_answer =["yes","no","maybe","perhaps someday","not a chance","very likely","highly unlikely"]
            var random_number = Math.floor(Math.random()*possible_answer.length);
            this.answer = possible_answer[random_number];
        }
    }
})