webPath = window.location.href;

for (let i = 0; i < document.getElementsByClassName("verificationFooter").length; i++) {
  document.getElementsByClassName("verificationFooter")[i].innerHTML = `
  <footer>
    <hr>
    <a href="http://validator.w3.org/check?uri=`+webPath+`">
    <strong> HTML </strong> Valid! </a> &nbsp;
    <a href="http://jigsaw.w3.org/css-validator/validator?uri=`+webPath+`?profile=css3">
    <strong> CSS </strong> Valid! </a>
  </footer>`;
}
