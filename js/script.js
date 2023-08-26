const { createApp } = Vue

    createApp({
        data() {
            return {
                disks: [],
                clicked: false,
                singleInfo: null
            }
        },
        methods: {
            openInfo(diskId) {
                
                axios.get('http://localhost/php-dischi-json/database/api.php', {
                    params: {
                        id: diskId
                    }
                })
                .then(res => {
                    this.singleInfo = res.data
                    console.log(this.singleInfo)
                    this.clicked = true;
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