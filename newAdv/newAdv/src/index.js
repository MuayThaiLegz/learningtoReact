import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link} from 'react-router'
import Backbone from 'backbone'
import Modal from './Modal'
import App from './App'
import { Cats, PictureModel } from './models';
import Picture from './Picture'
import Sample from './Sample'
import Home from './Home'

const history = useBasename(createHistory)({
    basename: '/picsummer'
})

render((
<Router history={history}>
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path="pictures/:id" component={Picture}/>
        </Route>
    </Router>
), document.getElementById('rootElement'));