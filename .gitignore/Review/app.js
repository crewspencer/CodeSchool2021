var app = new Vue ({
    el: "#app",

    data:{
        greeting:"Mouse event, V-bind, Global Events",
        clicked: false,
        hovering: false,
        position:"right",
        names:[
            "Bob",
            "Jill",
            "John",
            "Samantha"
        ]


    },
    methods:{
        click: function(){
            this.clicked= !this.clicked;

        },
        mouseOver: function(){
            this.hovering = true;
        },

        mouseLeave: function(){
            this.hovering = false;
        }

        
    },

    computed:{
        computeClass:function(){

            return{
                purple:this.clicked,
                bold:this.hovering
            }


        },

        positionClass: function(){
            return{
                'text-left': this.position == "left",
                'text-right': this.position == "right"
        }
    }

}

})