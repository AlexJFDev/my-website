var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
filename = filename.replace(/_/g, ' ');
var periodIndex = filename.indexOf('.')
filename = filename.slice(0,periodIndex);
for (let i = 0; i < document.getElementsByClassName("heading").length; i++) {
  document.getElementsByClassName("heading")[i].innerHTML = filename;
}
