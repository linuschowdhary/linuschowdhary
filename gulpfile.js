var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src(['assets/js/jquery/*.js', 'assets/js/libs/*.js', 'assets/js/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify())
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['assets/css/libs/normalize.css',
                     'assets/css/libs/font-awesome.min.css',
                     'assets/css/libs/materialize.min.css',
                     'assets/css/bootstrap.css',
                     'assets/css/animate.min.css',
                     'assets/css/libs/sweet-alert.css',
                     'assets/css/libs/owl.carousel.css',
                     'assets/css/libs/owl.transitions.css',
                     'assets/css/libs/owl.theme.css',
                     'assets/css/main.css',
                     'assets/css/responsive.css',
                     'assets/css/blog.css',
                     'assets/css/colors/color1.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('public/build/css'));
});
gulp.task('default', ['pack-js', 'pack-css']);