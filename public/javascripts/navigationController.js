angularBlogger.controller('NavigationController', ['auth', function(auth){
  var self = this;
  self.isLoggedIn = auth.isLoggedIn;
  self.currentUser = auth.currentUser;
  self.logOut = auth.logOut;
}]);
