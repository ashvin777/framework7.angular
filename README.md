Framework7.AngularJS v2.0.beta
==========

[![Join the chat at https://gitter.im/ashvin777/framework7.angular](https://badges.gitter.im/ashvin777/framework7.angular.svg)](https://gitter.im/ashvin777/framework7.angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Full Featured Mobile HTML Framework For Building iOS & Android Apps with the Power of AngularJS.

### Demo
http://ashvin777.github.io/framework7.angular/kitchen-sink-material/#!/home.html

### Configurations

Add the below hooks into the Framework7 Project index file
https://github.com/ashvin777/framework7.angular/blob/master/kitchen-sink-material/js/framework7.angular.hook.js

```html
	<script type="text/javascript" src="../build/js/framework7.js"></script>
    <!-- Framework7 Hook for AngularJS -->
    <script type="text/javascript" src="js/framework7.angular.hook.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
```

Then initialize the application by setting angular:true and pushState:true in options

```javascript
var myApp = {};
var mainView = {};
var $$ = Dom7;

angular.module("AngularApp", [])

.run(function() {
    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true, //set it true. It will enable the hash based navigation
        angular: true //set it to true to enable angular binding in Framework pages
    });
    mainView = myApp.addView('.view-main', {});
})
```
After this setup, you can define the controller, directives, services, factories or provider as per your requirement. The code structure will remain same as Framework7 standard app.

### Screenshots

![alt tag](https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.00.46%20pm.png)

### Routing - WIP

For now use Framework7 default router http://framework7.io/docs/router-api.html

### Controller

Controller can be directly assgined to the template root element. By doing so while the Framework7 will initialize the page then AngularJS hooks compiler will compile the template and bind the data based on the scrope of the controller.

So you html template should look like this

```html
<div data-page="calendar" class="page" ng-controller="CalendarCtrl">
	...
    ...
</div>
```

### Framework7 Template

The templates of side panels, popover, modals etc, wrap them in a element directive and add that directive in html. Like below

**Side Panel**

```html
<body ng-controller="RootCtrl"  ng-cloak >
    ...
    <panel-left></panel-left>
    <panel-right></panel-right>
    ...
</body>
```

**Directive**

```javascript
app.directive("panelLeft", function() {
    return {
        templateUrl: "panel-left.html"
    }
});

app.directive("panelRight", function() {
    return {
        templateUrl: "panel-right.html"
    }
});
```

And defind a controller in the root element of the panels template and use it as required.

### Using Framework7 Components

Framework7 components can be used as it is. Inside the controller those can be initialize like below
```javascript
..
.controller("CalendarCtrl", ["$scope", function($scope) {
	....
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    ....
}]);
```

### Limitation

No limitation

### Contact 

ashvin.suthar777@gmail.com

### Licence

The MIT License (MIT)
Copyright (c) 2016

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




