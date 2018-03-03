const gulp = require('gulp');
const gulpIf = require('gulp-if');
const browserify = require('browserify');
const browserifyInc = require('browserify-incremental');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const babelify = require('babelify');
const envify = require('envify/custom');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const eslint = require('gulp-eslint');

const NODE_ENV = process.env.NODE_ENV || 'development';
const isProduction = NODE_ENV === 'production';

let bundler = browserify({
  entries: 'app/scripts/app.js',
  debug: !isProduction,
  cache: {},
  packageCache: {},
  fullPaths: true
});

browserifyInc(bundler);

bundler.transform('babelify', {
  presets: ['es2015']
}).transform('envify', {
  global: true, NODE_ENV: NODE_ENV
});

gulp.task('scripts:lint', () => {
  return gulp.src(['app/components/**/*.js', 'app/scripts/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('scripts', ['scripts:lint'], () => {
  return bundler
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulpIf(!isProduction, sourcemaps.init({loadMaps: true})))
    .pipe(gulpIf(isProduction, uglify()))
    .pipe(rename({extname: '.min.js'}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('dist/assets/scripts'));
});
