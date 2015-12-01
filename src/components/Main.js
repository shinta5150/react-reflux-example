require('normalize.css');
require('styles/App.css');


var React = require('react');
var Example1 = require('./example1/example1');
var Example2 = require('./example2/example2');

var Example3 = require('./example3/example3');

var AppComponent = React.createClass({
    getInitialState: function() {
        return {passedBack: null};
    },
    passBack: function(value) {
        this.setState({passedBack: value});
    },
    render: function() {
        return (
            <div className="index">

                <div className="notice">
                    Example 1: A simple React Component<br/>
                    <Example1 />
                </div>
                <br/>
                <div className="notice">
                    Example 2: Passing Back data<br/>

                    <p>
                            This was passed back to the parent from the child: {this.state.passedBack}
                    </p>
                    <Example2 passBack={this.passBack} input={this.state.passedBack} />
                </div>
                <br/>
                <div className="notice">
                    Example 3: Reflux<br/>
                    <Example3  />
                </div>
            </div>);
    }
});
module.exports = AppComponent;


