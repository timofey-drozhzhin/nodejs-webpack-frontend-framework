# About
This is an all-in-one front-end framework, based on NodeJS and Webpack 2, designed to handle everything besides HTML.
 
I started this project when I was in need of something to handle my front-end code - SASS files, JS code, original 
images, dependancies (i.e. bootstrap). I needed something that would compile all of it into plain CSS/JS, minify code, 
optimize images and only use the assets that are being referenced to.

# Installation
Install the required software
- Node and NPM (Node Package Management)
- Yarn (Optional. Replaces NPM)

Download Dependencies
```
yarn install | npm install
```

# List of Commands
Compile code once.
```
yarn build-dev | npm build-dev
yarn build | npm build
```

Start watcher. Re-compiles code on any change.
```
yarn watch-dev | npm watch-dev
yarn watch | npm watch
```

# Directory Structure
- /dist - Generated files - The stuff that you need for the website 
- /examples - HTML examples, can be used as UI templates 
- /node_modules - Node dependency libraries
- /src - Source files

# Explanation of NPM Packages Used
- autoprefixer - automatically adds browser-specific prefixes to CSS
- bootstrap - a CSS framework used in SCSS
- copy-webpack-plugin - used to copy webfonts
- css-loader - Required by sass-loader
- cssnano - CSS minifier
- extract-text-webpack-plugin - Required by sass-loader. Extracts css from JS files
- file-loader - copies files over.
- font-awesome - an icon library used in SCSS
- imagemin-webpack-plugin - used to minimize the generated png, gif and svg images, no jpg since we don't want loss of quality.
- isdev - allows to run npm/yarn as DEV or PRODUCTION
- jimp - image processor, required by responsive-loader
- node-sass - required by sass-loader
- postcss-loader - performs jobs to the css files after they've been generated. Runs autoprefixer and cssnano.
- resolve-url-loader - resolves background-image URLs in SCSS files
- responsive-loader - downsamples and resizes the JPG/JPEG and PNG images. Adds support for custom sizes, i.e. imageName.jpg?size100
- sass-loader - compiles *.scss & *.sass files into css
- sharp - a fast image processor, optionally used by sass-loader, replaces jimp
- style-loader - required by sass-loader
- url-loader - just like file-loader, but can also return files as DataURL. TODO: do we need this?
- webpack - automates the whole build, i.e. alternative to gulp / grunt