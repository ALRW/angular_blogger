angularBlogger.controller('NewPostController', ['posts', function(posts) {
  var self = this;
  self.posts = posts.posts;

  self.addPost = function() {

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
    posts.create(newPost);
    resetFields();
  };

  var resetFields = function(){
    self.warning = '';
    self.title = '';
    self.description = '';
    self.content = '';
  };
}]);
