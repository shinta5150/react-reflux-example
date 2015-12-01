var Reflux = require('reflux');
var InputAChangeActions = require('../actions/InputAChangeAction');
var Example3Store = Reflux.createStore({
    listenables: [InputAChangeActions],
    data: {},
    init: function() {
        this.data = { inputA: null, inputB: null};
    },
    inputChanged: function(name, value) {
        this.data[name] = value;
        this.trigger(this.data);
    }
});

module.exports = Example3Store;