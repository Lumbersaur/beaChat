(function(angular) {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        return rooms;
    };

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room])
        .controller("sideBarController", function($scope, Room) {
            $scope.roomList = Room;
    });
})(angular); 
