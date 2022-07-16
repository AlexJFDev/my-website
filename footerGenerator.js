var loc = window.location.href;

var linkStr = `<hr><br>
<a href="http://validator.w3.org/check?uri=${loc}" target="_blank">
<strong> HTML </strong> Valid! </a> | <a href="http://jigsaw.w3.org/css-validator/validator?uri=${loc}?profile=css3" target="_blank">
<strong> CSS </strong> Valid! </a>`;
console.log(linkStr);

var footer = document.getElementById("verification-footer");
footer.innerHTML = linkStr;
