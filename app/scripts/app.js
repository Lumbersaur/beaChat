angular.module('blocChat', ['firebase', 'ui.router'])
    .config(['$stateProvider', function ($stateProvider) {
        var home = {
                name: 'home',
                url: '/',
                templateUrl: 'index.html'
            };
        $stateProvider.state(home);  
    }])
    .run(['$state', function ($state) {
        $state.transitionTo('home');
    }]);


