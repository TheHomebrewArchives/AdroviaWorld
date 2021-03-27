var a1 = [
    // General Boons
    {
      "name":"Ability Score Improvement",
      "cost":2,
      "prereq":"None",
      "desc":"You may increase one Ability Score of your choice by 1, to a maximum of 20.",
      "type":"General Boon",
      "id":0
    },
    {
      "name":"Alert",
      "cost":2,
      "prereq":"None",
      "desc":"While conscious, you cannot be surprised.",
      "type":"General Boon",
      "id":1
    },
    {
      "name":"Climber",
      "cost":2,
      "prereq":"The ability to climb",
      "desc":"Your climbing speed is equal to your walking speed. Additionally, you may climb for a number of turns without issue equal to your Constitution score instead of your Constitution modifier.",
      "type":"General Boon",
      "id":2
    },
    {
      "name":"Durable",
      "cost":2,
      "prereq":"Constitution 13 or higher",
      "desc":"When you roll a Hit Die to regain hit points, the minimum number of hit points you regain from the roll equals twice your Constitution modifier.",
      "type":"General Boon",
      "id":3
    },
    {
      "name":"Eidetic Memory",
      "cost":3,
      "prereq":"Intelligence 13 or higher",
      "desc":"You gain the following benefits:<br><ul><li>You always know which way is north.</li><li>You always know the number of hours left before the next sunrise or sunset.</li><li>You can accurately recall anything you have seen or heard within the past month.</li><li>You know the exact day, month, and year it currently is at all times.</li><li>You have advantage on saving throws against memory-altering magic.</li><li>You have advantage on survival skill checks to avoid becoming lost.</li></ul>",
      "type":"General Boon",
      "id":4
    },
    {
      "name":"Endurance",
      "cost":3,
      "prereq":"None",
      "desc":"You have advantage on Constitution saving throws against exhaustion. This does not give you advantage on death saving throws.",
      "type":"General Boon",
      "id":5
    },
    {
      "name":"Improved Endurance",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(5)' href='#'>Endurance</a>",
      "desc":"The first level of exhaustion you gain after a long rest is nullified.",
      "type":"General Boon",
      "id":6
    },
    {
      "name":"Expertise",
      "cost":2,
      "prereq":"Proficiency with at least one skill",
      "desc":"Choose one skill with which you have proficiency. You now double your proficiency bonus with that skill.",
      "type":"General Boon",
      "id":7
    },
    {
      "name":"Heavy Armor Proficiency",
      "cost":2,
      "prereq":"Proficiency with medium armor",
      "desc":"You gain proficiency with heavy armor.",
      "type":"General Boon",
      "id":8
    },
    {
      "name":"Inner Arcana",
      "cost":2,
      "prereq":"Sorcerer level 1st",
      "desc":"You add both your Intelligence and Charisma modifier to Arcana skill checks",
      "type":"General Boon",
      "id":9
    },
    {
      "name":"Intimidating Prowess",
      "cost":2,
      "prereq":"Strength 13 or higher",
      "desc":"You add both your Strength and Charisma modifier to Intimidation skill checks.",
      "type":"General Boon",
      "id":10
    },
    {
      "name":"Language",
      "cost":1,
      "prereq":"The ability to speak at least one language",
      "desc":"You gain 1/2 fluency in one human language you don't know, gain 1/4 fluency in two human languages you don't know, or you may increase fluency in languages you know by 1/4 four times. <br><br>Alternatively, you may gain the ability to read and write with one language you have fluency in.",
      "type":"General Boon",
      "id":11
    },
    {
      "name":"Light Armor Proficiency",
      "cost":2,
      "prereq":"None",
      "desc":"YYou gain proficiency with Light Armor.",
      "type":"General Boon",
      "id":12
    },
    {
      "name":"Lucky",
      "cost":2,
      "prereq":"None",
      "desc":"You gain 1 luck point. Whenever you make an attack roll, an ability check, or a saving throw, you can spend one luck point to roll an additional d20. <br><br>You can choose to spend one of your luck points after you roll the die, but before the outcome is determined. You choose which of the d20s is used for the attack roll, ability check, or saving throw. <br><br>You can also spend one luck point when an attack roll is made against you. Roll a d20, and then choose whether the attack uses the attacker's roll or yours. If more than one creature spends a luck point to influence the outcome of a roll, the points cancel each other out, and no additional dice are rolled. <br><br>You regain your expended luck points when you finish a long rest. <br><br>You may take this boon up to three times.",
      "type":"General Boon",
      "id":13
    },
    {
      "name":"Master Craftsman",
      "cost":2,
      "prereq":"Proficiency with a Craft skill",
      "desc":"You can make masterwork items with Craft skills in which you are proficient.",
      "type":"General Boon",
      "id":14
    },
    {
      "name":"Expert Craftsman",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(14)' href='#'>Master Craftsman</a>, +9 or greater with a Craft skill",
      "desc":"You can craft magic items without being a spellcaster, as long as the Craft skill you are using has a +9 or greater.",
      "type":"General Boon",
      "id":15
    },
    {
      "name":"Medium Armor Proficiency",
      "cost":2,
      "prereq":"Proficiency with light armor",
      "desc":"You gain proficiency with medium armor.",
      "type":"General Boon",
      "id":16
    },
    {
      "name":"Resilience",
      "cost":3,
      "prereq":"None",
      "desc":"Gain proficiency in your choice of Strength, Dexterity, Constitution, Intelligence, Wisdom, or Charisma saving throws.",
      "type":"General Boon",
      "id":17
    },
    {
      "name":"Fleet",
      "cost":2,
      "prereq":"A walking speed",
      "desc":"Your walking speed increases by 2 meters. <br><br>You may take this boon a number of times equal to your proficiency bonus.",
      "type":"General Boon",
      "id":18
    },
    {
      "name":"Shield Proficiency",
      "cost":1,
      "prereq":"Proficiency with light armor",
      "desc":"You gain proficiency with shields.",
      "type":"General Boon",
      "id":19
    },
    {
      "name":"Soul Tether",
      "cost":2,
      "prereq":"None",
      "desc":"You gain one additional attunement slot. <br><br>You may take this boon only once.",
      "type":"General Boon",
      "id":20
    },
    {
      "name":"Improved Soul Tether",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(20)' href='#'>Soul Tether</a>, Character level 5th",
      "desc":"You gain one additional attunement slot. <br><br>You may take this boon only once.",
      "type":"General Boon",
      "id":21
    },
    {
      "name":"Master Soul Tether",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(21)' href='#'>Improved Soul Tether</a>, Character level 11th",
      "desc":"You gain one additional attunement slot. <br><br>You may take this boon only once.",
      "type":"General Boon",
      "id":22
    },
    {
      "name":"Sprinter",
      "cost":2,
      "prereq":"Walking speed of 12 meters or greater",
      "desc":"You can spend your entire turn (action, bonus action, and movement) to sprint at four times your walking speed. You can do this for a number of rounds consecutively equal to your Constitution modifier (minimum 1). <br><br>If you sprint your maximum number of consecutive rounds, you must wait one minute before sprinting again.",
      "type":"General Boon",
      "id":23
    },
    {
      "name":"Swimmer",
      "cost":2,
      "prereq":"The ability to swim",
      "desc":"Your swimming speed equals your walking speed. In addition, you have advantage on Strength and Constitution checks related to swimming.",
      "type":"General Boon",
      "id":24
    },
    {
      "name":"Tool Proficiency",
      "cost":1,
      "prereq":"None",
      "desc":"You gain proficiency with one tool of your choice.",
      "type":"General Boon",
      "id":25
    },
    {
      "name":"Tough",
      "cost":2,
      "prereq":"None",
      "desc":"Your hit point maximum increases by 5.",
      "type":"General Boon",
      "id":26
    },
    {
      "name":"Weapon Proficiency",
      "cost":1,
      "prereq":"None",
      "desc":"Gain proficiency in one martial weapon of your choice or two simple weapons of your choice.",
      "type":"General Boon",
      "id":27
    },
    //Combat Boons
    {
      "name":"Arcane Strike",
      "cost":2,
      "prereq":"The ability to cast at least one arcane spell",
      "desc":"Your non-magical weapon attacks deal an additional 1 force damage, and are considered magical",
      "type":"Combat Boon",
      "id":28
    },
    {
      "name":"Arcane Penetration",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(28)' href='#'>Arcane Strike</a>, Character level 5th",
      "desc":"When you attack a creature that is currently under the effects of a spell that increases their AC like Arcane Shield or Mage Armor, you ignore those spells' bonus to AC.",
      "type":"Combat Boon",
      "id":29
    },
    {
      "name":"Improved Arcane Strike",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(28)' href='#'>Arcane Strike</a>, Character level 5th",
      "desc":"Your weapon attacks deal an additional 2 force damage, and are considered magical. <br><br>This boon replaces<a onclick='xmlhttp.onreadystatechange(28)' href='#'>Arcane Strike.</a>",
      "type":"Combat Boon",
      "id":30
    },
    {
      "name":"Battle-Ready",
      "cost":2,
      "prereq":"None",
      "desc":"You gain a +5 bonus to your initiative rolls. <br><br>You may take this boon only once.",
      "type":"Combat Boon",
      "id":31
    },
    {
      "name":"Close-Quarters Shooter",
      "cost":2,
      "prereq":"None",
      "desc":"Your ranged attack rolls are not made at disadvantage while within a hostile creature's reach.",
      "type":"Combat Boon",
      "id":32
    },
    {
      "name":"Crossbow Expert",
      "cost":2,
      "prereq":"None",
      "desc":"You ignore the loading property of crossbows with which you are proficient.",
      "type":"Combat Boon",
      "id":33
    },
    {
      "name":"Defensive Duelist",
      "cost":3,
      "prereq":"Dexterity 13 or higher",
      "desc":"When you are wielding a finesse weapon with which you are proficient and another creature hits you with a melee attack, you can use your reaction to add your proficiency bonus to your AC for that attack, potentially causing the attack to miss you. <br><br>You cannot use this ability if a creature two sizes larger than you or larger attacks you.",
      "type":"Combat Boon",
      "id":34
    },
    {
      "name":"Easy Up",
      "cost":2,
      "prereq":"None",
      "desc":"When you are prone, standing up uses only 1 meter of your movement. and does not provoke attacks of opportunity.",
      "type":"Combat Boon",
      "id":35
    },
    {
      "name":"Great Weapon Master",
      "cost":2,
      "prereq":"None",
      "desc":"Before you make a melee attack with a heavy weapon, you can choose to take a penalty to the attack roll equal to your proficiency bonus. If the attack hits, you add two times your proficiency bonus to the attack's damage.",
      "type":"Combat Boon",
      "id":36
    },
    {
      "name":"Cleave",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>, Strength 15 or higher",
      "desc":"If you hit a creature with a heavy melee weapon that deals slashing damage using<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>on your turn, you can attack with that weapon again as apart of your attack action, against a different creature. You can make this additional attack only once per turn. <br><br>You cannot use<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>with this attack.",
      "type":"Combat Boon",
      "id":37
    },
    {
      "name":"Clobber",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>, Strength 15 or higher",
      "desc":"If you hit a creature with a heavy melee weapon that deals bludgeoning damage using<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>on your turn, you can attack with that weapon again as apart of your attack action, against the same creature. You can make this additional attack only once per turn. <br><br>You cannot use<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>with this attack.",
      "type":"Combat Boon",
      "id":38
    },
    {
      "name":"Haft Strike",
      "cost":2,
      "prereq":"None",
      "desc":"When you take the attack action on your turn with a Glaive, Halberd, Quarterstaff, Spear, or Staff that you are proficient with, you can make an additional attack with that weapon as a bonus action. The damage die for this attack is a d4.",
      "type":"Combat Boon",
      "id":39
    },
    {
      "name":"Improved Charge",
      "cost":2,
      "prereq":"None",
      "desc":"If you fail a Charge maneuver check, you do not provoke an attack of opportunity.",
      "type":"Combat Boon",
      "id":40
    },
    {
      "name":"Advanced Charge",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(40)' href='#'>Improved Charge</a>, Strength 13 or higher",
      "desc":"When you succeed in performing a Charge combat maneuver, you can use your bonus action to immediately attempt an Overrun combat maneuver.",
      "type":"Combat Boon",
      "id":41
    },
    {
      "name":"Improved Disarm",
      "cost":2,
      "prereq":"None",
      "desc":"If you fail a Disarm maneuver check, you do not provoke an attack of opportunity.",
      "type":"Combat Boon",
      "id":42
    },
    {
      "name":"Advanced Disarm",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(42)' href='#'>Improved Disarm</a>",
      "desc":"You can perform a Disarm combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":43
    },
    {
      "name":"Improved Dodge",
      "cost":2,
      "prereq":"None",
      "desc":"When you take the Dodge action, you also gain a +2 bonus to AC until the beginning of your next turn.",
      "type":"Combat Boon",
      "id":44
    },
    {
      "name":"Mobility",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(44)' href='#'>Improved Dodge</a>",
      "desc":"When you make a melee attack against a creature, you don't provoke opportunity attacks from that creature for the rest of the turn, whether you hit or not. Additionally, you may take the disengage action as a bonus action on your turn.",
      "type":"Combat Boon",
      "id":45
    },
    {
      "name":"Improved Grapple",
      "cost":2,
      "prereq":"None",
      "desc":"You do not provoke an attack of opportunity when initiating a Grapple combat maneuver.",
      "type":"Combat Boon",
      "id":46
    },
    {
      "name":"Advanced Grapple",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(46)' href='#'>Improved Grapple</a>",
      "desc":"You can perform a Grapple combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":47
    },
    {
      "name":"Monster Grappler",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(46)' href='#'>Improved Grapple</a>, Strength 15 or higher",
      "desc":"You may grapple a creature up to two size categories larger than you.",
      "type":"Combat Boon",
      "id":48
    },
    {
      "name":"Pinning Grapple",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(46)' href='#'>Improved Grapple</a>",
      "desc":"You can use your action to try to pin a creature grappled by you. To do so, make another grapple maneuver check. If you succeed, you and the creature are both restrained until the grapple ends.",
      "type":"Combat Boon",
      "id":49
    },
    {
      "name":"Improved Lunge",
      "cost":2,
      "prereq":"None",
      "desc":"If you fail a Lunge maneuver check, you do not provoke an attack of opportunity.",
      "type":"Combat Boon",
      "id":50
    },
    {
      "name":"Advanced Lunge",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(50)' href='#'>Improved Lunge</a>",
      "desc":"You can perform a Lunge combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":51
    },
    {
      "name":"Improved Overrun",
      "cost":2,
      "prereq":"None",
      "desc":"You do not provoke an attack of opportunity when initiating an Overrun combat maneuver.",
      "type":"Combat Boon",
      "id":52
    },
    {
      "name":"Advanced Overrun",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(52)' href='#'>Improved Overrun</a>",
      "desc":"When you successfully perform an Overrun combat maneuver, the target of the maneuver falls prone. <br><br>Additionally, you can choose for the target of an Overrun combat maneuver to not avoid the attack when you initiate it.",
      "type":"Combat Boon",
      "id":53
    },
    {
      "name":"Improved Shove",
      "cost":2,
      "prereq":"None",
      "desc":"If you fail a Shove maneuver check, you do not provoke an attack of opportunity.",
      "type":"Combat Boon",
      "id":54
    },
    {
      "name":"Advanced Shove",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(54)' href='#'>Improved Shove</a>",
      "desc":"You can perform a Shove combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":55
    },
    {
      "name":"Improved Sunder",
      "cost":2,
      "prereq":"None",
      "desc":"You do not provoke an attack of opportunity when initiating a Sunder combat maneuver.",
      "type":"Combat Boon",
      "id":56
    },
    {
      "name":"Advanced Sunder",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(56)' href='#'>Improved Sunder</a>",
      "desc":"You can perform a Sunder combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":57
    },
    {
      "name":"Improved Trip",
      "cost":2,
      "prereq":"None",
      "desc":"You do not provoke an attack of opportunity when initiating a Trip combat maneuver.",
      "type":"Combat Boon",
      "id":58
    },
    {
      "name":"Advanced Trip",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(58)' href='#'>Improved Trip</a>",
      "desc":"You can perform a Trip combat maneuver in place of an attack when you take the attack action on your turn.",
      "type":"Combat Boon",
      "id":59
    },
    {
      "name":"Improved Two Weapon Fighting",
      "cost":2,
      "prereq":"Dexterity 15 or higher",
      "desc":"WHile you engage in Two-Weapon Fighting, you may add your ability score modifier to the attack roll.",
      "type":"Combat Boon",
      "id":60
    },
    {
      "name":"Dual Wielding Defense",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(60)' href='#'>Improved Two Weapon Fighting</a>",
      "desc":"You gain a +1 bonus to AC while you are wielding a separate melee weapon in each hand.",
      "type":"Combat Boon",
      "id":61
    },
    {
      "name":"Dual Wielding Versatility",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(60)' href='#'>Improved Two Weapon Fighting</a>",
      "desc":"You can use two-weapon fighting even when the one-handed melee weapons you are wielding aren't light, and lack the heavy property.",
      "type":"Combat Boon",
      "id":62
    },
    {
      "name":"Long-Ranged Attacker",
      "cost":2,
      "prereq":"None",
      "desc":"Attacking at long range doesn't impose disadvantage on your ranged weapon attack rolls",
      "type":"Combat Boon",
      "id":63
    },
    {
      "name":"Preemptive Strike",
      "cost":2,
      "prereq":"None",
      "desc":"When a creature first moves into your reach, you can use your reaction to make an attack of opportunity against them.",
      "type":"Combat Boon",
      "id":64
    },
    {
      "name":"Ranged Weapon Master",
      "cost":2,
      "prereq":"None",
      "desc":"Before you make an attack with a ranged weapon, you can choose to take a penalty to the attack roll equal to your proficiency bonus. If the attack hits, you add two times your proficiency bonus to the attack's damage.",
      "type":"Combat Boon",
      "id":65
    },
    {
      "name":"Ruthless Combatant",
      "cost":2,
      "prereq":"None",
      "desc":"On your turn, when you score a critical hit with a melee weapon or reduce a creature to 0 hit points with one, you can make one melee weapon attack as a bonus action.",
      "type":"Combat Boon",
      "id":66
    },
    {
      "name":"Savage Attacker",
      "cost":3,
      "prereq":"None",
      "desc":"Once per turn when you roll damage for a melee weapon attack, you can reroll the weapon's damage dice and use either total.",
      "type":"Combat Boon",
      "id":67
    },
    {
      "name":"Sharpshooter",
      "cost":2,
      "prereq":"None",
      "desc":"Your ranged weapon attacks ignore half cover and three-quarters cover.",
      "type":"Combat Boon",
      "id":68
    },
    {
      "name":"Steady",
      "cost":2,
      "prereq":"Strength 13 or higher",
      "desc":"You have advantage on resisting Overrun, Shove, and Trip combat maneuvers.",
      "type":"Combat Boon",
      "id":69
    },
    {
      "name":"Warrior's Fervor",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(5)' href='#'>Endurance</a>, Character level 5th",
      "desc":"When you are brought to 0 hit points, you may make a DC 15 Constitution saving throw. On a success, you do not receive a level of exhaustion.",
      "type":"Combat Boon",
      "id":70
    },
    {
      "name":"Improved Warrior's Fervor",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(70)' href='#'>Warrior's Fervor</a> <a onclick='xmlhttp.onreadystatechange(6)' href='#'>Improved Endurance</a>",
      "desc":"When you are reduced to 0 hit points, you do not receive a level of exhaustion.",
      "type":"Combat Boon",
      "id":71
    },
    // Critical Boons
    {
      "name":"Improved Critical",
      "cost":3,
      "prereq":"Extra Attack class feature",
      "desc":"When you score a critical hit with a weapon attack, you can roll the damage dice for that attack one additional time. <br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":72
    },
    {
      "name":"Critical Mastery",
      "cost":3,
      "prereq":"At least two other Critical Boons, Character level 8th",
      "desc":"When you score a critical hit with a weapon attack, you may apply the effects of two Critical Boons to that hit.",
      "type":"Critical Boon",
      "id":73
    },
    {
      "name":"Bleeding Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>, Character level 8th",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit cannot gain hit points until the end of your next turn. <br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":74
    },
    {
      "name":"Blinding Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit must succeed on a DC half the damage you dealt with the weapon's damage dice Constitution saving throw or become blind until the end of your next turn. <br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":75
    },
    {
      "name":"Disarming Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>",
      "desc":"When you score a critical hit with a weapon attack against a creature, you may immediately make a Disarm Maneuver as a reaction against that creature. You have advantage on this maneuver check.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":76
    },
    {
      "name":"Forceful Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>, Strength 13 or higher",
      "desc":"When you score a critical hit with a weapon attack against a creature, you may immediately attempt a Shove Maneuver as a reaction against that creature.You have advantage on this maneuver check.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":77
    },
    {
      "name":"Stunning Critical",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>, Character level 12th",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit must succeed on a DC half the damage you dealt with the weapon's damage dice Constitution saving throw. On a failed save, they become stunned until the beginning of your next turn.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":78
    },
    {
      "name":"Threatening Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit must make a DC half the damage you dealt with the weapon's damage dice Wisdom saving throw. On a failed save, they are frightened by you until the end of their next turn.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":79
    },
    {
      "name":"Tiring Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit must make a DC half the damage you dealt with the weapon's damage dice Constitution saving throw. On a failed save, they take one level of exhaustion.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":80
    },
    {
      "name":"Tripping Critical",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a>",
      "desc":"When you score a critical hit with a weapon attack, you can immediately attempt a Trip combat maneuver as a reaction. You have advantage on this check.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":81
    },
    //Spellcasting Boons
    {
      "name":"Armed Caster",
      "cost":2,
      "prereq":"None",
      "desc":"You can perform the somatic components of spells even when you have weapons or a shield in one or both hands.",
      "type":"Spellcasting Boon",
      "id":82
    },
    {
      "name":"Basic Magic",
      "cost":2,
      "prereq":"None",
      "desc":"Choose a class: bard, cleric, druid, sorcerer, warlock, or wizard. You learn one cantrip of your choice from that class's spell list. <br><br>Your spellcasting ability for this spell depends on the class you chose: Charisma for bard, sorcerer, or warlock; Wisdom for cleric or druid; or Intelligence for wizard.",
      "type":"Spellcasting Boon",
      "id":83
    },
    {
      "name":"Minor Magic",
      "cost":1,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(83)' href='#'>Basic Magic</a>",
      "desc":"Choose a class: bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard. You learn one 1st level spell of your choice from that class's spell list. You may cast this spell once, and gain the ability to do so again when you finish a long rest. <br><br>Your spellcasting ability for this spell depends on the class you chose: Charisma for bard, paladin, sorcerer, or warlock; Wisdom for cleric druid, or ranger; or Intelligence for wizard.",
      "type":"Spellcasting Boon",
      "id":84
    },
    {
      "name":"Major Magic",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(84)' href='#'>Minor Magic</a>, Character level 4th",
      "desc":"Choose a class: bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard. You learn one 2nd level spell of your choice from that class's spell list. You may cast this spell once, and gain the ability to do so again when you finish a long rest. <br><br>Your spellcasting ability for this spell depends on the class you chose: Charisma for bard, paladin, sorcerer, or warlock; Wisdom for cleric druid, or ranger; or Intelligence for wizard.",
      "type":"Spellcasting Boon",
      "id":85
    },
    {
      "name":"Ultimate Magic",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(85)' href='#'>Major Magic</a>, Character level 6th",
      "desc":"Choose a class: bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard. You learn one 3rd level spell of your choice from that class's spell list. You may cast this spell once, and gain the ability to do so again when you finish a long rest. <br><br>Your spellcasting ability for this spell depends on the class you chose: Charisma for bard, paladin, sorcerer, or warlock; Wisdom for cleric druid, or ranger; or Intelligence for wizard.",
      "type":"Spellcasting Boon",
      "id":86
    },
    {
      "name":"Elemental Adept",
      "cost":2,
      "prereq":"None",
      "desc":"When you gain this boon, choose one of the following damage types: acid, cold, fire, lightning, poison, or thunder. <br><br>Spells you cast ignore resistance to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type.",
      "type":"Spellcasting Boon",
      "id":87
    },
    {
      "name":"Elemental Expert",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a>, Character level 5th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept.</a><br><br>Spells you cast ignore Immunity to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a>.",
      "type":"Spellcasting Boon",
      "id":88
    },
    {
      "name":"Elemental Potency",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a>, Character level 5th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept.</a><br><br>When you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a>.",
      "type":"Spellcasting Boon",
      "id":89
    },
    {
      "name":"Energy Adept",
      "cost":2,
      "prereq":"None, character level 7th",
      "desc":"When you gain this boon, choose one of the following damage types: force, necrotic, psychic, or radiant. <br><br>Spells you cast ignore resistance to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type.",
      "type":"Spellcasting Boon",
      "id":90
    },
    {
      "name":"Energy Expert",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a>, Character level 11th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept.</a><br><br>Spells you cast ignore Immunity to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a>.",
      "type":"Spellcasting Boon",
      "id":91
    },
    {
      "name":"Energy Potency",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a>, Character level 11th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept.</a><br><br>When you roll damage for a spell you cast that deals damage of that type, you can treat any 1 on a damage die as a 2.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a>.",
      "type":"Spellcasting Boon",
      "id":92
    },
    {
      "name":"Improved Concentration",
      "cost":2,
      "prereq":"None",
      "desc":"You have advantage on Constitution saving throws made to keep concentration on a spell.",
      "type":"Spellcasting Boon",
      "id":93
    },
    {
      "name":"Attentive Concentration",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a>",
      "desc":"While concentrating on a spell, you do not need to make concentration checks unless you take damage.",
      "type":"Spellcasting Boon",
      "id":94
    },
    {
      "name":"Dual Concentration",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a>, Character level 7th",
      "desc":"You may concentrate on two spells at once. But, at the start of every turn in which you are concentrating on two spells, you must make a DC 15 concentration check to maintain each spell.",
      "type":"Spellcasting Boon",
      "id":95
    },
    {
      "name":"Durable Concentration",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a>, Character level 5th",
      "desc":"While concentrating on a spell, if you take damage equal to or less than your character level, you do not need to make a concentration check.",
      "type":"Spellcasting Boon",
      "id":96
    },
    {
      "name":"Expert Concentration",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a>",
      "desc":"If you fail a concentration check for a spell, you can choose to succeed instead. Once you use this ability, you can't do so again until you finish a short rest.",
      "type":"Spellcasting Boon",
      "id":97
    },
    {
      "name":"Improved Counterspell",
      "cost":2,
      "prereq":"None",
      "desc":"When you attempt to counter a spell, you only need to know a spell of the same school of magic as the target spell to counter. It still must be of the same level as the spell you are countering, as normal.",
      "type":"Spellcasting Boon",
      "id":98
    },
    {
      "name":"Reactive Counterspell",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(98)' href='#'>Improved Counterspell</a>, Character level 7th",
      "desc":"You may attempt to counter a spell as it is being cast. You follow all the same rules as per Counterspelling, but instead of readying an action, you may attempt to counter as a reaction.",
      "type":"Spellcasting Boon",
      "id":99
    },
    {
      "name":"War Caster",
      "cost":2,
      "prereq":"None",
      "desc":"When a hostile creature provokes an opportunity attack from you, you can use your reaction to cast a spell at the creature, rather than making an opportunity attack. The spell must have a casting time of 1 action and must target only that creature.",
      "type":"Spellcasting Boon",
      "id":100
    },
    // Metamagic Boons
    {
      "name":"Careful Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you expend a 1st level spell slot or higher, and choose a number of those creatures up to your proficiency bonus. A chosen creature automatically succeeds on its saving throw against the spell, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":101
    },
    {
      "name":"Improved Careful Spell",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(101)' href='#'>Careful Spell</a>, 3rd level spell slots",
      "desc":"When you use<a onclick='xmlhttp.onreadystatechange(101)' href='#'>Careful Spell,</a>creatures that you choose to succeed on the saving throw are unaffected by the spell.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Spellcasting Boon",
      "id":102
    },
    {
      "name":"Delayed Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a duration of instantaneous, you can expend a 1st level spell to trigger it during any point during your next turn as a reaction, for this casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":103
    },
    {
      "name":"Distant Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of 1 meter or greater, you can expend a 1st level spell slot or higher to double the range of the spell, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":104
    },
    {
      "name":"Improved Distant Spell",
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(104)' href='#'>Distant Spell</a>, 3rd level spell slots",
      "desc":"When you use<a onclick='xmlhttp.onreadystatechange(104)' href='#'>Distant Spell,</a>you triple the range instead of doubling it.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Spellcasting Boon",
      "id":105
    },
    {
      "name":"Empowered Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you may cast it at one spell slot level higher to increase the damage dice of that spell by one stage (1d4 becomes 1d6, 1d12 becomes 1d12 + 1d2, etc), for that casting. This increase in spell level does not contribute toward the At Higher Levels section of a spell.<br><br>Alternatively, you can expend 2 sorcery points per spell slot level for the same effect.<br><br>You may use this boon a number of times on a single spell equal to half your proficiency bonus (rounded down).<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":106
    },
    {
      "name":"Extended Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a duration longer than instantaneous, you can expend a 1st level spell slot or higher to double its duration, to a maximum duration of 24 hours, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may use this boon a number of times on a single spell equal to half your proficiency bonus (rounded down).<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":107
    },
    {
      "name":"Distant Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend a 2nd level spell slot or higher to give one target of the spell disadvantage on its first saving throw made against the spell for that casting.<br><br>Alternatively, you can expend 3 sorcery points for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":108
    },
    {
      "name":"Merciful Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that drops a creature to 0 hit points, you can your reaction to expend a 1st level spell slot or above to make the damage non-lethal, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":109
    },
    {
      "name":"Quickened Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a casting time of 1 action, you may cast it at one spell slot level higher to change the casting time to 1 bonus action, for that casting.<br><br>Alternatively, you can expend 2 sorcery points per spell slot level for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":110
    },
    {
      "name":"Reaching Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of touch, you can expend a 1st level spell slot or higher to make the range of the spell 10 meters, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":111
    },
    {
      "name":"Shared Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of self, you can expend a 1st level spell slot or above to give it a range of touch, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":112
    },
    {
      "name":"Silent Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you can expend a 1st level spell slot or higher to cast it without verbal components, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":113
    },
    {
      "name":"Still Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you can expend a 1st level spell slot or higher to cast it without somatic components, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":114
    },
    {
      "name":"Transmuted Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that deals a type of damage from the following list, you can expend a 1st level spell slot to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, or thunder, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":115
    },
    {
      "name":"Twinned Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that targets only one creature and doesn't have a range of self, you can expend a spell slot equal to one less than the spell's level (minimum 1st level) to target a second creature in range with the same spell, for that casting.<br><br>Alternatively, you can expend a number of sorcery points equal to the spell's level for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":116
    },
    {
      "name":"Wide Spell",
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has an area of effect, you can expend a 2nd level spell slot or higher to increase that spell's area of effect variables by 50% for that casting.<br><br>Alternatively, you can expend 3 sorcery points for the same effect.<br><br>You may only apply the effects of one Metamagic Boon to a given spell, unless you possess<a onclick='xmlhttp.onreadystatechange(131)' href='#'>Metamagic Mastery.</a>",
      "type":"Metamagic Boon",
      "id":117
    },
    // Culture Boons
    {
      "name":"Blessings of the Hearth",
      "cost":2,
      "prereq":"Midlander Culture",
      "desc":"As an action, you can give yourself a number of temporary hit points equal to your character level. These temporary hit points last for 10 minutes, and once you use this ability, you cannot do so again until you finish a long rest. <br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":118
    },
    {
      "name":"Chosen of Dynus",
      "cost":2,
      "prereq":"Alnir Culture",
      "desc":"When you drop to 0 hit points, you can use your reaction to drop to 1 hit point instead. Once you use this ability, you cannot do so again until you finish a long rest.<br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":119
    },
    {
      "name":"Chosen of Lessus",
      "cost":2,
      "prereq":"Lesnir Culture",
      "desc":"You can breathe both air and water. Additionally, you cannot be grappled or restrained while underwater.",
      "type":"Culture Boon",
      "id":120
    },
    {
      "name":"Dragon-Born",
      "cost":3,
      "prereq":"Pressian Culture",
      "desc":"Your bloodline can be traced back to the Dragon Warriors of Pressia. You gain one of the following features: <br><ul><li><b>Draken Eyesight:</b> You can see in darkness as if it were dim light out to a range of 20 meters, and dim light as if it were bright light out to a range of 40 meters.</li><li><b>Draken Scales:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><li><b>Draken Wings:</b> While not wearing havy armor, you gain a flying speed of 6 meters. You cannot hover, and must keep moving on your turn to stay aloft.</li><li><b>Elemental Breath:</b> You can exhale your choice of a 1-meter by 10-meter line or 4-meter cone breath weapon. Creatures within the area must make a DC 8 + your proficiency bonus Dexterity saving throw or take 2d6 + your Constitution modifier damage, or half damage on a successful save. The damage creatures take is determined by the damage resistance you chose as part of the Pressian culture. You can use this ability once, and you regain use after a short or long rest.</li>",
      "type":"Culture Boon",
      "id":121
    },
    {
      "name":"Equien Shifter",
      "cost":2,
      "prereq":"Equien Culture",
      "desc":"As an action, you can transform yourself into a medium-sized bipedal form that lasts until you fall unconscious, or until you dismiss it as a bonus action. While in this form, you lose all features granted to you by Centaurism.",
      "type":"Culture Boon",
      "id":122
    },
    {
      "name":"Frosted Protection",
      "cost":2,
      "prereq":"Yupik Culture",
      "desc":"You can cast the spell Icebite Armor on yourself once per short rest.",
      "type":"Culture Boon",
      "id":123
    },
    {
      "name":"Ghostkin",
      "cost":2,
      "prereq":"Crascen Culture",
      "desc":"As a bonus action, you can turn invisible for 1 minute or until you attack a creature or cast a spell. While invisible in this way, you have resistance to all damage. Once you use this ability, you cannot do so again until you finish a long rest.<br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":124
    },
    {
      "name":"Infernal Heritage",
      "cost":2,
      "prereq":"Helson Culture",
      "desc":"Your bloodline can be strongly traced back to the Infernal Incursions. You gain one of the following features: <br><ul><li><b>Damnable Retribution:</b> When you are hit with an attack by a creature you can see, you can use your reaction to deal 3d8 Cold or Fire damage to the attacker. Once you use this ability, you cannot do so again until you finish a long rest.</li><li><b>Hellish Carapace:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><li><b>Fiendish Wings:</b> While not wearing heavy armor and in dim light or darkness, you gain a flying speed of 6 meters.</li><li><b>Infernal Magic:</b> You may cast one of the following spells at their lowest level, once per short rest: Bane, Cause Fear, False Life, Hellish Rebuke, Hideous Laughter, or Inflict Wounds.<br><br>Your spellcasting ability modifier for these spells is your Charisma modifier + your proficiency bonus.<br><br>Your spell save DC for these spells is 8 + your Charisma modifier + your proficiency bonus.</li>",
      "type":"Culture Boon",
      "id":125
    },
    {
      "name":"Mutagen Aspect",
      "cost":2,
      "prereq":"Ensot Culture",
      "desc":"Your bloodline is infused with the magic of foul mutations. You gain one of the following features: <br><ul><li><b>Vile Retaliation:</b> When you are hit with a melee attack by a creature you can see, you can use your reaction to deal 1d6 acid or poison damage.</li><li><b>Appaling Hide:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><li><b>Insectoid Wings:</b> While not wearing medium or heavy armor and having more than half of your maximum HP, you gain a flying speed of 6 meters.</li><li><b>Disfiguring Claws:</b> Your unarmed strikes deal 1d8 slashing damage. You cannot wield martial weapons.</li><li><b>Terrifying Visage:</b> You gain advantage on all intimidation checks, and disadvantage on all persuasion checks.</li>",
      "type":"Culture Boon",
      "id":126
    },
    {
      "name":"Paulnak Shifter",
      "cost":2,
      "prereq":"Paulnak Culture",
      "desc":"You can cast the spell Enlarge/Reduce on yourself once per long rest.<br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":127
    },
    {
      "name":"Unangen Magic Sense",
      "cost":2,
      "prereq":"Unangen Culture",
      "desc":"You can cast the spell Detect Magic at will.",
      "type":"Culture Boon",
      "id":128
    },
    {
      "name":"Unbroken Spirit",
      "cost":2,
      "prereq":"Clavish Culture",
      "desc":"If you fail a Wisdom saving throw, you can use your reaction to succeed instead. Once you use this ability, you cannot do so again until you finish a long rest.<br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":129
    },
    {
      "name":"Unfettered Fortitude",
      "cost":2,
      "prereq":"Crownlander Culture",
      "desc":"If you fail a Constitution saving throw, you can use your reaction to succeed instead. Once you use this ability, you cannot do so again until you finish a long rest.<br><br>You may take this boon only once.",
      "type":"Culture Boon",
      "id":130
    },
    // Metamagic Mastery
    {
      "name":"Metamagic Mastery",
      "cost":3,
      "prereq":"At least two other Metamagic Boons <br>Character level 8th",
      "desc":"You may apply the effects of up to two Metamagic Boons on a single spell, as long as you pay the costs seperately.",
      "type":"Metamagic Boon",
      "id":131
    },
    // Barbarian Class Boons
    {
      "name":"Extra Rage",
      "cost":2,
      "prereq":"Barbarian level 3rd",
      "desc":"You can rage one additional time per day.",
      "type":"Class Boon",
      "id":132
    },
    {
      "name":"Raging Defense",
      "cost":3,
      "prereq":"Barbarian level 5th",
      "desc":"While raging and not wearing a shield, you gain a +2 bonus to AC.",
      "type":"Class Boon",
      "id":133
    },
    {
      "name":"Baleful Protectors",
      "cost":2,
      "prereq":"Ancestral Guardian Barbarian level 3rd",
      "desc":"A target under the effects of your Ancestral Protectors has disadvantage on one saving throw of your choice when you strike them.",
      "type":"Class Boon",
      "id":134
    },
    {
      "name":"Vindictive Shield",
      "cost":3,
      "prereq":"Ancestral Guardian Barbarian level 9th",
      "desc":"The dice you roll for Spirit Shield increase to d8's. When you reduce the damage a creature takes from an attack to 0 with Spirit Shield, the attacker takes force damage equal to half of the damage they would have dealt.",
      "type":"Class Boon",
      "id":135
    },
    {
      "name":"Controlled Frenzy",
      "cost":2,
      "prereq":"Berserker Barbarian level 3rd",
      "desc":"You do not recieve exhaustion from using Frenzy. While you are un a frenzied rage, all of your melee weapon attacks deal an additional 1d4 damage.",
      "type":"Class Boon",
      "id":136
    },
    {
      "name":"Thoughtless Rage",
      "cost":3,
      "prereq":"Berserker Barbarian level 9th",
      "desc":"When you enter a rage, you end any effect that causes you to be charmed or frightened. Additionally, you are immune to psychic damage while raging.",
      "type":"Class Boon",
      "id":137
    },
    {
      "name":"Greater Strom Aura",
      "cost":2,
      "prereq":"Strom Herald Barbarian level 3rd",
      "desc":"Your Strom Aura extends 6 meters from you in every direction. Additionally, any dice rolled to deal damage or gain temporary hit points from your Storm Aura increase by 1 die step (1d6 becomes 1d8, 1d12 becomes 1d12 + 1d2, etc.).",
      "type":"Class Boon",
      "id":138
    },
    {
      "name":"Storm Conduit",
      "cost":3,
      "prereq":"Storm Herald Barbarian level 9th",
      "desc":"While you are raging, your weapon attacks deal an additional 1d6 thunder damage.",
      "type":"Class Boon",
      "id":139
    },
    {
      "name":"Totem Versatility",
      "cost":2,
      "prereq":"Totem Warrior Barbarian level 3rd",
      "desc":"When you finish a long rest, you can choose to change your Totem Spirit to that of another animal.",
      "type":"Class Boon",
      "id":140
    },
    {
      "name":"Totemic Aspect",
      "cost":3,
      "prereq":"Totem Warrior Barbarian level 9th",
      "desc":"You gain the 3rd level effects of one Totem Spirit of your choice.",
      "type":"Class Boon",
      "id":141
    },
    {
      "name":"Righteous Fury",
      "cost":2,
      "prereq":"Zealot Barbarian level 3rd",
      "desc":"All attacks after your first attack on your turn deal an additional 1d6 damage. The extra damage is necrotic or radiant; you choose the type of damage when you gain this boon.",
      "type":"Class Boon",
      "id":142
    },
    {
      "name":"Focus of the Zealot",
      "cost":3,
      "prereq":"Zealot Barbarian level 9th",
      "desc":"Once per rage, if you fail a saving throw, you can choose to succeed instead.",
      "type":"Class Boon",
      "id":143
    },
    //Bard Class Boons
    {
      "name":"Bardic Skill",
      "cost":3,
      "prereq":"Bard level 5th",
      "desc":"You gain a +1 bonus to all skill checks.",
      "type":"Class Boon",
      "id":144
    },
    {
      "name":"Extra Inspiration",
      "cost":2,
      "prereq":"Bard level 3rd",
      "desc":"You gain one additional use of Bardic Inspiration.",
      "type":"Class Boon",
      "id":145
    },
    {
      "name":"Disturbing Words",
      "cost":2,
      "prereq":"Eloquence Bard level 3rd",
      "desc":"When you use Unsettling Words, you can choose to subtract from an ability check, attack roll, or saving throw.",
      "type":"Class Boon",
      "id":146
    },
    {
      "name":"Universal Understanding",
      "cost":3,
      "prereq":"Eloquence Bard level 9th",
      "desc":"You can speak to and understand all creatures with an intelligence score greater than 2.",
      "type":"Class Boon",
      "id":147
    },
    {
      "name":"Reliable Distraction",
      "cost":2,
      "prereq":"Lore Bard level 3rd",
      "desc":"Whenever you use Cutting Words, you can roll a d6 and use it instead of expending a Bardic Inspiration die.",
      "type":"Class Boon",
      "id":148
    },
    {
      "name":"Ritualistic Study",
      "cost":3,
      "prereq":"Lore Bard level 9th",
      "desc":"When you finish a long rest, you can choose to replace a spell you know with a spell from any class' spell list.",
      "type":"Class Boon",
      "id":149
    },
    {
      "name":"Quickened Flourish",
      "cost":2,
      "prereq":"Swords Bard level 3rd",
      "desc":"When you use a Blade Flourish option, you can make a weapon attack with your bonus action.",
      "type":"Class Boon",
      "id":150
    },
    {
      "name":"Maneuvering Flourish",
      "cost":3,
      "prereq":"Swords Bard level 9th",
      "desc":"You can use multiple Blade Flourish options per turn, but a maximum of one per attack.",
      "type":"Class Boon",
      "id":151
    },
    {
      "name":"Feat of Valor",
      "cost":2,
      "prereq":"Valor Bard level 3rd",
      "desc":"When an ally hits with an attack roll using Bardic Inspiration, their attack deals additional damage equal to the Bardic Inspiration roll.",
      "type":"Class Boon",
      "id":152
    },
    {
      "name":"Valiant Stand",
      "cost":3,
      "prereq":"Valor Bard level 9th",
      "desc":"When you are reduced to 0 hit points, you can use your reaction to expend a use of Bardic Inspiration to drop to 1 hit point instead.",
      "type":"Class Boon",
      "id":153
    },
    {
      "name":"Ghastly Blades",
      "cost":2,
      "prereq":"Whispers Bard level 3rd",
      "desc":"When you use Psychic Blades, the creature you are attacking must also make a Wisdom saving throw against your spell save DC. If they fail, they are frightened of you until the end of their next turn.",
      "type":"Class Boon",
      "id":154
    },
    {
      "name":"Shroud of Whispers",
      "cost":3,
      "prereq":"Whispers Bard level 9th",
      "desc":"You can use Mantle of Whispers on a creature that has died within 24 hours of using the ability. Additionally, your disguise lasts for 8 hours, or until you choose to end it as a bonus action.",
      "type":"Class Boon",
      "id":155
    },
    // Cleric Class Boons
    {
      "name":"Deepened Divinity",
      "cost":3,
      "prereq":"Cleric or Paladin level 3rd",
      "desc":"You gain one additional use of Channel Divinity per long rest.",
      "type":"Class Boon",
      "id":156
    },
    {
      "name":"Improved Divine Intervention",
      "cost":3,
      "prereq":"Cleric level 10th",
      "desc":"When you use Divine Intervention, you gain a 10% greater chance of intervention.",
      "type":"Class Boon",
      "id":157
    },
    {
      "name":"Encompassing Abjure",
      "cost":2,
      "prereq":"Arcana Cleric level 3rd",
      "desc":"You can target up to two additional celestials, elementals, fey, or fiends when you use Arcane Abjuration.",
      "type":"Class Boon",
      "id":158
    },
    {
      "name":"Weave Sapper",
      "cost":3,
      "prereq":"Arcana Cleric level 9th",
      "desc":"When you end a spell that you did not cast on a creature or object, you gain a number of temporary hit points equal to 1d6 * the level of the spell.",
      "type":"Class Boon",
      "id":159
    },
    {
      "name":"Reaping Touch",
      "cost":2,
      "prereq":"Death Cleric level 3rd",
      "desc":"When you deal damage to a creature with Touch of Death, you also gain a number of hit points equal to half the damage dealt. If this would bring your current hit points past your hit point maximum, any left over hit points become temporary hit points.",
      "type":"Class Boon",
      "id":160
    },
    {
      "name":"Necrotic Mastery",
      "cost":3,
      "prereq":"Death Cleric level 9th",
      "desc":"Necrotic damage dealt by your cleric spells and Channel Divinity options ignores resistance and immunity to necrotic damage. Additionally, you gain resistance to necrotic damage.",
      "type":"Class Boon",
      "id":161
    },
    {
      "name":"Sundering Strike",
      "cost":2,
      "prereq":"Destruction Cleric level 3rd",
      "desc":"When you score a critical hit with a weapon attack, you can choose to use Sundering Invocation. When you use it in this way, a creature has disadvantage on the saving throw.",
      "type":"Class Boon",
      "id":162
    },
    {
      "name":"Inured to Annihilation",
      "cost":3,
      "prereq":"Destruction Cleric level 9th",
      "desc":"You gain immunity to thunder damage.",
      "type":"Class Boon",
      "id":163
    },
    {
      "name":"Greater Blessing of the Forge",
      "cost":2,
      "prereq":"Forge Cleric level 3rd",
      "desc":"When you use Blessing of the Forge, the bonus to a weapon or armor becomes +2.",
      "type":"Class Boon",
      "id":164
    },
    {
      "name":"Hammer of Creation",
      "cost":3,
      "prereq":"Forge Cleric level 9th",
      "desc":"You can use your Channel Divinity to conduct an hour-long ritual on a magical weapon. At the end of this ritual, this weapon gains the following properties:<ul><li>This weapon ignores all resistance to Fire damage.</li><li>This weapon deals an additional 1d6 Fire damage.</li></ul>These properties last for 8 hours, or until you use your Channel Divinity again.",
      "type":"Class Boon",
      "id":165
    },
    {
      "name":"Grave Usher",
      "cost":2,
      "prereq":"Grave Cleric level 3rd",
      "desc":"When you reduce a creature to 0 hit points, you can choose to expend a spell slot of 1st level or higher to instantly kill them. When you kill a creature in this way, their body cannot become undead for a number of days equal to the spell slot level you expended.",
      "type":"Class Boon",
      "id":166
    },
    {
      "name":"Cemetary Gates",
      "cost":3,
      "prereq":"Forge Cleric level 9th",
      "desc":"When a creature within 10 meters of you dies, you can use your Channel Divinity as a reaction to bring the creature to 1 hit point instead. They also lose one level of exhaustion.",
      "type":"Class Boon",
      "id":167
    },
    {
      "name":"Incite Envy",
      "cost":2,
      "prereq":"Greed Cleric level 3rd",
      "desc":"When you use Incite Greed, you can choose to target a creature within range instead of a point. All creatures within the affected area that fail the saving throw must also make an additional wisdom saving throw if they get within range of the creature you choose. On a fail, they must use their action to attack that creature.",
      "type":"Class Boon",
      "id":168
    },
    {
      "name":"Divine Frugality",
      "cost":3,
      "prereq":"Greed Cleric level 9th",
      "desc":"The cost of material components you need for spells becomes 40% cheaper. Additionally, you do not need to provide the material components for spells that are less than 10000 wealth.",
      "type":"Class Boon",
      "id":169
    },
    {
      "name":"Expertise of the Ages",
      "cost":2,
      "prereq":"Knowledge Cleric level 3rd",
      "desc":"When you gain proficiency in a skill using Knowledge of the Ages, you double your proficiency bonus for that skill.",
      "type":"Class Boon",
      "id":170
    },
    {
      "name":"Intrusive Introspection",
      "cost":3,
      "prereq":"Knowledge Cleric level 9th",
      "desc":"You can expend a spell slot instead of your Channel Divinity to use Read Thoughts.",
      "type":"Class Boon",
      "id":171
    },
    {
      "name":"Cling to Life",
      "cost":2,
      "prereq":"Life Cleric level 3rd",
      "desc":"When you or a creature within 10 meters of you falls to 0 hit points, you can use your reaction to expend a spell slot. They gain a number of hit points equal to two * the level of spell slot expended. You cannot heal an undead or construct in this way.",
      "type":"Class Boon",
      "id":172
    },
    {
      "name":"Stolen Recovery",
      "cost":3,
      "prereq":"Life Cleric level 9th",
      "desc":"When a creature within 10 meters of you gains hit points, you can use your reaction and expend a use of your Channel Divinity to reduce all healing that creature received to 0. A creature within 10 meters of you then heals for a number of hit points equal to half of the hit points the initial target was intended to gain. You cannot heal an undead or construct in this way.",
      "type":"Class Boon",
      "id":173
    },
    {
      "name":"Radiant Flare",
      "cost":2,
      "prereq":"Light Cleric level 3rd",
      "desc":"When a creature is affected by your Warding Flare, they automatically miss their attack and take 1d10 + half your cleric level radiant damage.",
      "type":"Class Boon",
      "id":174
    },
    {
      "name":"Blinding Dawn",
      "cost":3,
      "prereq":"Light Cleric level 9th",
      "desc":"When you use Radiance of the Dawn, all creatures that fail the Constitution saving throw are also blinded for 1 minute.",
      "type":"Class Boon",
      "id":175
    },
    {
      "name":"Family Bond",
      "cost":2,
      "prereq":"Love Cleric level 3rd",
      "desc":"When you use Emboldening Bond, you may instead choose a number of creatures up to your Wisdom modifier. If all creatures are within 10 meters of each other, they may roll a d6 instead of a d4. If at least two creatures are within 10 meters of each other, they may roll a d4 as normal.<br><br>You must choose only two creatures to use Enduring Unity.",
      "type":"Class Boon",
      "id":176
    },
    {
      "name":"Undying Burden",
      "cost":3,
      "prereq":"Love Cleric level 9th",
      "desc":"When a creature would drop to 0 hit points as a result of an attack, when you use Shared Burden to reduce that damage, you instead drop to 0 hit points. That creature then heals to its hit point maximum.",
      "type":"Class Boon",
      "id":177
    },
    {
      "name":"Streak of Luck",
      "cost":2,
      "prereq":"Luck Cleric level 3rd",
      "desc":"When you roll a 3 or 4 when you use Fortune's Favor, you may roll an additional 1d4 and add it to the roll's total.",
      "type":"Class Boon",
      "id":178
    },
    {
      "name":"Divine Gambit",
      "cost":3,
      "prereq":"Luck Cleric level 9th",
      "desc":"When any creature within 10 meters of you fails an ability check, skill check, attack, or saving throw, you can use you reaction cause it to succeed. The next ability check, skill check, attack, or saving throw you make fails.<br><br>You may use this feature once, and you gain the ability to do so again when you finish a short or long rest.",
      "type":"Class Boon",
      "id":179
    },
    {
      "name":"Natural Proclivity",
      "cost":2,
      "prereq":"Nature Cleric level 3rd",
      "desc":"The duration a creature is affected by your Charm Animals and Plants becomes 10 minutes, and the effect only ends if they are damaged by one of your allies.",
      "type":"Class Boon",
      "id":180
    },
    {
      "name":"Elemental Cancellation",
      "cost":3,
      "prereq":"Nature Cleric level 9th",
      "desc":"A creature you affect with Dampen Elements becomes immune to the chosen damage type instead of resistant.",
      "type":"Class Boon",
      "id":181
    },
    {
      "name":"Law's Control",
      "cost":2,
      "prereq":"Order Cleric level 3rd",
      "desc":"When you use Order's Demand, you may charm a creature who has immunity to the charmed condition.",
      "type":"Class Boon",
      "id":182
    },
    {
      "name":"Universal Order",
      "cost":3,
      "prereq":"Order Cleric level 9th",
      "desc":"All enchantment spells you cast affect creatures even if they are immune to the charmed condition.",
      "type":"Class Boon",
      "id":183
    },
    {
      "name":"Blessing of Cunning Deceit",
      "cost":2,
      "prereq":"Secrets Cleric level 3rd",
      "desc":"A creature affected by your Blessing of the Whisperer also have advantage on insight checks.",
      "type":"Class Boon",
      "id":184
    },
    {
      "name":"Uncertain Visage",
      "cost":3,
      "prereq":"Secrets Cleric level 9th",
      "desc":"When a creature sees you, they must make a Intelligence saving throw against your spell save DC after they stop looking at you. If they fail, they do not remember any concrete details about any aspect of your appearence. A creature can choose to fail the saving throw, and you can choose for a creature to succeed.",
      "type":"Class Boon",
      "id":185
    },
    {
      "name":"Forceful Wrath",
      "cost":2,
      "prereq":"Tempest Cleric level 3rd",
      "desc":"When a creature fails its saving throw against Wrath of the Storm, it either is pushed away from you a number of meters equal to half of the thunder damage dealt, or pulled toward you a number of meters equal to half of the lightning damage dealt.",
      "type":"Class Boon",
      "id":186
    },
    {
      "name":"Pull of the Cyclone",
      "cost":3,
      "prereq":"Tempest Cleric level 9th",
      "desc":"When you would move a creature further or closer to you by using Forceful Wrath or Tempestuous Strike, you can instead make them go any direction of your choice. Additionally, the minimum distance you move a creature with either one of those abilities becomes 4 meters.",
      "type":"Class Boon",
      "id":187
    },
    {
      "name":"Held Reaction",
      "cost":2,
      "prereq":"Time Cleric level 3rd",
      "desc":"When you hold your action, you do not have to choose a trigger. At any point until the beginning of your next turn, you can choose to trigger your held action.",
      "type":"Class Boon",
      "id":188
    },
    {
      "name":"Planned Action",
      "cost":3,
      "prereq":"Time Cleric level 9th",
      "desc":"You can affect your own and any other one initiative of your choice at the beginning of a round by adding or subtracting 5 to either total.",
      "type":"Class Boon",
      "id":189
    },
    {
      "name":"Vertical Travel",
      "cost":2,
      "prereq":"Travel Cleric level 3rd",
      "desc":"Feather Fall and Levitation become domain spells and count as Cleric spells for you.",
      "type":"Class Boon",
      "id":190
    },
    {
      "name":"Striker's Pilgrimage",
      "cost":3,
      "prereq":"Travel Cleric level 9th",
      "desc":"When a creature moves out of your reach, you may use your reaction to move so that it is still within your reach.",
      "type":"Class Boon",
      "id":191
    },
    {
      "name":"Solid Duplicity",
      "cost":2,
      "prereq":"Trickery Cleric level 3rd",
      "desc":"Your image created from Invoke Duplicity has a solid and realistic form. If a creature touches it, it cannot tell that it is an illusion. You can change your duplicity between solid and illusory as an action on your turn.",
      "type":"Class Boon",
      "id":192
    },
    {
      "name":"Cloak of Trickery",
      "cost":3,
      "prereq":"Trickery Cleric level 9th",
      "desc":"You do not become visible from Cloak of Shadows if you attack or cast a spell.",
      "type":"Class Boon",
      "id":193
    },
    {
      "name":"Courageous Will",
      "cost":2,
      "prereq":"Valor Cleric level 3rd",
      "desc":"All creatures affected by your Aura of Will are also immune to the frightened condition, and gain 1d6 temporary hit points.",
      "type":"Class Boon",
      "id":194
    },
    {
      "name":"Valor Strike",
      "cost":3,
      "prereq":"Valor Cleric level 9th",
      "desc":"If you score a critical hit with a weapon attack against a creature on your turn, one ally that can see you gains a number of temporary hit points equal to the damage you deal with Divine Strike. These temporary hit points disapear at the beginning of your next turn.",
      "type":"Class Boon",
      "id":195
    },
    {
      "name":"Divine Critical",
      "cost":2,
      "prereq":"War Cleric level 3rd",
      "desc":"When you or an ally within 10 meters of you makes a weapon attack, you can use Channel Divinity to make that attack a critical hit. You make this choice after you see the roll, but before the GM says whether the attack hits or misses.",
      "type":"Class Boon",
      "id":196
    },
    {
      "name":"Strikes of War",
      "cost":3,
      "prereq":"War Cleric level 9th",
      "desc":"Your Divine Strike dice become d12's.",
      "type":"Class Boon",
      "id":197
    },
    //Druid Class Boons
    {
      "name":"Additional Wild Shape",
      "cost":3,
      "prereq":"Druid level 3rd",
      "desc":"You may use Wild Shape one additional time per rest.<br><br>You may choose this boon only once.",
      "type":"Class Boon",
      "id":198
    },
    {
      "name":"Extended Wild Shape",
      "cost":1,
      "prereq":"Druid level 3rd",
      "desc":"Your duration for Wild Shape increases by 1 hour.",
      "type":"Class Boon",
      "id":199
    },
    {
      "name":"Wild Speech",
      "cost":2,
      "prereq":"Druid level 3rd",
      "desc":"While in a Wild Shape form that does not allow for speech, you may speak. This does not allow you to cast spells that require verbal components, however.",
      "type":"Class Boon",
      "id":200
    },
    {
      "name":"Potent Balm",
      "cost":2,
      "prereq":"Dreams Druid level 3rd",
      "desc":"Your Balm of the Summer Court dice become d8's.",
      "type":"Class Boon",
      "id":201
    },
    {
      "name":"Undiscoverable Hearth",
      "cost":3,
      "prereq":"Dreams Druid level 9th",
      "desc":"All creatures and objects that you choose within the confines of your Hearth of Moonlight and Shadow are invisible to those outside of the sphere. Additionally, creatures you designate can move in and out of the sphere with ease.",
      "type":"Class Boon",
      "id":202
    },
    {
      "name":"Deadly Spores",
      "cost":2,
      "prereq":"Spores Druid level 3rd",
      "desc":"Your Halo of Spores and Symbiotic Entity damage dice increase by 1 die step (1d6 becomes 1d8, 1d12 becomes 1d12 + 1d2, etc.).",
      "type":"Class Boon",
      "id":203
    },
    {
      "name":"Fungal Horde",
      "cost":3,
      "prereq":"Spores Druid level 9th",
      "desc":"A zombie you create with Fungal Infestation remains animate for 48 hours. You can have a maximum number of zombies from this feature animate at a single time equal to your Wisdom modifier.",
      "type":"Class Boon",
      "id":204
    },
    {
      "name":"Primal Satisfaction",
      "cost":2,
      "prereq":"Land Druid level 3rd",
      "desc":"When you cast a circle spell of 5th level or lower, you can choose to not expend a spell slot. Once you use this ability, you cannot do so again until you finish a long rest.",
      "type":"Class Boon",
      "id":205
    },
    {
      "name":"Shape of the Land",
      "cost":3,
      "prereq":"Land Druid level 9th",
      "desc":"You can use an action to expend a use of your wild shape to recover an expended spell slot. The maximum level of spell slot you can recover is equal to your proficiency bonus.",
      "type":"Class Boon",
      "id":206
    },
    {
      "name":"Durable Wild Shape",
      "cost":2,
      "prereq":"Moon Druid level 3rd",
      "desc":"The first time you wild shape per long rest, you gain a number of temporary hit points equal to your level in this class. Additionally, you gain 1d10 instead of 1d8 hit points per spell slot with Combat Wild Shape.",
      "type":"Class Boon",
      "id":207
    },
    {
      "name":"Primal Destruction",
      "cost":3,
      "prereq":"Moon Druid level 9th",
      "desc":"All of your attacks while you are in Wild Shape deal an additional 1d6 force damage.",
      "type":"Class Boon",
      "id":208
    },
    {
      "name":"Dual Spirit",
      "cost":2,
      "prereq":"Shepard Druid level 3rd",
      "desc":"When you summon a Spirit Totem, you can instead choose to summon two. When you do so, the duration of the spirits is reduced to 7 rounds.",
      "type":"Class Boon",
      "id":209
    },
    {
      "name":"Summoner of the Wilds",
      "cost":3,
      "prereq":"Shepard Druid level 9th",
      "desc":"You cannot lose concentration on a spell as a result of taking damage with a spell that has summoned one or more creatures. Additionally, all creatures you summon gain a +1 bonus to their AC and +2 bonus to attack rolls.",
      "type":"Class Boon",
      "id":210
    },
    //Fighter Class Boons
    {
      "name":"Third Wind",
      "cost":3,
      "prereq":"Fighter level 3rd",
      "desc":"You can use Second Wind one additional time between rests.<br><br>You can select this boon only once.",
      "type":"Class Boon",
      "id":211
    },
    {
      "name":"Greater Indomitability",
      "cost":3,
      "prereq":"Fighter level 9th",
      "desc":"You can use Indomitable one additional time between long rests.",
      "type":"Class Boon",
      "id":212
    },
    {
      "name":"Additional Arcane Shot",
      "cost":2,
      "prereq":"Arcane Archer Fighter level 3rd",
      "desc":"You gain one additional use of Arcane Shot between rests.",
      "type":"Class Boon",
      "id":213
    },
    {
      "name":"Arrow of Force",
      "cost":3,
      "prereq":"Arcane Archer Fighter level 9th",
      "desc":"When you shoot a magical arrow, you can choose for the arrow to deal force damage instead of its normal damage type. Additionally, all arrows you shoot deal an additional 1d4 force damage.",
      "type":"Class Boon",
      "id":214
    },
    {
      "name":"Inspiring Cry",
      "cost":2,
      "prereq":"Banneret Fighter level 3rd",
      "desc":"When you use Rallying Cry, all affected creatures also gain a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the die, but must decide before the GM says whether the roll succeeds or fails. Once the die is rolled, it is lost.",
      "type":"Class Boon",
      "id":215
    },
    {
      "name":"United Protection",
      "cost":3,
      "prereq":"Banneret Fighter level 9th",
      "desc":"All allies within 5 meters of you gain a +1 bonus to AC and saving throws.",
      "type":"Class Boon",
      "id":216
    },
    {
      "name":"Greater Superiority",
      "cost":2,
      "prereq":"Battle Master Fighter level 3rd",
      "desc":"Your Combat Superiority dice become d10's.",
      "type":"Class Boon",
      "id":217
    },
    {
      "name":"Knowledge's Advantage",
      "cost":3,
      "prereq":"Battle Master Fighter level 9th",
      "desc":"When you use Know Your Enemy on a creature, within the next 10 minutes the first attack roll that creature makes against you is made at disadvantage, and the first attack roll you make against them is made at advantage.",
      "type":"Class Boon",
      "id":218
    },
    {
      "name":"Mark of the Cavalier",
      "cost":2,
      "prereq":"Cavalier Fighter level 3rd",
      "desc":"When you mark a creature on your turn with Unwavering Mark, they become marked until the end of your next turn. Additionally, you gain advantage on the first attack roll made against a marked creature on your turn.",
      "type":"Class Boon",
      "id":219
    },
    {
      "name":"Warding Stance",
      "cost":3,
      "prereq":"Cavalier Fighter level 9th",
      "desc":"You may use Warding Maneuver an unlimited number of times between rests. But, you must use your action to enter a Warding Stance to use Warding Maneuver. This stance lasts for 1 minute, or until you fall unconscious.",
      "type":"Class Boon",
      "id":220
    },
    {
      "name":"Champion's Critical",
      "cost":2,
      "prereq":"Champion Fighter level 3rd",
      "desc":"You gain the<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a> boon. The level requirements for all Critical Boons are considered as 2 levels less for you.",
      "type":"Class Boon",
      "id":221
    },
    {
      "name":"Peak Performance",
      "cost":3,
      "prereq":"Champion Fighter level 9th",
      "desc":"You gain a +5 bonus to Athletics checks.",
      "type":"Class Boon",
      "id":222
    },
    {
      "name":"Eldritch Weapon",
      "cost":2,
      "prereq":"Eldritch Knight Fighter level 3rd",
      "desc":"A non-magical weapon bonded to you by Weapon Bond is considered magical, and gains a +1 bonus to attack rolls.",
      "type":"Class Boon",
      "id":223
    },
    {
      "name":"Eldritch Smite",
      "cost":3,
      "prereq":"Eldritch Knight Fighter level 9th",
      "desc":"When you hit a creature with a weapon attack on your turn, you can use your bonus action to expend a spell slot to deal extra force damage to the target. The extra damage is 2d8 for a 1st level spell slot, plus 1d8 for each spell level above 1st, to a maximum of 5d8.",
      "type":"Class Boon",
      "id":224
    },
    {
      "name":"Intense Spirit",
      "cost":2,
      "prereq":"Samurai Fighter level 3rd",
      "desc":"While you have temporary hit points granted to you by Fighting Spirit, you also gain a bonus 1d4 to attack rolls.",
      "type":"Class Boon",
      "id":225
    },
    {
      "name":"Unbreakable Spirit",
      "cost":3,
      "prereq":"Samurai Fighter level 9th",
      "desc":"You have advantage on Wisdom saving throws.",
      "type":"Class Boon",
      "id":226
    },
    //Monk Class Boons
    {
      "name":"Deepened Ki",
      "cost":2,
      "prereq":"Monk level 3rd",
      "desc":"Your ki pool increases by 2 points.",
      "type":"Class Boon",
      "id":227
    },
    {
      "name":"Greater Martial Arts",
      "cost":3,
      "prereq":"Monk level 5th",
      "desc":"Your Martial Arts damage die increases by 1 step.",
      "type":"Class Boon",
      "id":228
    },
    {
      "name":"Spider Step",
      "cost":2,
      "prereq":"Monk level 7th",
      "desc":"When you use Step of the Wind, you may move across any solid surface. When you do so, you do not fall until you use movement on your turn.",
      "type":"Class Boon",
      "id":229
    },
    {
      "name":"Wind Step",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(229)' href='#'>Spider Step</a>, Monk level 11th",
      "desc":"When you use Step of the Wind, you gain a flying speed equal to your walking speed. You do not fall until you use movement on your turn.",
      "type":"Class Boon",
      "id":230
    },
    {
      "name":"Drunken Movement",
      "cost":2,
      "prereq":"Drunken Master Monk level 3rd",
      "desc":"When you use Drunken Technique, your movement speed increases by an addtional 3 meters.",
      "type":"Class Boon",
      "id":231
    },
    {
      "name":"Drunken Tumble",
      "cost":3,
      "prereq":"Drunken Master Monk level 9th",
      "desc":"When a creature attacks you with a weapon attack on their turn, you can spend 2 ki points. That creature gains disadvantage on that attack roll against you.",
      "type":"Class Boon",
      "id":232
    },
    {
      "name":"Elemental Arts",
      "cost":2,
      "prereq":"Way of the Elements Monk level 3rd",
      "desc":"When you use your action to cast a Way of the Elements spell, you can make an unarmed strike as a bonus action.",
      "type":"Class Boon",
      "id":233
    },
    {
      "name":"Elements Master",
      "cost":3,
      "prereq":"Way of the Elements Monk level 9th",
      "desc":"You have immunity to the damage of Way of the Elements spells you cast.",
      "type":"Class Boon",
      "id":234
    },
    {
      "name":"Kensei's Parry",
      "cost":2,
      "prereq":"Kensei Monk level 3rd",
      "desc":"You can use Agile Parry even if the Kensei weapon you are wielding is a ranged weapn. Additionally, if a creature hits you with a weapon attack while you are under the effects of Agile Parry, you can make an unarmed strike as a reaction against that creature.",
      "type":"Class Boon",
      "id":235
    },
    {
      "name":"Kensei Strike",
      "cost":3,
      "prereq":"Kensei Monk level 9th",
      "desc":"When you hit a creature with a kensei weapon on your turn, you can spend 2 ki point to give that creature vulnerability against damage of the next attack you make against them.",
      "type":"Class Boon",
      "id":236
    },
    {
      "name":"Stolen Vitality",
      "cost":2,
      "prereq":"Long Death Monk level 3rd",
      "desc":"When you reduce a creature within reach of you to 0 hit points, you can spend 1 ki point to gain a number of hit points equal to that creature's hit dice + your Wisdom modifier.",
      "type":"Class Boon",
      "id":237
    },
    {
      "name":"Wraith of Death",
      "cost":3,
      "prereq":"Long Death Monk level 9th",
      "desc":"When a creature fails its saving throw against Hour of Reaping, you can spend 1 ki point to gain advantage on attack rolls against that creature until the end of your next turn.",
      "type":"Class Boon",
      "id":238
    },
    {
      "name":"Tranquil Stance",
      "cost":2,
      "prereq":"Lotus Monk level 3rd",
      "desc":"While in your Lotus Stance, you also gain a number of temporary hit points at the start of your turn equal to your Wisdom modifier.",
      "type":"Class Boon",
      "id":239
    },
    {
      "name":"Expected Strike",
      "cost":3,
      "prereq":"Lotus Monk level 9th",
      "desc":"When a creature misses you with an attack while in your Lotus Stance, you can make a melee weapon attack against them without spending a reaction.",
      "type":"Class Boon",
      "id":240
    },
    {
      "name":"Open Hand Expertise",
      "cost":2,
      "prereq":"Open Hand Monk level 3rd",
      "desc":"While you have at least 1 ki point in your ki pool, creatures have disadvantage on saving throws against your Open Hand Technique.",
      "type":"Class Boon",
      "id":241
    },
    {
      "name":"Overflow of Body",
      "cost":3,
      "prereq":"Open Hand Monk level 9th",
      "desc":"When you use Wholeness of Body, you also gain a number of temporary hit points equal to two times your monk level.",
      "type":"Class Boon",
      "id":242
    },
    {
      "name":"One with Darkness",
      "cost":2,
      "prereq":"Shadow Monk level 3rd",
      "desc":"When you use ki points to cast Darkness, you can see through the darkness normally.",
      "type":"Class Boon",
      "id":243
    },
    {
      "name":"Step of Shade",
      "cost":3,
      "prereq":"Shadow Monk level 9th",
      "desc":"Your movement speed increases by a number of meters equal to your monk level while in darkness.",
      "type":"Class Boon",
      "id":244
    },
    {
      "name":"Seeking Sun Bolt",
      "cost":2,
      "prereq":"Sun Soul Monk level 3rd",
      "desc":"When you use Radiant Sun Bolt, you add both your Wisdom and Dexterity modifier to the attack roll.",
      "type":"Class Boon",
      "id":245
    },
    {
      "name":"Radiant Arc Strike",
      "cost":3,
      "prereq":"Sun Soul Monk level 9th",
      "desc":"When you cast Burning Hands using ki points, the damage dice increase by one step.",
      "type":"Class Boon",
      "id":246
    },
    //Paladin Class Boons
    {
      "name":"Healing Hands",
      "cost":2,
      "prereq":"Paladin level 3rd",
      "desc":"Your Lay on Hands pool increases by a number of points equal to your Paladin level + 5.",
      "type":"Class Boon",
      "id":247
    },
    {
      "name":"Strike of Conquest",
      "cost":2,
      "prereq":"Conquest Paladin level 3rd",
      "desc":"When you use a Conquest Paladin Channel Divinity option, you gain advantage on your next weapon attack.",
      "type":"Class Boon",
      "id":248
    },
    {
      "name":"Iron Grip of Conquest",
      "cost":3,
      "prereq":"Conquest Paladin level 9th",
      "desc":"While a creature within your Aura of Conquest is frightened of you due to Conquering Presence, you can use your bonus action to cause that creature to automatically fail their next saving throw against it.",
      "type":"Class Boon",
      "id":249
    },
    {
      "name":"Weapon of Devotion",
      "cost":2,
      "prereq":"Devotion Paladin level 3rd",
      "desc":"You cannot be disarmed of a weapon affected by your Sacred Weapon. Additionally, you gain a number of temporary hit points equal to your Charisma modifier at the start of your turn as long as you are still wielding your Sacred Weapon.",
      "type":"Class Boon",
      "id":250
    },
    {
      "name":"Greater Devotion Aura",
      "cost":3,
      "prereq":"Devotion Paladin level 9th",
      "desc":"All healing spells you cast on creatures within your Aura of Devotion heal for their maximum amount.",
      "type":"Class Boon",
      "id":251
    },
    {
      "name":"Glorious Smite",
      "cost":2,
      "prereq":"Glory Paladin level 3rd",
      "desc":"When you use Divine Smite o reduce a creature to 0 hit points, you have advantage on your next attack roll on the same turn.",
      "type":"Class Boon",
      "id":252
    },
    {
      "name":"Greater Alacrity Aura",
      "cost":3,
      "prereq":"Glory Paladin level 9th",
      "desc":"The radius of your Aura of Alacrity increases to 10 meters.",
      "type":"Class Boon",
      "id":253
    },
    {
      "name":"Channel Heroism",
      "cost":2,
      "prereq":"Heroism Paladin level 3rd",
      "desc":"When you use a Heroism Paladin Channel Divinity option, you gain a number of temporary hit points equal to your Paladin level.",
      "type":"Class Boon",
      "id":254
    },
    {
      "name":"Heroic Deed",
      "cost":3,
      "prereq":"Heroism Paladin level 9th",
      "desc":"When you score a critical hit or reduce a creature to 0 hit points, you have advantage on your next saving throw until the end of your next turn.",
      "type":"Class Boon",
      "id":255
    },
    {
      "name":"Retaliation of the Provoked",
      "cost":2,
      "prereq":"Redemtion Paladin level 3rd",
      "desc":"When you use Rebuke of the Violent, the attacked creature may make a melee weapon attack as a reaction.",
      "type":"Class Boon",
      "id":256
    },
    {
      "name":"Greater Guardian Aura",
      "cost":3,
      "prereq":"Redemption Paladin level 9th",
      "desc":"You have resistance to damage from Aura of the Guardian.",
      "type":"Class Boon",
      "id":257
    },
    {
      "name":"Nature's Hold",
      "cost":2,
      "prereq":"Ancients Paladin level 3rd",
      "desc":"While a creature is restrained as a result of your Nature's Wrath, it also is blind and has disadvantage on saving throws to break free.",
      "type":"Class Boon",
      "id":258
    },
    {
      "name":"Greater Warding Aura",
      "cost":3,
      "prereq":"Ancients Paladin level 9th",
      "desc":"Creatures within your Aura of Warding have advantage on saving throws against spells.",
      "type":"Class Boon",
      "id":259
    },
    {
      "name":"Champion's Call",
      "cost":2,
      "prereq":"Crown Paladin level 3rd",
      "desc":"A creature affected by your Champion Challenge must use its movement to move closer to you.",
      "type":"Class Boon",
      "id":260
    },
    {
      "name":"Extended Alliegence",
      "cost":3,
      "prereq":"Crown Paladin level 9th",
      "desc":"You can use Divine Alliegence on a creature within 10 meters of you. Additionally, you gain a number of temporary hit points equal to your Charisma modifier when you take damage as a result of Divine Alliegence.",
      "type":"Class Boon",
      "id":261
    },
    {
      "name":"Hostile Abjure",
      "cost":2,
      "prereq":"Vengeance Paladin level 3rd",
      "desc":"WHen you use Abjure Creature, it does not end on a creature as a result of it taking damage.",
      "type":"Class Boon",
      "id":262
    },
    {
      "name":"Coward's Choice",
      "cost":3,
      "prereq":"Vengeance Paladin level 9th",
      "desc":"You have advantage on opportunity attacks against creatures that move out of your reach.",
      "type":"Class Boon",
      "id":263
    },
    {
      "name":"Grievous Aspect",
      "cost":2,
      "prereq":"Oathbreaker Paladin level 3rd",
      "desc":"A creature affected by your Dreadful Aspect takes 1d6 psychic damage at the beginning of their turn.",
      "type":"Class Boon",
      "id":264
    },
    {
      "name":"Selective Atrocity",
      "cost":3,
      "prereq":"Oathbreaker Paladin level 9th",
      "desc":"Any creatures within your Aura of Hate that you choose gain a bonus to their melee weapon damage rolls equal to your Charisma modifier (minimum of +1).",
      "type":"Class Boon",
      "id":265
    },
    //Ranger Class Boons
    {
      "name":"Additional Favored Enemy",
      "cost":3,
      "prereq":"Ranger level 3rd",
      "desc":"You gain one additional Favored Enemy of your choice. You do not gain additional language known.",
      "type":"Class Boon",
      "id":266
    },
    {
      "name":"Feral Magic",
      "cost":1,
      "prereq":"Ranger level 3rd",
      "desc":"Learn one Druid or Ranger spell that you have an appropriate spell slot to cast. This spell does not count against your number of maximum spells known.",
      "type":"Class Boon",
      "id":267
    },
    {
      "name":"Companion's Bond",
      "cost":2,
      "prereq":"Beast Master Ranger level 3rd",
      "desc":"As an action on your turn, you may percieve through the senses of your Animal Companion. While percieving through their senses in this way, you are blind and deaf to your own body's surroundings.",
      "type":"Class Boon",
      "id":268
    },
    {
      "name":"Bestial Retaliation",
      "cost":3,
      "prereq":"Beast Master Ranger level 9th",
      "desc":"When your animal companion is hit by a weapon attack, you can use your reaction to make an opportunity attack against the attacker.",
      "type":"Class Boon",
      "id":269
    },
    {
      "name":"Twilight Sight",
      "cost":2,
      "prereq":"Gloom Stalker Ranger level 3rd",
      "desc":"You can see through both magical and non-magical darkness as if it were dim light out to a range of your Umbral Sight.",
      "type":"Class Boon",
      "id":270
    },
    {
      "name":"Stalker's Ambush",
      "cost":3,
      "prereq":"Gloom Stalker Ranger level 9th",
      "desc":"You may use your Dread Ambush ability any time you would go first in initiative.",
      "type":"Class Boon",
      "id":271
    },
    {
      "name":"Portal Sense",
      "cost":2,
      "prereq":"Horizon Walker Ranger level 3rd",
      "desc":"You can use your Detect Portal ability at will, and can tell to which plane a portal leads.",
      "type":"Class Boon",
      "id":272
    },
    {
      "name":"Planar Strike",
      "cost":3,
      "prereq":"Horizon Walker Ranger level 9th",
      "desc":"As an action, you can attempt to send a creature back to its native plane. Make a weapon attack against a creature that you can see. If you hit, that creature must succeed on a Charisma saving throw against your spell save DC or be banished to their native plane. At the end of each of their turns, they can repeat the saving throw. If they succeed, they reappear at the beginning of their next turn in the closest unoccupied space near to where they were banished. If a creature is native to the plane you are currently on, they instead are teleported to an unnocupied space within 20 meters of you on a failed save.",
      "type":"Class Boon",
      "id":273
    },
    {
      "name":"Hunter's Quarry",
      "cost":2,
      "prereq":"Hunter Ranger level 3rd",
      "desc":"You gain an improved version of the Hunter's Prey choice you chose at 3rd level:<br><ul><li><b>Titan Feller.</b> Replaces Collosus Slayer. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum.</li><li><b>Leviathan Retaliation.</b> Replaces Giant Killer. When a Large or larger creature within reach of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature. You make this attack at advantage, and if it hits, that creature also cannot take reactions until the end of your next turn.</li><li><b>Swarm Obliterator.</b> Replaces Horde Breaker. Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 2 meters of the original target and within range of your weapon. If this attack reduces a creature to 0 hit points, you can make an additional weapon attack against a creature within 2 meters of the second target, and within range of your weapon.</li></ul>",
      "type":"Class Boon",
      "id":274
    },
    {
      "name":"Defensive Tact",
      "cost":3,
      "prereq":"Hunter Ranger level 9th",
      "desc":"You gain an improved version of the Defensive Tactics choice you chose at 7th level:<br><ul><li><b>Punish the Horde.</b> Replaces Escape the Horde. Opportunity attacks against you are made with disadvantage. If a creature makes an opportunity attack against you, you can make a weapon attack against them. </li><li><b>Slow Attacks.</b> Replaces Multiattack Defense. When you hit a creature with a weapon attack that can make multiple attacks per turn, you can use your bonus action to give that creature disadvantage on all of their attacks on their next turn.</li><li><b>Steel Spirit.</b> Replaces Steel Will. You are immune to the frightened condition. When a creature would otherwise cause you to make a Wisdom saving throw against being frightened, you can use your reaction to make a weapon attack against them.</li></ul>",
      "type":"Class Boon",
      "id":275
    },
    {
      "name":"Slayer's Mark",
      "cost":2,
      "prereq":"Monster Slayer Ranger level 3rd",
      "desc":"When a creature is marked by your Slayer's Prey, you can use a bonus action to make a weapon attack against them.",
      "type":"Class Boon",
      "id":276
    },
    {
      "name":"Slayer's Capability",
      "cost":3,
      "prereq":"Monster Slayer Ranger level 9th",
      "desc":"The extra damage from your Slayer's Prey ability occurs each time you make a weapon attack. Additionally, your Supernatural Defense die becomes a d8.",
      "type":"Class Boon",
      "id":277
    },
    //Rogue Class Boons
    {
      "name":"Improved Sneak Attack",
      "cost":2,
      "prereq":"Rogue level 3rd",
      "desc":"Your sneak attack damage increases by 1d6. This increase does not count against your sneak attack damage by level.",
      "type":"Class Boon",
      "id":278
    },
    {
      "name":"Supreme Sneak Attack",
      "cost":3,
      "prereq":"Rogue level 9th",
      "desc":"When you would be able to deal sneak attack damage on an attack, you can choose to take a -5 penalty to the attack roll. If you do so, your sneak attack damage dice become d8's.",
      "type":"Class Boon",
      "id":279
    },
    {
      "name":"Nimble Casting",
      "cost":2,
      "prereq":"Arcane Trickster Rogue level 3rd",
      "desc":"You can use Dexterity, instead of Intelligence, as your spellcasting ability modifier. This affects your spellcasting attack modifier, and spell save DC.",
      "type":"Class Boon",
      "id":280
    },
    {
      "name":"Ambushing Spell",
      "cost":3,
      "prereq":"Arcane Trickster Rogue level 9th",
      "desc":"If you have advantage on a spell attack roll, and that spell deals damage, you can add your sneak attack to the damage. You can apply your sneak attack damage to only one attack per turn.",
      "type":"Class Boon",
      "id":281
    },
    {
      "name":"Assassin's Infiltration",
      "cost":2,
      "prereq":"Assassin Rogue level 3rd",
      "desc":"You gain a +3 bonus to deception checks, and advantage on deception and performance checks to pass yourself off as another person.",
      "type":"Class Boon",
      "id":282
    },
    {
      "name":"Deft Hand",
      "cost":3,
      "prereq":"Assassin Rogue level 9th",
      "desc":"You can mark a creature with Careful Strike as a bonus action.",
      "type":"Class Boon",
      "id":283
    },
    {
      "name":"Greater Insight",
      "cost":2,
      "prereq":"Inquisitive Rogue level 3rd",
      "desc":"You can learn of the creature's current hit points, armor class, or specific saving throw modifier when you use Insightful Fighting on it.",
      "type":"Class Boon",
      "id":284
    },
    {
      "name":"Infallible Eye",
      "cost":3,
      "prereq":"Inquisitive Rogue level 9th",
      "desc":"Treat a roll of 14 or lower when you make a Perception or Investigation check as a 15.",
      "type":"Class Boon",
      "id":285
    },
    {
      "name":"Pin-Point Tactician",
      "cost":2,
      "prereq":"Mastermind Rogue level 3rd",
      "desc":"When you use the help action to aid an attack roll, you can roll your sneak attack damage as a part of the attack's damage. You can add your sneak attack damage to only one attack per turn.",
      "type":"Class Boon",
      "id":286
    },
    {
      "name":"Master Manipulator",
      "cost":3,
      "prereq":"Mastermind Rogue level 9th",
      "desc":"You can use Insightful Manipulator as an action, and when you do so, you learn of all the statistics given to you as an option by Insightful Manipulator.",
      "type":"Class Boon",
      "id":287
    },
    {
      "name":"Expert Skirmisher",
      "cost":2,
      "prereq":"Scout Rogue level 3rd",
      "desc":"When you use your Skirmisher ability, you may also immediately make an attack of opportunity against the creature that provoked it.",
      "type":"Class Boon",
      "id":288
    },
    {
      "name":"Extraordinary Mobility",
      "cost":3,
      "prereq":"Scout Rogue level 9th",
      "desc":"You can move through the space of any creature. The space of another creature counts as difficult terrain for you, and you may not end your turn inside of another creature's space.",
      "type":"Class Boon",
      "id":289
    },
    {
      "name":"Rakish Duel",
      "cost":2,
      "prereq":"Swashbuckler Rogue level 3rd",
      "desc":"You can use your bonus action to compell a creature to duel you. The target must make a Charisma saving throw against DC 8 + your proficiency bonus + your Charisma modifier. If they fail, they must use their movement on their next turn to get within reach of you.",
      "type":"Class Boon",
      "id":290
    },
    {
      "name":"Beguiling Panache",
      "cost":3,
      "prereq":"Swashbuckler Rogue level 9th",
      "desc":"A hostile creature you affect with Panache is considered blind to all creatures other than you. Additionally, Panache does not end if you or one of your allies hurts the target creature.",
      "type":"Class Boon",
      "id":291
    },
    {
      "name":"Thief's Technique",
      "cost":2,
      "prereq":"Thief Rogue level 3rd",
      "desc":"Your jump distance increases by a number of meters equal to your proficiency bonus. Additionally, reduce any fall damage you take by an amount equal to your Rogue level.",
      "type":"Class Boon",
      "id":292
    },
    {
      "name":"Supreme Maneuverability",
      "cost":3,
      "prereq":"Thief Rogue level 9th",
      "desc":"If you move no more than half of your movement on a turn, you have advantage on acrobatics, sleight of hand, and stealth checks.",
      "type":"Class Boon",
      "id":293
    },
    //Sorcerer Class Boons
    {
      "name":"Deepened Magical Font",
      "cost":2,
      "prereq":"Sorcerer level 3rd",
      "desc":"You gain 2 maximum sorcery points. This increase does not count against your maximum number of sorcery points per level.",
      "type":"Class Boon",
      "id":294
    },
    {
      "name":"Hastened Spell Conversion",
      "cost":2,
      "prereq":"Sorcerer level 9th",
      "desc":"With your Font of Magic ability, you can create and convert spell slots as a reaction as well as a bonus action on your turn.",
      "type":"Class Boon",
      "id":295
    },
    {
      "name":"Exalted Favor",
      "cost":2,
      "prereq":"Divine Soul Sorcerer level 3rd",
      "desc":"You can use Favored by the Gods one additional time per rest.",
      "type":"Class Boon",
      "id":296
    },
    {
      "name":"Divine Healing",
      "cost":3,
      "prereq":"Divine Soul Sorcerer level 9th",
      "desc":"The range of Empowered Healing becomes sight for you.",
      "type":"Class Boon",
      "id":297
    },
    {
      "name":"Draconic Resilience",
      "cost":2,
      "prereq":"Draconic Bloodline Sorcerer level 3rd",
      "desc":"Your hit point maximum increases by 20. You may take this boon only once.",
      "type":"Class Boon",
      "id":298
    },
    {
      "name":"Draconic Affinity",
      "cost":3,
      "prereq":"Draconic Bloodline Sorcerer level 9th",
      "desc":"Choose one additional Draconic Ancestry. You gain all of its effects as well as your original ancestry.",
      "type":"Class Boon",
      "id":299
    },
    {
      "name":"Grip of Dusk",
      "cost":2,
      "prereq":"Shadow Essence Sorcerer level 3rd",
      "desc":"You can use Strength of the Grave until you fall to 0 hit points.",
      "type":"Class Boon",
      "id":300
    },
    {
      "name":"Hound of Shade",
      "cost":3,
      "prereq":"Shadow Essence Sorcerer level 9th",
      "desc":"Your Hound of Ill Omen gains the following features:<br><ul><li>Its size is large.</li><li>The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 30 minutes.</li><li>When your hound disappears as a result of reducing a creature to 0 hit points, you can use a reaction to raise it again at full hit points against another creature within range for 2 sorcery points.</li></ul>.",
      "type":"Class Boon",
      "id":301
    },
    {
      "name":"Furorous Travel",
      "cost":2,
      "prereq":"Storm Magic Sorcerer level 3rd",
      "desc":"You may move through up to 1 creature using Tempestuous Magic. That creature then takes thunder or lightning damage (your choice) equal to half your Sorcerer level.",
      "type":"Class Boon",
      "id":302
    },
    {
      "name":"Heart of the Hurricane",
      "cost":3,
      "prereq":"Storm Magic Sorcerer level 9th",
      "desc":"Each time Heart of the Storm activates, you can fly a number of meters equal to the level of spell you are casting.",
      "type":"Class Boon",
      "id":303
    },
    //Warlock Class Boons
    {
      "name":"Additional Eldritch Invocation",
      "cost":2,
      "prereq":"Warlock level 3rd",
      "desc":"You learn one additional Eldritch Invoaction. This does not count against your number of Eldritch Invocations per level.",
      "type":"Class Boon",
      "id":304
    },
    {
      "name":"Eldritch Blade Mastery",
      "cost":2,
      "prereq":"Pact of the Blade Warlock level 5th",
      "desc":"You may bond to a pact weapon as a ritual that takes only 1 minute. Additionally, you may bond to an artifact or sentient weapon.",
      "type":"Class Boon",
      "id":305
    },
    {
      "name":"Eldritch Chain Mastery",
      "cost":2,
      "prereq":"Pact of the Chain Warlock level 5th",
      "desc":"When you cast the Find Familiar spell, your familiar's maximum hit points increase by an amount equal to your Warlock level + your proficiency bonus.",
      "type":"Class Boon",
      "id":306
    },
    {
      "name":"Eldritch Tome Mastery",
      "cost":2,
      "prereq":"Pact of the Tome Warlock level 5th",
      "desc":"You replace a warlock spell you know with any spell from any class' spell list. This spell must be of a level that you can cast.",
      "type":"Class Boon",
      "id":307
    },
    {
      "name":"Riveting Presence",
      "cost":2,
      "prereq":"Archfey Warlock level 3rd",
      "desc":"Creatures affected by your Fey Presence ability, they must make a Wisdom saving throw at the end of each of their turns against your spell save DC to end it. Alternatively, you can dismiss it as a free action.",
      "type":"Class Boon",
      "id":308
    },
    {
      "name":"Archfey's Escape",
      "cost":3,
      "prereq":"Archfey Warlock level 9th",
      "desc":"When you use Misty Escape, you gain resistance to the attack's damage and may teleport up to 200 meters away.",
      "type":"Class Boon",
      "id":309
    },
    {
      "name":"Radiant Light",
      "cost":2,
      "prereq":"Celestial Warlock level 3rd",
      "desc":"Your Healing Light dice become d8's.",
      "type":"Class Boon",
      "id":310
    },
    {
      "name":"Celestial Soul",
      "cost":3,
      "prereq":"Celestial Warlock level 9th",
      "desc":"As long as you have a number of Radiant Light dice equal to your proficiency bonus, you have immunity to radiant damage and resistance to necrotic damage.",
      "type":"Class Boon",
      "id":311
    },
    {
      "name":"Invigorating Blessing",
      "cost":2,
      "prereq":"Fiend Warlock level 3rd",
      "desc":"While you have temporary hit points from Dark One's Blessing, you have a +1 bonus to attack rolls and saving throws.",
      "type":"Class Boon",
      "id":312
    },
    {
      "name":"Fiendish Luck",
      "cost":3,
      "prereq":"Fiend Warlock level 9th",
      "desc":"You can use Dark One's Own Luck on an attack roll or damage roll. Additionally, you gain one additional use per rest.",
      "type":"Class Boon",
      "id":313
    },
    {
      "name":"Transmissable Mind",
      "cost":2,
      "prereq":"Great Old One Warlock level 3rd",
      "desc":"The distance at which you can communicate using Awakened Mind becomes 10 meters * your warlock level.",
      "type":"Class Boon",
      "id":314
    },
    {
      "name":"Glimpse of the Unknowable",
      "cost":3,
      "prereq":"Great Old One Warlock level 9th",
      "desc":"A creature that misses you as a result of Entropic Ward becomes paralyzed until the end of its next turn.",
      "type":"Class Boon",
      "id":315
    },
    {
      "name":"One of the Dead",
      "cost":2,
      "prereq":"Undying Warlock level 3rd",
      "desc":"You are immune to disease, and creatures cannot become immune to the effects of Among the Dead as a result of succeeding on the saving throw.",
      "type":"Class Boon",
      "id":316
    },
    {
      "name":"Undying Breath",
      "cost":3,
      "prereq":"Undying Warlock level 9th",
      "desc":"You gain advantage on death saving throws as long as you have at least one unused warlock spell slot.",
      "type":"Class Boon",
      "id":317
    },
    //Wizard Class Boons
    {
      "name":"Cantrip Formulae",
      "cost":2,
      "prereq":"Wizard level 3rd",
      "desc":"You have scribed a set of arcane formulas in your spellbook that you can use to formulate a cantrip in your mind. Whenever you finish a long rest and consult those formulas in your spellbook, you can replace one wizard cantrip you know with another cantrip from the wizard spell list.",
      "type":"Class Boon",
      "id":318
    },
    {
      "name":"Improved Arcane Recovery",
      "cost":3,
      "prereq":"Wizard level 13th",
      "desc":"When you use Arcane Recovery, you can recover 6th and 7th level spell slots.",
      "type":"Class Boon",
      "id":319
    },
    {
      "name":"Greater Arcane Recovery",
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(317)' href='#'>Improved Arcane Recovery</a>, Wizard level 17th",
      "desc":"When you use Arcane Recovery, you can recover 8th and 9th level spell slots.",
      "type":"Class Boon",
      "id":320
    },
    {
      "name":"Abjuration Adept",
      "cost":2,
      "prereq":"Abjuration Wizard level 3rd",
      "desc":"You replenish your Arcane Ward when you finish a short rest.",
      "type":"Class Boon",
      "id":321
    },
    {
      "name":"Shielding Force",
      "cost":3,
      "prereq":"Abjuration Wizard level 9th",
      "desc":"The range of your Projected Ward increases to 20 meters, and the creature it is protecting doesn't take any leftover damage from damage the ward takes.",
      "type":"Class Boon",
      "id":322
    },
    {
      "name":"Conjuration Adept",
      "cost":2,
      "prereq":"Abjuration Wizard level 3rd",
      "desc":"An object you create using Minor Conjuration can have dimensions of up to 3 meters, and weigh up to 200 kilograms.",
      "type":"Class Boon",
      "id":323
    },
    {
      "name":"Portal Walker",
      "cost":3,
      "prereq":"Abjuration Wizard level 9th",
      "desc":"You can use Benign Transportation as a bonus action. Additionally, its range increases to 20 meters.",
      "type":"Class Boon",
      "id":324
    },
    {
      "name":"Divination Adept",
      "cost":2,
      "prereq":"Divination Wizard level 3rd",
      "desc":"When you use a portent die, you can instead choose to add or subtract a d8 from a creature's roll.",
      "type":"Class Boon",
      "id":325
    },
    {
      "name":"Prophecy",
      "cost":3,
      "prereq":"Divination Wizard level 9th",
      "desc":"When you finish a long rest, you can choose to save 1 portent die for the next day.",
      "type":"Class Boon",
      "id":326
    },
    {
      "name":"Enchantment Adept",
      "cost":2,
      "prereq":"Enchantment Wizard level 3rd",
      "desc":"The range of Hypnotic Gaze becomes 10 meters.",
      "type":"Class Boon",
      "id":327
    },
    {
      "name":"Unstoppable Charm",
      "cost":3,
      "prereq":"Enchantment Wizard level 9th",
      "desc":"A creature can be targeted by Instinctive Charm again even if they succeeded on a saving throw against the ability. Additionally, the first time a creature is affected by Instinctive Charm, they have disadvantage on the saving throw.",
      "type":"Class Boon",
      "id":328
    },
    {
      "name":"Illusion Adept",
      "cost":2,
      "prereq":"Illusion Wizard level 3rd",
      "desc":"When you cast an illusion spell of 3rd level or lower that requires concentration and does not damage another creature, it does not require concentration for you.",
      "type":"Class Boon",
      "id":329
    },
    {
      "name":"Ever-Shifting Illusions",
      "cost":3,
      "prereq":"Illusion Wizard level 9th",
      "desc":"You can use Malleable Illusions as a reaction. Additionally, you do not need to be able to see an illusion to use this ability.",
      "type":"Class Boon",
      "id":330
    },
    {
      "name":"Evocation Adept",
      "cost":2,
      "prereq":"Evocation Wizard level 3rd",
      "desc":"When you cast an evocation spell that requires creatures to make a saving throw, you can give those creatures advantage on the saving throw. If they fail, they take double damage from the spell.",
      "type":"Class Boon",
      "id":331
    },
    {
      "name":"Irresistable Spell",
      "cost":3,
      "prereq":"Evocation Wizard level 9th",
      "desc":"If a creature would take no damage as a result of succeeding on a saving throw against an evocation spell you cast, they take half damage instead.",
      "type":"Class Boon",
      "id":332
    },
    {
      "name":"Necromancy Adept",
      "cost":2,
      "prereq":"Necromancy Wizard level 3rd",
      "desc":"When you use Grim Harvest, you also gain a number of temporary hit points equal to twice the spell's level.",
      "type":"Class Boon",
      "id":333
    },
    {
      "name":"Greusome Horde",
      "cost":3,
      "prereq":"Necromancy Wizard level 9th",
      "desc":"You may target up to two additional corpses, instead of one, when you use Undead Thralls.",
      "type":"Class Boon",
      "id":334
    },
];

//Link to a boon --> <a onclick='xmlhttp.onreadystatechange(id)' href='#'>Boon Name</a>
