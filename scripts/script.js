function changeOpacity(value) {
  link = document.getElementsByClassName('link')
  for(var i = 0, j = link.length; i < j; i++) { 
    link[i].style.opacity = value;
  }
}

window.onscroll = function() {
  var video = document.getElementById('my-video');
  var header = document.getElementById('text-container');
  if ( window.pageYOffset > 800 ) {
    video.classList.add("my-video-animation");
    header.classList.add("text-container-animation");
    document.querySelector('video').playbackRate = 0.1;
  } else {
    video.classList.remove("my-video-animation");
    header.classList.remove("text-container-animation");
    document.querySelector('video').playbackRate = 1;
  }
  
}
