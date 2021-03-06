var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  gulp.watch("**/*.html").on('change', browserSync.reload);
});

// gulp.task('browser-sync', function() {
//   browserSync.init({
//     proxy: "yourlocal.dev"
//   });
// });