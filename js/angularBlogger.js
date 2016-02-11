var angularBlogger = angular.module('AngularBlogger', ['ui.router']);

angularBlogger.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'BlogController as blogCtrl'
      })
      .state('new',{
        url: '/new',
        templateUrl: '/new.html',
        controller: 'NewPostController as newPostCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
