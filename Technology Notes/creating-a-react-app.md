# Creating a react app

## NPM node package modules 
- npm init --yes
    - this will set up your package.json and allow you to start adding dependencies to your application
    - packages that you're going to want to install are:
        - **npm install --save package-name**
        - webpack
        - react 
        - react-dom
        - babel-core
        - babel-loader 
        - babel-preset-es2015
        - babel-preset-react
        - redux 
        - react-redux
        - lodash

## .gitignore 
use gitignore to avoid the redundant files that are created by webpack and npm.
the core of what you need to include in it is...

```git
# .gitignore

node_modules/
bundle.js
bundle.js.map
```

## Configure Webpack
webpack.config.js allows you to specify your entry file, and the name and location of your output file.

```javascript 
var path = require('path');

module.exports = {
  entry: './frontend/entry.jsx',
  output: {
    filename: './bundle.js',
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
```

**Checklist** 
    - set entry and output files
    - configure babel transpilation of React and ES6 syntax in your webpack.config.js file
    - add a devtool like 'source-map'
    - ensure that .js and .jsx files are resolved in your webpack.config
    - create a .gitignore file
    - "webpack": "webpack --watch" file to ensure the correct version runs