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
;

var BASE_PATH = "_site/";
var DIST_PATH = BASE_PATH + "dist/";
var IMG_PATH = BASE_PATH + "img/**/*";
var JS_PATH = BASE_PATH + "js/**/*.js";
var CSS_PATH = BASE_PATH + "css/**/*.css";

var IMG_EXT = ['jpg', 'JPG', 'jpeg', 'png'];
var IMG_SRC = IMG_EXT.map(function(e){return IMG_PATH + '.' + e; });

/*
var pages = [];
var dirContents = fs.readdirSync('.');
dirContents.forEach(function(item){
  if(fs.statSync().isDirectory){
    pages.push(item + "/index.html");
  }
});
*/
gulp.task('clean', function(){
  return del([BASE_PATH]);
});

// compresses all images
gulp.task('img', function(){
  // compresses all images
  return gulp.src(IMG_PATH)
  .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/img'));
 });

// compresses only company images
gulp.task('companies', function(){
  // compresses only company images
  return gulp.src('img/companies/**/*')
  .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/img/companies'));
});


gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src([JS_PATH])
  .pipe(uglify().on('error', gutil.log))
  .pipe(gulp.dest(DIST_PATH + 'js/'));
});

gulp.task('css', function(){
  // strips, prefixes, and minifies css
  return gulp.src([CSS_PATH])
  .pipe(uncss({html: [pages]}))
  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true })).on('error', gutil.log)
  .pipe(cssminify().on('error', gutil.log))
  .pipe(gulp.dest(DIST_PATH + 'css/'));
});

gulp.task('build', function(){
  // executes jekyll build
  child_process.spawn('jekyll', ['build'], {stdio: 'inherit'});
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch('.', ['build']);
  gulp.watch(JS_PATH, ['js']);
  gulp.watch(CSS_PATH, ['css']);
});

gulp.task('default', ['clean', 'build','js', 'css','img','watch']);
