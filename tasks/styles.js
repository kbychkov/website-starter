const gulp = require('gulp');
const stylus = require('gulp-stylus');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');

const isProduction = process.env.NODE_ENV === 'production';

gulp.task('styles', () => {
  const inlineOpts = {
    path: 'app'
  };

  const plugins = [
    require('autoprefixer'),
    require('postcss-inline-svg')(inlineOpts)
  ];

  if (isProduction) {
    plugins.push(require('cssnano'));
  }

  return gulp
    .src('app/styles/*.styl')
    .pipe(stylus())
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist/assets/styles'));
});
