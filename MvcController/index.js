'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AspnetItemGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the aspnet-item subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
  	this.dest.mkdir('Controllers');
  
  	this.template('Controller.cs', 'Controllers/' + this.name + '.cs', { namespace: 'MyNamespace', classname: this.name });
  
  }
});

module.exports = AspnetItemGenerator;
