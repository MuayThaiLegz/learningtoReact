getInitialState() {
    return {
        docs: [], numFound: 0, num_found: 0,
        start: 0, searchCompleted: false, searching: false
    }
}


    Updated getInitialState function of App comp
// src.App.js

*/
getInitialState(){
    return {
        books: [],
        totalBooks: 0,
        searchCompleted: false,
        searching: false,
        sorting: 'asc'
    }
}

/*
We use the sort-by npm package and update the state with the sorted books.
*/

import sortBy from "sort-by"

_sortByTitle() {
    let sortByAttribute = this.state.sorting === 'asc' ? "title" :
    "-title";
        let unsortedBooks = this.state.books;
        let sortedBooks = unsortedBooks.sort(sortBy(sortByAttribute));
        this.setState({ books: sortedBooks, sorting: this._toggleSorting()});
},

_toggleSorting() {
    return this.state.sorting === 'asc' ? 'desc' : 'asc' ;
}

/*  Reacts assumes state objects are immutable. Here we are assigning state value to unsortedBooks

    we then mutate unsortedBooks into sortedBooks; as side effect we are also mutating current val od this.state

    this can be easily se solve with [Object.assign] we create a new array and copy current val of this.state.books in it.

    We can then sort the new arr and call setState with new sorted array  < ---- doesnt work

*/

/*
React provides the Update addon with immutability helpers, Which we use to solve this issue

When using immutability helpers know this
1. What needs to to be changed?
    We need to change  this.state to display sorted books

2. Where it needs to be changed?
    Mutation should happen in this.state.books

3. How it needs to be changed?
    We need to sort elements per criterion

*/

import Update from 'react-addons-update';

_sortByTitle() {
    let sortByAttribute = this.state.sorting === 'asc' ? "title" : "-title";
    
    let newState = Update(this.state,
         {books: {$apply: (books) => {return books.sort(sortBy(sortByAttribute))}},
         sorting: { $apply: (sorting) => { return sorting === 'asc' ? 'desc' : 'asc'}}});
         this.setState(newState);
}