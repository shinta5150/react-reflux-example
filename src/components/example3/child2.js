var React = require('react');
var Reflux = require('reflux');

var Example3Store = require('../../stores/example3Store');

var Child2 = React.createClass({
    mixins: [Reflux.connect(Example3Store, 'store')],
    render: function() {
        var inputReceived = null;
        if (this.state.store) {
            inputReceived = this.state.store.inputA;
        }
        return (
            <div>
                <br/>
                <label>Input B</label>&nbsp;<input id="inputB" name="inputB" value={inputReceived}/>
            </div>
            );
    }
});
module.exports = Child2;