const el = document.querySelector('#switch');

const toggleSwitch = (checked) => {
  const h2 = document.querySelectorAll('h2');

  if (checked != el.checked) {
    // el.click();
    h2.forEach((el)=> {
      el.classList.toggle('hide');
    });
  }
};

const handleKeyDown = (event) => {
  if (event.keyCode === 13) { // 13 is the key code for the Enter key
    el.checked = !el.checked;
    toggleSwitch();
  }
};

el.addEventListener('click', () => {
  el.checked = !el.checked;
  toggleSwitch();
});

document.addEventListener('keydown', handleKeyDown);