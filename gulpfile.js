var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_imagemin = require('gulp-imagemin'),
    gp_rename = require('gulp-rename'),
    gp_sass = require('gulp-sass'),
    gp_sourcemaps = require('gulp-sourcemaps'),
    gp_minifycss = require('gulp-minify-css'),
    gp_uglify = require('gulp-uglify'),
    gp_if = require('gulp-if');
var pngquant = require('imagemin-pngquant');
var argv = require('yargs').argv;


gulp.task('sass', function () {
    gulp.src('resources/assets/sass/**/*.scss')
        .pipe(gp_sass())
        .pipe(gp_minifycss())
        .pipe(gulp.dest('public/dist/css'));
});
gulp.task('sass:watch', function () {
    gulp.watch('resources/assets/sass/**/*.scss', ['sass']);
});


gulp.task('unauthed-js', function () {
    return gulp.src(['resources/assets/js/angular/unauthedApp.js',
        'resources/assets/js/angular/main/**/*.js',
        'resources/assets/js/angular/unauthed/**/*.js'])
        .pipe(gp_if(argv.dev, gp_sourcemaps.init()))
        .pipe(gp_concat('unauthed.js'))
        .pipe(gp_uglify())
        .pipe(gp_if(argv.dev, gp_sourcemaps.write()))
        .pipe(gulp.dest('public/dist/js'));
});
gulp.task('unauthed-js:watch', function () {
    gulp.watch('resources/assets/js/angular/unauthed/**/*.js', ['unauthed-js']);
});


gulp.task('authed-js', function () {
    //return gulp.src(['resources/assets/js/angular/authedApp.js',
    //    'resources/assets/js/angular/main/**/*.js',
    //    'resources/assets/js/angular/authed/**/*.js'])
    return gulp.src(['resources/assets/js/angular/authedApp.js',
            'resources/assets/js/angular/main/**/*.js',
            'resources/assets/js/angular/authed/common/core/**/*.js',
            'resources/assets/js/angular/authed/common/dependents/**/*.js',
            'resources/assets/js/angular/authed/dashboard/*.js',
            'resources/assets/js/angular/authed/settings/*.js',
            'resources/assets/js/angular/authed/skills/*.js',
            'resources/assets/js/angular/authed/authedController.js',
            'resources/assets/js/angular/authed/authedService.js'])
        .pipe(gp_if(argv.dev, gp_sourcemaps.init()))
        .pipe(gp_concat('authed.js'))
        .pipe(gp_uglify())
        .pipe(gp_if(argv.dev, gp_sourcemaps.write()))
        .pipe(gulp.dest('public/dist/js'));
});
gulp.task('authed-js:watch', function () {
    gulp.watch('resources/assets/js/angular/authed/**/*.js', ['authed-js']);
});


gulp.task('image', function () {
    return gulp.src('resources/assets/images/**')
        .pipe(gp_imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('public/dist/images'));
});


gulp.task('default', ['sass', 'unauthed-js', 'authed-js', 'image'], function () {});
gulp.task('no-image', ['sass', 'unauthed-js', 'authed-js'], function () {});
