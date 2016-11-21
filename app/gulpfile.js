/* gulpfile.js */

/* Plugins */
const gulp        = require('gulp'),
      gutil       = require('gulp-util'),
      jade				= require('gulp-jade-php'),
      minifyCss   = require('gulp-minify-css'),
      ftp         = require('vinyl-ftp'),
      sync        = require('gulp-npm-script-sync'),
      clean       = require('gulp-clean');

const config = require('./config.json')

/* I - O  */
input  = {
  'jade': './public/_jade/*.jade',
  'alljade': './public/_jade/**/*.jade'
},

output = {
	'dist': config.output
};

var filesToMove = [
  './public/library/**/*',
  './public/functions.php',
  './public/screenshot.png',
  './public/style.css'
];

var watchFiles = [
  './public/_jade/**/*.jade',
  './public/*.php',
  './public/*.css'
]

gulp.task('move', function(){
  gulp.src(filesToMove, { base: './public/' })
  .pipe(gulp.dest(output.dist));
});

/* Task Library */
gulp.task('jade',   require('./gulp-tasks/jade')(gulp, jade));
gulp.task('deploy', require('./gulp-tasks/deploy')(gulp, ftp));

// Watch Files
gulp.task('watchjade', function() {
  gulp.watch(watchFiles, ['jade']);
});

sync(gulp, {
  path: './package.json',
  excluded: ['default','jade','prod']
});