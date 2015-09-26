// booleans
BUILD = false;

var 
gulp    		= require('gulp'),
gutil   		= require('gulp-util'),
uglify  		= require('gulp-uglify'),
plumber  		= require('gulp-plumber'),
concat  		= require('gulp-concat'),
sass  			= require('gulp-sass'),
livereload 	= require('gulp-livereload'),
gulpif    	= require('gulp-if');
// minifyCSS = require('gulp-minify-css');

var 
script_set = [
	'./js/vendor/jquery/jquery.js',
	'./js/vendor/foundation/foundation.js',
	'./js/app.js'
];

gulp.task('scripts', function () {
    gulp.src(script_set)
   	.pipe(concat('all.js'))
   	.pipe(gulpif(BUILD, uglify()))
   	.pipe(gulp.dest('./js'))
   	.pipe(livereload());
});

gulp.task('php', function () {
		gulp.src("./*.php")
		.pipe(livereload());
})

gulp.task( 'sass',function( ){
	 gulp.src( './scss/style.scss' )
	.pipe(plumber())
	.pipe(sass({
		
	}))
	.pipe(gulp.dest( './' ))
	.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen();
  gulp.watch(script_set, ['scripts']);
  gulp.watch('./scss/*.scss', ['sass']);
  // gulp.watch('**/*.php',['php']);
  gulp.watch('**/*.php').on('change', function (file) {
  	livereload.reload(file.path);
  });
 
});

