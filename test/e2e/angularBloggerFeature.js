describe('AngularBlogger', function() {

  it('has a title', function() {
    browser.get('http://localhost:8080');
    expect(browser.getTitle()).toEqual('Angular Blogger');
  });

  it('shows posts that are present on the site', function(){
    expect(element.all(by.css(".publishedTitle")).first().getText()).toEqual("Title: My new post");
    expect(element.all(by.css(".publishedAuthor")).first().getText()).toEqual("Author: User1");
    expect(element.all(by.css(".publishedDescription")).first().getText()).toEqual("Description: A very new post");
  });


});
