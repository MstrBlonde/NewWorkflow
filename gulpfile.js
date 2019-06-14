const imagemin = require('gulp-imagemin');
const minifyjs = require('gulp-uglify');
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const { series, src, dest } = require('gulp');
const dotenv = require('dotenv').config();

//-------------------------------------
// SETUP
//-------------------------------------

// Not Materialize? Delete some unneeded files
const noMatarialize = async () => {
  return src('./indexM.html', { allowEmpty: true })
    .pipe(src('./js/init.js', { allowEmpty: true }))
    .pipe(src('./scss/appM.scss', { allowEmpty: true }))
    .pipe(clean({ force: true }));
};
exports.noMatarialize = noMatarialize;

// Create default directories
const makeDirs = async () => {
  return src('*.*', { read: false })
    .pipe(dest('./dist'))
    .pipe(dest('./dist/css'))
    .pipe(dest('./dist/img'))
    .pipe(dest('./dist/js'))
    .pipe(dest('./src'))
    .pipe(dest('./src/css'))
    .pipe(dest('./src/img'));
};
exports.makeDirs = makeDirs;

//-------------------------------------
// BUILD
//-------------------------------------

// Copy ALL HTML and PHP files
const copySource = async () => {
  return src('src/**/*.{htm,html,php}').pipe(dest('dist'));
};
exports.copySource = copySource;

// Optimize Images
const imageMin = async () => {
  return src('src/img/**/*.{png,gif,jpg}')
    .pipe(imagemin())
    .pipe(dest('dist/img'));
};
exports.imageMin = imageMin;

// Concatenate, babel and minify JS files into main.js
const concatJS = async () => {
  return src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(minifyjs())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
};
exports.concatJS = concatJS;

// Minify JS
const minifyJS = async () => {
  return src('src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(minifyjs())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
};
exports.minifyJS = minifyJS;

// Minify CSS
const minifyCSS = async () => {
  return src('dist/css/*.css', { allowEmpty: true })
    .pipe(minifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'));
};
exports.minifyCSS = minifyCSS;

// Compile SASS
const sassifyCSS = async () => {
  return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'))
    .pipe(minifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'));
};
exports.sassifyCSS = sassifyCSS;

//-------------------------------------
// ANUSTART
//-------------------------------------

// Remove ./dist directory
const cleanUp = async () => {
  return src('dist', { allowEmpty: true }).pipe(clean({ force: true }));
};
exports.cleanUp = cleanUp;

//-------------------------------------
// MATERIALIZE CSS
//-------------------------------------

const mDir = 'node_modules/materialize-css/';

const copySassVariables = async () => {
  // Copy the Materialize variables file to dev scss directory
  return src(mDir + 'sass/components/_variables.scss').pipe(dest('src/scss'));
};
exports.copySassVariables = copySassVariables;

const copyMaterialize = async () => {
  // Copy the Materialize css file to dev scss directory as an include
  return src(mDir + 'sass/materialize.scss')
    .pipe(rename({ prefix: '_' }))
    .pipe(dest('src/scss'));
};
exports.copyMaterialize = copyMaterialize;

const copySassComponentsRoot = async () => {
  // Copy the Materialize components directory to dev scss directory
  return src(mDir + 'sass/components/*').pipe(dest('src/scss/components'));
};
exports.copySassComponentsRoot = copySassComponentsRoot;

const copySassComponentsForms = async () => {
  // Copy the Materialize components/forms directory to dev scss directory
  return src(mDir + 'sass/components/forms/*').pipe(dest('src/scss/components/forms'));
};
exports.copySassComponentsForms = copySassComponentsForms;

// Combine them into one task
const copySassComponents = series(copySassComponentsRoot, copySassComponentsForms);

const copyJSRoot = async () => {
  // Copy root JS folder
  return src(mDir + 'dist/js/*').pipe(dest('src/js'));
};
exports.copyJSRoot = copyJSRoot;

const copyJSExtras = async () => {
  // Copy JS/extras to dev only
  return src(mDir + 'js/*').pipe(dest('src/js/extras'));
};
exports.copyJSExtras = copyJSExtras;

// Combine them into one task
const copyJS = series(exports.copyJSRoot, exports.copyJSExtras);

const copyIndexHtml = async () => {
  // Copy the pre-made index.html file
  return src('src/index.html').pipe(dest('dist'));
};
exports.copyIndexHtml = copyIndexHtml;

const createImgDirs = async () => {
  // Create empty image directories
  return src('*.*', { read: false })
    .pipe(dest('src/img'))
    .pipe(dest('dist/img'));
};
exports.createImgDirs = createImgDirs;

exports.setUpMaterialize = series(copySassVariables, copyMaterialize, copySassComponents, copyJS, copyIndexHtml, createImgDirs);

if (process.env.MATERIALIZE == 'true') {
  exports.setup = series(makeDirs, setUpMaterialize);
} else {
  exports.setup = series(noMatarialize, makeDirs);
}
