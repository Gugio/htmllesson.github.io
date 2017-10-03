var respImg = document.getElementById('respImg');
var respBtn = document.getElementById('respBtn');


function resp() {
  if(respImg.hasAttribute('style')) {
    respImg.removeAttribute('style');
    respBtn.innerHTML = 'Add responsive';
    return;
  }
  respImg.setAttribute('style','max-width:100%;height:auto;');
  respBtn.innerHTML = 'Remove responsive';
}

