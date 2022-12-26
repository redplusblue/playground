import './style.css';

let menuItems = ['Home', 'Menu', 'Contact'];
// Navbar + Brand
function navbar(logo, elements) {
  // <nav class="navbar">
  const navbar = document.createElement('nav');
  navbar.classList.add('navbar');
  // <div class="nav-container">
  const navContainer = document.createElement('div');
  navContainer.classList.add('nav-container');
  // <a href="#" class="nav-logo">Restaurant</a>
  const navLogo = document.createElement('a');
  navLogo.classList.add('nav-logo');
  navLogo.href = '#';
  navLogo.textContent = logo;
  navContainer.appendChild(navLogo);
  // <a href="#" class="Nav-link">Nav Link</a>
  for (let i = 0; i < elements.length; i += 1) {
    const navLink = document.createElement('div');
    navLink.classList.add('nav-link');
    navLink.classList.add('hoverable');
    navLink.textContent = elements[i];
    navContainer.appendChild(navLink);
  }
  // hamburger menu
  const hamburger = document.createElement('div');
  hamburger.classList.add('hamburger');
  hamburger.classList.add('hoverable');
  hamburger.innerHTML = 'Expand';
  navContainer.appendChild(hamburger);
  navbar.appendChild(navContainer);
  return navbar;
}

// Creates a div with three options, to be used in dropdown menu
function test_menu() { 
  const menu = document.createElement('div');
  menu.classList.add('options');
  menu.innerHTML = '<div class="menu-item">Menu Item 1</div><div class="menu-item">Menu Item 2</div><div class="menu-item">Menu Item 3</div>';
  menu.style.display = 'none';
  return menu;
}

// Full menu - creates a container with all the menu items, with their own submenus
function full_menu() {
  const menu = document.createElement('div');
  menu.classList.add('options');
  menu.classList.add('full-menu');
  menu.style.display = 'none';
  // Make copy of menuItems array
  let menuElements = ["Logo", ...menuItems];
  // Only the first level of children are menu items, so we don't want to include the hamburger menu
  const currentMenuItems = document.querySelector('.nav-container').children;
  for (let i = 0; i < currentMenuItems.length - 1; i += 1) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.classList.add('hoverable');
    menuItem.innerText = menuElements[i];
    menuItem.appendChild(test_menu());
    menu.appendChild(menuItem);
  }
  return menu;
}

// Generate nav elements - unused
function generateElements(array) {
  const elements = [];
  for (let i = 0; i < array.length; i += 1) {
    const element = document.createElement('div');
    element.classList.add('nav-link');
    element.classList.add('hoverable');
    element.textContent = array[i];
    elements.push(element);
  }
  return elements;
}


document.body.appendChild(navbar("LOGO", menuItems));

// Add event listeners to hoverable elements, and add test menu as well
const hoverables = document.querySelectorAll('.hoverable');
hoverables.forEach((hoverable) => {
  if (hoverable.textContent === 'Expand') {
    // When used on mobile, we want to use click/tap to toggle instead of hover
    hoverable.appendChild(full_menu());
    hoverable.addEventListener('click', () => {
      hoverable.classList.toggle('hovered');
      // Toggle the display of the menu
      hoverable.querySelector('.options').style.display = (hoverable.querySelector('.options').style.display === 'none') ? 'block' : 'none';
    });
  } else {
    hoverable.appendChild(test_menu());
    hoverable.addEventListener('mouseover', () => {
      hoverable.classList.add('hovered');
      hoverable.querySelector('.options').style.display = 'block';
    });
    hoverable.addEventListener('mouseout', () => {
      hoverable.classList.remove('hovered');
      hoverable.querySelector('.options').style.display = 'none';
    });
  }
}
);

document.querySelectorAll('.menu-item.hoverable').forEach((item) => {
  // If innertext contains "Logo", we don't want to add event listeners
  if (!item.innerText.includes('Logo')) {
    // When used on mobile, we want to use click/tap to toggle instead of hover
    // item.addEventListener('click', () => {
    //   item.classList.toggle('hovered');
    //   // Toggle the display of the menu
    //   item.querySelector('.options').style.display = (item.querySelector('.options').style.display === 'none') ? 'block' : 'none';
    // });
    // Doesn't work because of event bubbling
    item.addEventListener('mouseover', () => {
      item.classList.add('hovered');
      item.querySelector('.options').style.display = 'block';
    });
    item.addEventListener('mouseout', () => {
      item.classList.remove('hovered');
      item.querySelector('.options').style.display = 'none';
    });
  }
}
);





