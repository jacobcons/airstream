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
  appScripts: './src/scripts/app/main.js',
  vendorScripts: './src/scripts/vendor/*.js',
  watchScripts: './src/scripts/app/*.js',
  styles: './src/styles/main.sass',
  watchStyles: './src/styles/**',
  views: './src/views/*.pug',
  watchViews: './src/views/**',
  images: './src/images/**',
};

// transpile to es2015 -> minify -> output in dist folder -> live reload
gulp.task('app-scripts', (done) => {
  return browserify(paths.appScripts)
    .transform('babelify', {
      presets: ['es2015'],
      global: true,
      extensions: ['.js'],
    })
    .bundle()
    .pipe(source(paths.appScripts))
    .pipe(buffer())
    .pipe(flatten())
    .pipe(gulp.dest('./dist/js'))
    .pipe(livereload());
});

gulp.task('vendor-scripts', () => {
  return gulp.src(paths.vendorScripts)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('./dist/js'));
});

// transpile to css -> autoprefixer -> minify -> output in dist folder -> live reload
gulp.task('styles', () => {
  return gulp.src(paths.styles)
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

// pug -> html
gulp.task('views', () => {
  return gulp.src(paths.views)
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
  gulp.watch(paths.watchStyles, ['styles']);
  gulp.watch(paths.watchScripts, ['app-scripts']);
  gulp.watch(paths.watchViews, ['views']);
});



gulp.task('default', ['app-scripts', 'vendor-scripts', 'styles', 'views', 'images', 'watch']);
