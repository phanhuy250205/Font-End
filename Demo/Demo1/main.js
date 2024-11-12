var app = new Vue({
    el: '#app',
    data: {
        Couter:0
    },methods:{
        handeClick(number , envent){
            console.log('click',envent.target);
            this.Couter+=number;
        }
    }

});  