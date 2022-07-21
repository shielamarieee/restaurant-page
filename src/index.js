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
homeTab.addEventListener('click', () => {
  removeChilds(main);
  homePage();
  console.log('1');
});

const orderBtn = document.querySelector('.btn');
orderBtn.addEventListener('click', () => {
  removeChilds(main);
  menuPage();
  console.log('2')
})

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', () => {
  removeChilds(main);
  menuPage();
  console.log('3');
});

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', () => {
  removeChilds(main);
  contactPage();
  console.log('4');
});



