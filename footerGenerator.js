webPath = window.location.href;

document.getElementById("generatedFooter").innerHTML =
`<hr>
<a href="http://validator.w3.org/check?uri=`+webPath+`">
<strong> HTML </strong> Valid! </a> &nbsp;
<a href="http://jigsaw.w3.org/css-validator/validator?uri=`+webPath+`?profile=css3">
<strong> CSS </strong> Valid! </a>`;
