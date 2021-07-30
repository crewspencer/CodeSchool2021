var app = new Vue({
    el:'#app',
    data:{
        page:"home",
        message:"",
        checkedNames:[],
        picked:"",
        selected:"",
        options:[
            {
                text:'Dogs',
                value:'A'

            },
            {
                text:'Cats',
                value:'B'

            },
            {
                text:'Birds',
                value:'C'

            },
            {
                text:'Lizards',
                value:'D'

            }
        ]
    },

    methods:{
        makeActive: function(item){
            this.page= item;
        }
    }

})