angular.module('starter', ["framework7.angular"])

.controller("StarterController", ["$rootScope", "$scope",
    function($rootScope, $scope) {
        $scope.starterAppConfig = {
            modalTitle: 'Framework 1 7',
            material: false,
            router: true,
            swipePanel: 'left',
            debug: true
        }

        $scope.appTitle = "Framework7 Angular";
        $scope.list = [{"label":"Accordion","url":"accordion.html"},
			{"label":"Calendar / Datepicker","url":"calendar.html"},
			{"label":"Cards","url":"cards.html"},
			{"label":"Contacts List","url":"contact.html"},
			{"label":"Chips","url":"chips.html"},
			{"label":"Floating Action Button","url":"floating-button.html"},
			{"label":"Forms","url":"forms.html"},
			{"label":"Grid","url":"grid.html"},
			{"label":"Infinite Scroll","url":"infinite-scroll.html"},
			{"label":"Lazy Load Images","url":"lazy-load.html"},
			{"label":"List View","url":"list-view.html"},
			{"label":"Login Screen","url":"login-screen.html"},
			{"label":"Media Lists","url":"media-lists.html"},
			{"label":"Messages","url":"messages.html"},
			{"label":"Modals","url":"modals.html"},
			{"label":"Navbars And Toolbars","url":"bars.html"},
			{"label":"Notifications","url":"notifications.html"},
			{"label":"Photo Browser","url":"photo-browser.html"},
			{"label":"Picker","url":"picker.html"},
			{"label":"Popover","url":"popover.html"},
			{"label":"Preloader","url":"prelaoder.html"},
			{"label":"Pull To Refresh","url":"pull-to-refresh.html"},
			{"label":"Search Bar","url":"searchbar.html"},
			{"label":"Side Panels","url":"panels.html"},
			{"label":"Sortable List","url":"sortable-list.html"},
			{"label":"Swipe To Delete","url":"swipe-delete.html"},
			{"label":"Swiper Slider","url":"swiper.html"},
			{"label":"Tabs","url":"tabs.html"},
			{"label":"Virtual List","url":"virtual-list.html"},
			{"label":"Color Themes","url":"color-themes.html"}]
    }
])

.directive("leftPanel",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/panels/left-panel.html"
	}
}])

.directive("rightPanel",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/panels/right-panel.html"
	}
}])

.directive("appViews",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/views/views.html"
	}
}])

.directive("mainView",[function(){
	return {
		restrict : "E",
		replace : true,
		templateUrl : "templates/views/main/main-view.html"
	}
}])