const {test, assert} = require('scar');
const format = require('../../../../src/_finix/public/js/lib/core/format');

test('core.format', () => {
    assert.equal(typeof format, 'object');
    assert.deepEqual(Object.keys(format).sort(), ['setDefaultMetric', 'formatSize', 'setDefaultDateFormat', 'formatDate'].sort());
    assert.equal(typeof format.setDefaultMetric, 'function');
    assert.equal(typeof format.formatSize, 'function');
    assert.equal(typeof format.setDefaultDateFormat, 'function');
    assert.equal(typeof format.formatDate, 'function');
});
