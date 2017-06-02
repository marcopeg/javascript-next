var gulp = require('gulp')
var clean = require('gulp-clean')
var dependencies = require('gulp-html-dependencies')
var webserver = require('gulp-webserver')
var gulpSequence = require('gulp-sequence')

gulp.task('clean:dist', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
})

gulp.task('copy:vendor', function () {
    return gulp.src('src/**/*.html')
        .pipe(dependencies({
            dest: 'dist',
            prefix: './vendor',
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('copy:assets', function () {
    return gulp.src('src/assets/*')
        .pipe(gulp.dest('dist/assets'))
})

gulp.task('build', gulpSequence('clean:dist', ['copy:vendor', 'copy:assets']))

gulp.task('watch', function () {
    gulp.watch('src/assets/**/*', ['copy:assets'])
    gulp.watch('src/**/*.html', ['copy:vendor'])
})

gulp.task('serve', function () {
    gulp.src('dist')
        .pipe(webserver({
            livereload: true,
            open: true
        }))
})

gulp.task('default', gulpSequence('build', 'serve', 'watch'))
