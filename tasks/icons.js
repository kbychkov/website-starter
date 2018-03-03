const gulp = require('gulp');
const gulpIf = require('gulp-if');
const svgmin = require('gulp-svgmin');
const svgSymbols = require('gulp-svg-symbols');
const rename = require('gulp-rename');

gulp.task('icons', () => {
  const svgminOpts = {
    plugins: [{
      removeTitle: true
    }, {
      removeAttrs: {
        attrs: '(fill|fill-rule)'
      }
    }]
  };

  const svgSymbolsOpts = {
    id: 'icon_%f',
    className: '.icon-%f',
    templates: ['default-svg']
  };

  gulp
    .src('app/icons/**/*.svg')
    .pipe(svgmin(svgminOpts))
    .pipe(svgSymbols(svgSymbolsOpts))
    .pipe(gulpIf(/\.svg$/, rename('icons.svg')))
    .pipe(gulpIf(/\.svg$/, gulp.dest('dist/assets/images')));
});
