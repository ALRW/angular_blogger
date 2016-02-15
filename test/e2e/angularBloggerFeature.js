describe('App: AngularBlogger', function() {
  var username = "user";
  var email = "email@email.com";
  var pw = "password";
  var title = "New Post";
  var description = "This is a new post";
  var contents = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  it('has a title', function() {
    browser.get('http://localhost:3000/#/home');
    expect(browser.getTitle()).toEqual('Angular Blogger');
    });

  it('user cannot add post if not logged in', function(){
    element.all(by.css('li')).first().click();
    expect(element.all(by.css('h3')).get(1).getText()).toEqual('You need to Log In or Register before you can add a post.');
  });

  it('user received an warning if submitting an incomplete registration form', function(){
    element.all(by.css('li')).get(1).click();
    element(by.css('button')).click();
    expect(element.all(by.css('h3')).first().getText()).toEqual('Please Fill out all the required fields.');
  });

  it('user can register', function(){
    element.all(by.css('input')).first().sendKeys(username);
    element.all(by.css('input')).get(1).sendKeys(email);
    element.all(by.css('input')).get(2).sendKeys(pw);
    element(by.css('button')).click();
    expect(element(by.css('.user')).getText()).toEqual(username);
  });

  it('user can add a new post', function(){
    element.all(by.css('li')).first().click();
    element.all(by.css('input')).first().sendKeys(title);
    element.all(by.css('input')).get(1).sendKeys(description);
    element(by.css('textarea')).sendKeys(contents);
    element(by.css('button')).click();
    element(by.css('.navbar-brand')).click();
    expect(element(by.css('.publishedTitle')).getText()).toEqual('Title: ' + title);
    expect(element(by.css('.publishedAuthor')).getText()).toEqual('Author: ' + username);
    expect(element(by.css('.publishedDescription')).getText()).toEqual('Description: ' + description);
  });

  it('has a featured post if there are any posts present on the site', function(){
    expect(element(by.css('h2')).getText()).toEqual('Featured Post');
    expect(element(by.css('h5')).getText()).toEqual('By: ' + username);
  });

  it('user can view a post', function(){
    element(by.css('.publishedTitle')).click();
    expect(element(by.css('h3')).getText()).toEqual(title);
    expect(element.all(by.css('p')).first().getText()).toEqual('Author: ' + username);
    expect(element.all(by.css('p')).get(1).getText()).toEqual(contents);
  });

  it('user can log out', function(){
    element.all(by.css('li')).get(4).click();
    expect(element.all(by.css('li')).get(1).getText()).toEqual("Sign Up");
    expect(element.all(by.css('li')).get(2).getText()).toEqual("Login");
  });

  it('user must input correct details to log in', function(){
    element.all(by.css('li')).get(2).click();
    element(by.css('button')).click();
    expect(element(by.css('h3')).getText()).toEqual('Please fill out all the required fields.');
    element.all(by.css('input')).first().sendKeys('h');
    element.all(by.css('input')).get(1).sendKeys('h');
    element(by.css('button')).click();
    expect(element(by.css('h3')).getText()).toEqual('Incorrect username or password.');
  });


});
