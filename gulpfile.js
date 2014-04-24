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

gulp.task('images', function(){
    var ext = ['jpg', 'JPG', 'jpeg', 'png'];
    var paths = ext.map(function(e){return imagePath + '.' + e});
    return gulp.src(paths)
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
    gulp.watch('js/**/*.js', ['js']);
    gulp.watch('css/**/*.css', ['styles']);
    gulp.watch('img/**/*', ['images']);
});

gulp.task('default', ['images', 'js', 'styles', 'watch']);