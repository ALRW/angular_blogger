describe('postFactory', function(){
  beforeEach(module("AngularBlogger"));

  it("is defined", inject(function(posts){
    expect(posts).toBeDefined();
  }));
});
