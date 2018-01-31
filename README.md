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

## List of Commands
### Compile code once.
```
yarn build-dev | npm build-dev
yarn build | npm build
```

### Start watcher. Re-compiles code on any change.
```
yarn watch-dev | npm watch-dev
yarn watch | npm watch
```

## Directory Structure
- /dist - Generated files - The stuff that you need for the website 
- /examples - HTML examples, can be used as UI templates 
- /node_modules - Node dependency libraries
- /src - Source files