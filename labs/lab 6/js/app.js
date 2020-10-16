Vue.component("books-view",{
    props: ["book"],
    template: `<div id='bookStyle' v-if='book.visibility'> 
                <p> {{ book.title }} </p> 
                <p> {{ book.emoji }} </p> 
                <p> {{ book.author}} </p> 
            </div>`
})

let app = new Vue({
    el: "#app",
    data: {
        header: "Book List",
        books: [
            {id: 0, title: "The Throne of Fire", emoji: "🔥", author: "Rick Riordan", visibility: true},
            {id: 1, title: "The Serpent's Shadow", emoji: "🐍", author: "Rick Riordan", visibility: true}
        ]
    },
    methods: {
        changeVisible: function() {
            if (this.books[1].visibility == true){
                this.books[1].visibility = false
            } else if (this.books[1].visibility == false){
                this.books[1].visibility = true
            }
        }
    }
})