describe('AngularBlogger', function() {

  it('has a title', function() {
    browser.get('http://localhost:3000/#/home');
    expect(browser.getTitle()).toEqual('Angular Blogger');
  });

  it('shows posts that are present on the site', function() {
    expect(element.all(by.css(".publishedTitle")).first().getText()).toEqual("Title: My new post");
    expect(element.all(by.css(".publishedAuthor")).first().getText()).toEqual("Author: User1");
    expect(element.all(by.css(".publishedDescription")).first().getText()).toEqual("Description: A very new post");
  });

  it('can add new posts to the site', function() {
    element.all(by.css('li')).first().click();
    expect(element(by.css('h3')).getText()).toEqual('Create a New Post');
    element.all(by.css('input')).first().sendKeys('Great Post');
    element.all(by.css('input')).get(1).sendKeys('This is a great Post');
    element(by.css('textarea')).sendKeys('This is a really great Post');
    element(by.css('button')).click();
    element.all(by.css('a')).first().click();
    expect(browser.getCurrentUrl()).toBe('http://localhost:3000/#/home');
    expect(element.all(by.css('.publishedTitle')).get(1).getText()).toEqual('Title: Great Post');
    expect(element.all(by.css('.publishedDescription')).get(1).getText()).toEqual('Description: This is a great Post');
  });

  it('throws an error if I try to add an empty post', function() {
    element.all(by.css('li')).first().click();
    expect(element(by.css('h3')).getText()).toEqual('Create a New Post');
    element(by.css('button')).click();
    expect(element(by.css('h4')).getText()).toBe("One or more fields are blank. Please Complete your post before submitting.");
  });

});
