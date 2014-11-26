# generator-aspnet-item [![Build Status](https://secure.travis-ci.org/spboyer/generator-aspnet-item.png?branch=master)](https://travis-ci.org/spboyer/generator-aspnet-item)

aspnet-item
==========

Yeoman generator for creating ASP.NET vNext items 

Getting Started
==========

* Install: `npm install -g generator-aspnet-item`
* Run: `yo aspnet-item:MvcController MyController` - or other options below


Usage
==========

The following item types are currently supported

####BowerJson
`yo aspnet-item:BowerJson`
Outputs: bower.json

####Class
`yo aspnet-item:Class filename`
Outputs: filename.cs

####CoffeeScript
`yo aspnet-item:CoffeeScript filename`
Outputs: filename.coffee

####Config
`yo aspnet-item:Config`
Outputs: config.json

####GruntFile
`yo aspnet-item:GruntFile filename`
Outputs: filename.json

####HTMLPage
`yo aspnet-item:HTMLPage filename`
Outputs: filename.html

####Javascript
`yo aspnet-item:JScript filename`
Outputs: filename.js

####JSON
`yo aspnet-item:JSON filename`
Outputs: filename.json

####MvcController
`yo aspnet-item:MvcController filename`
Outputs: Controllers/filename.cs

####MvcView
`yo aspnet-item:MvcView filename`
Outputs: Views/filename.cshtml

####PackageJson
`yo aspnet-item:PackageJson`
Outputs: package.json

####StartupClass
`yo aspnet-item:StartupClass`
Outputs: Startup.cs

####TextFile
`yo aspnet-item:TextFile filename`
Outputs: filename.txt

####WebApiController
`yo aspnet-item:WebApiController filename`
Outputs: Controllers/filename.cs


## Requirements
[Node](http://nodejs.org/)

[yeoman](http://yeoman.io/) has to be installed. 

`npm install -g yo bower`


## Known issues
This is the first release and a work in progress. Critical issues:
* Little or no error handling. 
* Want to add to be true subcommands to [generator-aspnet](https://github.com/ligershark/generator-aspnet)

## License

Apache 2.0
