# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://frontendmentor.io). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [https://github.com](https://github.com)
- Live Site URL: [https://github.io](https://github.io)

## My process

### Built with

- Semantic HTML5 markup
- CSS Flexbox (for structural card layout alignments and mobile vertical stacking)
- Custom Google Web Fonts (Manrope)
- FontAwesome Vector Icons (v7.3.1 CDN)
- Vanilla JavaScript (ECMAScript 6 runtime DOM manipulation)

### What I learned

During this project, I learned how to handle layout positioning transitions between mobile and desktop devices. Specifically, understanding how absolute positioning calculates offsets relative to its closest relative parent container was crucial for positioning the desktop tooltip.

I successfully implemented the absolute center horizontal alignment trick using `left: 50%` and `transform: translateX(-50%)`:

```css
.invisibleButtons {
    position: absolute;
    bottom: 40px;
    left: 50%; 
    transform: translateX(-50%); /* Shifts the popover back by exactly half of its own dynamic width */
    z-index: 10; 
}
```

I also learned how to leverage an active toggle utility class to re-engineer layout hierarchies under mobile breakpoints. By listening to the client window width dynamically at runtime, a single click event manages both desktop popups and full mobile active section rewrites:

```js
button.addEventListener("click", () => {
    let screenWidth = window.innerWidth; 
    if (screenWidth <= 768) {
        // Toggles mobile UI state and modifies layout structure
        endBody.classList.toggle("active");
        console.log("device is in mobile view, button was clicked.");
    } else {
        // Operates a standard desktop click lifecycle chain
        clickCount++;
        if (clickCount === 1) {
            invisibleButtons.style.display = "flex";
        } else if (clickCount === 2) {
            invisibleButtons.style.display = "none";
            clickCount = 0;
        }
    }
});
```

### AI Collaboration

I collaborated with an AI assistant to streamline the design layout and structure of this project documentation.

- **Tools Used:** ChatGPT 
- **How I Used It:** I used the assistant to refine my media query logic layout, document code structures, and analyze exactly how CSS layouts morph when the `.active` mobile state class changes.
- **What Worked Well:** The assistant gave me an excellent breakdown of absolute transform mechanics and perfectly populated my project specifications right into this official Frontend Mentor markdown template schema.

## Author

- Frontend Mentor - [@Noel-rego](https://frontendmentor.io)