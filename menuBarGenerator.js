var menuStr =
`<li class="menu-bar__button"><a href="/">Home</a></li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Templates</a>
  <div class="menu-bar__dropdown__content">
    <a href="/Templates/Template_Page.html" class="menu-bar__dropdown__content--link">Template Page</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">My Repos</a>
  <div class="menu-bar__dropdown__content">
    <a href="https://github.com/alexjfdev" target="_blank" class="menu-bar__dropdown__content--subheading">GitHub</a>
    <a href="https://github.com/alexjfdev/my-website" target="_blank" class="menu-bar__dropdown__content--link">This Website</a>
    <a href="https://github.com/alexjfdev/Vanilla-Improvements-Agriculture" target="_blank" class="menu-bar__dropdown__content--link">Vanilla Improvements Mod</a>
    <a href="https://github.com/alexjfdev/Java-Midi-Player" target="_blank" class="menu-bar__dropdown__content--link">Java Midi Player</a>
    <a href="https://github.com/alexjfdev/midi-particles" target="_blank" class="menu-bar__dropdown__content--link">Java Particle Simulation</a>
    <a href="https://gitlab.com/likebeingawesome" target="_blank" class="menu-bar__dropdown__content--subheading">GitLab</a>
    <a href="https://gitlab.com/likebeingawesome/pychat-client" target="_blank" class="menu-bar__dropdown__content--link">PyChat Client</a>
    <a href="https://gitlab.com/likebeingawesome/pychat-server" target="_blank" class="menu-bar__dropdown__content--link">PyChat Server</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Java</a>
  <div class="menu-bar__dropdown__content">
    <a href="/Java/Chap10/Java_Dates.html" class="menu-bar__dropdown__content--link">Java Dates</a>
    <a href="/Java/Chap13/Pool_Puzzle.html" class="menu-bar__dropdown__content--link">Pool Puzzle</a>
    <a href="/Java/Midi/Java_Midi_Player.html" class="menu-bar__dropdown__content--link">Java Midi Player</a>
    <a href="/Java/Java_Particle_Simulation.html" class="menu-bar__dropdown__content--link">Java Particle Simulation</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">CIW</a>
  <div class="menu-bar__dropdown__content">
    <a href="/CIW/Forms/" class="menu-bar__dropdown__content--link">HTML5 Forms</a>
  </div>
</li>
<li class="menu-bar__dropdown">
  <a href="javascript:void(0)" class="menu-bar__dropdown__heading">Robotics Projects</a>
  <div class="menu-bar__dropdown__content">
    <a href="/robotics_project/Green_House_GUI.html" target="_blank" class="menu-bar__dropdown__content--link">Green House Project</a>
  </div>
</li>
<li class="menu-bar__button"><a href="/resume/">Resume</a></li>
<li class="menu-bar__button"><a href="/examples/">Apache Tomcat!</a></li>`;

var menuList = document.getElementById("menu-bar");
menuList.innerHTML = menuStr;
