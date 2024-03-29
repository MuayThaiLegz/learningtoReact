import React from "react";

import { ReactDOM } from "react";

var ImputExampleMod = React.createClass({
    getInitialState() {
        return (
            { name: '-'}
        );
    },

    handleChange(event) {
        this.setState({name: event.target.value.toUpperCase()});
    },

    render () {
        return (
            <input type = "text"
            value={this.state.name}
            onChange={this.handleChange} />
        );
    }

});

module.exports = ImputExampleMod;
