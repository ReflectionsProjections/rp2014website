'use strict';

var gulp = require('gulp')
, gutil = require('gulp-util')
, watch = require('gulp-watch')
, uglify = require('gulp-uglify')
, imagemin = require('gulp-imagemin')
, cssminify = require('gulp-minify-css')
;

var distPath = "dist/";
var imagePath = "img/**/*";
var jsPath = "js/**/*.js";
var stylePath = "css/**/*.css";

var imageExt = ['jpg', 'JPG', 'jpeg', 'png'];
var imageSrc = imageExt.map(function(e){return imagePath + '.' + e});

gulp.task('images', function(){

  return gulp.src(imageSrc)
  .pipe(imagemin().on('error', gutil.log))
  .pipe(gulp.dest(distPath + 'img/'));
});

gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src([jsPath])
  .pipe(uglify().on('error', gutil.log))
  .pipe(gulp.dest(distPath + 'js/'));
});

gulp.task('styles', function(){
  return gulp.src([stylePath])
  .pipe(cssminify().on('error', gutil.log))
  .pipe(gulp.dest(distPath + 'css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(jsPath, ['js']);
  gulp.watch(stylePath, ['styles']);
  //gulp.watch(imageSrc, ['images']);
});

gulp.task('default', ['images', 'js', 'styles', 'watch']);