function renderMenu(){
  document.getElementById("menu").innerHTML='<ul><li><a href="index.html">Home</a></li><li><div class="dropdown"><button class="dropbtn">Player</button><div class="dropdown-content"><a href="boons.html">Boons</a><a href="classes.html">Classes</a><a href="upbringings.html">Upbringings</a></div></div></li><li><div class="dropdown"><button class="dropbtn">References</button><div class="dropdown-content"><a href="spells.html">Spells</a></div></div></li>';
}

renderMenu();