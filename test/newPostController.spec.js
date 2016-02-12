describe('NewPostController', function(){
  var mockPost = {
      "title": "My new post",
      "description": "A very new post",
      "username": "User1",
      "content": "Lorem ipsum dolor sit amet"
  };
  var posts = {
    create: function(newPost){}
  };
  beforeEach(function(){
    module('AngularBlogger');
    module('ui.router');
  });

  beforeEach(inject(function($controller, posts){
    ctrl = $controller('NewPostController', {posts:posts});
  }));

  it("has access to posts", function(){
    expect(ctrl.posts).toBeDefined();
  });

  it("shows a warning if adding a blank post", function(){
    ctrl.addPost();
    expect(ctrl.warning).toEqual("One or more fields are blank. Please Complete your post before submitting.");
  });

  it('resets fields after being called', function(){
    ctrl.title = "My new post";
    ctrl.description = "A very new post";
    ctrl.content = "Lorem ipsum dolor sit amet";
    ctrl.addPost();
    expect(ctrl.title).toBe('');
    expect(ctrl.description).toBe('');
    expect(ctrl.content).toBe('');
  });
});
