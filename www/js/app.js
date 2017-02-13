// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
app.service('todoService', function($http) {
  var me = this;
  var API = 'http://localhost:3000/todos'

  me.get = function() {
    return $http.get(API).then(function (res) {
      return res.data;
    })
  }

  me.add = function (todo) {
    return $http.post(API, todo).then(function (res) {
      console.log(res)
    })
  }

  me.edit = function (todo) {
    return $http.put(API, todo).then(function (res) {
    })
  }

  me.delete = function (todo) {
    return $http.delete(API, todo).then(function (res) {
    })
  }
});

app.controller('todoController', ['$scope', 'todoService', '$http',
  function($scope, todoService) {
    var me = this;

    me.init = function () {
      todoService.get().then(function (res) {
        $scope.todos = res;
        console.log('tasks received!');
      });
    }
    me.init()

    me.addTask = function () {
      todoService.add().then(function (res) {
        console.log('clicked')
      });
    }

    me.editTask = function () {
      todoService.edit().then(function (res) {
        console.log('clicked')
      });
    }

    me.deleteTask = function () {
      todoService.delete().then(function (res) {
        console.log('clicked')
      });
    }
  }
]);
