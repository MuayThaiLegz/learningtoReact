import React from "react";


var TestStore = React.createClass({
    getInitialState() {
        return ({ currentStep: 1 });
    },

    render() {
        switch (this.state.currentStep) {
            case 1:
                return <BookList />;
            case 2:
                return <ShippingDetails />;
            case 3:
                return <DeliveryDetails />;
        }
    }
});

var BookList = React.createClass({
    getInitialState() {
        return (
            { books: [
                { name: 'Zero to One', author: 'Peter Thiel' },
                { name: 'Monk who sold this Ferrari', author: 'Robin Sharma' },
                { name: 'Wings of Fire', author: 'A.P.J Abdul Kalam'}
            ]   }
        )
    },

    _renderBook(book) {
        return(
            <div className='checkbox'>
                <label>
                    <input type ='checkbox' /> {book.name} -- {book.author}
                </label>
            </div>
        );
    },

    render() {
        return(
            <div>
                <h3> Choose from wide variety of books available at out store
    </h3>

                <form>
                {this.state.books.map((book) => {
                    return this._renderBook(book); })
                }

                <input type="sumbit" className="btn btn-success"/>      

            </form>
        </div>
        );
    }
});

var ShippingDetails = React.createClass({
    render() {
        return(
            <h1>Enter your shipping information.</h1>
        );
    }
});

var DeliveryDetails = React.createClass({
    render() {
        return (
            <h1> Choose delivery options.</h1>
        );
    }
});


module.exports = TestStore;
