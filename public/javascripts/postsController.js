angularBlogger.controller('PostsController', [
  'posts',
  '$stateParams',
  function(posts, $stateParams) {
    var self = this;
    self.post = posts.posts[$stateParams.id];
  }
]);
