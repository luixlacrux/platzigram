const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const babel = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const watchify = require('watchify')

gulp.task('styles', () => {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

gulp.task('assets', () => {
  gulp
    .src('assets/**')
    .pipe(gulp.dest('public'))
})

function compile (watch) {
  const bundle = watchify(browserify('./src/index.js'))

  function rebundle () {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function (err) {
        console.log(err)
        this.emit(err)
      })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  if (watch) {
    bundle.on('update', () => {
      console.log('--> Bundling...')
      rebundle()
    })
  }

  rebundle()
}

gulp.task('build', () => compile())

gulp.task('watch', () => compile(true))

gulp.task('default', ['styles', 'assets', 'build'])
