'use strict';

angular.module('aplicaleApp.parents', []).controller('parentsCtrl', ['$scope', '$state', function ($scope, $state) {
    $scope.msg = $state.current.data.user.name;
}]);