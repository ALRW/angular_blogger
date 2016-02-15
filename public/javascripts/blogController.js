angularBlogger.controller('BlogController', ['posts','$interval', function(posts, $interval){
  var self = this;
  self.posts = posts.posts;

  self.featuredHelper = function(){
    if(self.posts[0]){
      i = self.posts.length;
      self.featured = self.posts[Math.floor(Math.random() * (i))];
    }
  };
  $interval(self.featuredHelper, 300000);
}]);
