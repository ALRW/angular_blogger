describe('AuthController', function(){
  var auth, $state;
  beforeEach(function(){
    module('AngularBlogger', function($provide){
      auth = {};
      $state = {};

      $provide.value('auth', auth);
      $provide.value('$state', $state);
    });
    module('ui.router');
  });

  beforeEach(inject(function($controller){
    ctrl = $controller('AuthController');
  }));

  it('has a register method', function(){
    expect(ctrl.register).toBeDefined();
  });
});
