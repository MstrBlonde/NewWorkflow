const imagemin = require('gulp-imagemin');
const minifyjs = require('gulp-uglify');
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const { parallel, series, src, dest } = require('gulp');

// Create default directories
exports.makeDirs = async () => {
  return src('*.*', { read: false })
    .pipe(dest('./dist'))
    .pipe(dest('./dist/css'))
    .pipe(dest('./dist/img'))
    .pipe(dest('./dist/js'))
    .pipe(dest('./src'))
    .pipe(dest('./src/css'))
    .pipe(dest('./src/img'));
};

// Remove ./dist directory
exports.cleanUp = async () => {
  return src('dist', { allowEmpty: true }).pipe(clean({ force: true }));
};

// Copy ALL HTML and PHP files
exports.copySource = async () => {
  return src('src/*.{htm,html,php}').pipe(dest('dist'));
};

// Optimize Images
exports.imageMin = async () => {
  return src('src/img/*.{png,gif,jpg}')
    .pipe(imagemin())
    .pipe(dest('dist/img'));
};

// Concatenate and minify JS files into main.js
exports.concatJS = async () => {
  return src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minifyjs())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
};

// Minify JS
exports.minifyJS = async () => {
  return src('src/js/*.js')
    .pipe(minifyjs())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(dest('dist/js'));
};

// Minify CSS
exports.minifyCSS = async () => {
  return src('dist/css/*.css', { allowEmpty: true })
    .pipe(minifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'));
};

// Compile SASS
exports.sassifyCSS = async () => {
  return src('src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('src/css'))
    .pipe(minifycss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist/css'));
};

const mDir = 'node_modules/materialize-css/';

exports.copySassVariables = async () => {
  // Copy the Materialize variables file to dev scss directory
  return src(mDir + 'sass/components/_variables.scss').pipe(dest('src/scss'));
};

exports.copyMaterialize = async () => {
  // Copy the Materialize css file to dev scss directory as an include
  return src(mDir + 'sass/materialize.scss')
    .pipe(rename({ prefix: '_' }))
    .pipe(dest('src/scss'));
};

exports.copySassComponentsRoot = async () => {
  // Copy the Materialize components directory to dev scss directory
  return src(mDir + 'sass/components/*').pipe(dest('src/scss/components'));
};

exports.copySassComponentsForms = async () => {
  // Copy the Materialize components/forms directory to dev scss directory
  return src(mDir + 'sass/components/forms/*').pipe(dest('src/scss/components/forms'));
};

// Combine them into one task
exports.copySassComponents = series(exports.copySassComponentsRoot, exports.copySassComponentsForms);

exports.copyJSRoot = async () => {
  // Copy root JS folder
  return src(mDir + 'dist/js/*').pipe(dest('src/js'));
};

exports.copyJSExtras = async () => {
  // Copy JS/extras to dev only
  return src(mDir + 'js/*').pipe(dest('src/js/extras'));
};

// Combine them into one task
exports.copyJS = series(exports.copyJSRoot, exports.copyJSExtras);

exports.copyIndexHtml = async () => {
  // Copy the pre-made index.html file
  return src('src/index.html').pipe(dest('dist'));
};

exports.createImgDirs = async () => {
  // Create empty image directories
  return src('*.*', { read: false })
    .pipe(dest('src/img'))
    .pipe(dest('dist/img'));
};

exports.setUpMaterialize = series(exports.copySassVariables, exports.copyMaterialize, exports.copySassComponents, exports.copyJS, exports.copyIndexHtml, exports.createImgDirs);

// exports.open = function() {
//   return src('dist/index.html').pipe(open({ app: 'chrome' }));
// };
