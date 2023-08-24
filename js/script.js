const { createApp } = Vue

    createApp({
        data() {
            return {
                disks: []
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