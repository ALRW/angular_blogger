describe('AngularBlogger', function() {

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Angular Blogger');
  });
});
