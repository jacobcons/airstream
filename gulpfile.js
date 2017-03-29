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
    return gulp.src('scripts/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Translate less to css and minify the result
gulp.task('app-styles', function () {
  return gulp.src('styles/app/app.less')
    .pipe(less())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('static/css'));
});

// Concate and minify vendor style sheets
gulp.task('vendor-styles', function () {
  return gulp.src('styles/vendor/*.css')
    .pipe(concatCSS('vendor.min.css'))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('static/css'));
});

// Concatenate & Minify JS app scripts
gulp.task('app-scripts', function() {
    return gulp.src(['scripts/app/*.js'])
        .pipe(concat('app.js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

// Concatenate & minify JS vendor scripts
gulp.task('vendor-scripts', function() {
    return gulp.src(['scripts/vendor/jquery.js', 'scripts/vendor/*.js', '!scripts/vendor/vendor.js'])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('scripts/vendor'))
        .pipe(rename('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('static/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scripts/app/*.js', ['lint', 'app-scripts']);
    gulp.watch('styles/app/*.less', ['app-styles']);
});

// Gulp Tasks
gulp.task('default', ['lint', 'app-styles', 'vendor-styles', 'app-scripts', 'vendor-scripts', 'watch']);
