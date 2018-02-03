/*{"name":"When I set the Action for the Interaction to name=\"name\"","pageObjects":[{"name":"tractor-page-objects"}],"mockRequests":[]}*/
module.exports = function () {
    var TractorPageObjects = require('../../../src/tractor/client/tractor-page-objects.po.js'), tractorPageObjects = new TractorPageObjects();
    this.When(/^I set the Action for the Interaction to name="([^"]*)"$/, function (name, done) {
        var tasks = tractorPageObjects.selectInteractionAction(name);
        Promise.resolve(tasks).then(done).catch(done.fail);
    });
};