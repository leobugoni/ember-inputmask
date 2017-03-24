/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  if (!process.env.EMBER_CLI_FASTBOOT) {
    app.import({
      development: app.bowerDirectory + '/jquery.inputmask/dist/jquery.inputmask.bundle.js',
      production: app.bowerDirectory + '/jquery.inputmask/dist/min/jquery.inputmask.bundle.min.js'
    });
  }

  return app.toTree();
};