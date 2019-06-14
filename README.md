# Workflow

Setting up the workspace!

## Setup Order

```
// make sure you set process.env.MATERIALIZE to true
$ npm install materialize-css@next

$ npm install
$ npm run setup
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
