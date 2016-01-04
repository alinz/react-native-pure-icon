# React-Native-Pure-Icon

This is a simple implementation of having custom icons in React-Native.
There are a lot of implementations but most of them use native code. You can even just copy the content into your project.

In this repo, I have introduced a simple way to incorporate your custom fonts in your
React-Native by just using Text Component and some unicode helper.


# Create Custom Fonts

For creating custom fonts, you can use a free tools [icomoon.io](https://icomoon.io). You can import
all of your custom shapes as SVG and it transforms them into `ttf` file. It also
exports a css file which contains a unique unicode assign to each shape, which you
can use it with this module.


# Usage

- install the module from npm, `npm install react-native-pure-icon --save`
- in Android copy font file to `android/app/src/main/assets/fonts`
- in iOS
  - right click on your project in xCode and select `Add files to` and add the font file
  - edit `Info.plist` and add a property `Fonts provided by application` and add the font file
- recompile and build the project
- create a file called `font_types.js` and add the unicode representation of each shape.

```js
export default {
  "Home": "e900",
  "PAINT": "e901",
  "CLUBS": "e902",
  "FILE": "e903"
}
```

> if you are using `icomoon.io`, when you generate font, it will also generate a style.css which contains all of the unicode numbers.

- Using `glypyMapMaker` utility, convert font_types into actual values which can be used by Text component.

```js
import { Icon, glypyMapMaker } from 'react-native-pure-icon';
import fontTypes from './font_types';

const glypy = glypyMapMaker(fontTypes);

//inside your component
<Icon type={glypy.HOME} font="custom_font" style={{ fontSize: 14 }}/>
```
