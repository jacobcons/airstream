const gulp = require('gulp');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserify = require('browserify');
const babelify = require('babelify');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const gutil = require('gulp-util');
const rename = require('gulp-rename');
const prefix = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
const pug = require('gulp-pug');
const imagemin = require('gulp-imagemin');
const paths = {
  client: './src/scripts/main.js',
  vendor: ['./src/scripts/vendor/jquery.js', './src/scripts/vendor/fittext.js'],
  styles: './src/styles/main.sass',
  watchStyles: './src/styles/**',
  views: './src/views/*.pug',
  watchViews: './src/views/**',
  images: './src/images/**'
};

// transpile to es2015 -> minify -> output in dist folder -> live reload
gulp.task('client-scripts', () => {
	browserify(paths.client)
		.transform('babelify', {
			presets: ['es2015'],
			global: true
		})
		.bundle()
		.pipe(source('index.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(rename('client.min.js'))
		.on('error', err => gutil.log(gutil.colors.red('[Error]'), err.toString()))
		.pipe(gulp.dest('./dist/js'))
		.pipe(livereload());
});

gulp.task('vendor-scripts', () => {
	return gulp.src(paths.vendor)
		.pipe(concat('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'))
});

// transpile to css -> autoprefixer -> minify -> output in dist folder -> live reload
gulp.task('styles', () => {
  return gulp.src(paths.styles)
		.pipe(sass().on('error', sass.logError))
		.pipe(prefix({
			browsers: ['last 15 versions', '> 1%', 'ie 8', 'ie 7'],
			cascade: false
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
	gulp.watch(paths.images, ['images'])
	gulp.watch(paths.watchStyles, ['styles'])
	gulp.watch(paths.client, ['client-scripts'])
  gulp.watch(paths.watchViews, ['views'])
});



gulp.task('default', ['client-scripts', 'vendor-scripts', 'styles', 'views', 'images', 'watch']);
