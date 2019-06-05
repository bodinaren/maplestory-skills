var __awaiter=this&&this.__awaiter||function(e,a,n,t){return new(n||(n=Promise))(function(i,r){function s(e){try{o(t.next(e))}catch(e){r(e)}}function l(e){try{o(t["throw"](e))}catch(e){r(e)}}function o(e){e.done?i(e.value):new n(function(a){a(e.value)}).then(s,l)}o((t=t.apply(e,a||[])).next())})};var __generator=this&&this.__generator||function(e,a){var n={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},t,i,r,s;return s={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function l(e){return function(a){return o([e,a])}}function o(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,i&&(r=s[0]&2?i["return"]:s[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;if(i=0,r)s=[s[0]&2,r.value];switch(s[0]){case 0:case 1:r=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(r=n.trys,r=r.length>0&&r[r.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!r||s[1]>r[0]&&s[1]<r[3])){n.label=s[1];break}if(s[0]===6&&n.label<r[1]){n.label=r[1];r=s;break}if(r&&n.label<r[2]){n.label=r[2];n.ops.push(s);break}if(r[2])n.ops.pop();n.trys.pop();continue}s=a.call(e,n)}catch(e){s=[6,e];i=0}finally{t=r=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js","./p-e17c4c91.system.js"],function(e,a){"use strict";var n,t,i,r,s,l,o,m;return{setters:[function(e){n=e.e;t=e.f;i=e.d;r=e.g},function(e){s=e.a},function(e){l=e.a;o=e.b;m=e.c}],execute:function(){var a={name:"Mana Font",attr:"mana-font",prop:"manaFont",rank:1,row:1,column:3,minLevel:1,maxLevel:1,passive:true,sp:true,description:"\n    Your fine control over your magical powers allows you to\n    recover <span>1</span> spirit every <span>0.3</span> sec at will.\n  "};var c={name:"Teleport",attr:"teleport",prop:"teleport",rank:1,row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Warp yourself <span>4.5</span> m forward. This skill can cancel other skills.\n    You will be immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "};var p={name:"Phantom Claw",attr:"phantom-claw",prop:"phantomClaw",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[71,71,77,83,89,95,101,107,113,119,125]},description:"\n    Slash the air with sharp magical claws, dealing <span>{damage}%</span> damage\n    <span>2</span> times to <span>3</span> enemies up to <span>8</span> m in front of you.\n  "};var d={name:"Arcane Blast",attr:"arcane-blast",prop:"arcaneBlast",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",cooldown:6,levelRequirement:[0,0,12,14,16,18,20,22,24,26,28],values:{damage:[260,260,279,298,317,336,355,374,393,412,431]},description:"\n    Focus a magical aura on a spot <span>4.5</span> m in front of you, creating an explosion of energy\n    that deals <span>{damage}%</span> damage to enemies within <span>3</span> m and knocks them back <span>1</span> m.\n  "};var h={name:"Flame Wave",attr:"flame-wave",prop:"flameWave",rank:1,row:3,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[175,175,188,201,214,227,240,253,266,279,292],dot:[21,21,23,25,27,29,31,33,35,37,39]},description:"\n    Gather fire energy in your staff to fling a flame wave up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> fire damage to enemies caught in it and setting them on fire,\n    which deals an additional <span>{dot}%</span> every second for <span>10</span> sec.\n    Consumes <span>20</span> spirit.\n  "};var g={name:"Flame Tornado",attr:"flame-tornado",prop:"flameTornado",rank:1,row:4,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:h,level:4}],values:{damage:[142,142,152,162,172,182,192,202,212,222,232]},description:"\n    Gather fire energy from your surroundings to create a huge flame whirlwind <span>4.5</span> m in front of you.\n    The flame whirlwind lasts for <span>1.5</span> sec, dealing <span>{damage}%</span> fire damage\n    to <span>8</span> enemies within <span>3</span> m every <span>0.3</span> sec.\n    Consumes <span>40</span> spirit.\n  "};var u={name:"Pyromancy",attr:"pyromancy",prop:"pyromancy",rank:1,row:5,column:1,minLevel:0,maxLevel:10,element:"Fire",passive:true,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:h,level:5},{skill:g,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced fire technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all fire damage by <span>{damage}%</span>.\n  "};var f={name:"Mana Claw",attr:"mana-claw",prop:"manaClaw",rank:1,row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:d,level:3}],values:{firstDamage:[149,149,159,169,179,189,199,209,219,229,239],thirdDamage:[246,246,263,280,297,314,331,348,365,382,399]},description:"\n    Shoot a sphere of condensed mana at the nearest enemy up to <span>9</span> m in front of you,\n    dealing <span>{firstDamage}%</span> damage.\n    Keep pressing the key to trigger a <span>3-hit</span> combo.\n    The first and second strikes have the same effect,\n    but the third strike <span>{thirdDamage}%</span> damage and is always critical.\n    Consumes <span>15</span> spirit.\n  "};var v={name:"Ice Spear",attr:"ice-spear",prop:"iceSpear",rank:1,row:3,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:h,level:4}],values:{damage:[171,171,184,197,210,223,236,249,262,275,288]},description:"\n    Gather ice from the moisture in the air to fling at the closest enemy up to <span>8</span> m in front of you.\n    The spear of ice breaks on impact, its shards dealing <span>{damage}%</span> ice damage\n    to <span>8</span> enemies within <span>2.5</span> m and decreasing movement speed by <span>10%</span> for <span>3</span> sec.\n    This cold effect can stack up to <span>6</span> times.\n    Enemies at max stacks are frozen for <span>1</span> sec.\n    Consumes <span>20</span> spirit.\n  "};var y={name:"Ice Storm",attr:"ice-storm",prop:"iceStorm",rank:1,row:4,column:2,minLevel:0,maxLevel:10,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:30,cooldown:12,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:v,level:4}],values:{damage:[152,152,163,174,185,196,207,218,229,240,251]},description:"\n    Blast <span>4</span> ice crystals toward enemies up to <span>8</span> m in front of you,\n    surrounding the targets with a cold front that generates a giant shard of ice.\n    The shard deals <span>{damage}%</span> ice damage to <span>8</span> enemies within <span>2.5</span> m.\n    Consumes <span>30</span> spirit.\n  "};var b={name:"Cryomancy",attr:"cryomancy",prop:"cryomancy",rank:1,row:5,column:2,minLevel:0,maxLevel:10,element:"Ice",passive:true,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:v,level:5},{skill:y,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced ice technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all ice damage by <span>{damage}%</span>.\n  "};var w={name:"Chain Lightning",attr:"chain-lightning",prop:"chainLightning",rank:1,row:3,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],values:{damage:[62,62,66,70,74,78,82,86,90,94,98],additionalDamage:[288,288,308,328,348,368,388,408,428,448,468]},description:"\n    Release an intense electric load that deals <span>{damage}%</span> electric damage\n    to <span>8</span> enemies up to <span>8</span> m in front of you.\n    Enemies hit with this skill <span>5</span> times pulse with electric energy,\n    attracting a bolt that deals an additional <span>{additionalDamage}%</span> electric damage.\n    Consumes <span>15</span> spirit.\n  "};var k={name:"Thunderbolt",attr:"thunderbolt",prop:"thunderbolt",rank:1,row:4,column:3,minLevel:0,maxLevel:10,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:w,level:4}],values:{damage:[611,611,656,701,746,791,836,881,926,971,1016]},description:"\n    Gather a bolt of electricity to throw at the closest enemy up to <span>8</span> m in front of you,\n    dealing <span>{damage}%</span> electric damage.\n    The bolt bounces up to <span>8</span> times within <span>5</span> m,\n    but won't hit the same target twice in a row.\n    Consumes <span>40</span> spirit.\n  "};var L={name:"Electromancy",attr:"electromancy",prop:"electromancy",rank:1,row:6,column:3,minLevel:0,maxLevel:10,element:"Electric",passive:true,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:w,level:5},{skill:k,level:5}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    An advanced electric technique taught to only the top students of the Ellinel Magic Academy.\n    Increases all electric damage by <span>{damage}%</span>.\n  "};var R={name:"Magic Armor",attr:"magic-armor",prop:"magicArmor",rank:1,row:3,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{barrier:[6,6,8,10,12,14,16,18,20,22,24]},description:"\n    Envelop your body with a magical aura, creating a barrier that absorbs damage\n    up to <span>{barrier}%</span> of your max health for <span>10</span> sec.\n    Cannot be combined with other barrier effects.\n  "};var T={name:"Focus Seal",attr:"focus-seal",prop:"focusSeal",rank:1,row:5,column:4,minLevel:0,maxLevel:10,cooldown:45,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:R,level:4}],values:{increaseAllies:[1,1,1.4,1.8,2.2,2.6,3,3.4,3.8,4.2,4.6],increaseSelf:[.5,.5,.7,.9,1.1,1.3,1.5,1.7,1.9,2.1,2.3]},description:"\n    Imbue the earth with your magical power, creating a seal that reaches <span>5</span> tiles around you.\n    The seal lasts for <span>20</span> sec and increases the physical attack and magic attack\n    of allies who absorb it by <span>{increaseAllies}%</span> for <span>180</span> sec.\n    Focus Seal also increases the caster's physical and magic attack by an additional <span>{increaseSelf}%</span>.\n  "};var S={name:"Elemental Master",attr:"elemental-master",prop:"elementalMaster",rank:1,row:6,column:4,minLevel:0,maxLevel:10,passive:true,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],values:{damage:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Asimov's high-level instruction teaches you how to harmoniously balance of fire, ice, and electric magic.\n    Increases fire, ice, and electric damage by <span>{damage}%</span>.\n  "};var C={name:"Mana Control",attr:"mana-control",prop:"manaControl",rank:2,row:1,column:4,minLevel:1,maxLevel:1,attackType:"Magic",weaponRequired:"Two-handed Staff",spirit:10,cooldown:60,levelRequirement:[60,60,60,60,60],description:"\n    Bend mana to your will.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently increases intelligence by <span>40</span>.\n    Using a skill grants Mana Control, which increases movement speed by <span>35%</span>,\n    increases magic attack by <span>20%</span> when spirit is <span>50%</span> or higher,\n    restores spirit by <span>50%</span>,\n    and decreases spirit cost by half when spirit is less than <span>50%</span>.\n  "};var E={name:"Dual Cast",attr:"dual-cast",prop:"dualCast",rank:2,row:1,column:1,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:15,levelRequirement:[60,60,60,60,60],values:{handyLightningDamage:[69,69,76,83,90],handyLightningAdditionalDamage:[234,234,261,288,315],iceShotDamage:[76,76,84,92,100],frostDamage:[37,37,41,49,45]},description:"\n    Cast spells of electricity and ice at the same time.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Cast Handy Lightning and Ice Shot at the same time.\n    <br/><br/>\n    Handy Lightning deals <span>{handyLightningDamage}%</span> damage and places a status effect on the target.\n    At <span>5</span> stacks, the Handy lightning effect detonates,\n    dealing an additional <span>{handyLightningAdditionalDamage}%</span> damage.\n    <br/><br/>\n    Ice Shot deals <span>{iceShotDamage}%</span>.\n    <br/><br/>\n    Permanently enhances Ice Spear.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ice Spear costs no spirit and inflicts Frost.\n    Enemies suffering from Frost take an additional <span>{frostDamage}%</span> damage from Handy Lightning.\n  "};var q={name:"Ice Cream Time",attr:"ice-cream-time",prop:"iceCreamTime",rank:2,row:2,column:1,minLevel:0,maxLevel:4,element:"Ice",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:20,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:E,level:3}],values:{damage:[298,298,338,378,418],additionalDamage:[371,371,414,457,500],dot:[114,114,126,138,150],iceStormIncrease:[37,37,41,45,49]},description:"\n    Make ice cream with ice magic to give your foes some serious brain freeze.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    Inflicts a stack of Chill every second.\n    Hit affected enemies with Thunderbolt to trigger Electric Ice Cream.\n    Deals <span>{additionalDamage}%</span> damage when the skill is used again or the duration ends.\n    <br/><br/>\n    Permanently enhances Ice Storm.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Chill decreases movement speed by <span>{movement}%</span> per stack.\n    <br/>\n    Targets are unable to act at <span>6</span> stacks.\n    <br/>\n    Electric Ice Cream deals <span>{dot}%</span> damage per sec for <span>10</span> sec.\n    <br/>\n    Increases Ice Storm damage by <span>{iceStormIncrease}%</span>.\n  "};var D={name:"Lodestone Field",attr:"lodestone-field",prop:"lodestoneField",rank:2,row:3,column:1,minLevel:0,maxLevel:4,element:"Electric",cooldown:30,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:q,level:2}],values:{damage:[260,260,290,320,350],additionalDamage:[36,36,40,44,48],stackDamage:[76,76,84,92,100],thunderboltIncrease:[37,37,41,45,49]},description:"\n    Fill the air with a magnetic charge to augment your attacks.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Grants a stack of Lightning Charge.\n    <br/><br/>\n    If you already have Lightning Charge, consume all stacks and cast Call Lightning instead,\n    dealing <span>{damage}%</span> damage,\n    plus an additional <span>{additionalDamage}%</span> per stack.\n    <br/><br/>\n    Permanently enhances Thunderbolt.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    When Lightning Charge stacks, inflicts <span>{stackDamage}%</span> damage to nearby enemies\n    and increases evation by <span>10%</span> per stack.\n    <br/>\n    Gain stacks by casting Handy Lightning or Electric Ice Cream, or by getting hit.\n    <br/>\n    Increases Thunderbolt damage by <span>{thunderboltIncrease}%</span>.\n  "};var M={name:"Perfect Storm",attr:"perfect-storm",prop:"perfectStorm",rank:2,row:5,column:1,minLevel:0,maxLevel:4,element:"Electric",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:5,cooldown:40,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:q,level:3},{skill:D,level:3}],values:{damage:[187,187,208,229,250],additionalDamage:[593,593,662,731,800],elementaryAttack:[8,8,16,24,32]},description:"\n    Attack with a perfect blend of ice and electricity.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Summon a bolt of ice and a bolt of electricity, each dealing <span>{damage}%</span> damage.\n    Hold down the skill key to unleash a fused attack that deals <span>{additionalDamage}%</span> damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    After casting Perfect Storm, temporarily increase electric and ice attack\n    by <span>{elementaryAttack}%</span> and reset the cooldowns for Thunderbolt and Ice Storm.\n  "};var F={name:"Ember",attr:"ember",prop:"ember",rank:2,row:1,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:20,levelRequirement:[60,60,60,60,60],values:{damage:[246,246,274,302,330],emberDot:[31,31,35,39,43],emberAoe:[298,298,332,366,400],kindlingDot:[37,37,41,45,49],kindlingAoe:[371,371,414,457,500],spreadingDamage:[37,37,41,45,49]},description:"\n    Launch a small fireball to start a big fire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and inflicts Ember.\n    Prioritizes enemies already suffering from Ember or Kindling.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Ember deals <span>{emberDot}%</span> per sec.\n    When a new stack is added, deals <span>{emberAoe}%</span> area damage and inflicts Spreading Embers and Kindling.\n    <br/>\n    Kindling deals <span>{kindlingDot}%</span> per sec.\n    When Ember is inflicted, deals <span>{kindlingAoe}%</span> area damage and inflicts Spreading Embers.\n    <br/>\n    Spreading Embers deals and additional <span>{spreadingDamage}%</span> damage when hit by Flame Wave.\n  "};var x={name:"Barbecue Party",attr:"barbecue-party",prop:"barbecueParty",rank:2,row:2,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:40,cooldown:8,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:F,level:3}],values:{damage:[411,411,458,505,552],dot:[44,44,49,54,59],aoeDamage:[407,407,454,501,548]},description:"\n    Grill your enemies with magical flames.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Deep Fried.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Deep Fried deals <span>{dot}%</span> damage per sec and\n    deals <span>{aoeDamage}</span> area damage when Arcane Blast hits.\n  "};var P={name:"Playing with Fire",attr:"playing-with-fire",prop:"playingWithFire",rank:2,row:4,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Magic",weaponRequired:"Two-handed Staff",passive:true,levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:x,level:3}],values:{damage:[111,111,124,137,150],duration:[10,10,10,11,11]},description:"\n    You've befriended a mischievous fire spire.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Permanently grants Dancing Flames.\n    Casting Flame Tornado temporarily grants Flame Imp.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Dancing Flames removes the spirit cost of Flame Wave and increases Flame Tornado damage by <span>{damage}%</span>.\n    <br/><br/>\n    Flame Imp lasts for <span>{duration}</span> sec, guaranteeing a critical when Ember hits\n    and granting a <span>27%</span> chance to trigger Party Time on critical hit.\n    <br/>\n    Party Time resets Barbequeue Party's cooldown and allows it to be cast instantly.\n  "};var I={name:"Little Meteor",attr:"little-meteor",prop:"littleMeteor",rank:2,row:5,column:3,minLevel:0,maxLevel:4,element:"Fire",attackType:"Long Range / Magic",weaponRequired:"Two-handed Staff",spirit:60,cooldown:30,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:P,level:3}],values:{damage:[1484,1484,1656,1828,2e3],additionalDamage:[148,148,165,182,199],enlightenFirstDamage:[253,253,282,311,340],enlightenSecondDamage:[260,260,290,320,350]},description:"\n    Summons a meteor to strike enemies. Sometimes summons something else by mistake.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage and grants Enlightenment.\n    Deals an additional <span>{additionalDamage}%</span> damage to targets hit with Flame Tornado.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Enlightenment causes Ember to strike twice, dealing <span>{enlightenFirstDamage}%</span> damage\n    and then <span>{enlightenSecondDamage}%</span> damage at no spirit cost.\n  "};var A={ArcaneBlast:d,ChainLightning:w,Cryomancy:b,Electromancy:L,ElementalMaster:S,FlameTornado:g,FlameWave:h,FocusSeal:T,IceSpear:v,IceStorm:y,MagicArmor:R,ManaClaw:f,ManaFont:a,PhantomClaw:p,Pyromancy:u,Teleport:c,Thunderbolt:k};var B={ManaControl:C,DualCast:E,IceCreamTime:q,LodestoneField:D,PerfectStorm:M,Ember:F,BarbecueParty:x,PlayingWithFire:P,LittleMeteor:I};var W=Object.assign({},A,B);var _=function(){function e(e){n(this,e);this.editable=false;this.rank=s.Basic;this.extras=false;this.ignoreMax=false;this.arcaneBlast=W.ArcaneBlast.minLevel;this.chainLightning=W.ChainLightning.minLevel;this.cryomancy=W.Cryomancy.minLevel;this.electromancy=W.Electromancy.minLevel;this.elementalMaster=W.ElementalMaster.minLevel;this.flameTornado=W.FlameTornado.minLevel;this.flameWave=W.FlameWave.minLevel;this.focusSeal=W.FocusSeal.minLevel;this.iceSpear=W.IceSpear.minLevel;this.iceStorm=W.IceStorm.minLevel;this.magicArmor=W.MagicArmor.minLevel;this.manaClaw=W.ManaClaw.minLevel;this.manaFont=W.ManaFont.minLevel;this.phantomClaw=W.PhantomClaw.minLevel;this.pyromancy=W.Pyromancy.minLevel;this.teleport=W.Teleport.minLevel;this.thunderbolt=W.Thunderbolt.minLevel;this.manaControl=W.ManaControl.minLevel;this.dualCast=W.DualCast.minLevel;this.iceCreamTime=W.IceCreamTime.minLevel;this.lodestoneField=W.LodestoneField.minLevel;this.perfectStorm=W.PerfectStorm.minLevel;this.ember=W.Ember.minLevel;this.barbecueParty=W.BarbecueParty.minLevel;this.playingWithFire=W.PlayingWithFire.minLevel;this.littleMeteor=W.LittleMeteor.minLevel;this.onSkillChanged=t(this,"skillchanged",7)}e.prototype.componentWillLoad=function(){l(this,W,this.ignoreMax)};e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,o(this,W)]})})};e.prototype.levelChanged=function(e,a){this[e.prop]=a;l(this,W,this.ignoreMax,e);this.host.forceUpdate();this.emitChangeEvent()};e.prototype.ignoreMaxChanged=function(){l(this,W,this.ignoreMax)};e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(o(this,W))};e.prototype.render=function(){var e=this;return i("ms-chart",{msClass:"wizard",rank:this.rank,onRankChange:function(a){var n=a.detail;return e.rank=n}},m(this,A,this.editable,this.extras,s.Basic),m(this,B,this.editable,this.extras,s.Awakening))};Object.defineProperty(e.prototype,"host",{get:function(){return r(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{ignoreMax:["ignoreMaxChanged"],extras:["emitChangeEvent"],rank:["emitChangeEvent"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}();e("ms_wizard",_)}}});