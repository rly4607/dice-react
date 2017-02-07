var React = require('react')
var ReactDOM = require('react-dom')

// e.g. getRandomInt(1, 6)
var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var Die = React.createClass({
  render: function() {

    var newInt = getRandomInt(1,6)
    var url = "http://golearntocode.com/images/dice/" + newInt + ".png";

    console.log(newInt)

    return (
      <div className="col-sm-4">

        <img src={url} />

      </div>
    )
  }
})

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Welcome to the KIEI-924 Casino!</h1>
        <div className="row">
          <Die />
          <Die />
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.getElementById('app'))
