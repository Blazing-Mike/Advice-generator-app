# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### Screenshot

![](./screenshot.jpg)



### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript



### What I learned

- I learnt how to interact with third party APIs for the first time


```js
function generateAdvice() {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((response) => {
      });
  }
```




### Continued development
- Build more projects using third party APIs
- Understand concept of fetch APIs in-depth



## Author

- Frontend Mentor - [@Blazing-Mike](https://www.frontendmentor.io/profile/Blazing-Mike)
- Twitter - [@yourusername](https://www.twitter.com/Mikeoxygen1)

