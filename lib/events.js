var CodeMirror = require("codemirror");

module.exports = function(){

    // Nick CodeMirror's event emitter methods and extend
    ;["on", "off", "signal"].forEach(function(method){

        this[method] = function(ev){
            // Pull all args after the event name
            var tailArgs = Array.prototype.slice.call(arguments, 1);

            // Allow handlers to be bound to multiple events at once.
            // eg. on("ready change")
            var events = ev.split(" ");
            for(var i = 0; i < events.length; i++){
                var args = [this, events[i]].concat(tailArgs);
                CodeMirror[method].apply(this, args);
            }

            return this;
        }

    }.bind(this));

};