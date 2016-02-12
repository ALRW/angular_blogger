angularBlogger.controller('AuthController', ['auth',
  '$state',
  function(auth, $state) {
    var self = this;
    self.user = {};

    self.register = function(){
      auth.register(self.user).error(function(error){
        self.error = error;
      }).then(function(){
        $state.go('home');
      });
    };

    self.logIn = function(){
      auth.logIn(self.user).error(function(error){
        self.error = error;
      }).then(function(){
        $state.go('home');
      });
    };
  }
]);
