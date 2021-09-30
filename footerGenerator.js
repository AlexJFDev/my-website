var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);
filename = filename.replace(/_/g, ' ');
var periodIndex = filename.indexOf('.')
filename = filename.slice(0,periodIndex);
for (let i = 0; i < document.getElementsByClassName("generatedFooter").length; i++) {
  document.getElementsByClassName("generatedFooter")[i].innerHTML = "<p>Footer</p>";
}
/*
`<hr>
<a href="http://validator.w3.org/check?uri=`+webPath+`">
<strong> HTML </strong> Valid! </a> &nbsp;
<a href="http://jigsaw.w3.org/css-validator/validator?uri=`+webPath+`?profile=css3">
<strong> CSS </strong> Valid! </a>`;
*/
