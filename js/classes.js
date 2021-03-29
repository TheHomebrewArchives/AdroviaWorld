function classDisplay(x) {
  document.getElementById("classTitleName").innerHTML = c1[x].name;
  document.getElementById("classTable").innerHTML = c1[x].table;
  document.getElementById("hitDie").innerHTML = c1[x].hitDie;
  document.getElementById("hpPerLvl").innerHTML = c1[x].hpPerLvl;
  document.getElementById("scoreMinimum").innerHTML = c1[x].scoreMinimum;
  document.getElementById("otherRequirement").innerHTML = c1[x].otherRequirement;
  document.getElementById("subclassList").innerHTML = c1[x].subclassList;

  document.getElementById("lvl1").innerHTML = c1[x].lvl1;
  document.getElementById("lvl2").innerHTML = c1[x].lvl2;
  document.getElementById("lvl3").innerHTML = c1[x].lvl3;
  document.getElementById("lvl4").innerHTML = c1[x].lvl4;
  document.getElementById("lvl5").innerHTML = c1[x].lvl5;
  document.getElementById("lvl6").innerHTML = c1[x].lvl6;
  document.getElementById("lvl7").innerHTML = c1[x].lvl7;
  document.getElementById("lvl8").innerHTML = c1[x].lvl8;
  document.getElementById("lvl9").innerHTML = c1[x].lvl9;
  document.getElementById("lvl10").innerHTML = c1[x].lvl10;
  document.getElementById("lvl11").innerHTML = c1[x].lvl11;
  document.getElementById("lvl12").innerHTML = c1[x].lvl12;
  document.getElementById("lvl13").innerHTML = c1[x].lvl13;
  document.getElementById("lvl14").innerHTML = c1[x].lvl14;
  document.getElementById("lvl15").innerHTML = c1[x].lvl15;
  document.getElementById("lvl16").innerHTML = c1[x].lvl16;
  document.getElementById("lvl17").innerHTML = c1[x].lvl17;
  document.getElementById("lvl18").innerHTML = c1[x].lvl18;
  document.getElementById("lvl19").innerHTML = c1[x].lvl19;
  document.getElementById("lvl20").innerHTML = c1[x].lvl20;
};

function pathDisplay(x) {
  document.getElementById("lvl3").innerHTML = primalPaths[x].primalPath;
  document.getElementById("lvl6").innerHTML = primalPaths[x].pathFeature1;
  document.getElementById("lvl10").innerHTML = primalPaths[x].pathFeature2;
  document.getElementById("lvl14").innerHTML = primalPaths[x].pathfeature3;
}

function collegeDisplay(x) {
  document.getElementById("lvl3").innerHTML = bardColleges[x].bardCollege;
  document.getElementById("lvl6").innerHTML = bardColleges[x].collegeFeature1;
  document.getElementById("lvl14").innerHTML = bardColleges[x].collegeFeature2;
}

function domainDisplay(x) {
  document.getElementById("lvl1").innerHTML = divineDomains[x].divineDomain;
  document.getElementById("lvl2").innerHTML = divineDomains[x].divineDomainFeature1;
  document.getElementById("lvl6").innerHTML = divineDomains[x].divineDomainFeature2;
  document.getElementById("lvl8").innerHTML = divineDomains[x].divineDomainFeature3;
  document.getElementById("lvl17").innerHTML = divineDomains[x].divineDomainFeature4;
}

function circleDisplay(x) {
  document.getElementById("lvl2").innerHTML = druidCircles[x].druidCircle;
  document.getElementById("lvl6").innerHTML = druidCircles[x].druidCircleFeature1;
  document.getElementById("lvl10").innerHTML = druidCircles[x].druidCircleFeature2;
  document.getElementById("lvl14").innerHTML = druidCircles[x].druidCircleFeature3;
}

function originDisplay(x) {
  document.getElementById("lvl1").innerHTML = sorcerousOrigins[x].sorcerousOrigin;
  document.getElementById("lvl6").innerHTML = sorcerousOrigins[x].sorcerousOriginFeature1;
  document.getElementById("lvl14").innerHTML = sorcerousOrigins[x].sorcerousOriginFeature2;
  document.getElementById("lvl18").innerHTML = sorcerousOrigins[x].sorcerousOriginFeature3;
}
