directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length-2)

var menuStr =
`<li class="dropdownButton"><a href="`+directoryDepth+`/index.html">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Examples</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/Examples/Block_Level_Elements.html">Block Level Elements</a>
    <a href="`+directoryDepth+`/Examples/Inline_Elements.html">Inline Elements</a>
    <a href="`+directoryDepth+`/Examples/Object_Elements.html">Object Elements</a>
    <a href="`+directoryDepth+`/Examples/Special_Characters.html">Special Characters</a>
    <a href="`+directoryDepth+`/Examples/Descriptive_Lists.html">Descriptive Lists</a>
    <a href="`+directoryDepth+`/Examples/Ordered_Lists.html">Ordered Lists</a>
    <a href="`+directoryDepth+`/Examples/Unordered_Lists.html">Unordered lists</a>
    <a href="`+directoryDepth+`/Examples/Getting_Down_With_HTML.html">Getting Down With HTML</a>
    <a href="`+directoryDepth+`/Examples/Learning_Web_Development.html">Learning Web Development</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Templates</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/Templates/Template_Page.html">Template Page</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Important Links</a>
  <div class="dropdown-content">
    <a href="https://ict.gctaa.net/sections/webdesign/students.html">Other Websites</a>
  </div>
</li>`;
console.log(menuStr);

var menuList = document.getElementById("menuBar");
console.log(menuList);
menuList.innerHTML = menuStr;
