angularBlogger.factory('posts', ['$http', 'auth', function($http, auth) {
  var o = {
    posts: []
  };

  o.getAll = function() {
    return $http.get('/posts')
      .success(function(data) {
        angular.copy(data, o.posts);
      });
  };

  o.create = function(post) {
    return $http.post('/posts', post, {
      headers: {
        Authorization: 'Bearer ' + auth.getToken()
      }
    }).success(function(data) {
      o.posts.push(data);
    });
  };

  return o;
}]);
