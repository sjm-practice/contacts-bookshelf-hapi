var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    console = require('better-console'),
    stylish = require('jshint-stylish'),
    lab = require('gulp-lab'),
    nodemon = require('gulp-nodemon');

var paths = {
  jsSource: [
    './server.js',
    './config/**/*.js',
    './controllers/**/*.js',
    './db/**/*.js',
    './models/**/*.js',
    './routes/**/*.js',
    './test/**/*.js',
    './utils/**/*.js'
  ]
};

gulp.task('clear', function () {
  return console.clear();
});

gulp.task('lint', function () {
  return gulp.src(paths.jsSource)
    .pipe(jshint({ node: true }))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('lintw', ['clear'], function() {
  return gulp.watch(paths.jsSource, ['clear', 'lint']);
});

gulp.task('test', function () {
  return gulp.src('test')
    .pipe(lab('-c'));
});

gulp.task('testw', ['clear'], function () {
  return gulp.watch(paths.jsSource, ['clear', 'test']);
});

gulp.task('nodemon', ['clear'], function () {
  return nodemon({
    script: 'server.js',
    ext: 'js',
    tasks: ['clear']})
  .on('restart', function () {
    console.log('restarted...');
  });
});
