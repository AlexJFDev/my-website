var sideBarString =
`<div id ="home">
  <a href="/" class="heading">Home</a>
</div>
<div id="csc205">
  <p class="heading">CSC 205</p>
  <ul>
    <li><a href="/blog/csc205/the_octal_and_hexidecimal_number_systems">Octal and Hexidecimal Numbers</a></li>
    <li><a href="/blog/csc205/altair_compiler">My Altair-8800 Compiler</a></li>
    </ul>
</div>
<div id ="modding">
  <p class="heading">Minecraft Modding</p>
  <ul class="sidebar-div--content">
    <li><a href="/blog/minecraft_modding/minecraft_modding_blog1">Modding Blog #1</a></li>
    <li><a href="/blog/minecraft_modding/minecraft_modding_blog2">Modding Blog #2</a></li>
  </ul>
</div>
<div id="gardening">
  <p class="heading">Gardening</p>
  <ul>
    <li><a href="/blog/gardening/gardening_blog1">Gardening Blog #1</a></li>
  </ul>
</div>`;

var sideBarElement = document.getElementById("sidebar");
sideBarElement.innerHTML = sideBarString;
