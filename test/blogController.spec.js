describe('BlogController', function(){
  var ctrl;
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

  it('has a worker method to set a featured post', function(){
    for(var i = 0; i < 5; i++){
    ctrl.posts.push(mockPost);
  }
    ctrl.featuredHelper();
    expect(ctrl.featured).toEqual(mockPost);
  });

});
