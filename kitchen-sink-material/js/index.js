var myApp = {};
var mainView = {};
var rightView = {};
var $$ = Dom7;

angular.module("AngularApp", [])

.run(function() {

    myApp = new Framework7({
        modalTitle: 'Framework7',
        material: true,
        pushState: true,
        angular: true
    });
    mainView = myApp.addView('.view-main', {});
})

.config(function() {

    //landing screen
    // mainView.router.loadPage("home.html")
    window.location.hash = "#!/home.html";
})

.controller("RootCtrl", ["$scope", "$compile", "$rootScope", function($scope, $compile, $rootScope) {
    $scope.title = "Framework7.angular";

    $$('.panel-left').on('open', function() {
        $$('.statusbar-overlay').addClass('with-panel-left');
    });
    $$('.panel-right').on('open', function() {
        $$('.statusbar-overlay').addClass('with-panel-right');
    });
    $$('.panel-left, .panel-right').on('close', function() {
        $$('.statusbar-overlay').removeClass('with-panel-left with-panel-right');
    });
    var dynamicPageIndex = 0;
    $scope.createContentPage = function() {
        mainView.router.loadContent(
            '  <!-- Page, data-page contains page name-->' +
            '  <div data-page="dynamic-content" class="page">' +
            '    <!-- Top Navbar-->' +
            '    <div class="navbar">' +
            '      <div class="navbar-inner">' +
            '        <div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>' +
            '        <div class="center">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
            '      </div>' +
            '    </div>' +
            '    <!-- Scrollable page content-->' +
            '    <div class="page-content">' +
            '      <div class="content-block">' +
            '        <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
            '        <p>Go <a href="#" class="back">back</a> or generate <a href="#" class="ks-generate-page" ng-click="createContentPage()">one more page</a>.</p>' +
            '      </div>' +
            '    </div>' +
            '  </div>'
        );
        return;
    }
}])

.controller("CalendarCtrl", ["$scope", function($scope) {
    var calendarDefault = myApp.calendar({
        input: '#ks-calendar-default',
    });
    // With custom date format
    var calendarDateFormat = myApp.calendar({
        input: '#ks-calendar-date-format',
        dateFormat: 'DD, MM dd, yyyy'
    });
    // With multiple values
    var calendarMultiple = myApp.calendar({
        input: '#ks-calendar-multiple',
        dateFormat: 'M dd yyyy',
        multiple: true
    });
    // Range Picker
    var calendarRange = myApp.calendar({
        input: '#ks-calendar-range',
        dateFormat: 'M dd yyyy',
        rangePicker: true
    });
    // Inline with custom toolbar
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var calendarInline = myApp.calendar({
        container: '#ks-calendar-inline-container',
        value: [new Date()],
        weekHeader: false,
        header: false,
        footer: false,
        toolbarTemplate: '<div class="toolbar calendar-custom-toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link icon-only"><i class="icon icon-back"></i></a>' +
            '</div>' +
            '<div class="center"></div>' +
            '<div class="right">' +
            '<a href="#" class="link icon-only"><i class="icon icon-forward"></i></a>' +
            '</div>' +
            '</div>' +
            '</div>',
        onOpen: function(p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
            $$('.calendar-custom-toolbar .left .link').on('click', function() {
                calendarInline.prevMonth();
            });
            $$('.calendar-custom-toolbar .right .link').on('click', function() {
                calendarInline.nextMonth();
            });
        },
        onMonthYearChangeStart: function(p) {
            $$('.calendar-custom-toolbar .center').text(monthNames[p.currentMonth] + ', ' + p.currentYear);
        }
    });
}])

.controller("InfiniteScroll", [function() {
    // Loading trigger
    var loading = false;
    // Last loaded index, we need to pass it to script
    var lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
    // Attach 'infinite' event handler
    $$('.infinite-scroll').on('infinite', function() {
        // Exit, if loading in progress
        if (loading) return;
        // Set loading trigger
        loading = true;
        // Request some file with data
        $$.get('infinite-scroll-load.php', {
            leftIndex: lastLoadedIndex + 1
        }, function(data) {
            loading = false;
            if (data === '') {
                // Nothing more to load, detach infinite scroll events to prevent unnecessary loadings
                myApp.detachInfiniteScroll($$('.infinite-scroll'));
            } else {
                // Append loaded elements to list block
                $$('.infinite-scroll .list-block ul').append(data);
                // Update last loaded index
                lastLoadedIndex = $$('.infinite-scroll .list-block li').length;
            }
        });
    });
}])

.controller("ModalsCtrl", [function() {
    $$('.demo-alert').on('click', function() {
        myApp.alert('Hello!');
    });
    $$('.demo-confirm').on('click', function() {
        myApp.confirm('Are you feel good today?', function() {
            myApp.alert('Great!');
        });
    });
    $$('.demo-prompt').on('click', function() {
        myApp.prompt('What is your name?', function(data) {
            // @data contains input value
            myApp.confirm('Are you sure that your name is ' + data + '?', function() {
                myApp.alert('Ok, your name is ' + data + ' ;)');
            });
        });
    });
    $$('.demo-login').on('click', function() {
        myApp.modalLogin('Enter your username and password', function(username, password) {
            myApp.alert('Thank you! Username: ' + username + ', password: ' + password);
        });
    });
    $$('.demo-password').on('click', function() {
        myApp.modalPassword('Enter your password', function(password) {
            myApp.alert('Thank you! Password: ' + password);
        });
    });
    $$('.demo-modals-stack').on('click', function() {
        // Open 5 alerts
        myApp.alert('Alert 1');
        myApp.alert('Alert 2');
        myApp.alert('Alert 3');
        myApp.alert('Alert 4');
        myApp.alert('Alert 5');
    });
    $$('.demo-picker-modal').on('click', function() {
        myApp.pickerModal('.picker-modal-demo');
    });
    var actionSheetButtons = [
        // First buttons group
        [
            // Group Label
            {
                text: 'Choose some action',
                label: true
            },
            // First button
            {
                text: 'Alert',
                onClick: function() {
                    myApp.alert('He Hoou!');
                }
            },
            // Second button
            {
                text: 'Second Alert',
                onClick: function() {
                    myApp.alert('Second Alert!');
                }
            },
            // Another red button
            {
                text: 'Nice Red Button ',
                color: 'red',
                onClick: function() {
                    myApp.alert('You have clicked red button!');
                }
            },
        ],
        // Second group
        [{
            text: 'Cancel'
        }]
    ];
    $$('.demo-actions').on('click', function(e) {
        myApp.actions(actionSheetButtons);
    });
    $$('.demo-actions-popover').on('click', function(e) {
        // We need to pass additional target parameter (this) for popover
        myApp.actions(this, actionSheetButtons);
    });
}])

.controller("MessageCtrl", [function() {
    var conversationStarted = false;
    var answers = [
        'Yes!',
        'No',
        'Hm...',
        'I am not sure',
        'And what about you?',
        'May be ;)',
        'Lorem ipsum dolor sit amet, consectetur',
        'What?',
        'Are you sure?',
        'Of course',
        'Need to think about it',
        'Amazing!!!',
    ];
    var people = [{
            name: 'Kate Johnson',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-9.jpg'
        }, {
            name: 'Blue Ninja',
            avatar: 'http://lorempixel.com/output/people-q-c-100-100-7.jpg'
        },

    ];
    var answerTimeout, isFocused;

    // Initialize Messages
    var myMessages = myApp.messages('.messages');

    // Initialize Messagebar
    var myMessagebar = myApp.messagebar('.messagebar');

    $$('.messagebar a.send-message').on('touchstart mousedown', function() {
        isFocused = document.activeElement && document.activeElement === myMessagebar.textarea[0];
    });
    $$('.messagebar a.send-message').on('click', function(e) {
        // Keep focused messagebar's textarea if it was in focus before
        if (isFocused) {
            e.preventDefault();
            myMessagebar.textarea[0].focus();
        }
        var messageText = myMessagebar.value();
        if (messageText.length === 0) {
            return;
        }
        // Clear messagebar
        myMessagebar.clear();

        // Add Message
        myMessages.addMessage({
            text: messageText,
            avatar: 'http://lorempixel.com/output/people-q-c-200-200-6.jpg',
            type: 'sent',
            date: 'Now'
        });
        conversationStarted = true;
        // Add answer after timeout
        if (answerTimeout) clearTimeout(answerTimeout);
        answerTimeout = setTimeout(function() {
            var answerText = answers[Math.floor(Math.random() * answers.length)];
            var person = people[Math.floor(Math.random() * people.length)];
            myMessages.addMessage({
                text: answers[Math.floor(Math.random() * answers.length)],
                type: 'received',
                name: person.name,
                avatar: person.avatar,
                date: 'Just now'
            });
        }, 2000);
    });

}])

.controller("NotificationsCtrl", [function() {
    $$('.ks-notification-1').on('click', function() {
        myApp.addNotification({
            message: 'Simple message'
        });
    });
    $$('.ks-notification-2').on('click', function() {
        myApp.addNotification({
            message: 'Multi-line message. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in magna nisi.',
        });
    });
    $$('.ks-notification-3').on('click', function() {
        myApp.addNotification({
            message: 'Nice yellow button',
            button: {
                text: 'Click me',
                color: 'yellow'
            }
        });
    });
    $$('.ks-notification-4').on('click', function() {
        myApp.addNotification({
            message: 'Close me to see Alert',
            button: {
                text: 'Close',
                color: 'lightgreen'
            },
            onClose: function() {
                myApp.alert('Notification closed');
            }
        });
    });
}])

.controller("PhotoBrowser", [function() {
    /* ===== Photo Browser Examples ===== */
    // Create photoprobsers first:
    var photoBrowserPhotos = [{
            url: 'img/beach.jpg',
            caption: 'Amazing beach in Goa, India'
        },
        'http://placekitten.com/1024/1024',
        'img/lock.jpg', {
            url: 'img/monkey.jpg',
            caption: 'I met this monkey in Chinese mountains'
        }, {
            url: 'img/mountains.jpg',
            caption: 'Beautiful mountains in Zhangjiajie, China'
        }

    ];
    var photoBrowserStandalone = myApp.photoBrowser({
        photos: photoBrowserPhotos
    });
    var photoBrowserPopup = myApp.photoBrowser({
        photos: photoBrowserPhotos,
        type: 'popup'
    });
    var photoBrowserPage = myApp.photoBrowser({
        photos: photoBrowserPhotos,
        type: 'page'
    });
    var photoBrowserDark = myApp.photoBrowser({
        photos: photoBrowserPhotos,
        theme: 'dark'
    });
    var photoBrowserPopupDark = myApp.photoBrowser({
        photos: photoBrowserPhotos,
        theme: 'dark',
        type: 'popup'
    });
    var photoBrowserLazy = myApp.photoBrowser({
        photos: photoBrowserPhotos,
        lazyLoading: true,
        theme: 'dark'
    });
    $$('.ks-pb-standalone').on('click', function() {
        photoBrowserStandalone.open();
    });
    $$('.ks-pb-popup').on('click', function() {
        photoBrowserPopup.open();
    });
    $$('.ks-pb-page').on('click', function() {
        photoBrowserPage.open();
    });
    $$('.ks-pb-popup-dark').on('click', function() {
        photoBrowserPopupDark.open();
    });
    $$('.ks-pb-standalone-dark').on('click', function() {
        photoBrowserDark.open();
    });
    $$('.ks-pb-lazy').on('click', function() {
        photoBrowserLazy.open();
    });
}])

.controller("PickerController", [function() {
    var today = new Date();

    // iOS Device picker
    var pickerDevice = myApp.picker({
        input: '#ks-picker-device',
        cols: [{
            textAlign: 'center',
            values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
        }]
    });

    // Describe yourself picker
    var pickerDescribe = myApp.picker({
        input: '#ks-picker-describe',
        rotateEffect: true,
        cols: [{
            textAlign: 'left',
            values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
        }, {
            values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
        }, ]
    });

    // Dependent values
    var carVendors = {
        Japanese: ['Honda', 'Lexus', 'Mazda', 'Nissan', 'Toyota'],
        German: ['Audi', 'BMW', 'Mercedes', 'Volkswagen', 'Volvo'],
        American: ['Cadillac', 'Chrysler', 'Dodge', 'Ford']
    };
    var pickerDependent = myApp.picker({
        input: '#ks-picker-dependent',
        rotateEffect: true,
        formatValue: function(picker, values) {
            return values[1];
        },
        cols: [{
            textAlign: 'left',
            values: ['Japanese', 'German', 'American'],
            onChange: function(picker, country) {
                if (picker.cols[1].replaceValues) {
                    picker.cols[1].replaceValues(carVendors[country]);
                }
            }
        }, {
            values: carVendors.Japanese,
            width: 160,
        }, ]
    });

    // Custom Toolbar
    var pickerCustomToolbar = myApp.picker({
        input: '#ks-picker-custom-toolbar',
        rotateEffect: true,
        toolbarTemplate: '<div class="toolbar">' +
            '<div class="toolbar-inner">' +
            '<div class="left">' +
            '<a href="#" class="link toolbar-randomize-link">Randomize</a>' +
            '</div>' +
            '<div class="right">' +
            '<a href="#" class="link close-picker">That\'s me</a>' +
            '</div>' +
            '</div>' +
            '</div>',
        cols: [{
            values: ['Mr', 'Ms'],
        }, {
            textAlign: 'left',
            values: ('Super Lex Amazing Bat Iron Rocket Lex Cool Beautiful Wonderful Raining Happy Amazing Funny Cool Hot').split(' ')
        }, {
            values: ('Man Luthor Woman Boy Girl Person Cutie Babe Raccoon').split(' ')
        }, ],
        onOpen: function(picker) {
            picker.container.find('.toolbar-randomize-link').on('click', function() {
                var col0Values = picker.cols[0].values;
                var col0Random = col0Values[Math.floor(Math.random() * col0Values.length)];

                var col1Values = picker.cols[1].values;
                var col1Random = col1Values[Math.floor(Math.random() * col1Values.length)];

                var col2Values = picker.cols[2].values;
                var col2Random = col2Values[Math.floor(Math.random() * col2Values.length)];

                picker.setValue([col0Random, col1Random, col2Random]);
            });
        }
    });

    // Inline date-time
    var pickerInline = myApp.picker({
        input: '#ks-picker-date',
        container: '#ks-picker-date-container',
        toolbar: false,
        rotateEffect: true,
        value: [today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), (today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes())],
        onChange: function(picker, values, displayValues) {
            var daysInMonth = new Date(picker.value[2], picker.value[0] * 1 + 1, 0).getDate();
            if (values[1] > daysInMonth) {
                picker.cols[1].setValue(daysInMonth);
            }
        },
        formatValue: function(p, values, displayValues) {
            return displayValues[0] + ' ' + values[1] + ', ' + values[2] + ' ' + values[3] + ':' + values[4];
        },
        cols: [
            // Months
            {
                values: ('0 1 2 3 4 5 6 7 8 9 10 11').split(' '),
                displayValues: ('January February March April May June July August September October November December').split(' '),
                textAlign: 'left'
            },
            // Days
            {
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
            },
            // Years
            {
                values: (function() {
                    var arr = [];
                    for (var i = 1950; i <= 2030; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Space divider
            {
                divider: true,
                content: '&nbsp;&nbsp;'
            },
            // Hours
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 23; i++) {
                        arr.push(i);
                    }
                    return arr;
                })(),
            },
            // Divider
            {
                divider: true,
                content: ':'
            },
            // Minutes
            {
                values: (function() {
                    var arr = [];
                    for (var i = 0; i <= 59; i++) {
                        arr.push(i < 10 ? '0' + i : i);
                    }
                    return arr;
                })(),
            }
        ]
    });
}])

.controller("PreloaderController", [function() {
    $$('.demo-indicator').on('click', function() {
        myApp.showIndicator();
        setTimeout(function() {
            myApp.hideIndicator();
        }, 2000);
    });
    $$('.demo-preloader').on('click', function() {
        myApp.showPreloader();
        setTimeout(function() {
            myApp.hidePreloader();
        }, 2000);
    });
    $$('.demo-preloader-custom').on('click', function() {
        myApp.showPreloader('My text...');
        setTimeout(function() {
            myApp.hidePreloader();
        }, 2000);
    });
}])

.controller("SwipeDeleteController", [function() {
    $$('.demo-remove-callback').on('deleted', function() {
        myApp.alert('Thanks, item removed!');
    });
    $$('.demo-reply').on('click', function() {
        myApp.alert('Reply');
    });
    $$('.demo-mark').on('click', function() {
        myApp.alert('Mark');
    });
    $$('.demo-forward').on('click', function() {
        myApp.alert('Forward');
    });
}])

.controller("MediaListController", [function() {
    $$('.demo-remove-callback').on('deleted', function() {
        myApp.alert('Thanks, item removed!');
    });
    $$('.demo-reply').on('click', function() {
        myApp.alert('Reply');
    });
    $$('.demo-mark').on('click', function() {
        myApp.alert('Mark');
    });
    $$('.demo-forward').on('click', function() {
        myApp.alert('Forward');
    });
}])

.controller("PullToRefresh", ["$element", function($element) {
    // Dummy Content
    var songs = ['Yellow Submarine', 'Don\'t Stop Me Now', 'Billie Jean', 'Californication'];
    var authors = ['Beatles', 'Queen', 'Michael Jackson', 'Red Hot Chili Peppers'];
    // Pull to refresh content
    var ptrContent = $$($element).find('.pull-to-refresh-content');
    // Add 'refresh' listener on it
    ptrContent.on('refresh', function(e) {
        // Emulate 2s loading
        setTimeout(function() {
            var picURL = 'http://lorempixel.com/88/88/abstract/' + Math.round(Math.random() * 10);
            var song = songs[Math.floor(Math.random() * songs.length)];
            var author = authors[Math.floor(Math.random() * authors.length)];
            var linkHTML = '<li class="item-content">' +
                '<div class="item-media"><img src="' + picURL + '" width="44"/></div>' +
                '<div class="item-inner">' +
                '<div class="item-title-row">' +
                '<div class="item-title">' + song + '</div>' +
                '</div>' +
                '<div class="item-subtitle">' + author + '</div>' +
                '</div>' +
                '</li>';
            ptrContent.find('ul').prepend(linkHTML);
            // When loading done, we need to "close" it
            myApp.pullToRefreshDone();
        }, 2000);
    });
}])

.controller("SortableList", [function() {
    // Sortable toggler
    $$('.list-block.sortable').on('open', function() {
        $$('.toggle-sortable').text('Done');
    });
    $$('.list-block.sortable').on('close', function() {
        $$('.toggle-sortable').text('Edit');
    });

}])

.controller("LoginScreenEmbedded", ["$element", function($element) {
    $$($element).find('.button').on('click', function() {
        var username = $$($element).find('input[name="username"]').val();
        var password = $$($element).find('input[name="password"]').val();
        myApp.alert('Username: ' + username + ', password: ' + password, function() {
            mainView.router.back();
        });
    });
    $$('.login-screen').find('.button').on('click', function() {
        var username = $$('.login-screen').find('input[name="username"]').val();
        var password = $$('.login-screen').find('input[name="password"]').val();
        myApp.alert('Username: ' + username + ', password: ' + password, function() {
            myApp.closeModal('.login-screen');
        });
    });
}])

.controller("ColorThemes", ["$element", function($element) {
    $$($element).find('.ks-color-theme').click(function() {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('theme') === 0) classList.remove(classList[i]);
        }
        classList.add('theme-' + $$(this).attr('data-theme'));
    });
    $$($element).find('.ks-layout-theme').click(function() {
        var classList = $$('body')[0].classList;
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('layout-') === 0) classList.remove(classList[i]);
        }
        classList.add('layout-' + $$(this).attr('data-theme'));
    });
}])

.controller("VirtualList", ["$element", function($element) {
    // Generate array with 10000 demo items:
    var items = [];
    for (var i = 0; i < 10000; i++) {
        items.push({
            title: 'Item ' + i,
            subtitle: 'Subtitle ' + i
        });
    }

    // Create virtual list
    var virtualList = myApp.virtualList($$($element).find('.virtual-list'), {
        // Pass array with items
        items: items,
        // Custom search function for searchbar
        searchAll: function(query, items) {
            var found = [];
            for (var i = 0; i < items.length; i++) {
                if (items[i].title.indexOf(query) >= 0 || query.trim() === '') found.push(i);
            }
            return found; //return array with mathced indexes
        },
        // List item Template7 template
        template: '<li>' +
            '<a href="#" class="item-link item-content">' +
            '<div class="item-inner">' +
            '<div class="item-title-row">' +
            '<div class="item-title">{{title}}</div>' +
            '</div>' +
            '<div class="item-subtitle">{{subtitle}}</div>' +
            '</div>' +
            '</a>' +
            '</li>',
        // Item height
        height: 73,
    });
}])

.controller("SwiperGallery", [function() {
    var swiperTop = myApp.swiper('.ks-swiper-gallery-top', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        spaceBetween: 10
    });
    var swiperThumbs = myApp.swiper('.ks-swiper-gallery-thumbs', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: true,
        touchRatio: 0.2,
        slideToClickedSlide: true
    });
    swiperTop.params.control = swiperThumbs;
    swiperThumbs.params.control = swiperTop;
}])

.controller("Chips", ["$element", function($element) {
    $$($element).find('.chip-delete').on('click', function(e) {
        e.preventDefault();
        var chip = $$(this).parents('.chip');
        myApp.confirm('Do you want to delete this tiny demo Chip?', function() {
            chip.remove();
        });
    });
}])

.controller("ProgressBar", [function() {
    $$('.ks-demo-progressbar-inline .button').on('click', function() {
        var progress = $$(this).attr('data-progress');
        var progressbar = $$('.ks-demo-progressbar-inline .progressbar');
        myApp.setProgressbar(progressbar, progress);
    });
    $$('.ks-demo-progressbar-load-hide .button').on('click', function() {
        var container = $$('.ks-demo-progressbar-load-hide p:first-child');
        if (container.children('.progressbar').length) return; //don't run all this if there is a current progressbar loading

        myApp.showProgressbar(container, 0);

        // Simluate Loading Something
        var progress = 0;

        function simulateLoading() {
            setTimeout(function() {
                var progressBefore = progress;
                progress += Math.random() * 20;
                myApp.setProgressbar(container, progress);
                if (progressBefore < 100) {
                    simulateLoading(); //keep "loading"
                } else myApp.hideProgressbar(container); //hide
            }, Math.random() * 200 + 200);
        }
        simulateLoading();
    });
    $$('.ks-demo-progressbar-overlay .button').on('click', function() {
        // Add Directly To Body
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading

        myApp.showProgressbar(container, 0, 'yellow');

        // Simluate Loading Something
        var progress = 0;

        function simulateLoading() {
            setTimeout(function() {
                var progressBefore = progress;
                progress += Math.random() * 20;
                myApp.setProgressbar(container, progress);
                if (progressBefore < 100) {
                    simulateLoading(); //keep "loading"
                } else myApp.hideProgressbar(container); //hide
            }, Math.random() * 200 + 200);
        }
        simulateLoading();
    });
    $$('.ks-demo-progressbar-infinite-overlay .button').on('click', function() {
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
        myApp.showProgressbar(container, 'yellow');
        setTimeout(function() {
            myApp.hideProgressbar();
        }, 5000);
    });
    $$('.ks-demo-progressbar-infinite-multi-overlay .button').on('click', function() {
        var container = $$('body');
        if (container.children('.progressbar, .progressbar-infinite').length) return; //don't run all this if there is a current progressbar loading
        myApp.showProgressbar(container, 'multi');
        setTimeout(function() {
            myApp.hideProgressbar();
        }, 5000);
    });
}])

.controller("Autocomplete", [function() {
    // Fruits data demo array
    var fruits = ('Apple Apricot Avocado Banana Melon Orange Peach Pear Pineapple').split(' ');

    // Simple Dropdown
    var autocompleteDropdownSimple = myApp.autocomplete({
        input: '#autocomplete-dropdown',
        openIn: 'dropdown',
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with all values
    var autocompleteDropdownAll = myApp.autocomplete({
        input: '#autocomplete-dropdown-all',
        openIn: 'dropdown',
        source: function(autocomplete, query, render) {
            var results = [];
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with placeholder
    var autocompleteDropdownPlaceholder = myApp.autocomplete({
        input: '#autocomplete-dropdown-placeholder',
        openIn: 'dropdown',
        dropdownPlaceholderText: 'Try to type "Apple"',
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

    // Dropdown with ajax data
    var autocompleteDropdownAjax = myApp.autocomplete({
        input: '#autocomplete-dropdown-ajax',
        openIn: 'dropdown',
        preloader: true, //enable preloader
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 20, //limit to 20 results
        dropdownPlaceholderText: 'Try "JavaScript"',
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                url: 'js/autocomplete-languages.json',
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function(data) {
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        }
    });

    // Simple Standalone
    var autocompleteStandaloneSimple = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function(autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone').find('.item-after').text(value[0]);
            // Add item value to input value
            $$('#autocomplete-standalone').find('input').val(value[0]);
        }
    });

    // Standalone Popup
    var autocompleteStandalonePopup = myApp.autocomplete({
        openIn: 'popup', //open in page
        opener: $$('#autocomplete-standalone-popup'), //link that opens autocomplete
        backOnSelect: true, //go back after we select something
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function(autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone-popup').find('.item-after').text(value[0]);
            // Add item value to input value
            $$('#autocomplete-standalone-popup').find('input').val(value[0]);
        }
    });

    // Multiple Standalone
    var autocompleteStandaloneMultiple = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone-multiple'), //link that opens autocomplete
        multiple: true, //allow multiple values
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Find matched items
            for (var i = 0; i < fruits.length; i++) {
                if (fruits[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(fruits[i]);
            }
            // Render items by passing array with result items
            render(results);
        },
        onChange: function(autocomplete, value) {
            // Add item text value to item-after
            $$('#autocomplete-standalone-multiple').find('.item-after').text(value.join(', '));
            // Add item value to input value
            $$('#autocomplete-standalone-multiple').find('input').val(value.join(', '));
        }
    });

    // Standalone With Ajax
    var autocompleteStandaloneAjax = myApp.autocomplete({
        openIn: 'page', //open in page
        opener: $$('#autocomplete-standalone-ajax'), //link that opens autocomplete
        multiple: true, //allow multiple values
        valueProperty: 'id', //object's "value" property name
        textProperty: 'name', //object's "text" property name
        limit: 50,
        preloader: true, //enable preloader
        preloaderColor: 'white', //preloader color
        source: function(autocomplete, query, render) {
            var results = [];
            if (query.length === 0) {
                render(results);
                return;
            }
            // Show Preloader
            autocomplete.showPreloader();
            // Do Ajax request to Autocomplete data
            $$.ajax({
                url: 'js/autocomplete-languages.json',
                method: 'GET',
                dataType: 'json',
                //send "query" to server. Useful in case you generate response dynamically
                data: {
                    query: query
                },
                success: function(data) {
                    // Find matched items
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(data[i]);
                    }
                    // Hide Preoloader
                    autocomplete.hidePreloader();
                    // Render items by passing array with result items
                    render(results);
                }
            });
        },
        onChange: function(autocomplete, value) {
            var itemText = [],
                inputValue = [];
            for (var i = 0; i < value.length; i++) {
                itemText.push(value[i].name);
                inputValue.push(value[i].id);
            }
            // Add item text value to item-after
            $$('#autocomplete-standalone-ajax').find('.item-after').text(itemText.join(', '));
            // Add item value to input value
            $$('#autocomplete-standalone-ajax').find('input').val(inputValue.join(', '));
        }
    });
}])

.directive("panelLeft", function() {
    return {
        templateUrl: "panel-left.html"
    }
})

.directive("panelRight", function() {
    return {
        templateUrl: "panel-right.html"
    }
});

document.addEventListener("DOMContentLoaded", function(){
    angular.bootstrap(document, ['AngularApp']);
});
