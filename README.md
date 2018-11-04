# Formule

<p align="left ">
  <img src="https://img.shields.io/bundlephobia/min/formule.svg" />
  <img src="https://img.shields.io/npm/v/formule.svg" />
  <img src="https://img.shields.io/npm/l/formule.svg" />
</p>

JavaScript implementation of formulas for humans.

## Contents

- [Installing](#installing)
  - [Using Yarn](#using-yarn)
  - [Using NPM](#using-npm)
  - [Using UMD](#using-umd)
- [API](#api)
  - [Constants](#constants)
    - [e](#e)
    - [pi](#pi)
  - [Functions](#functions)
    - [concat](#concat)
    - [join](#join)
- [License](#license)

## Installing

### Using Yarn

```
yarn add formule
```

### Using NPM

```
npm install formule
```

### Using UMD

```
<script src="https://unpkg.com/formule/dist/formule.umd.js"></script>
```

# API

## Constants

### e
The base of the natural logarithm.

<b>Types</b>

`number`

<b>Syntax</b>

```js
e
```

<b>Examples</b>

```js
e // 2.718281828459045;
```

### pi

The ratio of a circle's circumference to its diameter.

<b>Types</b>

`number`

<b>Syntax</b>

```js
pi
```

<b>Examples</b>

```js
pi // 3.141592653589793;
```

### Functions

### concat

Concatenates its arguments and returns the result.

<b>Types</b>

<b>Input:</b> `any`<br>
<b>Output:</b> `string`

<b>Syntax</b>

```js
concat(...text)
```

<b>Examples</b>

```js
concat('Hello', 'World') // "HelloWorld"
```

### join

Inserts the first argument between the rest and returns their concatenation.

<b>Types</b>

<b>Input:</b> `any`<br>
<b>Output:</b> `string`

<b>Syntax</b>

```js
join(...text)
```

<b>Examples</b>

```js
join('-', 1, 2, 3) // "1-2-3"
```

## License

MIT

---

> [elaurent.org](http://elaurent.org) &nbsp;&middot;&nbsp;
> GitHub [emersonlaurentino](https://github.com/emersonlaurentino) &nbsp;&middot;&nbsp;
> Twitter [@elaurent\_](https://twitter.com/elaurent_)
