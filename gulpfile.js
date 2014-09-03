'use strict';

var gulp = require('gulp')
, gutil = require('gulp-util')
, watch = require('gulp-watch')
, uglify = require('gulp-uglify')
, imagemin = require('gulp-imagemin')
, pngcrush = require('imagemin-pngcrush')
, jpegtran = require('imagemin-jpegtran')
, cssminify = require('gulp-minify-css')
, prefix = require('gulp-autoprefixer')
, uncss = require('gulp-uncss')
, fs = require('fs')
, child_process = require('child_process')
, del = require('del')
, changed = require('gulp-changed')
, concat = require('gulp-concat')
, argv = require('yargs').argv
;

/*
 * PATH CONSTANTS
 */

var BASE_PATH = argv.dev ? "./" : "_site/";
var DIST_PATH = BASE_PATH + "dist/";
var IMG_PATH = BASE_PATH + "img/**/*";
var COMPANY_IMG_PATH = BASE_PATH + "img/**/*";
var JS_PATH = BASE_PATH + "js/**/*.js";
var CSS_PATH = BASE_PATH + "css/**/*.css";

 /*
  * IMAGE CONSTANTS
  */
var IMG_EXT = ['jpg', 'JPG', 'jpeg', 'png'];
var IMG_SRC = IMG_EXT.map(function(e){return IMG_PATH + '.' + e; });

/*
 * UNCSS CONSTANTS
 */
var PAGES = ['index.html'];
var dirContents = fs.readdirSync(BASE_PATH);
dirContents.forEach(function(item){
  var itemPath = BASE_PATH + item;
  if(fs.statSync(itemPath).isDirectory){
    var indexPath = itemPath + '/index.html';
    if (fs.existsSync(indexPath)) {
     PAGES.push(indexPath);
    }
  }
});

// HACK -- this should really parse the JS files to search for
// referenced css
var UNCSS_IGNORED_SELECTORS = [
  '.body-push-toleft',
  /.(\D)*menu(\D)*/,
  /.(\D)*active(\D)*/,
  /.(\D)*animate(\D)*/,
  /.(\D)+:hover/,
  /.(\D)+:active/,
];

gulp.task('clean', function(cb){
  return del(["_site"], cb);
});

// compresses all images
gulp.task('img', function(){
  var SRC = [IMG_PATH];
  var DEST = DIST_PATH + '/img';
  // compresses all images
  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest(DEST));
 });

// compresses only company images
gulp.task('companies', function(){
  var SRC = [COMPANY_IMG_PATH];
  var DEST = DIST_PATH + '/img/companies';

  // compresses only company images
  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
    .pipe(gulp.dest(DEST));
});


gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  var SRC = [JS_PATH];
  var DEST = DIST_PATH + 'js/'
  return gulp.src(SRC)
    .pipe(changed(DEST))
    .pipe(uglify().on('error', gutil.log))
    //.pipe(concat('all.js'))
    .pipe(gulp.dest(DEST));
});

gulp.task('css', function(){
  // strips, prefixes, and minifies css
  var SRC = [CSS_PATH];
  var DEST = DIST_PATH + 'css/'

  return gulp.src(SRC)
    //.pipe(uncss({html: PAGES, ignore: UNCSS_IGNORED_SELECTORS}))
    .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true })).on('error', gutil.log)
    .pipe(cssminify().on('error', gutil.log))
    .pipe(gulp.dest(DEST));
});

gulp.task('build', function(cb){
  // executes jekyll build
  child_process.spawn('jekyll', ['build'], {stdio: 'inherit'}, cb);
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(JS_PATH, ['js']);
  gulp.watch(CSS_PATH, ['css']);
});

gulp.task('assets', ['js', 'css', 'img']);
gulp.task('default', ['build','js', 'css','img','watch']);
