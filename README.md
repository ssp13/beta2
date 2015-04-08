<h3>An angular js admin app.</h3>

Uses several charing libraries including : 

Chartjs<br/>
Flotcharts<br/>
morris charts<br/>

It is built using bootstrap with several custom features.

Also included are grunt configurations for development testing and production deployment.

<h4>Install using grunt : </h4>

1 ) Install node js (http://nodejs.org/download/)

2 ) Install necessary packages :

grunt-contrib-jshint
grunt-contrib-clean
grunt-contrib-connect
grunt-contrib-compress
grunt-contrib-cssmin
grunt-contrib-concat
grunt-contrib-uglify
grunt-html2js
grunt-contrib-watch
grunt-bower-task


3 ) In the application root folder run : npm install

This will install all grunt dependencies so that tasks can be run

4 ) Run :

grunt dev - For development
grunt test - For testing purposes
grunt minified - For production

All files will be concatenated in the dist/app.js file

Website will be deployed on http://localhost:8080 (path can be configured in the Gruntfile.js)

//{
//  "name": "angular-ioadmin",
//  "version": "0.0.1",
//  "devDependencies": {
//    "grunt": "~0.4.5",
//    "grunt-bower-task": "~0.3.4",
//    "grunt-cli": "~0.1.13",
//    "grunt-contrib-clean": "~0.5.0",
//    "grunt-contrib-compress": "~0.9.1",
//    "grunt-contrib-concat": "~0.4.0",
//    "grunt-contrib-connect": "~0.8.0",
//    "grunt-contrib-copy": "^0.8.0",
//    "grunt-contrib-cssmin": "^0.10.0",
//    "grunt-contrib-jshint": "~0.10.0",
//    "grunt-contrib-uglify": "~0.5.0",
//    "grunt-contrib-watch": "~0.6.1",
//    "grunt-file-blocks": "^0.3.3",
//    "grunt-html2js": "~0.2.7",
//    "grunt-include-source": "^0.5.1",
//    "grunt-karma": "~0.8.0",
//    "karma": "~0.12.0",
//    "karma-jasmine": "~0.1.0",
//    "karma-ng-html2js-preprocessor": "~0.1.0",
//    "karma-phantomjs-launcher": "~0.1.4"
//  }
//}

