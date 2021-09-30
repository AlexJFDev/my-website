webPath = window.location.href;
footerElement = document.createElement('ul');
footerElement.style = "text-align: center;";
footerElement.innerHTML =
`<hr>
<a href="http://validator.w3.org/check?uri=https://ict.gctaa.net/sections/webdesign/goals/week04.html">
<strong> HTML </strong> Valid! </a> &nbsp;
<a href="http://jigsaw.w3.org/css-validator/validator?uri=https://ict.gctaa.net/sections/webdesign/goals/week04.html?profile=css3">
<strong> CSS </strong> Valid! </a>`;

document.getElementsByTagName('body')[0].appendChild(footerElement);
listContainer.appendChild(footerElement);
