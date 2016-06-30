Framework7.AngularJS v2.0.beta
==========

[![Join the chat at https://gitter.im/ashvin777/framework7.angular](https://badges.gitter.im/ashvin777/framework7.angular.svg)](https://gitter.im/ashvin777/framework7.angular?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Full Featured Mobile HTML Framework For Building iOS & Android Apps with the Power of AngularJS.

### Demo
http://ashvin777.github.io/framework7.angular/kitchen-sink-material/#!/home.html

### Configurations

Add the below hooks into the Framework7 Project index file
https://github.com/ashvin777/framework7.angular/blob/master/kitchen-sink-material/js/framework7.angular.hook.js

Then initialize the application by setting angular in options

var myApp = {};
var mainView = {};
var $$ = Dom7;

angular.module("AngularApp", [])

.run(function() {
    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true,
        **angular: true**
    });
    mainView = myApp.addView('.view-main', {});
})

### Routing - WIP

For now use Framework7 default router http://framework7.io/docs/router-api.html

### Controller

Controller can be directly assgined to the template root element. By doing so while the Framework7 will initialize the page then AngularJS hooks compiler will compile the template and bind the data based on the scrope of the controller.

So you html template should look like this

<div data-page="calendar" class="page" ### ng-controller="CalendarCtrl">
	...
    ...
</div>

### Framework7 Template

The templates of side panels, popover, modals etc, wrap them in a element directive and add that directive in html. Like below

**Side Panel**
Index.html

<body ng-controller="RootCtrl"  ng-cloak >
    ...
    <panel-left></panel-left>
    <panel-right></panel-right>
    ...
</body>

**Directive**

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

And defind a controller in the root element of the panels template and use it as required.

### Using Framework7 Components

Framework7 components can be used as it is. 

