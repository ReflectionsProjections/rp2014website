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


gulp.task('minify-images', function(){
    return gulp.src(['public/src/images/**/*.png', 'public/src/images/**/*.jpg'])
        .pipe(imagemin())
        .pipe(gulp.dest('public/dist/images'))
});


gulp.task('js', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  return gulp.src(['public/src/javascripts/**/*.js', '!public/javascripts/vendor/**'])
      .pipe(uglify())
      .pipe(gulp.dest('public/dist'));
});


gulp.task('styles', function(){
  return gulp.src(['public/src/less/**/*.less'])
      .pipe(less())
      .pipe(csslint({}))
      .pipe(csslint.reporter())
      .pipe(cssminify())
      .pipe(gulp.dest('public/dist/css'));
});

// Rerun the task when a file changes
gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) return console.log(err);

    gulp.watch('public/src/javascripts/src/**/*.js', ['js']);
    gulp.watch('public/src/less/**/*.less', ['styles']);
    gulp.watch('public/src/images/*.png', ['minify-images']);
  });
});

gulp.task('default', ['js', 'styles','minify-images', 'watch']);