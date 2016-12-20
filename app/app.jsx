var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Countdown = require('Countdown');
var Timer = require('Timer');
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
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
