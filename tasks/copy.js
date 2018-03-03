const gulp = require('gulp');
const changed = require('gulp-changed');

gulp.task('copy', () => {
  gulp
    .src('app/resources/**/*')
    .pipe(changed('dist'))
    .pipe(gulp.dest('dist'));
});
