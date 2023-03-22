const el = document.querySelector('#switch');

const toggleSwitch = () => {
  const h2 = document.querySelectorAll('h2');
  h2.forEach((el)=> {
    el.classList.toggle('hide');
  });
};

const toggleClick = (checked) => {  
  const h2 = document.querySelectorAll('h2');

  if (checked != el.checked) {
    el.click();
    h2.forEach((el)=> {
      el.classList.toggle('hide');
    })
 }
}

const handleKeyDown = (event) => {
  if (event.keyCode === 13) {
    el.checked = !el.checked;
    toggleSwitch();
  }
};

//thought this would work but no
// const handleClick = () => {
//   el.checked = !el.checked;
//   toggleSwitch();
// };

document.addEventListener('keydown', handleKeyDown);
el.addEventListener('click', toggleClick);




