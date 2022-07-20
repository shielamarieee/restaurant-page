import initialPageLoad from "./initialPageLoad";
import menuPage from "./menuPage";
import contactPage from "./contactPage";

initialPageLoad();

//tab switching logic
const homeTab = document.querySelector('.home');
homeTab.addEventListener('click', initialPageLoad);

const menuTab = document.querySelector('.menu');
menuTab.addEventListener('click', menuPage);

const contactTab = document.querySelector('.contact');
contactTab.addEventListener('click', contactPage);