describe('AuthController', function(){
  var auth, $state;
  beforeEach(function(){
    module('AngularBlogger', function($provide){
      auth = {
        register: function(arg){},
        logIn: function(arg){}
      };
      $state = {};

      $provide.value('auth', auth);
      $provide.value('$state', $state);
    });
    module('ui.router');
  });

  beforeEach(inject(function($controller){
    ctrl = $controller('AuthController');
  }));

  it('has a register wrapper method', function(){
    expect(ctrl.register).toBeDefined();
  });

  it('has a logIn wrapper method', function(){
    expect(ctrl.logIn).toBeDefined();
  });
});
