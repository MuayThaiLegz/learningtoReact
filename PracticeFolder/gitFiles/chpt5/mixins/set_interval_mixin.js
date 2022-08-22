var  SetIntervalMixin = {
    componentWillMount: function() {
        this.intervals = [];
    },

    setInterval: function() {
        this.intervals.push(this.setInterval.apply(null, arguments));
    },
    componentWillMount: function() {
        this.intervals.map(clearInterval);
    }
};

module.exports = SetIntervalMixin