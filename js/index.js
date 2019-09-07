let app = new Vue({
    el: '#vue-app',
    created() {
        console.log(this.looser.length)
    },
    data: {
        names: [],
        inputValue: '',
        error: '',
        looser: '',
    },
    methods: {
        addName() {
            if(this.inputValue) {
                this.names.push(this.inputValue);
                this.inputValue = '';
                this.error = ''
            } else {
                this.error = 'Please write a name'
            }
            
        },
        deleteAddedName(index) {
            this.names.splice(index, 1)
        },
        detectLooser() {
            this.looser =  this.names[Math.floor(Math.random()*this.names.length)]
        },
        startAgain() {
            this.names = [],
            this.inputValue = '',
            this.error = '',
            this.looser = ''
        }
    }
})