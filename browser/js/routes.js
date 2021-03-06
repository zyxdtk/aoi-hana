angular.module('aoiHana')
    .config(function($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/people");
        //
        // Now set up the states
        $stateProvider
        .state('blank', {
            url: "/blank",
            templateUrl: "partials/blank.html"
        })
        .state('people', {
            url: "/people",
            templateUrl: "partials/people.html"                    
        })
        .state('relationchart', {
            url: "/relationchart",
            templateUrl: "partials/relationchart.html"                    
        })    
        .state('historychart', {
            url: "/historychart",
            templateUrl: "partials/historychart.html"                    
        })   
        ;
});