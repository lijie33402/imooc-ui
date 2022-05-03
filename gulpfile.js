const gulp = require('gulp')
const sass = require('sass')
const gulpSass = require('gulp-sass') // sass ---> css
const minifyCSS = require('gulp-minify-css')

gulp.task('sass', async function() {
  return gulp.src('components/css/**/*.scss')
    .pipe(gulpSass(sass)())
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
})