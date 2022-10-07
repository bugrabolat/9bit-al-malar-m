const app = Vue.createApp({
    data(){
    return{
        fullname: "kupeli",
    };
    },
    methods : {
        updateValue(event){
         console.log(event.target.value)
         this.fullname = event.target.value;
        }
    }
}).mount("#app");