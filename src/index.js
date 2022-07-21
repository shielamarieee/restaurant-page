import initialPageLoad from "./initialPageLoad";
import homePage from "./homePage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";
import './style.css';

initialPageLoad();

//wipe out contents
const removeChilds = (parent) => {
  while(parent.lastChild) {
    parent.removeChild(parent.lastChild);
  }
}
let main = document.querySelector('.main');

const homeTab = document.querySelector('.home');
homeTab.addEventListener('click', (e) => {
  removeChilds(main);
  homePage();
  if (e.target.classList.contains("active")) return;
    setActiveButton(homeTab);
  console.log('1');
});

const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', (e) => {
  removeChilds(main);
  menuPage();
  if (e.target.classList.contains("active")) return;
    setActiveButton(menuTab);
  console.log('2')
})

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', (e) => {
  removeChilds(main);
  menuPage();
  if (e.target.classList.contains("active")) return;
    setActiveButton(menuTab);
  console.log('3');
});

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', (e) => {
  removeChilds(main);
  contactPage();
  if (e.target.classList.contains("active")) return;
    setActiveButton(contactTab);
  console.log('4');
});

//nav buttons

function setActiveButton(button) {
  const navBtns = document.querySelectorAll('.btn');

  navBtns.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });

  button.classList.add("active");
}




