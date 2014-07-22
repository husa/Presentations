var events = {};
(function() {
    var eventList = {};

    events.on = function(eventName, handler) {
        if (typeof eventList[eventName] !== 'undefined') {
            eventList[eventName].push(handler);
        } else {
            eventList[eventName] = [handler];
        }
    }

    events.trigger = function(eventName) {
        var args = Array.prototype.slice.call(arguments, 1);

        if (eventList[eventName] instanceof Array) {
            for (var i = 0, n = eventList[eventName].length; i < n; i++) {
                eventList[eventName][i](args);
            }
        }
    }

    events.off = function(eventName, handler) {
        if (!eventList[eventName]) {
            return false;
        }

        if (typeof handler !== 'function') {
            eventList[eventName] = [];
        } else {
            var index = eventList[eventName].indexOf(handler);
            if (index !== -1) {
                eventList[eventName].splice(index, 1);
            }
        }
    }
})();

events.on('app.initialized', function(status) {
    console.log('event fired', status);
});
events.on('app.initialized', function(status) {
    console.log('2');
});

events.trigger('app.initialized', 'started');

events.off('app.initialized');

console.log('---------------');

events.trigger('app.initialized', 'started');
