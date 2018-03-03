const gulp = require('gulp');
const plumber = require('gulp-plumber');
const errorHandler = require('gulp-plumber-error-handler');
const cached = require('gulp-cached');
const nunjucks = require('gulp-nunjucks-render');
const beautify = require('gulp-jsbeautifier');
const inject = require('gulp-inject');
const svgmin = require('gulp-svgmin');

const injectSvgOpts = {
  empty: true,
  removeTags: true,
  starttag: '<!-- inject:{{path}} -->',
  transform: (filePath, file) => {
    return file.contents.toString('utf8');
  }
};

const injectCssOpts = {
  empty: true,
  removeTags: true,
  starttag: '/* inject:{{path}} */',
  endtag: '/* endinject */',
  transform: (filePath, file) => {
    return file.contents.toString('utf8');
  }
};

const svgminOpts = {
  plugins: [{
    removeTitle: true
  }]
};

gulp.task('templates', () => {
  const svgStream = gulp
    .src('app/resources/assets/images/**/*.svg')
    .pipe(svgmin(svgminOpts));

  const cssStream = gulp.src('dist/assets/styles/**/*.css');

  return gulp
    .src('app/pages/**/*.njk')
    .pipe(plumber({ errorHandler: errorHandler() }))
    .pipe(nunjucks({ path: ['app/components'] }))
    .pipe(cached('njk'))
    .pipe(beautify())
    .pipe(inject(svgStream, injectSvgOpts))
    .pipe(inject(cssStream, injectCssOpts))
    .pipe(gulp.dest('dist'));
});
