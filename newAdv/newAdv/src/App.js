import React from "react"
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link } from 'react-router'
import Modal from './Modal'

const App = React.createClass({

    componentWillReceiveProps(nextProps) {
        if ((

                nextProps.location.key !== this.props.location.key && 
                nextProps.location.state &&
                nextProps.location.state.modal
            ))      {
        this.previousChildren = this.props.children
    }
},

    render(){
        let { location } = this.props;

        let isModal = (
            location.state &&
            this.previousChildren
        );
        return(
            <div>
              <hi>Random Picture</hi>

                <div>
                    {isModal ?
                        this.previousChildren :
                        this.props.children    
                    }

                    {isModal && (
                        <Modal isOpen={true} returnTo={location.state.returnTo}>
                            {this.props.children}
                        </Modal>
                    )}
                </div>
            </div>
        )
    }
});

export {App as default}
