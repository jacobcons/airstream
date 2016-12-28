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

// Compile less
gulp.task('less', function () {
  return gulp.src('dev/less/app.less')
    .pipe(less())
    .pipe(gulp.dest('dist/css'));
});

// Minify CSS
gulp.task('minify_app_css', function() {
	return gulp.src('dist/css/app.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('app.min.css'))
		.pipe(gulp.dest('dist/css'));
});

gulp.task('minify_vendor_css', function() {
	return gulp.src(['dev/css/materialize.css'])
		.pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('vendor.min.css'))
		.pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('app_scripts', function() {
    return gulp.src('dev/js/app/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Concatenate js vendor scripts
gulp.task('vendor_scripts', function() {
    return gulp.src(['dev/js/vendor/jquery.min.js', 'dev/js/vendor/materialize.js'])
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
gulp.task('default', ['lint', 'less', 'minify_app_css', 'minify_vendor_css', 'app_scripts', 'vendor_scripts', 'watch']);
