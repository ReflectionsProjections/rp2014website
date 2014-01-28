'use strict';

var gulp = require('gulp')
  , gutil = require('gulp-util')
  , less = require('gulp-less')
  , watch = require('gulp-watch')
  , uglify = require('gulp-uglify')
  , lr = require('tiny-lr')
  , livereload = require('gulp-livereload')
  , server = lr()
  ;

gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(['public/javascripts/src/**/*.js', '!public/javascripts/vendor/**'])
    .pipe(uglify())
    .pipe(gulp.dest('public/javascripts/build'));
});

gulp.task('styles', function(){
  return gulp.src(['public/less/**/*.less'])
    .pipe(less())
    .pipe(gulp.dest('public/css'));
});


// Rerun the task when a file changes
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) return console.log(err);

    gulp.watch('public/javascripts/src/**/*.js', ['scripts']);
    gulp.watch('public/less/**/*.less', ['styles']);

    });
});


gulp.task('default', ['js', 'styles', 'watch']);