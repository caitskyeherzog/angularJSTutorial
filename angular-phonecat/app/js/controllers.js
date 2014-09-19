'use strict';

/* Controllers */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function($scope) {
    $scope.phones = [
        {'name': 'Galaxy Note 3',
            'snippet': 'Now, your ordinary daily tasks become extraordinary.'},
        {'name': 'iPhone 6',
            'snippet': 'iPhone 6 isn’t simply bigger — it’s better in every way.'},
        {'name': 'LG G3',
            'snippet': 'Get the ultimate in smart technology.'}
    ];
});
