# Workflow

Setting up the workspace!

## Setup Order

### Setup _with_ Material CSS

```
$ npm install
$ gulp setUpMaterialize (for Materialize ONLY)
$ gulp sassifyCSS
```

### Setup _without_ Material CSS

Delete indexM.html, ./js/init.js and ./scss/appM.scss, then:

```
$ npm install
$ gulp makeDirs
$ gulp copySource
```

[//]: <> (This is also a comment.)

## Utilities

```
$ npm install materialize-css@next
```

Install Materialize CSS

```
$ gulp cleanUp
```

Completely destroys ./dist

```
$ gulp copySource
```

Copy all HTML and PHP files to ./dist

```
$ gulp imageMin
```

Optimize all images from ./src/img to ./dist/img

```
$ gulp concatJS
```

Merge and minify javascript files

```
$ gulp minifyJS
```

Minify all javascript files

```
$ gulp minifyCSS
```

Minify all CSS files

```
$ gulp sassify
```

Compile all SASS files into .css and .min.css
