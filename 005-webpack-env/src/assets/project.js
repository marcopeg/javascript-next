// Project's CSS
// in production we load bootstrap from CDN
if (process.env.NODE_ENV === 'development') {
    require('bootstrap/dist/css/bootstrap.css')
}

require('./project.css')

// Javascript dependencies
var $ = require('jquery')

// Project code
$('a')
    .attr('target', '_blank')
    .append(' <span class="glyphicon glyphicon-link" aria-hidden="true"></span>');
