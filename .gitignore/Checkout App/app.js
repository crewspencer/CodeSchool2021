var app = new Vue ({
    el: "#app",
    data:{
        deck_type:"oak",
        wheel_type:"blue",
        griptape_type:"blackg",
        board_type:"supreme",
        cost_of_deck:0,
        cost_of_board:0,
        cost_of_wheel:0,
        cost_of_grip:0,
        cost:0,
        tax:0,
        total:0
    },
    computed:{
        computedDeckImage: function(){
            return "images/" + this.deck_type +".jpeg"
        },
        computedWheelImage: function(){
            return "images/" + this.wheel_type + ".jpeg"
        },
        computedGripImage: function(){
            return "images/" + this.griptape_type + ".jpeg"
        }, 
        computedBoardImage: function(){
            return "images/" + this.board_type + ".jpeg"
        }, 
        computedCost: function(){
            this.cost = 0;
            this.cost_of_deck = 0;
            this.cost_of_board = 0;
            this.cost_of_wheel = 0;
            this.cost_of_grip = 0;

            if( this.deck_type == "oak") this.cost += 30;
            if( this.deck_type == "pine") this.cost += 20;
            if( this.deck_type == "wood") this.cost += 15;

            if( this.deck_type == "oak") this.cost_of_deck += 30;
            if( this.deck_type == "pine") this.cost_of_deck += 20;
            if( this.deck_type == "wood") this.cost_of_deck += 15;

            if( this.board_type == "supreme") this.cost += 25;
            if( this.board_type == "baker") this.cost += 20;
            if( this.board_type == "element") this.cost += 15;

            if( this.board_type == "supreme") this.cost_of_board += 25;
            if( this.board_type == "baker") this.cost_of_board += 20;
            if( this.board_type == "element") this.cost_of_board += 15;

            if( this.wheel_type == "blue") this.cost += 25;
            if( this.wheel_type == "black") this.cost += 15;
            if( this.wheel_type == "red") this.cost += 20;

            if( this.wheel_type == "blue") this.cost_of_wheel += 25;
            if( this.wheel_type == "black") this.cost_of_wheel += 15;
            if( this.wheel_type == "red") this.cost_of_wheel += 20;

            if( this.griptape_type == "blackg") this.cost += 10;
            if( this.griptape_type == "whiteg") this.cost += 20;
            if( this.griptape_type == "redg") this.cost += 25; 

            if( this.griptape_type == "blackg") this.cost_of_grip += 10;
            if( this.griptape_type == "whiteg") this.cost_of_grip += 20;
            if( this.griptape_type == "redg") this.cost_of_grip += 25; 

            this.tax = this.cost*.06
            this.total = this.cost+this.tax
            return "$" + this.total

        }
        
    }

})