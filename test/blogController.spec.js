describe('BlogController', function(){
  var ctrl;
  beforeEach(module('AngularBlogger'));

  beforeEach(inject(function($controller){
    ctrl = $controller('BlogController');
  }));

  it("initialises with dummy data", function(){
    console.log(ctrl);
    expect(ctrl.posts).toBeDefined();
  });
});
