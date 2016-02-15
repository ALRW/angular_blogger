Angular Blogger
===============

__This Project is in development__

A new blogging site built with the MEAN stack.

Continuous Integration
---------------------
- Master: ![Master](https://travis-ci.org/ALRW/angular_blogger.svg?branch=master)

User Guide
----------

To download and run locally you [node](https://nodejs.org/en/), [bower](http://bower.io/) and [mongodb](https://www.mongodb.org/). You can install them using a terminal as follows:

```
brew install node
npm install bower
npm install mongodb
```

You then need to ensure that mongodb is running on your system. This can be checked using:
```
brew services list
```
if the process is dead then use:

```
brew services start mongodb
```

Once you have cloned this directory and have `cd`'d into it then install the project dependencies by running:

```
npm install
bower install
```

Then in order to get everything running:

```
grunt
```

The site can now be accessed at:
```
http://localhost:3000
```

Testing
-------
To run unit tests:

```
karma start test/karma.conf.js
```

to run full e2e tests first ensure that the db is not already full of data:

```
grunt drop
```

Then in three seperate terminal instances run:

```
grunt
webdriver-manager start
protractor test/e2e/conf.js
```

Completed Features
-------------------

- Create blank template
- Create html landing page
- Create New Posts
- See a list of posts on the homepage
- be able to access individual posts through the homepage
- implement persistent storage of app data
- implement user authentication and accounts
- restrict uploading new posts to an authenticated user
- Create a helper to select a featured post from the site at random every 5 minutes
- Display a link to the featured post on a homepage banner.

Features in Progress
--------------------

- Create an api end point for all posts
- Create a link to Display a users own posts
- create search functionality to display other users posts
