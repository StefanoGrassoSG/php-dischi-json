const { createApp } = Vue

    createApp({
        data() {
            return {
                disks: [],
                clicked: false,
                singleInfo: []
            }
        },
        methods: {
            openInfo(diskId) {
                this.clicked = true;
                axios.get(`http://localhost/php-dischi-json/database/api.php?id=${diskId}`)
                .then(res => {
                    this.singleInfo = res.data
                    console.log(this.singleInfo)
                })
            },
            close() {
                this.clicked = false;
            }
        },
        created() {
            axios.get('http://localhost/php-dischi-json/database/api.php')
            .then(res => {
                this.disks = res.data
                console.log(this.disks)
            })
        }
    }).mount('#app')