/**
 * Created by anandkrishnankutty on 4/17/16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('*.html',browserSync.reload);
    gulp.watch('*.js',browserSync.reload);
    gulp.watch('*.css',browserSync.reload);

})
