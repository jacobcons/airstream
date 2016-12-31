// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var path = require('path');
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var cleanCSS = require('gulp-clean-css');
var concatCSS = require('gulp-concat-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('dev/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Translate less to css and minify the result
gulp.task('app-styles', function () {
  return gulp.src('dev/styles/app/app.less')
    .pipe(less())
    .pipe(gulp.dest('dev/styles/app'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concate and minify vendor style sheets
gulp.task('vendor-styles', function () {
  return gulp.src('dev/styles/vendor/*.css')
    .pipe(concatCSS('vendor.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS app scripts
gulp.task('app-scripts', function() {
    return gulp.src(['dev/js/app/*.js', '!dev/js/app/app.js'])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dev/js/app'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Concatenate & minify JS vendor scripts
gulp.task('vendor-scripts', function() {
    return gulp.src(['dev/js/vendor/jquery.js', 'dev/js/vendor/*.js', '!dev/js/vendor/vendor.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dev/js/vendor'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/js/app/*.js', ['lint', 'app-scripts']);
    gulp.watch('dev/styles/app/*.less', ['app-styles']);
});

// Gulp Tasks
gulp.task('default', ['lint', 'app-styles', 'vendor-styles', 'app-scripts', 'vendor-scripts', 'watch']);
