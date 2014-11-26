'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AspnetItemGenerator = yeoman.generators.extend({
  initializing: function () {
    this.log('You called the aspnet-item subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    this.src.copy('package.json', 'package.json');
  }
});

module.exports = AspnetItemGenerator;