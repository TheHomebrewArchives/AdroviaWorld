function renderMenu(){
  document.getElementById("menu").innerHTML=
  '<ul><li><a href="index.html">Home</a></li><li><div class="dropdown"><button class="dropbtn">Player</button><div class="dropdown-content"><a href="characterCreation.html">Character Creation</a><a href="cultures.html">Cultures</a><a href="boons.html#0">Boons</a><a href="classes.html#Barbarian">Classes</a><a href="upbringings.html">Upbringings</a></div></div></li><li><div class="dropdown"><button class="dropbtn">References</button><div class="dropdown-content"><a href="spells.html">Spells</a><a href="combat.html">Combat</a><a href="spellcasting.html">Spellcasting</a><a href="conditions.html">Conditions</a></div></div></li><li><div class="dropdown"><button class="dropbtn">Other</button><div class="dropdown-content"><a href="OGL.html">OGL License</a><a href="https://discord.gg/Xzst7vnvDR">Discord</a></div></div></li>';
}

renderMenu();
