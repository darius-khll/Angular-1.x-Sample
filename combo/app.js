
var app = angular.module('app', []);

app.controller("ctrl", function ($scope) {
    $scope.combo = 2;

    $scope.init = function () {
        $scope.data = [];
        for (let i = 1; i < 12; i++) {
            $scope.data.push({"Id": i, "Name": "name " + i});
        }
    };

    $scope.init();
});