const gulp = require('gulp');
const browserSync = require('browser-sync').create('server');

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: ['dist']
    }
  });
});
