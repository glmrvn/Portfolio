function changeOpacity(value) {
  link = document.getElementsByClassName('link')
  for(var i = 0, j = link.length; i < j; i++) { 
    link[i].style.opacity = value;
  }
}

if (typeof twttr === "undefined") {
  <![CDATA[
 !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
  ]]>
}