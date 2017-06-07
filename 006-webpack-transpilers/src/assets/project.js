// Project's CSS
require('bootstrap/dist/css/bootstrap.css')
require('./styles/project.css')
// require('./styles/project.less')
// require('./styles/project.scss')
// require('./styles/project.styl')

// Javascript dependencies
var $ = require('jquery')

// Project code
$('a')
    .attr('target', '_blank')
    .append(' <span class="glyphicon glyphicon-link" aria-hidden="true"></span>')

// React App
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
    <App />,
    document.getElementById('react-app')
)


if (process.env.NODE_ENV === 'development') {
    console.log('up and running in development mode...')
}
