import ReactDOM, { render } from 'react-dom';
import React from 'react';

var RecentChangesTables = React.createClass({
    render: function() {
        return (<table className= 'table'>

        <Headings headings = {this.props.headings} />
        <Rows changeSets = {this.props.changeSets} />
        </table>);
    }

});
/*
Props can be accessed this this.props. If anything in the parents props changes,
React will make sure that the changes are flown downstream re-rendering the
component tree.

React allows validating the props using PropTypes.
React provides a way to validate the props using PropTypes.
This is helpfull to ensure that the components are used correctly

Example
*/

var App = React.createClass({
    propTypes: {
        headings: React.PropTypes.array,
        changeSets: React.PropTypes.array,
        author: React.PropTypes.string.isRequired
    },

    render: function() {
        return(<table className = 'table'>
            <Headings headings = {this.props.headings} />
            <Rows changeSets = {this.props.changeSets} />

        </table>);
    }

});

/*
propTypes are only checked in dev. Their job is to just check assumptions
being made about components are being met. Especially useful as,
along with standard types, we can validate custom types 
*/

var App = React.createClass({
    propTypes: {
        headings: function(props, propName, componentName) {
            if (propName === 'headings')
            return Error("Failed Validation");
    }
},

render: function(){
    return(<table className= 'table'>
            <Headings headings = {this.props.headings} />
            <Rows changeSets = {this.props.changeSets} />
        
        </table>);
    }
});    

/*
If structure of the props is not as per your assumption,
you can raise a warning by def a custom validator as shown in prev case.

==========================================

React allows to def default vals for props. Good for when parent component
passing props based on some condition or not passing at all due to change.
*/


var App = React.createClass({
    getDefaultProps: function() {
        return {
          headings: ['When happened', 'Who did it', 'What they change']
        };
    },

   
render: function(){
    return(<table className= 'table'>
            <Headings headings = {this.props.headings} />
            <Rows changeSets = {this.props.changeSets} />
        
        </table>);
    }
});


var data = [{
    "when": "2 minutes ago",
    "who": "Jill Dupre",
    "description": "Created new account"
  },
  {
    "when": "1 hour ago",
    "who": "Lose White",
    "description": "Added first chapter"
  }
]; React.render( < App changeSets = {
    data
  }
  />, document.body);

/*
Special prop: this.props.children

React captures all the children that are present in open and closing tag into props
that can be accessed through this.props.children
*/

var RecentChangesTables = React.createClass({
    render: function() {
        return(
        <div>
        <h1> Recent Changes </h1>
        <table className='table'>
            {this.props.children}
        </table>
        </div>
        );
}
});


var App = React.createClass({
    
    render: function() {
        return(<RecentChangesTables>
            <Headings headings = {this.props.headings} />
            <Rows changeSets = {this.props.changeSets} />
            </RecentChangesTables>);
    }        
});


