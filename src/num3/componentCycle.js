import React from 'react';

/** @jsx React.DOM */

console.log('Start') // Signals file has been loaded

var App = React.createClass({
    componentWillMount: function(){ 
      /* Entry point of component Called when component first gets mounted on body
      We call [React.render(<App name='Jane'/>, document.body);] is triggers [componentWillMount]
      In this method we can call setState to perform some changes to internal data. 
      This doesnt call new re-render or this method again

      */
      console.log('componentWillMount');
    },
    
    componentDidMount: function(){
      console.log('componentDidMount');
    },
    
    getInitialState: function(){
      return { status: true}
    },

    getDefaultProps: function(){
      return {name: 'John'};
    },
  
    componentWillReceiveProps: function(nextProps){
      console.log('componentWillReceiveProps');
    },
    /*
    Receives nextProps, which are new props tha child component receives from the parent component
    Method is not called for initial render. We can update state | other cleaning based on changes in props
   


    */

    shouldComponentUpdate: function(nextProps, nextState){
      console.log('shouldComponentUpdate');
      return true; 
      /*
       if false it will not re-render component. By default it reurns true and always re-renders
       One can also compare nextProps and nextState to existing vals
      and the decide whether to re-render


      */
    },
    
    componentWillUpdate: function(){
      console.log('componentWillUpdate');
    },

       /*
    gets called just before rendering. We can take care of any changes that we want or hanlde cleanup
    calling setState is not possile as it should be taken care of elsewhere

    */
    
    render: function() {
      console.log('render');
      return <h1 onClick={this.toggleState}>    
             {this.state.status.toString()}
             </h1>
    },
    /*
    The render call is responsible for the actual component display.
    A call to componentDidMount is invoked right after mounting the component
    and only once after the component si rendered

    We can use this to fetch the dynamic information that we want to display in component
    after initial render of component

    The onClick event calls this.toggleState, which toggles current status from true to false
    As state is affected, React re-renders the App component
    */

    componentWillUnmount: function(){
      console.log('componentWillUnmount')
    },
    
    /*
    called when the component is unmounted from body. use this to release resources, perform cleaning.
    or unset ny timers



    */

    toggleState: function() {
      this.setState({status: !this.state.status})
    }
    });

// componentWillMount
// componentDidMount
// componentWillReceiveProps(object nextProps)
// boolean shouldComponentUpdate(object nextProps, object nextState)
// componentWillUpdate(object nextProps, object nextState)
// componentDidUpdate(object prevProps, object prevState)
// componentWillUnmount()
// React.unmountComponentAtNode(document.body)
React.render(<App name='Jane'/>, document.body);