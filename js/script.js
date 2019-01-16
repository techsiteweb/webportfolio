/*=== Select the elements from the DOM ===*/
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");

const navItems = document.querySelectorAll(".nav-item"); //select all the items from the navigation menu (array created as a result)

//Setup initial state of the menu, we want it to be open (set to "false" in this case)
let showMenu = false;

//We need to have a click event listener on the button to apply a function to it.
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() { //this function will make the elements show or not depending on the state they are currently in.
    if(!showMenu) {
       menuBtn.classList.add("close"); 
       menu.classList.add("show"); 
       menuNav.classList.add("show"); 
       menuBranding.classList.add("show"); 
       navItems.forEach(item => item.classList.add("show"));
       showMenu = true; //set the state of the menu (showing in this case)
    } else {
       menuBtn.classList.remove("close"); 
       menu.classList.remove("show"); 
       menuNav.classList.remove("show"); 
       menuBranding.classList.remove("show"); 
       navItems.forEach(item => item.classList.remove("show"));
       showMenu = false; //set the state of the menu (NOT showing in this case)  
    }
}
