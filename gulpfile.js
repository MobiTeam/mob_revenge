'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var css_concat = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');


var tasks = [
	'common',
	'js',
	'main_page',
	'html'
]

var devPrefix = '_dev';
var prodPrefix = '_prod';


///////////////////////////////
//		default task		///
///////////////////////////////


gulp.task('default', tasks.concat(['dev_watcher']), function(){
 	console.log('Completed');
})

gulp.task('dev_watcher', function() {
	livereload.listen();
	gulp.watch(devPrefix + '/**/*.*', tasks);
})

///////////////////////////
//	   common task		///
///////////////////////////

gulp.task('common', [], function() {

	// var libs = [
	// 	'node_modules/angular/angular.min.js'
	// ]

	// gulp.src(libs)
	// 	.pipe(concat('libs.js'))
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest(prodPrefix + '/common/'));

	cssTask(devPrefix + '/common/css/*.*', prodPrefix + '/common/css/', 'libs.css');	

	// imgs
	copyFilesToProd(['/common/img/'], ['*.*']);

	// fonts
	//copyFilesToProd(['/common/fonts/'], ['*.*']);


})

///////////////////////
//	   js task		///
///////////////////////

gulp.task('js', [], function() {

	var src = [
		devPrefix + '/modules/app.js',
		devPrefix + '/modules/**/*.js',
		devPrefix + '/directives/**/*.js'
	]

	gulp.src(src)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest(prodPrefix + '/modules/js/'));

})

///////////////////////
//	  html  		///
///////////////////////

gulp.task('html', [], function() {

	gulp.src([devPrefix + '/modules/**/*.html', 
			  devPrefix + '/directives/**/*.html'])
		.pipe(rename({dirname: ''}))
		.pipe(gulp.dest('./' + prodPrefix + '/modules/tmpl'));

})

///////////////////////
//	   main_page	///
///////////////////////


gulp.task('main_page', [], function() {

	copyFilesToProd(['/'], ['*.html']);

})

///////////////////////
//	   functions	///
///////////////////////

function copyFilesToProd(from, mask) {

	for(var i = 0; i < from.length; i++) {

		gulp.src(devPrefix + from[i] + mask[i])
			.pipe(gulp.dest(prodPrefix + from[i]))
			.pipe(livereload());
	}
	
}


function cssTask(from, to, filename) {

	gulp.src(from)
		.pipe(css_concat(filename))
	    .pipe(autoprefixer('> 1%'))
	    .pipe(clean())
	    .pipe(gulp.dest(to))
	    .pipe(livereload());

}