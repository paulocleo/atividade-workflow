var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task('compilar-css', function(){
	return gulp.src('./source/scss/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('./dist/css'))
});

gulp.task('mover-html', function(){
	return gulp.src('./source/index.html')
			.pipe(gulp.dest('./dist'))
});

gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['compilar-css']);
	gulp.watch('./source/index.html', ['mover-html']);
});

