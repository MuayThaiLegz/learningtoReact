var CartTimeoutMixin = {
    componentWillMount: function() {
        this.setInterval(this.decrementCartTimer, 1000);
    },

    decrementCartTimer(){
        if (this.state.CartTimeout == 0) {
            this.props.alertCartTimeout();
            return;
        }
        this.setState({CartTimeout: this.state.CartTimeout -1});
    },

    componentWillUnMount(){
        this.props.updateCartTimeout(this.state.cartTimeout);
    }
};

module.exports = CartTimeoutMixin