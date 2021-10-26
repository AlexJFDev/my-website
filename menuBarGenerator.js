directoryDepth = ".".repeat(window.location.href.replace(/[^/A]/g, "").length-2)

var menuStr =
`<li class="dropdownButton"><a href="`+directoryDepth+`/index.html">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">GDW</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/GDW/Block_Level_Elements.html">Block Level Elements</a>
    <a href="`+directoryDepth+`/GDW/Inline_Elements.html">Inline Elements</a>
    <a href="`+directoryDepth+`/GDW/Object_Elements.html">Object Elements</a>
    <a href="`+directoryDepth+`/GDW/Special_Characters.html">Special Characters</a>
    <a href="`+directoryDepth+`/GDW/Descriptive_Lists.html">Descriptive Lists</a>
    <a href="`+directoryDepth+`/GDW/Ordered_Lists.html">Ordered Lists</a>
    <a href="`+directoryDepth+`/GDW/Unordered_Lists.html">Unordered lists</a>
    <a href="`+directoryDepth+`/GDW/Getting_Down_With_HTML.html">Getting Down With HTML</a>
    <a href="`+directoryDepth+`/GDW/Learning_Web_Development.html">Learning Web Development</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Templates</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`/Templates/Template_Page.html">Template Page</a>
  </div>
</li>`;
/*<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Important Links</a>
  <div class="dropdown-content">
    <a href="https://ict.gctaa.net/sections/webdesign/students.html">Other Websites</a>
  </div>
</li>*/
console.log(menuStr);

var menuList = document.getElementById("menuBar");
console.log(menuList);
menuList.innerHTML = menuStr;
