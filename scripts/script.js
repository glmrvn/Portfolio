function changeOpacity(value) {
  link = document.getElementsByClassName('link')
  for(var i = 0, j = link.length; i < j; i++) { 
    link[i].style.opacity = value;
  }
}

window.onscroll = function() {
  var video = document.getElementById('myVideo');
  if ( window.pageYOffset > 500 ) {
    video.classList.add("centerstage");
    // document.querySelector('video').playbackRate = 0.1;
  } else {
    video.classList.remove("centerstage");
    // document.querySelector('video').playbackRate = 0.1;
  }
  
}
