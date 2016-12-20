var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
//Load foundations
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles');

//Object Destructuring. Everything gets assigned react-router.<>
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
