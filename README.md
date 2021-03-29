# CSS Resources
<p align="center">
  <img src="/src/assets/css-hero.png" width="900" alt="css-hero">
</p>

## Introduction
The goal of this document is to provide a quick reference guide for features of CSS along with simple to understand sample code.

This guide is not intended to teach you the fundamentals of CSS but merely a reference guide to come back to for a reference of general tips and tricks.

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/home?lang=en)

## 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
  .
  ├── src
    ├── assets
      ├── repo image files
    └── css
      ├── box-shadow
      ├── cards
      ├── colors
      ├── css-flex
      ├── css-grid
      ├── fonts
      ├── icons
      └── layout
```

1. **`/src`**: This directory contains all of the source files for the Github repo. \
    1. **`/assets`**: This directory contains images for the repo. \
    1. **`/css`**: This directory contains all css component files.

## 🔗 Resources
- [Google Material Design](https://material.io/)
- [IBM Design Language](https://www.ibm.com/design/language/)
- [PurgeCSS](https://purgecss.com/#sponsors-%F0%9F%A5%B0)
- [Undesign - Design Tools](https://undesign.learn.uno/)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)
- [Responsively](https://responsively.app/)
- [Hero Generator](https://hero-generator.netlify.app/)
- [CSS Reference Sheet](https://pixllabs.io/blog/web-development/css-cheat-sheet/)
- [HTML Cheatsheet](https://overapi.com/html)

## 📓 Notes
### Table of Contents

  1. [Centering a Div](#centering-a-div)
  1. [CSS Flexbox](#css-flexbox)
  1. [CSS Grid](#css-grid)
  1. [CSS Variables](#css-variables)
  1. [Color](#color)
  1. [Depth](#depth)
  1. [Fonts](#fonts)
  1. [Icons](#icons)

---

### Centering a Div
Yes, the dreaded centering in CSS... There are many ways to achieve this but luckily __Flex__ and __Grid__ have made our lives much easier.

For each example we will be using the following HTML:
```html
<div class="outer-div">
  <div class="inner-div"></div>
</div>
```

Each example will have these root CSS styles:
```css
.outer-div {
  background-color: #E3E3E3;
  width: 600px;
  height: 200px;
}

.inner-div {
  background-color: #0578D3;
  width: 250px;
  height: 100px;
}
```

We have a 600x200 grey outer div, and a 250x100 blue inner div. The goal is to center the blue div vertically and horizontally inside the red div.

<p align="left">
  <img src="/src/assets/css-center-div-01.png" width="300" alt="css-center-div">
</p>

We should get this end result:

<p align="left">
  <img src="/src/assets/css-center-div-02.png" width="300" alt="css-center-div">
</p>

### Flexbox:
```css
.outer-div {
  display: flex;
  justify-content: center;
  align-items: center;
}
```
OR
```css
.outer-div {
  display: flex;
  justify-content: center;
}

.inner-div {
  align-self: center;
}
```

### Grid:
```css
.outer-div {
  display: grid;
  place-content: center;
}
```
OR
```css
.outer-div {
  display: grid;
  align-items: center;
  justify-content: center;
}
```
OR
```css
.outer-div {
  display: grid;
}

.inner-div {
  align-self: center;
  justify-self: center;
}
```

### Absolute Positioning:
```css
.outer-div {
  position: relative;
}

.inner-div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```
OR
```css
.outer-div {
  position: relative;
}

.inner-div {
  position: absolute;
  top: 0;
  left: 0;
  margin: auto;
}
```

**[⬆ Top](#table-of-contents)**

---

### CSS Flexbox

#### Resources:
* [CSS Tricks Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)


**[⬆ Top](#table-of-contents)**

---

### CSS Grid

#### Resources:
* [CSS Tricks Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [CSS Grid Generator](https://cssgrid-generator.netlify.app/)
* [Guide to CSS Grid](https://dev.to/joyshaheb/)
* [Grid Cheatsheet 2021](https://dev.to/joyshaheb/css-grid-cheat-sheet-illustrated-in-2021-1a3)


**[⬆ Top](#table-of-contents)**

---

### CSS Variables

#### Resources:

The `var()` function is used to insert the value of a CSS variable. CSS variables have access to the DOM, which means that you can create variables with local or global scope, change the variables with JavaScript, and change the variables based on media queries.

__Syntax__:
```css
var(name, value)
```

> Note: The variable name must begin with two dashes (`--`) and it is case sensitive!

Global variables can be accessed/used through the entire document, while local variables can be used only inside the selector where it is declared.

To create a variable with global scope, declare it inside the `:root` selector. The `:root` selector matches the document's root element.

To create a variable with local scope, declare it inside the selector that is going to use it.

__Example__:
```css
:root {
  --blue: #1e90ff;
  --white: #ffffff;
}

.container {
  color: var(--blue);
  background-color: var(--white);
}
```
Advantages of using var() are:
  * makes the code easier to read (more understandable).
  * makes it much easier to change the color, sizing and spacing values.

### Changing CSS Variables with JavaScript
CSS variables have access to the DOM, which means that you can change them with JavaScript.

__Example__:
```js
// get the root element
const root = document.querySelector(':root');

// Create a function for getting a variable value
function getVariableValue() {
	// get the styles (properties and values) for the root
	const rootStyle = getComputedStyle(root);
	// print the value of the --white variable
	rootStyle.getPropertyValue('--white'); // -> #ffffff
}

// Create a function for setting a variable value
function setVariableValue() {
	// Set the value of variable --white to another value (in this case "gray")
	root.style.setProperty('--white', 'gray');
}
```

**[⬆ Top](#table-of-contents)**

---

### Color

#### Resources:
* [Colorinspo](https://colorsinspo.com/)
* [Shopify Color](https://polaris.shopify.com/design/colors#navigation)
* [IBM Color](https://www.ibm.com/design/language/color)
* [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)
* [Coolors](https://coolors.co/)
* [HTML Color Codes](https://htmlcolorcodes.com/)
* [ColorSpace](https://mycolor.space/)
* [CoolHue - Gradient Colors](https://webkul.github.io/coolhue/)
* [Happy Hues](https://www.happyhues.co/)

Companies:
```css
:root {
  --airbnb-coral: #ff585d;
  --apple-blue: #0479f1;
  --atlassian-blue: #003366;
  --facebook-blue: #4267b2;
  --ferrari-red: #cd212a;
  --firefox-dark-orange: #e66000;
  --firefox-orange: #ff9500;
  --firefox-yellow: #ffcb00;
  --google-yellow: #f4b400;
  --google-red: #db4437;
  --google-blue: #4285f4;
  --google-green: #34a853;
  --heroku-light-purple: #c9c3e6;
  --heroku-purple: #6762a6;
  --javascript-yellow: #f7df1e;
  --lyft-pink: #ff00bf;
  --react-blue: #00d8ff;
  --reddit-red: #ff4500;
  --roku-purple: #6f1ab1;
  --spotify-green: #1db954;
  --starbucks-green: #00704a;
}
```

Call to action:
```css
:root {
  --success: #28a745;
  --danger: #dc3545;
  --warning: #ffc107;
}
```

Neon:
```css
:root {
  --neon-dark: #01041E;
  --neon-green: #3EFF15;
  --neon-yellow: #FFF857;
  --neon-teal: #00FFFF;
  --neon-pink: #fe59c2;
  --neon-purple-dark: #A117F2;
  --neon-purple-medium: #BE00FE;
  --neon-purple-light: #DF00FE;
}
```

#### RGB:
RGB numbers are based upon monitor settings of red, green, and blue light. By changing the RGB numbers, you’re telling your monitor how much of that particular light color you want to shine.

RGB defines the values of red (the first number), green (the second number), or blue (the third number). The number 0 signifies no representation of the color and 255 signifies the highest possible concentration of the color.

`RGB(255, 0, 0)`

In the above example, you get the brightest red possible without any green or blue presented. If you wanted only green, you’d use `RGB(0, 255, 0)` and for blue, `RGB(0, 0, 255)`.

#### Hexadecimal (Hex):
We use hexadecimal numbers because it’s a human-friendly representation of values in binary code. Hex color codes start with a pound sign or hashtag (#) and are followed by six letters and/or numbers. 

The first two letters/numbers refer to _red_, the next two refer to _green_, and the last two refer to _blue_. The color values are defined in values between 00 and FF (instead of from 0 to 255 in RGB).

Numbers are used when the value is 1-9. Letters are used when the value is higher than 9. \
`A = 10` \
`B = 11` \
`C = 12` \
`D = 13` \
`E = 14` \
`F = 15`

To get a hexadecimal color, we simply follow these three steps:
1. Multiply the first number (or converted number from the letter) by 16.
1. Multiply the second number (or converted number from the letter) by 1.
1. Add those two totals together to get a single value.

For example, the hexadecimal number for the number 83 is actually 131. We come to this conclusion by:
1. Multiplying the 8 in 83 by 16 (8x16=128).
1. Multiplying the 3 in 83 by 1 (3x1=3).
1. Adding the two totals together (128+3=131).

Working with letters is the same concept. For example, FF = 255 because you multiply the number that represents F (15) by 16, then multiply the number that represents the second F (15) by 1. Then add the two totals together to equal 255. Recognize that the number 255 is the same as the RGB number 255, which is bright red.

**[⬆ Top](#table-of-contents)**

---

### Depth

#### Resources:
* [Microsoft Depth](https://developer.microsoft.com/en-us/fluentui#/styles/web/elevation)
* [Generate Box Shadows](https://shadows.brumm.af/)

Depth (also referred to as elevation) is used to draw focus to an experience and add a physical materiality to the app. Shallow levels are reserved for items that are closely connected to the canvas or view, such as tiles. Deeper levels create a prominent frame around the surface, drawing strong focus to self-contained experiences like dialogs.

The following examples are based on Microsoft's UI elevation chart:

#### Depth Level 4:
Usage:
* Cards
* Grid item thumbnails

```css
.card.depth4 {
  box-shadow: 0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-4.png" width="260" alt="depth-4-card">
</p>

#### Depth Level 8:
Usage:
* Command bars
* Command dropdowns
* Context menus

```css
.card.depth8 {
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-8.png" width="265" alt="depth-8-card">
</p>

#### Depth Level 16:
Usage:
* Teaching callouts
* Search results dropdown
* Hover cards
* Tooltips

```css
.card.depth16 {
  box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-16.png" width="270" alt="depth-16-card">
</p>

#### Depth Level 64:
Usage:
* Panels
* Pop up dialogs

```css
.card.depth64 {
  box-shadow: 0 25.6px 57.6px 0 rgba(0,0,0,.22),0 4.8px 14.4px 0 rgba(0,0,0,.18);
}
```

<p align="left">
  <img src="/src/assets/card-depth-64.png" width="280" alt="depth-64-card">
</p>

**[⬆ Top](#table-of-contents)**

---

### Icons

#### Resources:
* [Google Icons](https://fonts.google.com/icons)

#### Google Icons:
Icon fonts are fonts that contain symbols and glyphs instead of letters or numbers. A major advantage of icon fonts is they scale very nicely; they increase in size with much better quality than raster images. Also, since a font icon is text, CSS can easily be applied to adjust the size and change the color.

To use Google Icon Fonts, add the following line inside the `<head>` section of your HTML file:
```html
<head>
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>
```

Next, to incorporate the icons into our webpage, add the following line wherever we want the icon in our HTML file:
```html
<body>
  <span class="material-icons" style="color:blue;">cloud</span>
</body>
```
OR
```html
<body>
  <i class="material-icons" style="color:blue;">cloud</i>
</body>
```

Output:

<img src="/src/assets/cloud.svg" width="50">

**[⬆ Top](#table-of-contents)**

---

### Fonts

#### Resources:
* [Google Fonts](https://fonts.google.com/)
* [Font Pairing](https://fontjoy.com/)
* [Font Sizing - Type Scale](https://type-scale.com/)


#### Google Fonts
Google Fonts is a library of more than a thousand free and open source font families and APIs for conveniently using the fonts via CSS.

To add Google Fonts to our project, add a special style sheet link to the `<head>` section. Here's an example using my current favorite font, Quicksand:
```html
<head>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500&display=swap" rel="stylesheet">
</head>
```
Now we must refer to the font in our CSS file:
```css
html {
  font-family: 'Quicksand', sans-serif
};
```

**[⬆ Top](#table-of-contents)**

---

### Contributing
Contributions are always welcome! All I ask is that you open an issue and we discuss your proposed changes before you create a pull request.