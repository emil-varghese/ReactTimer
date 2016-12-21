var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass ({
  getInitialState: function() {
    return {
      count:0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function(prevProps,prevState){ //Gets previous state and prop any time

    if (this.state.countdownStatus!==prevState.countdownStatus){//something gets changed within react.
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({
            count: 0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUpdate: function(){ //fired just before state/props changes

  },

  componentWillMount: function() {
    console.log('componentWillMount');
  },

  componentDidMount: function() {
    console.log('componentDidMount');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount');
    clearInterval(this.timer);
    this.timer = undefined;

  },

  startTimer: function () {
    this.timer = setInterval(() => { //setInterval function calls it every n time
      var newCount = this.state.count -1 ;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'})
      }
    }, 1000); //every one second
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });

  },

  handleStatusChange: function(newStatus){
    this.setState({countdownStatus: newStatus});
  },

  render: function() {
    var {count,countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus !== 'stopped'){
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      }else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };

    return (
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
