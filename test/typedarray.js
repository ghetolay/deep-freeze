
var test = require('tap').test;
var deepFreeze = require('../');

test('don't throw over typedarray', function (t) {
    var typedArray = new Uint8Array(5);
    
    t.doesNotThrow( function() {
      deepFreeze(typedArray);
    });
});
