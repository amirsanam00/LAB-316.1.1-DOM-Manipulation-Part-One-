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
const topMenuEl = document.querySelector("#top-menu");

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

//-------------------------------------------------------------
// Part 3. Adding Menu Buttons: To continue:

// Menu data structure
let menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// 1. Iterate over the entire menuLinks array and for each "link" object:

menuLinks.forEach (link => {
 // 2. Create an <a> element.
 let newLink = document.createElement('a');
 // 3.  On the new element, add an href attribute with its value set to the href property of the "link" object.
 newLink.setAttribute(`href`, link.href);
 // 4. Set the new element's content to the value of the text property of the "link" object.
 newLink.textContent = link.text;
 // 5. Append the new element to the topMenuEl element.
 topMenuEl.appendChild(newLink);
});


///(PART 2) -------------------------

//Part 3: Creating the Submenu

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById ("sub-menu");

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = "100%";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

//-----------------------------------------
// Part 4: Adding Menu Interaction

// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
// const topMenuEl = document.getElementById ("top-menu");

const topMenuLinks = topMenuEl.querySelectorAll('a');
console.log(topMenuLinks)
// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener ("click", function (e) {
  // a. The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault ();
  // b. The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (e.target.tagName !== "A") return;
  // c. Log the content of the <a> to verify the handler is working.
  console.log(e.target.textContent);

//  Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:

// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
const clickedLink = menuLinks.find(link=> link.text === e.target.textContent);

topMenuLinks.forEach(link => link.classList.remove('active'));
// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
if (e.target.classList.contains("active")) {
  e.target.classList.remove("active");
  subMenuEl.style.top = "0";
  return;
}
e.target.classList.add("active");
if (clickedLink.subLinks) {
  subMenuEl.style.top ="100%";
  buildSubMenu(clickedLink.subLinks);
} else { subMenuEl.style.top = "0";
  updateMainContent(clickedLink.text);

}
//  Hint: Removing a non-existent class from an element does not cause an error!
 });

 //----------------------------------
 //Part 5: Adding Submenu Interaction

//  1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):

//  If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
//  Otherwise, set the CSS top property of subMenuEl to 0.
//  Hint: Caching the "link" object will come in handy for passing its subLinks array later.

 function buildSubMenu (subLinks){
  subMenuEl.innerHTML = "";
  subLinks.forEach(link => {
    let newSub = document.createElement("a");
    newSub.setAttribute(`href`, link.href);
    newSub.textContent = link.text;
    subMenuEl.appendChild (newSub)
  })
 } 

//  The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
//  1. Attach a delegated 'click' event listener to subMenuEl.
    //  The first line of code of the event listener function should call the event object's preventDefault() method.
    //  The second line of code within the function should immediately return if the element clicked was not an <a> element.
    //  Log the content of the <a> to verify the handler is working.
subMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") return;
  console.log(event.target.textContent);


//  2. Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = "0";

//  3. Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach(link => link.classList.remove ("active"));

//  4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
updateMainContent(event.target.textContent);
});

//  5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
function updateMainContent (About){
  subMenuEl.innerHTML = `<h1>${About}</h1>`;
}
 