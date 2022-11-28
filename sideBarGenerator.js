var sideBarString =
`<div id ="home">
  <a href="/" class="heading">Home</a>
</div>
<div id="csc205">
  <p class="heading">CSC 205</p>
  <ul>
    <li><a href="/csc205/the_octal_and_hexadecimal_number_systems">Octal and Hexadecimal Numbers</a></li>
    <li><a href="/csc205/altair_assembler">My Altair-8800 Assembler</a></li>
    <li><a href="/csc205/anagram_algorithms">Anagram Algorithms</a></li>
    </ul>
</div>
<div id ="modding">
  <p class="heading">Minecraft Modding</p>
  <ul class="sidebar-div--content">
    <li><a href="/minecraft_modding/minecraft_modding_blog1">Modding Blog #1</a></li>
    <li><a href="/minecraft_modding/minecraft_modding_blog2">Modding Blog #2</a></li>
  </ul>
</div>
<div id="gardening">
  <p class="heading">Gardening</p>
  <ul>
    <li><a href="/gardening/gardening_blog1">Gardening Blog #1</a></li>
  </ul>
</div>
<div id="ciw">
  <p class="heading">CIW</p>
  <ul>
    <li><a href="/ciw/forms">CIW Forms</a></li>
  </ul>
</div>
<div id="java">
  <p class="heading">Java</p>
  <ul>
    <li><a href="/java/java_dates">Java Dates</a></li>
  </ul>
  <ul>
    <li><a href="/java/java_midi_player">Java Midi Player</a></li>
  </ul>
  <ul>
    <li><a href="/java/java_particle_simulation">Java Particle Simulation</a></li>
  </ul>
  <ul>
    <li><a href="/java/pool_puzzle">Pool Puzzle</a></li>
  </ul>
</div>`;

var sideBarElement = document.getElementById("sidebar");
sideBarElement.innerHTML = sideBarString;
