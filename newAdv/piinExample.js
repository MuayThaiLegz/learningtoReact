import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link } from "react-router"

const PICTURES = [
    {id: 0, src: 'http://placekitten.com/601/601' },
    {id: 2, src: 'http://placekitten.com/610/610' },
    {id: 3, src: 'http://placekitten.com/620/620' },
]
const Modal = React.createClass({
    // modal class implementaion
})

const App = React.createClass({
    componentWillReceiveProps(nextProps){
        // takes of context in case of modal
    },
    render() {
        // main render for Modal or cat page
    }
})
/*
const Index = React.createClass({
    render() {
         index page render
        <div>
        {PICTURES.map(picture => (
            <Link key = {picture.id}
            to={{
                pathname = '/pictures/${pictures.id}',
                state: {modal: true, returnTo: this.props.location.pathname }
            }}
            >
            <img style={{ margin: 10 }} src={picture.src}
            height="1000"/>
            </Link>
        ))}
        </div>
        // Usage of react router links
        <p><Link to="/some/123/deep/456/route">Go to some deep route</Link></p>
        </div>

      )
    }
})*/

const Deep = React.createClass({
    render() {
        // render hanlder for some deep link
    }
})

const Picture = React.createClass({
    render() {
      return (
        <div>
          // picture display
          <img src={PICTURES[this.props.params.id].src} style={{ height:"80%"}} />
        </div>
      )
    }
})

// The actual Routing logic using Router Lib

render({
    <Router history = {browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path = "/pictures/:id" component={Picture}/>
            <Route path = "/come/:one/deep/:two/route" component={Deep}/>
        </Route>
    </Router>
),  document.getElementById('example')