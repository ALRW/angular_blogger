describe('authentication', function(){
  var auth, $http, $window;
  beforeEach(module("AngularBlogger", function($provide){
    $http = {};
    $window = {
      localStorage: {
        removeItem: function(){}
      },
      atob: function(arg){
        return '{"exp":1000000000000,"username":"user"}';
      }
    };

    $provide.value('$http', $http);
    $provide.value('$window', $window);
  }));

  beforeEach(inject(function(_auth_){
    auth = _auth_;
  }));

  it("can save and retrieve a token", function(){
    auth.saveToken('hello');
    expect(auth.getToken()).toEqual('hello');
  });

  it('shows whether a user is logged in', function(){
    expect(auth.isLoggedIn()).toBeFalsy();
    auth.saveToken('h.ello');
    expect(auth.isLoggedIn()).toBeTruthy();
  });

  it('shows the current user', function(){
    auth.saveToken('h.ello');
    expect(auth.currentUser()).toEqual('user');
  });

  it('can logout', function(){
    spyOn($window.localStorage, "removeItem");
    auth.saveToken('hello');
    auth.logOut();
    expect($window.localStorage.removeItem).toHaveBeenCalledWith('angular-blogger-token');
  });


});
