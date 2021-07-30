var url="https://codeschool-recipe-book.herokuapp.com";

var app = new Vue ({
        el:"#app",
    data:{
        recipes:[
            // {
            //     name:"Get groceries",
            //     description: "Go to this store blah blah",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
            // {
            //     name:"Mow the lawn",
            //     description:"N/A",
            //     done: false,
            //     editing: false, 
            //     deadline:  new Date().toLocaleDateString()
            // },
            // {
            //     name:"Clean the house",
            //     description:"The kitchen and living room",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
            // {
            //     name:"Take dog on walk",
            //     description:"N/A",
            //     done: false,
            //     editing: false,
            //     deadline: new Date().toLocaleDateString()
            // },
        ],
        new_recipe_name: "",
        new_recipe_ingredients: "",
        new_recipe_instructions: "",
 
        },
        created:function(){
            this.getRecipes();
        },
  

    methods:{
        getRecipes: function(){
            fetch(`${url}/recipe`).then(function(response){
                response.json().then(function(data){
                    console.log(data);
                    app.recipes = data;
                });
            })         
    
        },

     
        addNewRecipe: function(){
            var request_body= { 
                name: this.new_recipe_name,
                instructions: this.new_recipe_instructions,
                done: false,
                ingredients: this.new_recipe_ingredients
            };
            fetch(`${url}/recipe`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(request_body)
            }).then(function(response){
                console.log(request_body)
                if(response.status == 400){
                    response.json().then(function(data){
                        alert(data.msg)
                    })
                }else if(response.status == 201){
                    app.new_recipe_name="";
                    app.new_recipe_instructions="";
                    app.new_recipe_ingredients="";
                    app.getRecipes();
                }
            });
            
        },
        
        deleteRecipe: function ( recipe ) {
            fetch(`${url}/recipe/`+recipe,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(function(){
                app.getRecipes()})

        },

   
        editRecipe: function(recipe){
            this.$set(recipe, 'editing', true);
            // this.$set(recipe, 'editing', true);
        },
        saveRecipe: function(recipe){
            var updated_body={
                name:recipe.name,
                instructions:recipe.instructions,
                ingredients:recipe.ingredients,
                done:recipe.done
            };
            fetch(`${url}/recipe/`+ recipe._id,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"

                },
                body:JSON.stringify(updated_body)
            });
            this.$set(recipe, 'editing', false);
        },
        saveRecipeDone:function(recipe){
            fetch(`${url}/recipe/`+recipe._id,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"

                },
                body:JSON.stringify({
                    done:recipe.done
                })
            });
            console.log(recipe.done);
        }
    }
});

