(function($scope) {
    function makeNewRoom (Room, $modal, $scope) {
        $scope.getModal = function () {
            $modalInstance = $modal.open({
                animation: true,
                templateUrl: '../../templates/modal.html',
                controller: 'newRoomController',
                size: ''
            }); 
            $scope.close = function () {
                $modalInstance.close();
            }
        }
        
    }


    angular
        .module('blocChat')
        .controller('newRoomController', ['Room', '$modal', makeNewRoom], '$scope');
})();