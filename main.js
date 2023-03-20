const el = document.querySelector('#switch');

const toggle = (checked) => {  
  const h2 = document.querySelectorAll('h2');

  if (checked != el.checked) {
    el.click();
    h2.forEach((el)=> {
      el.classList.toggle('hide');
    })
 }
}

el.addEventListener('click', toggle);
