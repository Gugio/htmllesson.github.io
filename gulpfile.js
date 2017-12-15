'use strict';

var gulp = require('gulp');

// js variables
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var browserSync  = require('browser-sync');
var reload      = browserSync.reload;

// pug variables
var pug = require('gulp-pug');

// scss variables
var sass = require('gulp-sass');

// postcss variables
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssnano = require('gulp-cssnano');

var paths = {
  css: ['css/*.css'],
  js: ['js/*.js'],
  jsWatch: ['js/scripts/*.js', 'js/scripts/*.min.js'],
  scss: ['scss/**/*.scss'],
  pug: ['pug/*.pug'],
  pugWatch: ['pug/**/*.pug']
};

gulp.task('pug', function () {
  return gulp.src(paths.pug)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(''))
    .pipe(reload({stream:true}));
});

gulp.task('scss', function () {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(reload({stream:true}));
});

gulp.task('css:minify', function () {
  return gulp.src(paths.css)
    .pipe(cssnano())
    .pipe(postcss([autoprefixer({ browsers: ['ie >= 8', 'last 4 versions'] })]))
    .pipe(gulp.dest('production/css'));
});

gulp.task('js', function () {
  return gulp.src(paths.jsWatch)
    .pipe(concat('main.js'))
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
    .pipe(reload({stream:true}));
});

gulp.task('js:minify', function () {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest('production/js'));
});

// Dev watcher --------------------------------------------------------

gulp.task('server', function () {
  browserSync.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  // gulp.watch(paths.pugWatch, ['pug']);
  // gulp.watch(paths.scss, ['scss']);
  // gulp.watch(paths.jsWatch, ['js']);
  // gulp.watch('*.html').on("change", browserSync.reload);

  // gulp.watch("**").on("change", browserSync.reload);
});

gulp.task('watcher', ['server'], function () {
  gulp.watch(paths.pugWatch, ['pug']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.jsWatch, ['js']);
});

// Build prod resource ------------------------------------------------
// gulp.task('buildProd', ['css:minify', 'js:minify'], function () {
//   return (
//     gulp.src('source/*.html').pipe(gulp.dest('production/')),
//     gulp.src('source/css/pie/**/*').pipe(gulp.dest('production/css/pie')),
//     gulp.src('source/js/libs/**/*').pipe(gulp.dest('production/js/libs')),
//     gulp.src('source/fonts/**/*').pipe(gulp.dest('production/fonts')),
//     gulp.src('source/img/**/*.+(png|jpg|jpeg|gif|svg)').pipe(gulp.dest('production/img'))
//   );
// });

