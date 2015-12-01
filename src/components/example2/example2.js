var React = require('react');
var Example1 = React.createClass({

    handleChange: function(event) {
        this.props.passBack(event.target.value);
    },
    render: function() {
        return (
            <div>
                <br/>
                <input id="example2" name="example2" value={this.props.input} onChange={this.handleChange}/>
            </div>
        );
    }
});
module.exports = Example1;