const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            counter2: 0,
        };
    },
    methods: {
    },
    computed: {
        getCounterResult() {
            console.log("counter 1 çalıştı")
            return this.counter > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        },
        getCounter2Result() {
            console.log("counter 2 çalıştı")
            return this.counter2 > 5 ? 'BÜYÜK' : 'KÜÇÜK'
        }
    },
    watch: {
        counter(newvalue,oldvalue){
            console.log("counter",oldvalue,"=>",newvalue);
        },
        getCounterResult(newvalue,oldvalue) {
            console.log("Result",oldvalue,"=>",newvalue);
        },
    }
    // methods: {
    //     inc() {
    //      this.counter++;
    //     },
    //     dec() {
    //         this.counter--;
    //     }
    // }
}).mount("#app");