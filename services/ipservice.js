angular.module('ipApp')
.service('ipService', ipService);

ipService.$inject = ['$http', '$q'];
function ipService($http, $q) {
console.log('service');
var self = this;  // similar to vm = this, but we're not working with a view-model here so using the 'generic' form for this closure
self.data = {};


function data() {
  console.log('someone requested their geoloc data');
  // create a new 'deferred'
  var def = $q.defer();
  // fire off the request
    $http({
      method: 'GET',
      url: 'http://freegeoip.net/json/'
    }).then(onSuccess, onError);

    return def.promise;

    function onSuccess(resposne){
      console.log('here is all of the data')
      self.data = response.data,
      def.resolve(self.data);
    }
    function onError(error) {
    console.log('there was an error: ', error);
        self.data.error = {error: error};
        def.reject(self.data.error);
    }
  }
}
