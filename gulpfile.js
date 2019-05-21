const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps'); 
const autoprefixer = require('gulp-autoprefixer');
 
gulp.task('default', function () {
    gulp.watch('./scss/*', function () {     
        return gulp.src('./scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(autoprefixer({browsers: ['last 2 versions', 'ie >= 9']}))
        .pipe(sourcemaps.write("./maps/"))
        .pipe(gulp.dest('./css'));
    })
});

