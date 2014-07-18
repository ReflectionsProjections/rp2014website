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
;

var distPath = "dist/";
var imagePath = "img/**/*";
var jsPath = "js/**/*.js";
var stylePath = "css/**/*.css";

var imageExt = ['jpg', 'JPG', 'jpeg', 'png'];
var imageSrc = imageExt.map(function(e){return imagePath + '.' + e; });

gulp.task('images', function(){
  return gulp.src(imagePath)
  .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/img'));
 });

gulp.task('companies', function(){
  return gulp.src('img/companies/**/*')
  .pipe(imagemin({ optimizationLevel: 7, progressive: true, interlaced: true }))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src([jsPath])
  .pipe(uglify().on('error', gutil.log))
  .pipe(gulp.dest(distPath + 'js/'));
});

gulp.task('styles', function(){
  return gulp.src([stylePath])
  .pipe(prefix("last 1 version", "> 1%", "ie 8", "ie 7", { cascade: true })).on('error', gutil.log)
  .pipe(cssminify().on('error', gutil.log))
  .pipe(gulp.dest(distPath + 'css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  gulp.watch(jsPath, ['js']);
  gulp.watch(stylePath, ['styles']);
  //gulp.watch(imageSrc, ['images']);
});

gulp.task('default', ['js', 'styles', 'watch']);
