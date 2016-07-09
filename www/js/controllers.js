angular.module('starter.controllers', [])

.controller('tabController', ['$scope',function($scope) {}])

.controller('ChatsCtrl', ['$scope',function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});


}])

.controller('homeController', ['$scope',function($scope, $stateParams, Chats) {

}])

.controller('listController', ['$scope',function($scope, $stateParams, Chats) {

}])

.controller('locationController', ['$scope',function($scope, $stateParams, Chats) {

}])

.controller('myController', ['$scope',function($scope) {

}]);
