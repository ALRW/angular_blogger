angularBlogger.controller('BlogController', ['posts', function(posts){
  var self = this;
  self.posts = posts.posts;
}]);
