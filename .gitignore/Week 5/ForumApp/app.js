var url="https://forum.2021.codeschool.cloud";


var app= new Vue ({
    el: "#app",
    data:{
        page:"forum",
        threads_empty:"There are no threads for this category",
        
        
        selected_category:"All",

        
        categories:[
            "All",
            "Clothing",
            "Cooking",
            "Computers",
            "Cars",
            "Dirt bikes",
            "Mountain bikes",
            "Snowboarding",
            "Misc."


        ],

        postings:[],
        index:0,
        new_name:"",
        new_author:"",
        new_description:"",
        new_category:"All",


        new_post_author:"",
        new_post_body:"",


        threads:[
            {
                name:"Thread Name",
                author:"Crew",
                description:"This is the thread description",
                category:"All",
                posts:[
                    {
                        author:"Stinky Cheese",
                        body:"Parmesan"
                    }
                ]
            },
            {
                name:"Thread Name 2",
                author:"Crew",
                description:"This is the thread description",
                category:"All",
                posts:[
                    {
                        author:"another post author",
                        body:"description of post here"
                    }
                ]
            },

        ]
    },

    methods:{
        createThread: function(){
        var new_thread={
            name: this.new_name,
            author: this.new_author,
            description: this.new_description,
            category: this.new_category
        }

        this.threads.unshift(new_thread)

        this.new_name="";
        this.new_author="";
        this.new_description="";
        this.new_category="all";
        this.page="forum"
        },


        deleteThread: function( index ){
            this.threads.splice(index, 1);
        },
        showThread: function(index){
            this.postings=this.threads[index].posts;
            this.page="posts";
            this.index=index;
        },
        
        createPost: function(){
            var new_post={
                author:this.new_post_author,
                body:this.new_post_body
            }
            this.postings.unshift(new_post)
            this.new_post_author="";
            this.new_post_body="";
        },
        deletePost: function ( index ) {
            this.postings.splice(index, 1);
        },

    },

    computed:{
        
        sorted_threads:function(){

            var chosen_category= this.selected_category

            if(chosen_category == "all"){
                return this.threads
            }
            
            else{
                var sorted_threads= this.threads.filter(function(thread){
                    return thread.category == chosen_category;
                });
                return sorted_threads
            }

        }
    }
}) 