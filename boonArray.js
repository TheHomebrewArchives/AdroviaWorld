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
      "desc":"You gain the following benefits:<br><ul><li>You always know which way is north.</li><br><li>You always know the number of hours left before the next sunrise or sunset.</li><br><li>You can accurately recall anything you have seen or heard within the past month.</li><br><li>You know the exact day, month, and year it currently is at all times.</li><br><li>You have advantage on saving throws against memory-altering magic.</li><br><li>You have advantage on survival skill checks to avoid becoming lost.</li></ul>", 
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(14)' href='#'>Master Craftsman</a>+9 or greater with a Craft skill", 
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
      "cost":2,
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(20)' href='#'>Soul Tether</a>Character level 5th", 
      "desc":"You gain one additional attunement slot. <br><br>You may take this boon only once.",
      "type":"General Boon",
      "id":21
    },
    {
      "name":"Master Soul Tether", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(21)' href='#'>Improved Soul Tether</a>Character level 11th", 
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
      "desc":"YoYour hit point maximum increases by an amount equal to your level when you gain this boon. Whenever you gain a level thereafter, your hit point maximum increases by an additional hit point.",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(28)' href='#'>Arcane Strike</a> Character level 5th", 
      "desc":"When you attack a creature that is currently under the effects of a spell that increases their AC like Arcane Shield or Mage Armor, you ignore those spells' bonus to AC.",
      "type":"Combat Boon",
      "id":29
    },
    {
      "name":"Improved Arcane Strike", 
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(28)' href='#'>Arcane Strike</a> Character level 5th", 
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a> Strength 15 or higher", 
      "desc":"If you hit a creature with a heavy melee weapon that deals slashing damage using<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>on your turn, you can attack with that weapon again as apart of your attack action, against a different creature. You can make this additional attack only once per turn. <br><br>You cannot use<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a>with this attack.",
      "type":"Combat Boon",
      "id":37
    },
    {
      "name":"Clobber", 
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(36)' href='#'>Great Weapon Master</a> Strength 15 or higher", 
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(40)' href='#'>Improved Charge</a> Strength 13 or higher", 
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(46)' href='#'>Improved Grapple</a> Strength 15 or higher",
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
      "desc":"YAttacking at long range doesn't impose disadvantage on your ranged weapon attack rolls",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(5)' href='#'>Endurance</a> Character level 5th",
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
      "prereq":"Fighter level 6th",
      "desc":"When you score a critical hit with a weapon attack, you can roll the damage dice for that attack three times. <br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":72
    },
    {
      "name":"Critical Mastery", 
      "cost":3,
      "prereq":"At least two other Critical Boons <br>Character level 8th",
      "desc":"When you score a critical hit with a weapon attack, you may apply the effects of two Critical Boons to that hit.",
      "type":"Critical Boon",
      "id":73
    },
    {
      "name":"Bleeding Critical", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a> Character level 8th",
      "desc":"When you score a critical hit with a weapon attack, the creature you hit cannot heal hit points until the end of your next turn. <br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a> Strength 13 or higher",
      "desc":"When you score a critical hit with a weapon attack against a creature, you may immediately attempt a Shove Maneuver as a reaction against that creature.You have advantage on this maneuver check.<br><br>You may only apply the effects of one Critical Boon to a given critical hit, unless you possess<a onclick='xmlhttp.onreadystatechange(73)' href='#'>Critical Mastery.</a>",
      "type":"Critical Boon",
      "id":77
    },
    {
      "name":"Stunning Critical", 
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(72)' href='#'>Improved Critical</a> Character level 12th",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(84)' href='#'>Minor Magic</a> Character level 4th",
      "desc":"Choose a class: bard, cleric, druid, paladin, ranger, sorcerer, warlock, or wizard. You learn one 2nd level spell of your choice from that class's spell list. You may cast this spell once, and gain the ability to do so again when you finish a long rest. <br><br>Your spellcasting ability for this spell depends on the class you chose: Charisma for bard, paladin, sorcerer, or warlock; Wisdom for cleric druid, or ranger; or Intelligence for wizard.",
      "type":"Spellcasting Boon",
      "id":85
    },
    {
      "name":"Ultimate Magic", 
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(85)' href='#'>Major Magic</a> Character level 6th",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a> Character level 5th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept.</a><br><br>Spells you cast ignore Immunity to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a>.",
      "type":"Spellcasting Boon",
      "id":88
    },
    {
      "name":"Elemental Potency", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(87)' href='#'>Elemental Adept</a> Character level 5th",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a> Character level 11th",
      "desc":"When you gain this boon, choose one of the damage types you chose when you took<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept.</a><br><br>Spells you cast ignore Immunity to damage of the chosen type.<br><br>Each time you select this boon, you must choose a different damage type, that you have already picked from <a onclick='xmlhttp.onreadystatechange(90)' href='#'>Energy Adept</a>.",
      "type":"Spellcasting Boon",
      "id":91
    },
    {
      "name":"Energy Potency", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(90)' href='#'>Elemental Adept</a> Character level 11th",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a> Character level 7th",
      "desc":"You may concentrate on two spells at once. But, at the start of every turn in which you are concentrating on two spells, you must make a DC 15 concentration check to maintain each spell.",
      "type":"Spellcasting Boon",
      "id":95
    },
    {
      "name":"Durable Concentration", 
      "cost":3,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(93)' href='#'>Improved Concentration</a> Character level 5th",
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
      "prereq":"<a onclick='xmlhttp.onreadystatechange(98)' href='#'>Improved Counterspell</a> Character level 7th",
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
      "desc":"When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you expend a 1st level spell slot or higher, and choose a number of those creatures up to your proficiency bonus. A chosen creature automatically succeeds on its saving throw against the spell, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":101
    },
    {
      "name":"Improved Careful Spell", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(101)' href='#'>Careful Spell</a> 3rd level spell slots",
      "desc":"When you use<a onclick='xmlhttp.onreadystatechange(101)' href='#'>Careful Spell,</a>creatures that you choose to succeed on the saving throw are unaffected by the spell.",
      "type":"Spellcasting Boon",
      "id":102
    },
    {
      "name":"Delayed Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a duration of instantaneous, you can expend a 1st level spell to trigger it during any point during your next turn as a reaction, for this casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":103
    },
    {
      "name":"Distant Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of 1 meter or greater, you can expend a 1st level spell slot or higher to double the range of the spell, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":104
    },
    {
      "name":"Improved Distant Spell", 
      "cost":2,
      "prereq":"<a onclick='xmlhttp.onreadystatechange(104)' href='#'>Distant Spell</a> 3rd level spell slots",
      "desc":"When you use<a onclick='xmlhttp.onreadystatechange(104)' href='#'>Distant Spell,</a>you triple the range instead of doubling it.",
      "type":"Spellcasting Boon",
      "id":105
    },
    {
      "name":"Empowered Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you may cast it at one spell slot level higher to increase the damage dice of that spell by one stage (1d4 becomes 1d6, 1d12 becomes 1d12 + 1d2, etc), for that casting. This increase in spell level does not contribute toward the At Higher Levels section of a spell.<br><br>Alternatively, you can expend 2 sorcery points per spell slot level for the same effect.<br><br>You may use this boon a number of times on a single spell equal to half your proficiency bonus (rounded down).",
      "type":"Metamagic Boon",
      "id":106
    },
    {
      "name":"Extended Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a duration longer than instantaneous, you can expend a 1st level spell slot or higher to double its duration, to a maximum duration of 24 hours, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.<br><br>You may use this boon a number of times on a single spell equal to half your proficiency bonus (rounded down).",
      "type":"Metamagic Boon",
      "id":107
    },
    {
      "name":"Distant Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend a 2nd level spell slot or higher to give one target of the spell disadvantage on its first saving throw made against the spell for that casting.<br><br>Alternatively, you can expend 3 sorcery points for the same effect.",
      "type":"Metamagic Boon",
      "id":108
    },
    {
      "name":"Merciful Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that drops a creature to 0 hit points, you can your reaction to expend a 1st level spell slot or above to make the damage non-lethal, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":109
    },
    {
      "name":"Quickened Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a casting time of 1 action, you may cast it at one spell slot level higher to change the casting time to 1 bonus action, for that casting.<br><br>Alternatively, you can expend 2 sorcery points per spell slot level for the same effect.",
      "type":"Metamagic Boon",
      "id":110
    },
    {
      "name":"Reaching Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of touch, you can expend a 1st level spell slot or higher to make the range of the spell 10 meters, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":111
    },
    {
      "name":"Shared Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has a range of self, you can expend a 1st level spell slot or above to give it a range of touch, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":112
    },
    {
      "name":"Silent Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you can expend a 1st level spell slot or higher to cast it without verbal components, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":113
    },
    {
      "name":"Still Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell, you can expend a 1st level spell slot or higher to cast it without somatic components, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":114
    },
    {
      "name":"Transmuted Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that deals a type of damage from the following list, you can expend a 1st level spell slot to change that damage type to one of the other listed types: acid, cold, fire, lightning, poison, or thunder, for that casting.<br><br>Alternatively, you can expend 1 sorcery point for the same effect.",
      "type":"Metamagic Boon",
      "id":115
    },
    {
      "name":"Twinned Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that targets only one creature and doesn't have a range of self, you can expend a spell slot equal to one less than the spell's level (minimum 1st level) to target a second creature in range with the same spell, for that casting.<br><br>Alternatively, you can expend a number of sorcery points equal to the spell's level for the same effect.",
      "type":"Metamagic Boon",
      "id":116
    },
    {
      "name":"Wide Spell", 
      "cost":2,
      "prereq":"2nd level spell slots",
      "desc":"When you cast a spell that has an area of effect, you can expend a 2nd level spell slot or higher to increase that spell's area of effect variables by 50% for that casting.<br><br>Alternatively, you can expend 3 sorcery points for the same effect.",
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
      "desc":"Your bloodline can be traced back to the Dragon Warriors of Pressia. You gain one of the following features: <br><ul><li><b>Draken Eyesight:</b> You can see in darkness as if it were dim light out to a range of 20 meters, and dim light as if it were bright light out to a range of 40 meters.</li><br><li><b>Draken Scales:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><br><li><b>Draken Wings:</b> While not wearing havy armor, you gain a flying speed of 6 meters. You cannot hover, and must keep moving on your turn to stay aloft.</li><br><li><b>Elemental Breath:</b> You can exhale your choice of a 1-meter by 10-meter line or 4-meter cone breath weapon. Creatures within the area must make a DC 8 + your proficiency bonus Dexterity saving throw or take 2d6 + your Constitution modifier damage, or half damage on a successful save. The damage creatures take is determined by the damage resistance you chose as part of the Pressian culture. You can use this ability once, and you regain use after a short or long rest.</li>",
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
      "desc":"Your bloodline can be strongly traced back to the Infernal Incursions. You gain one of the following features: <br><ul><li><b>Damnable Retribution:</b> When you are hit with an attack by a creature you can see, you can use your reaction to deal 3d8 Cold or Fire damage to the attacker. Once you use this ability, you cannot do so again until you finish a long rest.</li><br><li><b>Hellish Carapace:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><br><li><b>Fiendish Wings:</b> While not wearing heavy armor and in dim light or darkness, you gain a flying speed of 6 meters.</li><br><li><b>Infernal Magic:</b> You may cast one of the following spells at their lowest level, once per short rest: Bane, Cause Fear, False Life, Hellish Rebuke, Hideous Laughter, or Inflict Wounds.<br><br>Your spellcasting ability modifier for these spells is your Charisma modifier + your proficiency bonus.<br><br>Your spell save DC for these spells is 8 + your Charisma modifier + your proficiency bonus.</li>",
      "type":"Culture Boon",
      "id":125
    },
    {
      "name":"Mutagen Aspect", 
      "cost":2,
      "prereq":"Ensot Culture",
      "desc":"Your bloodline is infused with the magic of foul mutations. You gain one of the following features: <br><ul><li><b>Vile Retaliation:</b> When you are hit with a melee attack by a creature you can see, you can use your reaction to deal 1d6 acid or poison damage.</li><br><li><b>Appaling Hide:</b> While not wearing medium or heavy armor, your AC is 13 + your Dexterity modifier.</b></li><br><li><b>Insectoid Wings:</b> While not wearing medium or heavy armor and having more than half of your maximum HP, you gain a flying speed of 6 meters.</li><br><li><b>Disfiguring Claws:</b>Your unarmed strikes deal 1d8 slashing damage. You cannot wield martial weapons.</li><br><li><b>Terrifying Visage:</b>You gain advantage on all intimidation checks, and disadvantage on all persuasion checks.</li>",
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
];