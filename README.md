Framework7 + AngularJS
==========

[![Join the chat at https://gitter.im/ashvin777/framework7.angular](https://badges.gitter.im/ashvin777/framework7.angular.svg)](https://gitter.im/ashvin777/framework7.angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Full Featured Mobile HTML Framework For Building iOS & Android Apps with the Power of AngularJS.

### Anuglar 2 Integration (UNDER DEVELOPMENT)
https://github.com/ashvin777/framework7.angular2

### Full Documentation

https://github.com/ashvin777/framework7.angular/


### Kitchen Sink App
http://ashvin777.github.io/framework7.angular/kitchen-sink-material/#!/home.html

### Demo App
http://ashvin777.github.io/framework7.angular/examples/#!/home.html

### Install

***From Bower***
```javascript
bower install framework7.angular
```
***From NPM***
```javascript
npm install framework7.angular
```


```html
    <script type="text/javascript" src="../build/js/framework7.js"></script>
    <!-- Framework7 Hook for AngularJS -->
    <script type="text/javascript" src="bower_components/framework7-angularjs/framework7.angular.hook.js"></script>
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

<img src="https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.00.46%20pm.png" width="40%" align="right"/>

<img src="https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.00.51%20pm.png" width="40%" />

<img src="https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.01.20%20pm.png" width="40%" align="right"/>

<img src="https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.01.58%20pm.png" width="40%"/>

<img src="https://github.com/ashvin777/framework7.angular/blob/master/screenshots/Simulator%20Screen%20Shot%2030%20Jun%202016%203.02.35%20pm.png" width="40%"/>

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
### To avoid issues 
Use ng-cloak for each controller declaration in html templates.

### Limitation

No limitation

### Contact 

ashvin.suthar777@gmail.com

### Licence

No License is required for this plugin. 
