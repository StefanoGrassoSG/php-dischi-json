const { createApp } = Vue

    createApp({
        data() {
            return {
                disks: [],
                clicked: false,
                singleInfo: null,
                newDisk: {
                    title: '',
                    author: '',
                    year: 1900,
                    img: ''
                },
                error: false
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
            },
            saveDisk() {
                axios.post('http://localhost/php-dischi-json/store.php', {
                    disc: this.newDisk
                }, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(response => {
                    if(response.data == 'error') {
                        this.error = true
                    }
                    else {
                        window.location.href = 'http://localhost/php-dischi-json/index.html'
                    }
                })
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