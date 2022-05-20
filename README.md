# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Desktop Version](./src/solution_images/desktop.png)
![Mobile Version](./src/solution_images/mobile.png)

### Links

- Solution URL: [Add solution URL here](https://github.com/Nghuynh07/tip_calculator)
- Live Site URL: [Add live site URL here](https://gilded-arithmetic-ec0e2c.netlify.app/)

## My process

1. npx create-react-app
2. npm i sass
3. Add folders: SASS/SCSS, components, images
4. Add JSX file to components: 1 Button.js, 2 main JSX files: Bill.js and Tip.js and Calculator.js as the parent element as container
5. HTML5 markup. This includes add classes using BEM style, group elements together using css box-model
6. Styling using SCSS and add Media queries only when layout breaks
7. Adding logic to the calculator:

   - Created a data.js for all the tips % and imported into Bill.js and map() to render Button components and passed in props.
   - Store each user input, calculation results, onBlur, onFocus and error into useState hook.
   - Use conditioning to ensure that all three fields (user input for bill, number of people and whether tip is clicked) to show the final calculation of tip person and total amount to be paid per person.
   - To display which tip is being used, an active class is added when clicked. If a custom tip is used then the active class will be removed from the btn and the tip will be calculated based on the custom input. On the contrary if a button is clicked then custom tip will not be used. This is obtained through conditioning.
   - Reset is rather simple, set current state to 0 by setState(0)
   - Input dependencies into useEffect and only run when a state is updated
   - I thought of refractor all the states into one single object; however, it is more readable in my opinion to use individual usesState.

   - CustomHook was also considered; however, each state requires different logic. Because of this I feel like it not necessary to write customHook for each state. If each state were reuseable in a larger project, I think it would benefit more. It might just be my opinion on this. If I were to refractor into a hook, it would make the App.js more clean.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- SCSS

### What I learned

- I have been on and off with react; however, this project I reviewed a lot on the useState and the useEffect hook.
- I learned about onFocus onBlur and use it to change the border of the container.
- The logic of calculator itself requires a little of thinking and logic but I was able to figure out.

### Continued development

- As I progress through the project, sending data using props become tedious. Refractor into contextAPI can be a better solution. Can also build custom hooks for reusable code as well

### Useful resources

- Input styling and removing default appearance - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/number

- React Synthetic Event onFocus onBlur - https://reactjs.org/docs/events.html#focus-events

## Author

- Website - [Huynh Nguyen](https://huynhtn.com/)
- Frontend Mentor - [@Nghuynh07](https://www.frontendmentor.io/profile/Nghuynh07)
- Twitter - [@huyniewin](https://twitter.com/huyniewin)
