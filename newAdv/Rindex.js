import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router, Route, IndexRoute, Link} from 'react-router'
import Backbone from 'backbone'
import Modal from '/RModal'
import App from './RApp'
import { Cats, PictureModel } from './Rmodel';
import Picture from './RPicture'
import Sample from './RSample'
import Home from './RHome'

const history = useBasename(createHistory)({
    basename: '/picsum.photos'
})

render((
<Router history={history}>
    <Route path='/' component={RApp}></Route>
        <IndexRoute component={RHome}/>
        <Route path={}

    }
)