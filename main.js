const el = document.querySelector('#switch');

const toggleSwitch = () => {
  const h2 = document.querySelectorAll('h2');
  // el.click();
  h2.forEach((el)=> {
    el.classList.toggle('hide');
  });
};

const handleKeyDown = (event) => {
  if (event.keyCode === 13) {
    el.checked = !el.checked;
    toggleSwitch();
  }
};

const handleClick = () => {
  el.checked = !el.checked;
  toggleSwitch();
};

document.addEventListener('keydown', handleKeyDown);
el.addEventListener('click', handleClick);
// el.addEventListener('onclick', handleClick);