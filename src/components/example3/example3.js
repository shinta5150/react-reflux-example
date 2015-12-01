var React = require('react');
var Child1 = require('./child1');

var Child2 = require('./child2');
var Example3 = React.createClass({

    handleChange: function(event) {
        this.props.passBack(event.target.value);
    },
    render: function() {
        return (
            <div>
               <Child1 />
               <Child2/>
            </div>
        );
    }
});
module.exports = Example3;