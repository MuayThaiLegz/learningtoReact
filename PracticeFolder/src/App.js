require("jquery");
require('btoa');
require('whatwg-fetch');
require("bootstrap");
require("bootstrap-webpack");
require("font-awesome-webpack");
import "babel-core/polyfill";


import React from 'react';
import Update from 'react-addons-update';
import sortBy from 'sort-by';
import RowAlternator from '../src/RowAlternator';
import Spinner from '../src/Spinner';


var SearchPage = React.createClass({
  getInitialState(){
    return {docs: [], numFound: 0, num_found: 0, start: 0, searchCompleted: false, searching: false, sorting: 'asc'}
  },
  render() {
    console.log(this.state);
    let tabStyles = {paddingTop: '5%'};
    return (
      <div className='container'>
        <div className="row" style={tabStyles}>
          <div className="col-lg-8 col-lg-offset-2">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for Projects..." ref='searchInput'/>
            <span className="input-group-btn">
              <button className="btn btn-default" type="button" onClick={this.performSearch}>Go!</button>
            </span>
            </div>
          </div>
        </div>
        { (() => {
          if (this.state.searching) {
            return this.renderSearching();
          }
          return this.state.searchCompleted ? this.renderSearchElements() : <div/>
        })()}
      </div>
    );
  },

  renderSearching(){
    return <div className="row">
      <div className="col-lg-8 col-lg-offset-2">
        <div className='text-center'><i className="fa fa-spinner fa-pulse fa-5x"></i></div>
      </div>
    </div>;
  },
  renderSearchElements(){
    return (

      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <span className='text-center'>Total Results: {this.state.numFound}</span>
          <table className="table table-stripped">
            <thead>
            <th>Title</th>
            <th>Title suggest</th>
            <th>Author</th>
            <th>Edition</th>
            </thead>
            <RowAlternator firstColor="white" secondColor="lightgrey">
            {this.renderDocs(this.state.docs)}
            </RowAlternator>
          </table>
        </div>
      </div>

    );
  },

  renderDocs(docs){
    return docs.map((doc) => {
      console.log(doc);
      return <tr>
        <td>{doc.title}</td>
        <td>{doc.title_suggest}</td>
        <td>{(doc.author_name || []).join(', ')}</td>
        <td>{doc.edition_count}</td>
      </tr>
    })
  },


  performSearch(){
    let searchTerm = $(this.refs.searchInput.getDOMNode()).val();
    this.openLibrarySearch(searchTerm);
    this.setState({searchCompleted: false, searching: true});
  },

  parseJSON(response) {
    return response.json();
  },

  updateState(json){
    this.setState({
      ...json,
      searchCompleted: true,
      searching: false
    });
  },

  openLibrarySearch(searchTerm){
    let openlibraryURI = `https://openlibrary.org/search.json?page=1&q=${searchTerm}}`;
    fetch(openlibraryURI)
      .then(this.parseJSON)
      .then(this.updateState)
      .catch(function (ex) {
        console.log('Parsing failed', ex)
      })

  },


  sortByTitle() {
    let sortByAttribute = this.state.sorting === 'asc' ? 'title' : -'title';
    let newState = Update(this.state,
                          { books: { $apply: (books) => { return books.sort(sortBy(sortByAttribute)) } }, 
                            sorting: {$apply: (sorting) => { return sorting === 'asc' ? 'desc' : 'asc' } } });
    this.setState(newState);
  },

  _renderBooks() {
    return this.state.books.map((book, idx) => {
      return (
        <BookRow key={idx}
                 title={book.title}
                 author_name={book.author_name}
                 edition_count={book.edition_count} />
      );
    })
  },


  _displaySearchResults() {
    if (this.state.searching) {
      return <Spinner />;
    } else if (this.state.searchCompleted) {
      return (
        <BookList
            searchCount={this.state.totalBooks}
            _sortByTitle={this._sortByTitle}>
          {this._renderBooks()}
        </BookList>
      );
    }
  }
});


module.exports = SearchPage;
