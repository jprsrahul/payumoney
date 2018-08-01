'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  'angular-hmac-sha512',
  'ngSanitize',
  // TODO: load other modules selected during generation
])
.controller('payumoney', function ($scope, $crypthmac) {
  $scope.payuMoneyFunc = function () {
    var salt = "18kj65ZEVs"; //Your Salt Key Provided By Payumoney
    $scope.txnId = '123';
		//$hashSequence = "key|txnid|amount|productinfo|firstname|email|udf1|udf2|udf3|udf4|udf5|udf6|udf7|udf8|udf9|udf10";
    console.log("Merchant Key"+$scope.marchentKey);
    console.log("Transaction Key"+$scope.txnId);
    console.log("Product Info"+$scope.productinfo);
    var string = $scope.marchentKey + '|' + $scope.txnId + '|' + $scope.amount + '|' + $scope.productinfo + '|' + $scope.firstname + '|' + $scope.email+'|||||||||||'+salt;
    //var encrypttext = string;
    //console.log(encrypttext);
    //$scope.hash = encrypttext;
    //var salt = '18kj65ZEVs'; //Your Salt Key Provided By Payumoney
    //var hashSequence = 'key|txnid|amount|productinfo|firstname|email|||||||||||salt';
    //var string = $scope.marchentKey + '|' + $scope.txnId + '|' + $scope.amount + '|' + $scope.productinfo + '|' + $scope.firstname + '|' + $scope.email + '|||||||||||' + salt;
    //var encrypttext = '19FD3D6487B4FBBDEA143475FEA33F18F74BA02B0919D4A59D8FF36BB689CE8039EC5952DBD6F21599FA5FD50FC87A482F6EFD9F62F67199E53230C46FF2AA9C';
    //console.log(encrypttext);
    //var enc = sha512(string);
    //console.log(enc);
    //$scope.hash = $scope.str;
    //var string = 'P3S4RRyL|123|20|propertyPost|Rahul|jprs.kumar@gmail.com|||||||||||18kj65ZEVs';
    //console.log(encrypttext);
    //console.log(string);
    console.log('mmmmmmmm' + $scope.hash);
    //$scope.hash = ;
    //var encrypttext1 = $crypthmac.encrypt( '');
    var encrypttext = $crypthmac.encrypt(string, '');
    //encrypttext.update(string);
    //encrypttext.hex();
    //var jsSha = new jsSHA("string to hash");
    //var hash = jsSha.getHash("SHA-512", "HEX");
    //var enc = sha512(string);
    console.log(encrypttext);
    //var enc = '51dfba98047c33be863809213543989e2e3554403de3350c15acc704aae46dd2ce7f2fd0ed96cab01f0b6078ce0e555b5e8dc81ecfc612355f179770aa62d3e9';
    //var value = CryptoJS.SHA256('P3S4RRyL|123|20|propertyPost|Rahul|jprs.kumar@gmail.com|||||||||||18kj65ZEVs');
    //console.log(value);
    $scope.hash = encrypttext;
    alert('dddddd');
  };
  /*$scope.pay = function(string)
  {
    $scope.str = [];
      $http.get('http://localhost:4467/sum?a=' + string)
       .then(function (response) {
         $scope.details = response.data;
         console.log($scope.details);
         console.log(response.data);
         $scope.str = response.data;
         console.log($scope.str);
    });
    console.log($scope.str);
    return $scope.str;
  };*/
})
.config(function ($stateProvider, $urlRouterProvider) {
    // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/list');
  $stateProvider
      // this state is placed in the <ion-nav-view> in the index.html
      .state('main', {
        url: '/main',
        abstract: true,
        templateUrl: 'main/templates/tabs.html'
      })
      .state('main.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.listDetail', {
        url: '/list/detail',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/list-detail.html',
            // controller: 'SomeCtrl as ctrl'
          }
        }
      })
      .state('main.debug', {
        url: '/debug',
        views: {
          'tab-debug': {
            templateUrl: 'main/templates/debug.html',
            controller: 'DebugCtrl as ctrl'
          }
        }
      });
});
