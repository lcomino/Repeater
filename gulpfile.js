let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('build', function(){  
  return gulp.src(['bower_components/StringJs/dist/string.js', 'bower_components/ObjectJs/object.js', 'src/*.js'])  
  .pipe(concat('repeater.js'))
  .pipe(uglify({
      mangle: true
    }))
  .pipe(gulp.dest('dist'));
});

gulp.task('default', ['test', 'build']);
