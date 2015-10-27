var gulp = require('gulp'),
	prettyData = require('gulp-pretty-data'),
	zip = require('gulp-zip');

// Minify krpano action
function minifyAction() {
	function dry (file, cb) {
		file.contents = new Buffer(String(file.contents).replace(/(<action.+?>)([\s\S]+?)(<\/action>)/ig, function (str, opentag, cnt, closetag) {
			return opentag + cnt.replace(/\s*(^|[;,=!])\s*/g, "$1") + closetag;
		}));
		cb(null, file);
	}

	return require('event-stream').map(dry);
}

// Minify plugin xml
gulp.task('xml', function () {
	return gulp.src('dev/arrows.xml')
		.pipe(prettyData({type: 'minify'}))
		.pipe(minifyAction())
		.pipe(gulp.dest('plugin-page/example/'));
});

// Create downloadable zip for plugin page
gulp.task('zip', function () {
	return gulp.src(['plugin-page/**', '!plugin-page/*.zip'], {base: '.'})
		.pipe(zip('arrows.zip'))
		.pipe(gulp.dest('plugin-page/'));
});

gulp.task('make', ['xml', 'zip']);
