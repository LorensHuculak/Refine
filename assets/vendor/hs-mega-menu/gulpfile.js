var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	webpack = require('webpack'),
	webpackStream = require('webpack-stream');

gulp.task('sass-build', function () {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass({outputStyle: 'expanded'}))
		.pipe(autoprefixer(['last 5 versions', '> 1%'], {cascade: true}))
		.pipe(gulp.dest('./src/css'))
		.pipe(gulp.dest('./dist'))
		.pipe(cssnano({
			zindex: false
		}))
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist'))
});

gulp.task('js-build', function () {
	return gulp.src('./src/js/hs-mega-menu.js')
		.pipe(webpackStream({
			mode: 'development',
			output: {
				library: 'HSMegaMenu',
				libraryTarget: 'umd',
				libraryExport: 'default',
				filename: 'hs-mega-menu.js',
			},
			module: {
				rules: [
					{
						test: /\.(js)$/,
						exclude: /(node_modules)/,
						loader: 'babel-loader',
						query: {
							presets: [
								["@babel/preset-env"]
							]
						}
					}
				]
			},
			externals: {
				jquery: 'jQuery'
			}
		}))
		.pipe(gulp.dest('./dist/'))
		.pipe(uglify())
		.pipe(rename({
			suffix: '.min'
		}))
		.pipe(gulp.dest('./dist/'))
});

gulp.task('main-watch', function () {
	gulp.watch('./src/scss/**/*.scss', gulp.series('sass-build'));
	gulp.watch('./src/js/hs-mega-menu.js', gulp.series('js-build'));
});

// Default Task
gulp.task('default', gulp.series('main-watch'));
