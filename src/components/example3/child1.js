var React = require('react');
var Reflux = require('reflux');

var Example3Store = require('../../stores/example3Store');

var InputAChangeActions = require('../../actions/InputAChangeAction');

var Child1 = React.createClass({
    mixins: [Reflux.connect(Example3Store, 'store')],
    handleChange: function(name, event) {
        InputAChangeActions.inputChanged(name, event.target.value);
    },
    render: function() {
        var inputA = null;
        if (this.state.store) {
            inputA = this.state.inputA;
        }

        return (

            <div>
                <br/>
                <label>Input A</label>&nbsp;
                <input id="inputA" name="inputA" onChange={this.handleChange.bind(this, 'inputA')}/>
            </div>
        );
    }
});
module.exports = Child1;