//PART 1: Getting Started ------ Start the project by building a main content element using the following steps:

// 1. Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)";

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>. 
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

//Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");

//-----------------------------------------------------------
//Part 2: Creating a Menu Bar --- Next, create a blank menu bar that we can use to later add some interactivity to the page:

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.querySelector("top-menu");

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//-------------------------------------------------------------
// Part 3. Adding Menu Buttons: To continue:

// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

// 1. Iterate over the entire menuLinks array and for each "link" object:

