angular
    .module('blocChat')
    .controller("sideBarController", function($scope, Room) {
        $scope.roomList = Room.all;
    });