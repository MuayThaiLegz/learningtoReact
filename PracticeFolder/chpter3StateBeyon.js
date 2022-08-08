// State
/*
The technique of handling data in component, state.
Every component can have its own state in React.
The diff between state and props is that props are passed 
to the component from the parent component; whereas, state is something
that is internal to the component

Props are passed when a component gets instantiated.
State is something that can change over time. Therefore,
changes is state affect the rendering of components.
Consider state as a sort of private data structre of component

State should be introduced only when it is required.
With static data state manipulation is not required

*/
// Initial state can be set using the getInitialState function

var app = React.createClass({
    getInitialState: function() {
        return {
            changeSets: []
        };
    },

    render: function(){
        console.log(this.state.changeSets);
    }
});

// If an update is needed based on user events.
// Updating is done using setState() function


var app = React.createClass({
    getInitialState: function() {
        return {
            changeSets: [],
            headings: ['Updated At', 'Author', 'Change']
        };
    },

    handleEvent: function(data) {
        this.setState({changeSets: data.changeSets});
    },

    render: function(){
        console.log(this.state.changeSets);
    }
});

/*
Is component does not change, then there is no need to use state.
Use props passed by parent component is that case.
This avoids re-rendering of the component over and over
As changes to state initiate a re-render of the componenet
*/

// State versus props

/*
Props are immutable.
They should not be updated by the component to which they are passed.
The are owned by the component which passes the to other component.

State should store as simple data as possible,
such as whether an input checkbox is checked or not 
or a CSS class that hides or displays the component

Make sure not to duplicate props in state
Although possible to set state based on data passed in props.
The parent component can update the props and send them again.
In the above case, state will be muddled up with new data,
if there have been any changes to the state.


*/