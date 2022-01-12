directoryDepth = "../".repeat(window.location.href.replace(/[^/A]/g, "").length-3)

var menuStr =
`<li class="menu-bar__button"><a href="`+directoryDepth+`">Home</a></li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">GDW</a>
  <div class="menu-bar__dropdown__content">
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
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Templates</a>
  <div class="menu-bar__dropdown__content">
    <a href="`+directoryDepth+`Templates/Template_Page.html">Template Page</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">My Repos</a>
  <div class="menu-bar__dropdown__content">
    <p><a href="https://github.com/likebeingawesome" target="_blank">GitHub</a></p>
    <a href="https://github.com/likebeingawesome/likebeingawesome.github.io" target="_blank">This Website</a>
    <a href="https://github.com/likebeingawesome/Vanilla-Improvements-Agriculture" target="_blank">Vanilla Improvements Mod</a>
    <a href="https://github.com/likebeingawesome/Java-Midi-Player" target="_blank">Java Midi Player</a>
    <p><a href="https://gitlab.com/likebeingawesome" target="_blank">GitLab</a></p>
    <a href="https://gitlab.com/likebeingawesome/pychat-client" target="_blank">PyChat Client</a>
    <a href="https://gitlab.com/likebeingawesome/pychat-server" target="_blank">PyChat Server</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Java</a>
  <div class="menu-bar__dropdown__content">
    <a href="`+directoryDepth+`Java/Chap10/Java_Dates.html">Java Dates</a>
    <a href="`+directoryDepth+`Java/Midi/Java_Midi_Player.html">Java Midi Player</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Robotics Projects</a>
  <div class="menu-bar__dropdown__content">
    <a href="`+directoryDepth+`robotics_project/Green_House_GUI.html" target="_blank">Green House Project</a>
  </div>
</li>`;
console.log(menuStr);

var menuList = document.getElementById("menu-bar");
console.log(menuList);
menuList.innerHTML = menuStr;
