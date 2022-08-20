// Using intervals to reduce the timeout values and keep updating out views to display the timer.
// As we have been storing the form data in a single place BookStore comp add a state value that will track
// timeout value.
/*
getInitialState() {
    return ({currentStep: 1, formValues: {}, clearTimeout: 60 *15});
}

Now a method to keep updating the state so that we can use it freely from here as well as child comps

updateCartTimeout(timeout){
    this.MediaStreamAudioDestinationNode({clearTimeout: timeout});
}
*/

// Mixins

// Allow us to share a code acrros comps 
// How to

var SetIntervalMixin = {

    //array to hold instances to intervals we will be creating

    componentWillMount: function() {
        this.intervals = [];
    },

    // A method that can be used to be used at def new intervals

    setInterval: function() {
        this.intervals}.push(setInterval.apply(null, arguments)),



    componentWillUnmount: function() {
        this.clearInterval.map(clearInterval);
    }
        
};


/* Intergration with app

start at delivery details page

var DeliveryDetails = React.createClass({
    mixings: [SetIntervalMixin]
})

From parent component start passing the cart timer value to the children
How render method should look
*/
render() {
    switch (this.state.currentStep) {
      case 1:
        return <BookList updateFormData={this.updateFormData} />;
      case 2:
        return <ShippingDetails updateFormData={this.updateFormData}
                                cartTimeout={this.state.cartTimeout}
                                updateCartTimeout={this.updateCartTimeout} />;
      case 3:
        return <DeliveryDetails updateFormData={this.updateFormData}
                                cartTimeout={this.state.cartTimeout}
                                updateCartTimeout={this.updateCartTimeout} />;
    }
}    

// Next update DeliveryDetails comps to start stroing the cartTimeout val

getIntialState() {
    return { deliveryOptions: 'Primary', cartTimeout: this.PaymentResponse.cartTimeout };
}

// We now set up render method of delivery options page

render() {

    var minutes = Math.floor(this.state.cartTimeout / 60);

    var seconds = this.state.cartTimeout  - minutes * 60;

    return (
        <div>
            <h1> Choose your delivery options here.</h1>
            <div style={{width:200}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="radio">

                    <label>

                    <input type='radio'
                            checked={this.state.deliveryOptions === "Primary"}
                            value="Primary"
                            onChange={this.handleChange} />
                    Primary -- Next day delivery
                </label>
            </div>

            <div className="radio">
                <label>
                    <input type="radio"
                    checked={this.state.deliveryOptions === "Normal"}
                    value="Normal"
                    onChange={this.handleChange}/>
                    Normal -- 3-4 days
                </label>
            </div>

            <button className="btn btn-success">
                Submit
            </button>
            </form>
         </div>
         <div className="well">
            <span className="glyphicon glyphicon-time" aria-hidden='true'></span>
             You have {minutes} Minutes,{seconds} Seconds, before confirming order
             </div>
       </div>
    );
}

// We start using The Cartmixin so mixins import look similar to the following

mixins: {SetIntervalMixin, CartTimeoutMixin}