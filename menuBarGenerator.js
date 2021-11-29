directoryDepth = "../".repeat(window.location.href.replace(/[^/A]/g, "").length-3)

var menuStr =
`<li class="dropdownButton"><a href="`+directoryDepth+`">Home</a></li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">GDW</a>
  <div class="dropdown-content">
    <p>Elements</p>
    <a href="`+directoryDepth+`GDW/Block_Level_Elements.html">Block Level Elements</a>
    <a href="`+directoryDepth+`GDW/Inline_Elements.html">Inline Elements</a>
    <a href="`+directoryDepth+`GDW/Object_Elements.html">Object Elements</a>
    <a href="`+directoryDepth+`GDW/Special_Characters.html">Special Characters</a>
    <p>Lists</p>
    <a href="`+directoryDepth+`GDW/Descriptive_Lists.html">Descriptive Lists</a>
    <a href="`+directoryDepth+`GDW/Ordered_Lists.html">Ordered Lists</a>
    <a href="`+directoryDepth+`GDW/Unordered_Lists.html">Unordered lists</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Templates</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`Templates/Template_Page.html">Template Page</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Robotics Projects</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`robotics_project/Green_House_GUI.html">Green House Project</a>
  </div>
</li>
<li class="dropdown">
  <a href="javascript:void(0)" class="dropbtn">Java</a>
  <div class="dropdown-content">
    <a href="`+directoryDepth+`Java/Chap10/Java_Dates.html">Java Dates</a>
  </div>
</li>`;
console.log(menuStr);

var menuList = document.getElementById("menuBar");
console.log(menuList);
menuList.innerHTML = menuStr;
