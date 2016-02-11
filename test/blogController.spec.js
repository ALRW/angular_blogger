describe('BlogController', function(){
  var ctrl;

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
