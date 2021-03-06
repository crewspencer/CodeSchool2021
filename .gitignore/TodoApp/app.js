var app= new Vue({
    el:"#app",
    data:{
        todos:[
            {
                name:"Feed the dog",
                description: "1 1/2 cups of dry food and 1 raw egg",
                done:false,
                editing: false,
                deadline: new Date().toLocaleDateString()
            }
        ],
        new_todo_name:"",
        new_todo_description:"",
        new_todo_deadline:""

    },
    methods:{
        addNewTodo: function(){
            var new_todo = {
                name: this.new_todo_name,
                description: this.new_todo_description,
                done:false,
                editing:false,
                deadline: this.new_todo_deadline
            };
            this.todos.unshift(new_todo);
            this.new_todo="";
        },

        deleteTodo: function(index){
            this.todos.splice(index,1)
        },

        saveTodo: function(todo){
            todo.editing = false;
        },

        editTodo: function(todo){
            todo.editing = true;
        }
    }
})