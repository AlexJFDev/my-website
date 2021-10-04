var loc = window.location.href;

var linkStr = '<a href="http://validator.w3.org/check?uri='+loc+'">\n<strong> HTML </strong> Valid! </a> |'+' <a href="http://jigsaw.w3.org/css-validator/validator?uri='+loc+'?profile=css3">\n<strong> CSS </strong> Valid! </a>'
console.log(linkStr);

var footer = document.getElementById("verifFooter");
console.log(footer);
footer.innerHTML = linkStr;
