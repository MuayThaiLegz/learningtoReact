import React from "react";


var TestStore = React.createClass({
    getInitialState() {
        return ({currentStep : 1, formValues: {} });
    },
    
    updateFormData(formData) {
        var formValues = Object.assign({}, this.state.formValues, formData);
        var nextStep = this.state.currentStep + 1;
        this.setState({currentStep: nextStep, formValues: formValues});
        console.log(formData);
    },

    render() {
        switch (this.state.currentStep) {
          case 1:
            return <BookList updateFormData={this.updateFormData} />;
          case 2:
            return <ShippingDetails updateFormData={this.updateFormData} />;
          case 3:
            return <DeliveryDetails updateFormData={this.updateFormData} />;
        }
    },

});

var BookList = React.createClass({
    getInitialState() {
        return (
            { books: [
                { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
                { id: 2, name: 'Monk who sold this Ferrari', author: 'Robin Sharma' },
                { id: 3, name: 'Wings of Fire', author: 'A.P.J Abdul Kalam'}
            ],
                selectedBooks: [],
                error: false
            }
        );
    },

    _renderError() {
        if (this.state.error) {
            return (
                <div className="alert alert-danger">
                    {this.state.error}
                </div>
            );
        }
    },

    handleSumbit(event) {
        event.preventDefault();

        if (this.state.selectedBooks.length === 0 ) {
            this.setState({error: 'Please choose at least one book to continue'});
        } else {
            this.setState({error: false});
            this.props.updateFormData({selectedBooks: this.state.selectedBooks});
        }
    },

    render() {
        var errorMessage = this._renderError();

        return (
            <div>
                <h3> Choose from wide variety of books available in store </h3>
                {errorMessage}
                <form onSubmit={this.handleSumbit}>
                { this.state.books.map((book) => { return (this._renderBook(book)); })}
                <input type="submit" className="btn btn-success" />
                </form>
            </div>
        );
    },

    _renderBook(book) {
        return(
            <div className='checkbox' key={book.id}>
                <label>
                    <input type ='checkbox' value={book.name}
                            onChange={this.handleSelectedBooks} /> 
                    {book.name} -- {book.author}
                </label>
            </div>
        );
    },

    handleSelectedBooks(event) {
        
        var selectedBooks = this.state.selectedBooks;
        var index = selectedBooks.indexOf(event.target.value);

        if (event.target.checked) {
            if (index === -1)
                selectedBooks.push(event.target.value);
            
        } else {
            selectedBooks.splice(index, 1);
        }
        this.setState({selectedBooks: selectedBooks });
    },


});



module.exports = TestStore;
