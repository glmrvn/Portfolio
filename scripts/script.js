function changeOpacity(value) {
  link = document.getElementsByClassName('link')
  for(var i = 0, j = link.length; i < j; i++) { 
    link[i].style.opacity = value;
  }
}
