const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');
const babili  = require('gulp-babili');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const prefix = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const flatten = require('gulp-flatten');
const es = require('event-stream');
const pump = require('pump');
const glob = require('glob');
const paths = {
  mainJs: './src/scripts/main.js',
  js: './src/scripts/*.js',
  mainSass: './src/styles/main.sass',
  sass: './src/styles/**',
  pages: './src/views/*.pug',
  views: './src/views/**',
  images: './src/images/**',
};

gulp.task('js', (done) => {
  return browserify(paths.mainJs)
    .transform('babelify', {
      presets: ['es2017', 'es2016'],
      global: true,
    })
    .bundle()
    .pipe(source(paths.mainJs))
    .pipe(buffer())
    .pipe(flatten())
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});


gulp.task('sass', () => {
  return gulp.src(paths.mainSass)
    .pipe(sass({ includePaths: './node_modules/foundation-sites/scss' }).on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
      cascade: false,
    }))
    .pipe(cleanCss())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});

gulp.task('pug', () => {
  return gulp.src(paths.pages)
    .pipe(pug())
    .pipe(gulp.dest('./dist'))
    .pipe(livereload());
});

gulp.task('images', () => {
  gulp.src(paths.images)
  .pipe(imagemin())
  .pipe(gulp.dest('./dist/images'))
  .pipe(livereload());
});

gulp.task('watch', () => {
  livereload.listen();
  gulp.watch(paths.images, ['images']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
  gulp.watch(paths.views, ['pug']);
});

gulp.task('default', ['js', 'sass', 'pug', 'images', 'watch']);
