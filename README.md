# Workflow

Setting up the workspace.

## Setup Order

```
$ npm install
$ gulp setUpSpace
$ gulp sassifyCSS
```

[//]: <> (This is also a comment.)

## Utilities

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
