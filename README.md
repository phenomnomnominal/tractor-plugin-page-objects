# tractor-plugin-page-objects

Plugin for [**tractor**](https://github.com/TradeMe/tractor) for creating [**Page Objects**](https://github.com/SeleniumHQ/selenium/wiki/PageObjects).

[![Greenkeeper badge](https://badges.greenkeeper.io/phenomnomnominal/tractor-plugin-page-objects.svg)](https://greenkeeper.io/)
[![npm version](https://img.shields.io/npm/v/tractor-plugin-page-objects.svg)](https://www.npmjs.com/package/tractor-plugin-page-objects)
[![bitHound Overall Score](https://www.bithound.io/github/phenomnomnominal/tractor-plugin-page-objects/badges/score.svg)](https://www.bithound.io/github/phenomnomnominal/tractor-plugin-page-objects)
[![Code Climate](https://codeclimate.com/github/phenomnomnominal/tractor-plugin-page-objects/badges/gpa.svg)](https://codeclimate.com/github/phenomnomnominal/tractor-plugin-page-objects)
[![Test Coverage](https://codeclimate.com/github/phenomnomnominal/tractor-plugin-page-objects/coverage.svg)](https://codeclimate.com/github/phenomnomnominal/tractor-plugin-page-objects/coverage)

# How to install:

`npm install tractor-plugin-page-objects --dev`
or
`yan add tractor-plugin-page-objects --dev`

# Config:

```javascript
// tractor.conf.js
module.exports = {
    // ...
    pageObjects: {
        directory: './path/to/app/',
        include: {
            someUiComponentLibrary: './node_modules/module/to/include/existing/page-objects/from/'
        }
    },
    // ...
};
```

For more information see [the wiki](https://github.com/phenomnomnominal/tractor-plugin-page-objects/wiki/Page-Objects-plugin-configuration).

# What does this plugin do?

A **Page Object** is a class that describes the behaviour of a part of a application. There has been a [lot](https://github.com/SeleniumHQ/selenium/wiki/PageObjects) [of](https://martinfowler.com/bliki/PageObject.html) [stuff](https://www.pluralsight.com/guides/software-engineering-best-practices/getting-started-with-page-object-pattern-for-your-selenium-tests) written about them already! This plugin encapsulates the best ideas of Page Objects and makes it really ready easy to create and modify them.

A **Page Object** is composed of **Elements** and **Actions**. An **Element** is a reference to a DOM element, or group of DOM elements, and an **Action** is a set of **Interactions** on those elements.

This plugin provides a UI for describing **Page Object** classes with **Elements** and **Actions** and generates the corresponding JavaScript code for that class. As an example, the following is generated JavaScript that describes following piece of UI:

![tractor-page-objects action parameter](https://github.com/phenomnomnominal/tractor-plugin-page-objects/tree/master/docs/configuration.md)

```
/*{"name":"tractor-page-objects action parameter","elements":[{"name":"name input"},{"name":"remove parameter button"}],"actions":[{"name":"add parameter","parameters":[{"name":"name"}]},{"name":"remove parameter","parameters":[]}],"version":"0.5.0"}*/
module.exports = function () {
    var TractorPageObjectsActionParameter = function TractorPageObjectsActionParameter(parent) {
        var find = parent ? parent.element.bind(parent) : element;
        this.nameInput = find(by.css('tractor-variable-input[label="Name"] input'));
        this.removeParameterButton = find(by.css('tractor-action[action="Remove parameter"] button'));
    };
    TractorPageObjectsActionParameter.prototype.addParameter = function (name) {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.nameInput.sendKeys(name);
        });
        return result;
    };
    TractorPageObjectsActionParameter.prototype.removeParameter = function () {
        var self = this;
        var result = Promise.resolve();
        result = result.then(function () {
            return self.removeParameterButton.click();
        });
        return result;
    };
    return TractorPageObjectsActionParameter;
}();
```
