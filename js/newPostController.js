angularBlogger.controller('NewPostController', ['posts', function(posts) {
  var self = this;
  self.posts = posts.posts;

  self.addPost = function() {
    self.warning = '';

    var newPost = {
      "title": self.title,
      "description": self.description,
      "username": "User1",
      "content": self.content
    };

    if (!self.content || !self.description || !self.title) {
      self.warning = "One or more fields are blank. Please Complete your post before submitting.";
      return;
    }

    self.posts.push(newPost);

  };
}]);
