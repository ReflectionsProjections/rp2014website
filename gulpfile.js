'use strict';

var gulp = require('gulp')
    , gutil = require('gulp-util')
    , less = require('gulp-less')
    , watch = require('gulp-watch')
    , uglify = require('gulp-uglify')
    , lr = require('tiny-lr')
    , livereload = require('gulp-livereload')
    , server = lr()
    , csslint = require('gulp-csslint')
    , imagemin = require('gulp-imagemin')
    , cssminify = require('gulp-minify-css')
;


gulp.task('images', function(){
    return gulp.src(['public/images/**/*.jpg', 'public/images/**/*.png'])
        .pipe(imagemin())
        .pipe(gulp.dest('public/images/dist/'));
});


gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(['public/javascripts/src/**/*.js', '!public/javascripts/vendor/**'])
      .pipe(uglify())
      .pipe(gulp.dest('public/javascripts/dist/'));
});


gulp.task('styles', function(){
  return gulp.src(['public/less/**/*.less'])
      .pipe(less())
      .pipe(csslint({}))
      .pipe(csslint.reporter())
      .pipe(cssminify())
      .pipe(gulp.dest('public/css/'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
    gulp.watch('public/javascripts/src/**/*.js', ['js']);
    gulp.watch('public/less/**/*.less', ['styles']);
    gulp.watch('public/images/**/*', ['minify-images']);
});

gulp.task('default', ['js', 'styles','images', 'watch']);