const gulp = require('gulp');
const browserSync = require('browser-sync').get('server');
const runSequence = require('run-sequence');

const optsWatch = { cwd: './app' };

gulp.task('watch', () => {
  gulp.watch(['components/**/*.njk', 'pages/**/*.njk'], optsWatch, () => {
    runSequence('templates', browserSync.reload);
  });
  gulp.watch(['components/**/*.styl', 'styles/**/*.styl'], optsWatch, () => {
    runSequence('styles', () => browserSync.reload('*.css'));
  });
  gulp.watch(['components/**/*.js', 'scripts/**/*.js'], optsWatch, () => {
    runSequence('scripts', () => browserSync.reload('*.js'));
  });
  gulp.watch(['resources/**/*'], optsWatch, () => {
    runSequence('copy', () => browserSync.reload);
  });
});
