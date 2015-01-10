var gulp = require('gulp'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');

/*
 *  Default task
 */
gulp.task('default', function() {

});
/*
 *  Compile sass
 */
gulp.task('sass', function() {
    gulp.src('resources/styles/*.scss')
        .pipe(watch('resources/styles/*.scss'))
        .pipe(sass())
        .pipe(gulp.dest('public_html/asset/style'));
});
/*
 *  Watch Files
 */
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('resources/styles/*.scss', ['sass']);
});