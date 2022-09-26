document.getElementById('currentYear').innerHTML = new Date().getFullYear();

function rotateToggleIcon(){
  var toggleIcon = document.getElementById('toggle-icon');
  if(toggleIcon.classList.contains('rotate-toggle-icon')){
    toggleIcon.classList.remove('rotate-toggle-icon');
    toggleIcon.classList.remove('toggle-icon-hover');
  }
  else{
    toggleIcon.classList.add('rotate-toggle-icon');
    toggleIcon.classList.add('toggle-icon-hover');
  }
}
document.getElementById('goToTop').onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' })