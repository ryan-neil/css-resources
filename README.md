# CSS Resources
<p align="center">
  <img src="/src/assets/css-hero.png" width="900" alt="css-hero">
</p>

## Introduction
The goal of this document is to provide a quick reference guide for features of CSS along with simple to understand sample code.

This guide is not intended to teach you the fundamentals of CSS but merely a reference guide to come back to for a reference of general tips and tricks.

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter URL](https://img.shields.io/twitter/url/https/twitter.com/josephskycrest.svg?style=social&label=Follow%20%40josephskycrest)](https://twitter.com/josephskycrest)

## 📂 Repo Folder Structure
`/src/` - contains the source files for the Github repo. \
`/src/assets/` contains images for the repo. \
`/src/css/` - contains all CSS component files.

## 📌 Repo File Components
1. Box-Shadow
1. Cards
1. Colors
1. Fonts
1. Icons
1. Layout

## 🔗 Resources
- [Google Material Design](https://material.io/)
- [IBM Design Language](https://www.ibm.com/design/language/)
- [Guide to CSS Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [PurgeCSS](https://purgecss.com/#sponsors-%F0%9F%A5%B0)
- [CSS -> JavaScript](https://css2js.dotenv.dev/)

## 📓 Notes
### Table of Contents

  1. [Centering a Div](#centering-a-div)
  1. [Color](#color)
  1. [Depth](#depth)
  1. [Fonts](#fonts)
  1. [Icons](#icons)

---

### Centering a Div
Yes, the dreaded centering in CSS... There are many ways to achieve this but luckily _Flex_ and _Grid_ have made our lives much easier.

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

### Color

#### Resources:
* [Shopify Color](https://polaris.shopify.com/design/colors#navigation)
* [IBM Color](https://www.ibm.com/design/language/color)
* [TailwindCSS Colors](https://tailwindcss.com/docs/customizing-colors)
* [Coolors](https://coolors.co/)
* [HTML Color Codes](https://htmlcolorcodes.com/)
* [BrandColors](https://brandcolors.net/)
* [ColorSpace](https://mycolor.space/)

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

Depth (also referred to as elevation) is used to draw focus to an experience and add a physical materiality to the app. Shallow levels are reserved for items that are closely connected to the canvas or view, such as tiles. Deeper levels create a prominent frame around the surface, drawing strong focus to self-contained experiences like dialogs.

The following examples are based on Microsoft's UI elevation chart:

##### Depth Level 4:
Usage:
* Cards
* Grid item thumbnails

```css
.card.depth4 {
  // depth 4
  box-shadow: 0 1.6px 3.6px 0 rgba(0,0,0,.132),0 .3px .9px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-4.png" width="200" alt="depth-4-card">
</p>

##### Depth Level 8:
Usage:
* Command bars
* Command dropdowns
* Context menus

```css
.card.depth8 {
  // depth 8
  box-shadow: 0 3.2px 7.2px 0 rgba(0,0,0,.132),0 .6px 1.8px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-8.png" width="200" alt="depth-8-card">
</p>

##### Depth Level 16:
Usage:
* Teaching callouts
* Search results dropdown
* Hover cards
* Tooltips

```css
.card.depth16 {
  // depth 16
  box-shadow: 0 6.4px 14.4px 0 rgba(0,0,0,.132),0 1.2px 3.6px 0 rgba(0,0,0,.108);
}
```

<p align="left">
  <img src="/src/assets/card-depth-16.png" width="200" alt="depth-16-card">
</p>

##### Depth Level 64:
Usage:
* Panels
* Pop up dialogs

```css
.card.depth64 {
  // depth 64
  box-shadow: 0 25.6px 57.6px 0 rgba(0,0,0,.22),0 4.8px 14.4px 0 rgba(0,0,0,.18);
}
```

<p align="left">
  <img src="/src/assets/card-depth-64.png" width="200" alt="depth-64-card">
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
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Next, to incorporate the icons into our webpage, add the following line wherever we want the icon in our HTML file:
```html
<span class="material-icons" style="color:blue;">cloud</span>
```
OR
```html
<i class="material-icons" style="color:blue;">cloud</i>
```

Output:

<img src="/src/assets/cloud.svg" width="50">

**[⬆ Top](#table-of-contents)**

---

### Fonts

#### Resources:
* [Google Fonts](https://fonts.google.com/)
* [Font Pairing](https://fontpair.co/)

#### Google Fonts
Google Fonts is a library of more than a thousand free and open source font families and APIs for conveniently using the fonts via CSS.

To add Google Fonts to our project, add a special style sheet link to the `<head>` section. Here's an example using my current favorite font, Quicksand:
```html
<head>
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Quicksand&display=swap" rel="stylesheet"> 
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