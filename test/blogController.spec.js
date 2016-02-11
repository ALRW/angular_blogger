describe('BlogController', function(){
  var ctrl;
  var mockPost = {
      "title": "My new post",
      "description": "A very new post",
      "username": "User1",
      "content": "Lorem ipsum dolor sit amet"
  };
  beforeEach(module('AngularBlogger'));

  beforeEach(inject(function($controller){
    ctrl = $controller('BlogController');
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
