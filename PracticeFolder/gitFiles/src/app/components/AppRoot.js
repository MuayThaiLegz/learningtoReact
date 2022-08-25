require("jquery");

import React from "react/addons";

import SearchPage from './SearchPage'

var AppRoot = React.createClass({
    propTypes: {
        state: React.PropTypes.object.isRequired    
    },
    render()
    {
        return <SearchPage/>;
    }
})
;

export default AppRoot;