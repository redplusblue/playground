import './style.css';

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

document.body.appendChild(navbar("LOGO", ['Home', 'Menu', 'Contact']));

// Add event listeners to hoverable elements, and add test menu as well
const hoverables = document.querySelectorAll('.hoverable');
hoverables.forEach((hoverable) => {
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
);





