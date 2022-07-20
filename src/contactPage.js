export default function contactPage() {
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

  const contactCard = document.createElement('div');
  contactCard.className = 'contact';
  contactCard.classList.add('card');
  main.appendChild(contactCard);

  //Left Side
  const leftSide = document.createElement('div');
  leftSide.className = 'left-side';
  contactCard.appendChild(leftSide);

  const leftHeading = document.createElement('div');
  leftHeading.className = 'left-heading';
  leftSide.appendChild(leftHeading);

  const small = document.createElement('p');
  small.className = 'small';
  leftHeading.appendChild(small);

  const large = document.createElement('p');
  large.className = 'large';
  leftHeading.appendChild(large);

  //Form
  const form = document.createElement('div');
  form.className = 'form';
  leftSide.appendChild(form);

  const formPara = document.createElement('p');
  formPara.textContent = 'if you got any questions please do not hesitate to send us a message.';
  form.appendChild(formPara);
  
  const input1 = document.createElement('input');
  input1.setAttribute('type', 'text');
  input1.setAttribute('placeholder', 'name');
  form.appendChild(input1);

  const input2 = document.createElement('input');
  input2.setAttribute('type', 'email');
  input2.setAttribute('placeholder', 'email address');
  form.appendChild(input2);

  const textarea = document.createElement('textarea');
  textarea.setAttribute('placeholder', 'type your message');
  form.appendChild(textarea);

  const sendBtn = document.createElement('button');
  sendBtn.textContent = 'Send Message';
  form.appendChild(sendBtn);

  //Right Side
  const rightSide = document.createElement('div');
  rightSide.className = 'right-side';
  contactCard.appendChild(rightSide);

  //Info 1
  const info1 = document.createElement('div');
  info1.className = 'info';
  rightSide.appendChild(info1);

  const info1H3 = document.createElement('h3');
  info1H3.textContent = 'opening hours';
  info1.appendChild(info1H3);

  const info1P1 = document.createElement('p');
  info1P1.textContent = 'Monday - Friday';
  info1.appendChild(info1P1);

  const info1P2 = document.createElement('p');
  info1P2.textContent = '9am - 5pm';
  info1.appendChild(info1P2);

  const info1P3 = document.createElement('p');
  info1P3.textContent = 'Weekend';
  info1.appendChild(info1P3);

  const info1P4 = document.createElement('p');
  info1P4.textContent = 'Closed';
  info1.appendChild(info1P4);

  //Info 2
  const info2 = document.createElement('div');
  info2.className = 'info';
  rightSide.appendChild(info2);

  const info2H3 = document.createElement('h3');
  info2H3.textContent = 'address';
  info2.appendChild(info2H3);

  const info2P1 = document.createElement('p');
  info2P1.textContent = '2890 Rockwell Lane,';
  info2.appendChild(info2P1);

  const info2P2 = document.createElement('p');
  info2P2.textContent = 'North Carolina 27834';
  info2.appendChild(info2P2);

  //Info 3
  const info3 = document.createElement('div');
  info3.className = 'info';
  rightSide.appendChild(info3);

  const info3H3 = document.createElement('h3');
  info3H3.textContent = 'support';
  info3.appendChild(info3H3);

  const info3P1 = document.createElement('p');
  info3P1.textContent = 'example@gmail.com';
  info3.appendChild(info3P1);

  const info3P2 = document.createElement('p');
  info3P2.textContent = '+12 345 678 9012';
  info3.appendChild(info3P2);
}