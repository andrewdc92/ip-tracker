angular.module('ipApp')
  .directive('ipAddress', ipAddress);

  function ipAddress(){
    var directive = {
      scope: {},
      restrict: 'E',
      templateUrl: 'templates/ipCardTemplate.html',
      replace: true,
      controller: ipDirController,
      controllerAs: 'ipDirController'
    };


  ipDirController.$inject=['$http'];
  function ipDirController($http){
    var vm = this;
    var url="http://freegeoip.net/json/";
    console.log(vm.data);
    vm.getData = function(data){
      $http({
        method:'GET',
        url: url
      }).then(function(response){
        console.log(response);
        vm.data = response.data;
      }, function(error){
        console.log(error);
      });

    };
    vm.getData(vm.data);
  };


    return directive
  }
  // response is not different than data in this case, no?
