// Project's CSS
require('bootstrap/dist/css/bootstrap.css')
require('./project.css')

// Javascript dependencies
var $ = require('jquery')

// Project code
$('a')
    .attr('target', '_blank')
    .append(' <span class="glyphicon glyphicon-link" aria-hidden="true"></span>')
