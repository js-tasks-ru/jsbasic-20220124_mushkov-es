function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.querySelector('#text');
  let flag = true;
  btn.addEventListener('click', () => {
    if (flag) text.setAttribute('hidden', 'true');
    if (!flag) text.removeAttribute('hidden'), flag = true;
    if (text.hasAttribute('hidden')) flag = false;

    
  })
}
