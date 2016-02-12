var angularBlogger = angular.module('AngularBlogger', ['ui.router']);

angularBlogger.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'BlogController as blogCtrl',
        resolve: {
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      })
      .state('new', {
        url: '/new',
        templateUrl: '/new.html',
        controller: 'NewPostController as newPostCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsController as postsCtrl'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
