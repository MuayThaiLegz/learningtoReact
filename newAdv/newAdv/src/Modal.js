import React from 'react'
import { Router, Route, IndexRoute, Link } from 'react-router'

const Modal = React.createClass({
    styles: {
        position: 'fixed',
        top: '10%',
        right: '10%',
        bottom: '10%',
        left: '10%',
        padding: 20,
        boxShadow: '0px 0px 120px 130px rgba(0, 0, 0, 0.5)',
        overflow: 'auto',
        background: '#fff',  
    },

    render() {
        return(
            <div style={this.styles}>
                <p><Link to={this.props.returnTo}>Return to picture generator</Link></p>
                {this.props.children}

            </div>
        )
    }
})

export {Modal as default}