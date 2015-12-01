var React = require('react');
var Example1 = React.createClass({
    getInitialState: function() {
        return {value: 'Hello!'};
    },
    handleChange: function(event) {
        this.setState({value: event.target.value});
    },
    render: function() {
        return (
            <div>
                <br/>
                My Initial State: {this.state.value} <br/><br/>
                <input id="example1" name="example1"  onChange={this.handleChange}/>
            </div>
        );
    }
});
module.exports = Example1;