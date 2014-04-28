rp2014
======

The website for the 2013 Reflections | Projections Conference.

This site is written using the [Jekyll static site generator](http://jekyllrb.com).

Stylesheets are generated using [SASS]() and [Compass]()

Build
====
* Make sure you have Ruby and rubygems installed on your system ;)
* Run `bundle install` to install all gems
* Run npm install to install all dependencies
* Run `gulp` to build assets
* Run `jekyll serve -w`




Style Conventions (Please Follow!)
===

* Fork this repo and submit any pull requests to master -- DO NOT PUSH TO THIS BRANCH
* Any changes should be made in a specific feature branch. This will keep things much cleaner
* Please mention any relevant issues in your pull request
* All subdomains should be in their own seperate folder (i.e /about is in the about folder)
* each page should have it's own stylesheet - each stylesheet should be then included into the 'screen.scss' file
* any component which is intended to be used in multiple places should be put into a layout in the _layouts directory
* PLEASE maintain good SASS practices and create and extend abstract classes. (http://sass-lang.com/guide)
