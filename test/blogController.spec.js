describe('BlogController', function(){
  var ctrl;
  var mockPost = {
      "title": "My new post",
      "description": "A very new post",
      "username": "User1",
      "content": "Lorem ipsum dolor sit amet"
  };
  beforeEach(module('AngularBlogger'));

  beforeEach(module({
    posts: {
      posts: [{
        "title": "My new post",
        "description": "A very new post",
        "username": "User1",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      }]
    }
  }));

  beforeEach(inject(function($controller){
    ctrl = $controller('BlogController', posts);
  }));

  it("initialises with dummy data", function(){
    expect(ctrl.posts).toBeDefined();
  });

  it("shows a warning if adding a blank post", function(){
    ctrl.addPost();
    expect(ctrl.warning).toEqual("One or more fields are blank. Please Complete your post before submitting.");
  });

  it('can add new posts', function(){
    ctrl.title = "My new post";
    ctrl.description = "A very new post";
    ctrl.content = "Lorem ipsum dolor sit amet";
    ctrl.addPost();
    expect(ctrl.posts[1]).toEqual(mockPost);
  });
});
