/*{"name":"When I add an Element group with name=\"name\" and selector=\"selector\" and type=\"type\"","pageObjects":[{"name":"tractor-page-objects"}],"mockRequests":[]}*/
module.exports = function () {
    var TractorPageObjects = require('../../../src/tractor/client/tractor-page-objects.po.js'), tractorPageObjects = new TractorPageObjects();
    this.When(/^I add an Element group with name="([^"]*)" and selector="([^"]*)" and type="([^"]*)"$/, function (name, selector, type, done) {
        var tasks = tractorPageObjects.addElement(name, selector).then(function () {
            return tractorPageObjects.toggleElementIsGroup();
        }).then(function () {
            return tractorPageObjects.addElementType(type);
        });
        Promise.resolve(tasks).then(done).catch(done.fail);
    });
};