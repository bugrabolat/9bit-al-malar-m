const app = Vue.createApp({
    data(){
        return{
            title: "Test Başlığı",
            itemList: [],
        };
    },
    beforeCreate() {
        console.log("beforeCreated çalıştı..")
    },
    created() {
        console.log("created çalıştı..")
        setTimeout(() => {
        this.itemList = [1,2,3,4,5,6,7,8,9];
        }, 2000);
    },
    beforeMount() {
        console.log("beforeMount çalıştı..")
    },
    mounted() {
        console.log("mounted çalıştı..")
    },
    beforeUpdate() {
        console.log("beforeUpdate çalıştı..")
    },
    updated() {
        console.log("update çalıştı..")
    },
    beforeUnmount() {
        console.log("beforeUnmount çalıştı..")
    },
    unmount() {
        console.log("unmounted çalıştı..")
    },

})
app.mount("#app");

setTimeout(() => {
    app.unmount();
    }, 5000);