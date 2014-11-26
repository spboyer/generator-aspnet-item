'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');


var AspnetItemGenerator = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.log('You called the aspnet-item subgenerator with the argument ' + this.name + '.');
  },

  writing: function () {
    
  	this.template('Startup.cs', 'Startup.cs', { namespace: 'MyNamespace'});
  
  }
});

module.exports = AspnetItemGenerator;
