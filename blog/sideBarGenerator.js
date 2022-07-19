var sideBarString =
`<div id ="home">
<a href="/" class="heading">Home</a>
</div>
<div id ="modding">
<p class="heading">Minecraft Modding</p>
<ul class="sidebar-div--content">
  <li><a href="/blog/minecraft_modding/minecraft_modding_blog1">Modding Blog #1</a></li>
  <li><a href="/blog/minecraft_modding/minecraft_modding_blog2">Modding Blog #2</a></li>
</ul>
</div>`;

var sideBarElement = document.getElementById("sidebar");
sideBarElement.innerHTML = sideBarString;
