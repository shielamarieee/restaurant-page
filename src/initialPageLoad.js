export default function initialPageLoad() {
  const content = document.getElementById('content');
  
  const container = document.createElement('div');
  container.className = 'container';
  content.appendChild(container);

  //Navbar
  const navbar = document.createElement('nav');
  navbar.className = 'navbar';
  container.appendChild(navbar);

  const logo = document.createElement('h1');
  logo.className = 'logo';
  logo.textContent = 'Ramen';
  navbar.appendChild(logo);

  //Nav Links
  const navlinks = document.createElement('ul');
  navlinks.className = 'nav-links';
  navbar.appendChild(navlinks);

  //Home
  const li1 = document.createElement('li');
  navlinks.appendChild(li1);

  const a1 = document.createElement('a');
  a1.textContent = 'Home';
  a1.setAttribute('href', '#');
  li1.appendChild(a1);

  //Menu
  const li2 = document.createElement('li');
  navlinks.appendChild(li2);

  const a2 = document.createElement('a');
  a2.textContent = 'Menu';
  a2.setAttribute('href', '#');
  li2.appendChild(a2);

  //Contact
  const li3 = document.createElement('li');
  navlinks.appendChild(li3);

  const a3 = document.createElement('a');
  a3.textContent = 'Contact';
  a3.setAttribute('href', '#');
  li3.appendChild(a3);

  //Main
  const main = document.createElement('main');
  main.className = 'main';
  container.appendChild(main);

  const tagline = document.createElement('div');
  tagline.className = 'tagline';
  main.appendChild(tagline);

  const h1 = document.createElement('h1');
  h1.textContent = 'Taste the world\'s best noodles';
  tagline.appendChild(h1);

  const p = document.createElement('p');
  p.textContent = 'Handmade noodles with rich flavoured broth';
  tagline.appendChild(p);

  const button = document.createElement('button');
  button.className = 'btn';
  button.textContent = 'Order Online';
  tagline.appendChild(button);
}