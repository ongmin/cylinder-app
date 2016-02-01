'use strict'

var gulp = require('gulp')
var connect = require('gulp-connect') // Runs a local dev server
var open = require('gulp-open') // Open a URL in a web browser
var browserify = require('browserify') // Bundles JS
var reactify = require('reactify')  // Transforms React JSX to JS
var source = require('vinyl-source-stream') // Use conventional text streams with Gulp
var concat = require('gulp-concat') // Concatenates files

var config = {
  port: process.env.PORT || 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './app/*.html',
    js: [
      './app/index.js',
      './app/components/app.js',
      './app/components/homePage.js',
      './app/components/notFoundPage.js'
      // './app/*.js'
    ],
    images: './app/images/*',
    css: [
      './app/*.css'
    ],
    dist: './dist'
  }
}

// Start a local development server
gulp.task('connect', function () {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
})

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/' }))
})

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
})

gulp.task('js', function () {
  browserify(config.paths.js)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
})

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload())
})

// Migrates images to dist folder
gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html'])
  gulp.watch(config.paths.js, ['js'])
})

gulp.task('default', ['html', 'js', 'css', 'images', 'open', 'watch'])
