describe('BlogController', function(){
  var ctrl, serviceMock;
  var mockPost = {
      "title": "My new post",
      "description": "A very new post",
      "username": "User1",
      "content": "Lorem ipsum dolor sit amet"
  };
  beforeEach(function(){
    module('AngularBlogger');
    module('ui.router');
  });

  beforeEach(inject(function($controller){
    ctrl = $controller('BlogController');
  }));

  it("holds information on all posts", function(){
    expect(ctrl.posts).toBeDefined();
  });


});
