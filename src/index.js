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

    return (
      <div className="col-sm-4">
        <h1>The integer is  {newInt}</h1>
        <img src={url} />

      </div>

    /*

        <--  <img src={"http://golearntocode.com/images/dice/" + {this.int} + ".png"} /> -->
        <div className="col-sm-2">
        <div className="thumbnail">
          <img className="img-responsive" role="presentation" src={this.props.poster} />
          <div className="caption">
            <h3>{this.props.name}</h3>
            <p>{this.props.type}</p>
            <p>{this.props.runtime}</p>
          </div>
        </div>
      </div> */
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
