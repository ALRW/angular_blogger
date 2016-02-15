describe('NavigationController', function(){
  beforeEach(function(){
    module('AngularBlogger');
    module('ui.router');
  });

  beforeEach(inject(function($controller){
    ctrl = $controller('NavigationController');
  }));

  it('maintains the users state through the auth function', function(){
    expect(ctrl.isLoggedIn).toBeDefined();
    expect(ctrl.currentUser).toBeDefined();
    expect(ctrl.logOut).toBeDefined();
  });
});
