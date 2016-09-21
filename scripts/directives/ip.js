angular.module('ipApp')
  .directive('ipAddress', ipAddress);

  function ipAddress(){
    var directive = {
      scope: { }
      restrict: 'E',
      templateUrl: './templates/ipCardTemplate.html',
      replace: true,
      controller: ipDirController,
      controllerAs: 'ipDirController'
    };
  }
}
