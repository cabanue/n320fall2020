//Sets up component using vue to display all the books. 
//Allows for multiple book entries as it has the template
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
        //array of objects of books
        books: [
            {id: 0, title: "The Throne of Fire", emoji: "🔥", author: "Rick Riordan", visibility: true},
            {id: 1, title: "The Serpent's Shadow", emoji: "🐍", author: "Rick Riordan", visibility: true}
        ]
    },
    methods: {
        //function to change visibility of the second book. 
        //checks if value is true or not. If it is currently true, switches to false, hiding the second book.
        //if it is currently false, switches it to true, making the second book visible.  
        changeVisible: function() {
            if (this.books[1].visibility == true){
                this.books[1].visibility = false
            } else if (this.books[1].visibility == false){
                this.books[1].visibility = true
            }
        }
    }
})