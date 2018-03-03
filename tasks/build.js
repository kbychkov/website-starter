const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('build', () => {
  runSequence(['copy', 'icons', 'styles', 'scripts'], 'templates');
});
