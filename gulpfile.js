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
// var htmlmin = require('gulp-htmlmin');


var tasks = [
	'common',
	'js',
	'css',
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

	var libs = [
		'node_modules/angular/angular.min.js',
		'node_modules/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/angular-animate/angular-animate.min.js'
	]

	// gulp.src(libs)
	// 	.pipe(concat('libs.js'))
	// 	.pipe(uglify())
	// 	.pipe(gulp.dest(prodPrefix + '/common/'));

	cssTask(devPrefix + '/common/css/*.*', prodPrefix + '/common/css/', 'libs.css');	

	// imgs
	copyFilesToProd(['/common/img/'], ['*.*']);

	// data 
	copyFilesToProd(['/data/'], ['*.*']);

	//fonts

	// gulp.src(devPrefix + '/common/fonts/**/*.*')
	// 		.pipe(gulp.dest(prodPrefix + '/common/fonts/'))
	// 		.pipe(livereload());


})

///////////////////////
//	   js task		///
///////////////////////

gulp.task('js', [], function() {

	var src = [
		devPrefix + '/modules/app.js',
		devPrefix + '/modules/**/*.js',
		devPrefix + '/directives/**/*.js',
		devPrefix + '/services/**/*.js'
	]

	gulp.src(src)
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest(prodPrefix + '/modules/js/'));

})


///////////////////////
//	  css  		///
///////////////////////

gulp.task('css', [], function() {

	var src = [
		devPrefix + '/modules/**/*.css',
		devPrefix + '/directives/**/*.css'
	];


	gulp.src(src)
		.pipe(css_concat('main.css'))
	    .pipe(autoprefixer('> 1%'))
	    .pipe(clean())
	    .pipe(gulp.dest(prodPrefix + '/modules/css'))
	    .pipe(livereload());


})


///////////////////////
//	  html  		///
///////////////////////

gulp.task('html', [], function() {

	gulp.src([devPrefix + '/modules/**/*.html', 
			  devPrefix + '/directives/**/*.html'])
		// .pipe(htmlmin({collapseWhitespace: true}))
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