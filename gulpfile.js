// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var path = require('path');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Less -> CSS -> Minify CSS
gulp.task('less', function () {
  return gulp.src('dev/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS app scripts
gulp.task('app_scripts', function() {
    return gulp.src('dev/js/app/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Concatenate & minify JS vendor scripts
gulp.task('vendor_scripts', function() {
    return gulp.src(['dev/js/vendor/jquery.min.js', 'dev/js/vendor/bootstrap.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/app/*.js', ['lint', 'app_scripts']);
    gulp.watch('dev/less/*.less', ['less']);
});

// Gulp Tasks
gulp.task('default', ['lint', 'less', 'app_scripts', 'vendor_scripts', 'watch']);
