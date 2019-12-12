const each = util.each;

const tests = [[new Map(), true], [new WeakMap(), false], [{}, false]];

each(tests, function(test) {
    expect(isMap(test[0])).to.equal(test[1]);
});
