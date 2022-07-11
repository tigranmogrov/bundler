#### Node Version

`Please to use node version >=14.17.0`

#### NPM Version

`Please to use npm version >=7.24.2`

#### Development server

Run `npm dev` for a dev server. \
Navigate to `http://localhost:3000/`. \
The app will automatically reload if you change
any of the source files.

#### Build

Run `npm run build` to build the project.\
The build artifacts will be stored in the `dist/` directory.

* Use the `npm run prod` command for a production build.

#### Watch

Run `npm run watch` to watch the project.\
The build artifacts will be stored in the `dist/` directory.

#### Sourcemap in the build/prod or watch

Add the flag `-d source-map`

For example

`"build": "webpack -c config/build.js -d source-map"`

`"watch": "webpack --watch -c config/prod.js -d source-map"`

#### Html minify `config/plugins`

Change the value in GetHtmlWebpackPlugins.\
collapseWhitespace: true/false

#### Linters

Run `npm run lint` to find problematic patterns or code\
that doesn't adhere to certain style guidelines in the\
project. You can also use `npm run lint-fix` to fix them.

#### Here's an example how to use
<hr/>

#### Code scaffolding

* LazyLoad - https://github.com/ApoorvSaxena/lozad.js

##### How to compress images

**Download this plugin in Webstorm IDE and registered**
```
TinyPNG Image Optimizer
```

##### How to configure html tracking

By default, html files are tracking in the `src` directory.

**config/plugins.js**
```javascript
const indexChunk = getHtmlWebpackPlugins( './src', 'html' );
const allHtmlChunk = [ ...indexChunk ];
```

For example, add tracking of html files in the `src/work` directory.

**config/plugins.js**
```javascript
const indexChunk = getHtmlWebpackPlugins( './src', 'html' );
const workChunk = getHtmlWebpackPlugins( './src/work', 'html' );
const allHtmlChunk = [ ...indexChunk, ...workChunk ];
```

##### Metatags description and keywords are in webpack.config.js <br>in the variable DEFAULTS
```html
<meta name="description" content="<%= htmlWebpackPlugin.options.description %>">
<meta name="keywords" content="<%= htmlWebpackPlugin.options.keywords %>">
```
**webpack.config.js**
```javascript
const DEFAULTS = { description: 'description', keywords: 'keywords' };
```

##### How to use some library

Use commonJs or ES module

* CommonJs
https://requirejs.org/docs/commonjs.html
* ES module
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export

For example, download *Swiper* `npm i swiper` and use them in js file.

```javascript
import Swiper from 'swiper';
const mySwiper = new Swiper('.swiper-container', { /* ... */ });
```

**config/dev.js**
```javascript
/* devServer */
config.devServer = {
static: {directory: paths.devServerDir,},
// If you need to keep track of other files
// watchFiles: ['src/**/*.php', 'public/**/*'],
historyApiFallback: true,
open: true,
compress: true,
hot: false,
port: 3000,
	};
```
