/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-filter',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory +  '/sifter/sifter.js');
  }
};
