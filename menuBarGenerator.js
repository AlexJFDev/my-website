directoryDepth = "../".repeat(window.location.href.replace(/[^/A]/g, "").length-3)

var menuStr =
  `<li class="menu-bar__button"><a href="${directoryDepth}">Home</a></li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">GDW</a>
  <div class="menu-bar__dropdown__content">
    <p class="menu-bar__dropdown__content--subheading">Elements</p>
    <a href="${directoryDepth}GDW/Block_Level_Elements.html" class="menu-bar__dropdown__content--link">Block Level Elements</a>
    <a href="${directoryDepth}GDW/Inline_Elements.html" class="menu-bar__dropdown__content--link">Inline Elements</a>
    <a href="${directoryDepth}GDW/Object_Elements.html" class="menu-bar__dropdown__content--link">Object Elements</a>
    <a href="${directoryDepth}GDW/Special_Characters.html" class="menu-bar__dropdown__content--link">Special Characters</a>
    <p class="menu-bar__dropdown__content--subheading">Lists</p>
    <a href="${directoryDepth}GDW/Ordered_Lists.html" class="menu-bar__dropdown__content--link">Ordered Lists</a>
    <a href="${directoryDepth}GDW/Unordered_Lists.html" class="menu-bar__dropdown__content--link">Unordered lists</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Templates</a>
  <div class="menu-bar__dropdown__content">
    <a href="${directoryDepth}Templates/Template_Page.html" class="menu-bar__dropdown__content--link">Template Page</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">My Repos</a>
  <div class="menu-bar__dropdown__content">
    <a href="https://github.com/likebeingawesome" target="_blank" class="menu-bar__dropdown__content--subheading">GitHub</a>
    <a href="https://github.com/likebeingawesome/my-website" target="_blank" class="menu-bar__dropdown__content--link">This Website</a>
    <a href="https://github.com/likebeingawesome/Vanilla-Improvements-Agriculture" target="_blank" class="menu-bar__dropdown__content--link">Vanilla Improvements Mod</a>
    <a href="https://github.com/likebeingawesome/Java-Midi-Player" target="_blank" class="menu-bar__dropdown__content--link">Java Midi Player</a>
    <a href="https://github.com/likebeingawesome/midi-particles" target="_blank" class="menu-bar__dropdown__content--link">Java Particle Simulation</a>
    <a href="https://gitlab.com/likebeingawesome" target="_blank" class="menu-bar__dropdown__content--subheading">GitLab</a>
    <a href="https://gitlab.com/likebeingawesome/pychat-client" target="_blank" class="menu-bar__dropdown__content--link">PyChat Client</a>
    <a href="https://gitlab.com/likebeingawesome/pychat-server" target="_blank" class="menu-bar__dropdown__content--link">PyChat Server</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Java</a>
  <div class="menu-bar__dropdown__content">
    <a href="${directoryDepth}Java/Chap10/Java_Dates.html" class="menu-bar__dropdown__content--link">Java Dates</a>
    <a href="${directoryDepth}Java/Chap13/Pool_Puzzle.html" class="menu-bar__dropdown__content--link">Pool Puzzle</a>
    <a href="${directoryDepth}Java/Midi/Java_Midi_Player.html" class="menu-bar__dropdown__content--link">Java Midi Player</a>
    <a href="${directoryDepth}Java/Java_Particle_Simulation.html" class="menu-bar__dropdown__content--link">Java Particle Simulation</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Robotics Projects</a>
  <div class="menu-bar__dropdown__content">
    <a href="${directoryDepth}robotics_project/Green_House_GUI.html" target="_blank" class="menu-bar__dropdown__content--link">Green House Project</a>
  </div>
</li>
<li class="menu-bar__button"><a href="${directoryDepth}resume/">Resume</a></li>`;
console.log(menuStr);

var menuList = document.getElementById("menu-bar");
console.log(menuList);
menuList.innerHTML = menuStr;
