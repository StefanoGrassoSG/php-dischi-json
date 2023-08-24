const { createApp } = Vue

    createApp({
        data() {
            return {
                disks: [],
                clicked: false
            }
        },
        methods: {
            openInfo(singleDisk) {
                this.clicked = true;
            },
            close() {
                this.clicked = false;
            }
        },
        created() {
            axios.get('http://localhost/php-dischi-json/database/api.php')
            .then(res => {
                console.log(res.data);
                this.disks = res.data
                console.log(this.disks)
            })
        }
    }).mount('#app')