var __awaiter=this&&this.__awaiter||function(e,n,a,r){return new(a||(a=Promise))(function(s,t){function i(e){try{l(r.next(e))}catch(e){t(e)}}function o(e){try{l(r["throw"](e))}catch(e){t(e)}}function l(e){e.done?s(e.value):new a(function(n){n(e.value)}).then(i,o)}l((r=r.apply(e,n||[])).next())})};var __generator=this&&this.__generator||function(e,n){var a={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},r,s,t,i;return i={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(i[Symbol.iterator]=function(){return this}),i;function o(e){return function(n){return l([e,n])}}function l(i){if(r)throw new TypeError("Generator is already executing.");while(a)try{if(r=1,s&&(t=i[0]&2?s["return"]:i[0]?s["throw"]||((t=s["return"])&&t.call(s),0):s.next)&&!(t=t.call(s,i[1])).done)return t;if(s=0,t)i=[i[0]&2,t.value];switch(i[0]){case 0:case 1:t=i;break;case 4:a.label++;return{value:i[1],done:false};case 5:a.label++;s=i[1];i=[0];continue;case 7:i=a.ops.pop();a.trys.pop();continue;default:if(!(t=a.trys,t=t.length>0&&t[t.length-1])&&(i[0]===6||i[0]===2)){a=0;continue}if(i[0]===3&&(!t||i[1]>t[0]&&i[1]<t[3])){a.label=i[1];break}if(i[0]===6&&a.label<t[1]){a.label=t[1];t=i;break}if(t&&a.label<t[2]){a.label=t[2];a.ops.push(i);break}if(t[2])a.ops.pop();a.trys.pop();continue}i=n.call(e,a)}catch(e){i=[6,e];s=0}finally{r=t=0}if(i[0]&5)throw i[1];return{value:i[0]?i[1]:void 0,done:true}}};System.register(["./p-a868d0a0.system.js","./p-832ce77e.system.js","./p-e17c4c91.system.js"],function(e,n){"use strict";var a,r,s,t,i,o,l,p;return{setters:[function(e){a=e.e;r=e.f;s=e.d;t=e.g},function(e){i=e.a},function(e){o=e.a;l=e.b;p=e.c}],execute:function(){var n={name:"Mantra Array",attr:"mantra-array",prop:"mantraArray",rank:1,row:1,column:3,minLevel:1,maxLevel:1,sp:true,description:"\n    Focus the mysterious animus energy within you to create Mantra Cores (orb energy) and\n    restore <span>12</span> spirit. You can create up to <span>4</span> Mantra Cores,\n    which can be activated consecutively as long as you continue to hold the key.\n    While you are creating Mantra Cores, you can control a greater amount of energy\n    and enhance some skills prior to activation.\n  "};var u={name:"Illusion",attr:"illusion",prop:"illusion",rank:1,row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Consume <span>40</span> stamina to release a mysterious aura from your body\n    and rush <span>4.5</span> m, leaving and afterimage in your wake.\n    Gain <span>50</span> evasion while moving.\n    The skill can be both canceled and triggered immediately while using other skills.\n    You are immune to knockback while this skill is active.\n  "};var m={name:"Soaring Orb",attr:"soaring-orb",prop:"soaringOrb",rank:1,row:1,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[38,38,41,44,47,50,53,56,59,62,65],aoe:[170,170,182,194,206,218,230,242,254,266,278]},description:"\n    Gather energy from your surroundings to form and launch an orb at the nearest enemy\n    up to <span>7.5</span> m in front of you, dealing <span>{damage}%</span> damage.\n    Keep pressing the key to trigger a 3-hit combo.\n    The third strike launches an energy orb that explodes upon collision,\n    dealing <span>{aoe}%</span> damage to <span>5</span> enemies within a <span>2.25</span> m radius.\n  "};var h={name:"Radiant Salvo",attr:"radiant-salvo",prop:"radiantSalvo",rank:1,row:2,column:1,minLevel:1,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:3,levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[58,58,62,66,70,74,78,82,86,90,94]},description:"\n    Concentrate life energy in the palms of your hands, then launch a salvo of orbs at the nearest enemy\n    within <span>7.5</span> m, dealing <span>{damage}%</span> damage <span>4</span> times.\n    Each orb that collides with an enemy ricochets <span>4</span> times\n    onto other enemies within a <span>3</span> m radius, dealing <span>{damage}%</span> damage.\n    Energy orbs do not damage the same target twice.\n    Consumes <span>3</span> spirit.\n  "};var c={name:"Expansion Blast",attr:"expansion-blast",prop:"expansionBlast",rank:1,row:3,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:4,cooldown:8,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:m,level:2},{skill:h,level:2}],values:{damage:[625,625,669,713,757,801,845,889,933,977,1021]},description:"\n    Condense the energy of Narubashan into a powerful,\n    one-meter-wide electric energy orb and shoot it <span>7.5</span> m forward,\n    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies in its path.\n    The orb also shocks targets, dealing an additional <span>20%</span> electric damage every sec for <span>3</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  "};var d={name:"Flash Strike",attr:"flash-strike",prop:"flashStrike",rank:1,row:4,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:6,cooldown:15,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:c,level:5}],values:{damage:[688,688,736,784,832,880,928,976,1024,1072,1120]},description:"\n    Gather light energy in your hands and fire a beam with energy force to push you back <span>1.5</span> m.\n    The light beam deals <span>{damage}%</span> damage to up\n    to <span>8</span> enemies up to <span>10.5</span> m in front of you.\n    Consumes <span>6</span> spirit.\n  "};var g={name:"Shooting Star",attr:"shooting-star",prop:"shootingStar",rank:1,row:5,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:4,cooldown:8,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:h,level:6},{skill:d,level:4}],values:{damage:[242,242,259,276,293,310,327,344,361,378,395]},description:"\n    Channel the strength of the animus to form <span>3</span> orbs infused with the\n    celestral energy and launch them at enemies up to <span>8</span> m in front of you.\n    The orbs will explode upon collision, spreading celestral energy over the area and dealing\n    <span>{damage}%</span> damage to up to <span>5</span> enemies within a <span>2.25</span> m radius.\n    Skill effects are enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>4</span> spirit.\n  "};var v={name:"Concussion Orb",attr:"concussion-orb",prop:"concussionOrb",rank:1,row:6,column:1,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:m,level:8}],values:{damage:[179,179,191,203,215,227,239,251,263,275,287]},description:"\n    Gather energy from your surroundings to form and launch an orb\n    at the nearest enemy up to <span>7.5</span> m in front of you.\n    The energy orb explodes upon collision, dealing <span>{damage}%</span> damage\n    to <span>5</span> enemies within a <span>2.25</span> m radius.\n    Keep pressing the trigger for a 2-hit combo.\n  "};var f={name:"Raging Tempest",attr:"raging-tempest",prop:"ragingTempest",rank:1,row:3,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",cooldown:15,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:m,level:4}],values:{dot:[23,23,25,27,29,31,33,35,37,39,41],additionalDamage:[68,68,72,76,80,84,88,92,96,100,104],reduction:[1,1,1,1,2,2,3,3,4,4,4]},description:"\n    Shift the flow of the atmosphere to create a whirlwind <span>6</span> m in front of you.\n    The whirlwind rages every <span>0.2</span> sec for a total of <span>4</span> times,\n    dealing <span>{dot}%</span> damage to up to <span>8</span> enemies\n    in a <span>3</span> m radius and gathering them at its center.\n    After <span>1</span> sec, the dence energy in the eye of the whirlwind explodes,\n    dealing <span>{additionalDamage}%</span> damage to up to <span>8</span> enemies within a <span>3</span> m radius\n    and decreasing their accuracy and evasion by <span>{reduction}</span>.\n  "};var b={name:"Energy Surge",attr:"energy-surge",prop:"energySurge",rank:1,row:4,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:5,cooldown:16,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:f,level:3}],values:{damage:[308,308,330,352,374,396,418,440,462,484,506],stun:[.3,.3,.4,.5,.6,.7,.8,.9,1,1.1,1.2]},description:"\n    Stir up earth energy, driving it toward the nearest enemy up to\n    <span>8</span> m in front of you and forcing the ground upward,\n    dealing <span>{damage}%</span> damage to up to <span>8</span> enemies within a <span>2.25</span> m radius.\n    The massive quake will stun targets for <span>{stun}</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>5</span> spirit.\n  "};var y={name:"Static Flash",attr:"static-flash",prop:"staticFlash",rank:1,row:5,column:2,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",spirit:15,cooldown:10,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:f,level:6},{skill:b,level:2}],values:{damage:[44,44,47,50,53,56,59,62,65,68,71],reduction:[1,1,2,3,4,5,6,7,8,9,10]},description:"\n    Reverse the flow of nature's pure energy within a <span>7.5</span> m radius,\n    exhausting the vitality of up to <span>8</span> enemies within range,\n    dealing <span>{damage}%</span> damage,\n    and reducing both defense and movement speed by <span>{reduction}%</span> for <span>10</span> sec.\n    Skill effects are activated and enhanced in proportion to the number of active Mantra Cores.\n    Consumes <span>15</span> spirit.\n  "};var k={name:"Light Barrier",attr:"light-barrier",prop:"lightBarrier",rank:1,row:3,column:3,minLevel:0,maxLevel:10,spirit:12,cooldown:30,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],values:{damage:[10,10,13,16,19,22,25,28,31,34,37]},description:"\n    Harness your animus energy to forge a shield that lasts for <span>4</span> sec\n    and absorbs damage equivalent to <span>{damage}%</span> of your max health.\n    This shield does not stack with other protective shield effects.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  "};var w={name:"Healing Bond",attr:"healing-bond",prop:"healingBond",rank:1,row:4,column:3,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",spirit:12,levelRequirement:[22,22,24,26,28,30,32,34,36,38,40],skillRequirements:[{skill:k,level:4}],values:{health:[85,85,90,95,100,105,110,115,120,125,130]},description:"\n    Restore your health and the health of <span>4</span> allies within a <span>3</span> m radius\n    by <span>{health}%</span> of your magic attack by harnessing nature's pure energy.\n    Consumes all Mantra Cores.\n    Skill effects are enhanced in proportion to number of Mantra Cores consumed.\n    Consumes <span>12</span> spirit.\n  "};var L={name:"Fount of Renewal",attr:"fount-of-renewal",prop:"fountOfRenewal",rank:1,row:6,column:3,minLevel:0,maxLevel:10,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",cooldown:30,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:w,level:4}],values:{health:[300,300,321,342,363,384,405,426,447,468,489],resistance:[200,200,213,226,239,252,265,278,291,304,317],healingBond:[4,4,8,12,16,20,24,28,32,36,40]},description:"\n    Gather a field of concentrated life force <span>6</span> m ahead of you\n    with a radius of <span>2.25</span> m, lasting <span>3</span> sec.\n    This field restores the health of up to <span>8</span> allies within range by <span>{health}%</span>\n    of your magic attack and increases physical and magic resistance by <span>{resistance}</span>.\n    Increases the potency of Healing Bond by <span>{healingBond}%</span>.\n    While you are within the Fount of Renewal, you are immune to knockback from standard attacks.\n  "};var S={name:"Orb Mastery",attr:"orb-mastery",prop:"orbMastery",rank:1,row:3,column:4,minLevel:0,maxLevel:10,passive:true,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],values:{attack:[1,1,1.6,2.2,2.8,3.4,4,4.6,5.2,5.8,6.4]},description:"\n    Harmonize more effectively with your Mantra Orbs thanks to your valuable lessons from Guidance.\n    Increase the strength of your weapon attack by <span>{attack}%</span> when you have an orb equipped.\n  "};var R={name:"Narubashan Unleashed",attr:"narubashan-unleashed",prop:"narubashanUnleashed",rank:1,row:5,column:4,minLevel:0,maxLevel:10,cooldown:60,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:S,level:4}],values:{interval:[4,4,3.5,3,2.5,2,1.5,1,.5,.5,.5],totalTime:[20,20,20,20,20,20,20,20,20,21,22]},description:"\n    Unleash the incredible power of Narubashan as explosive energy courses through your veins.\n    This energy automatically forms into Mantra Cores every <span>{interval}</span> sec for <span>{totalTime}</span> sec.\n    No more than <span>4</span> Mantra Cores can be created.\n  "};var C={name:"Animus Focus",attr:"animus-focus",prop:"animusFocus",rank:1,row:6,column:4,minLevel:0,maxLevel:10,passive:true,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:S,level:6},{skill:R,level:3}],values:{damage:[3,3,4,5,6,7,8,9,10,11,12],recovery:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Focus the strength of animus within yourself and amplify the Mantra Core's energy.\n    Increases the damage of Expansion Blast, Energy Surge, and Shooting Star\n    (which activate when the maximum quantity of Mantra Cores has been achieved) by\n    <span>{damage}%</span> and increases the recovery of Healing Bond by <span>{recovery}%</span>.\n  "};var M={name:"Awakened Mantra",attr:"awakened-mantra",prop:"awakenedMantra",rank:2,row:1,column:4,minLevel:1,maxLevel:1,cooldown:12,description:"\n    Harness your animus to create a purer form of Mantra Core.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases intelligence by <span>40</span>.\n    <br/>\n    Create up to <span>2</span>.\n    <br/>\n    Grants <mark>Awakened Mantra Core</mark>, and restores <span>50</span> spirit.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Awakened Mantra Cores empower Expansion Blast, Spirit Crush, Soul Shield and Soul Harmony.\n  "};var T={name:"Spirit Bound",attr:"spirit-bound",prop:"spiritBound",rank:2,row:1,column:1,minLevel:0,maxLevel:4,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[60,60,60,60,60],values:{damage:[163,163,176,189,202],thirdDamage:[356,356,385,414,443]},description:"\n    Launch a spirit orb at enemies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    <br/>\n    Deals <span>{thirdDamage}%</span> damage on every third cast.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    The orb bounces from enemy to enemy up to <span>3</span> times.\n    <br/>\n    Skill changes if there is only <span>1</span> enemy in range.\n  "};var x={name:"Spirit Crush",attr:"spirit-crush",prop:"spiritCrush",rank:2,row:2,column:1,minLevel:0,maxLevel:4,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:20,cooldown:5,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:T,level:3}],values:{damage:[918,918,1025,1132,1239]},description:"\n    Project spectral blades through enemies in front of you.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra to become Spirit Gouge.\n    <br/>\n    Use Vision Torrent to turn this skill into Vision Crush.\n  "};var q={name:"Vision Torrent",attr:"vision-torrent",prop:"visionTorrent",rank:2,row:3,column:1,minLevel:0,maxLevel:4,cooldown:60,levelRequirement:[64,64,64,64,64],skillRequirements:[{skill:x,level:2}],values:{damage:[4,4,6,8,10]},description:"\n    Manifest your bond with Vision in the physical world.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases magic attack by <span>{damage}%</span> for <span>20</span> sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Spirit Crush becomes Vision Crush.\n    <br/>\n    Flash Strike becomes Vision Strike.\n  "};var E={name:"Awakened Mind",attr:"awakened-mind",prop:"awakenedMind",rank:2,row:5,column:1,minLevel:0,maxLevel:4,passive:true,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:x,level:3},{skill:q,level:3}],values:{increase:[3,3,6,9,12],movement:[5,5,10,15,20]},description:"\n    Vision strengthens your mental fortitude, enhancing certain skills.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Spirit Bound, Spirit Crush, and Vision Strike by <span>{increase}%</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Increases movement speed by <span>{movement}%</span> after using Vision Strike.\n  "};var B={name:"Soul Flock",attr:"soul-flock",prop:"soulFlock",rank:2,row:1,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",levelRequirement:[60,60,60,60,60],values:{damage:[205,205,222,239,256],defense:[1.2,1.2,1.8,2.4,3],movement:[1.2,1.2,1.8,2.4,3]},description:"\n    Summon a flock of soul birds to attack.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage <span>3</span> times and inflicts Lethargy.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Lethargy decreases defense by <span>{defense}%</span> and\n    movement speed by <span>{movement}%</span> for <span>20</span> sec,\n    stacking up to <span>5</span> times.\n    <br/>\n    Lethargy does not stack with Static Flash.\n  "};var O={name:"Soul Shield",attr:"soul-shield",prop:"soulShield",rank:2,row:2,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Magic",weaponRequired:"Two-handed Orb",spirit:50,cooldown:30,levelRequirement:[62,62,62,62,62],skillRequirements:[{skill:B,level:3}],values:{damage:[80,80,87,94,101],absorbs:[20,20,40,60,80]},description:"\n    Summons an animus cube that damages enemies and shield allies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Deals <span>{damage}%</span> damage to enemies.\n    <br/><br/>\n    Allies receive a shield that absorbs damage equal to <span>{absorbs}%</span> of their max health\n    and lasts for <span>30</span> sec.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra Core to becomes Awakened Soul Shield.\n    <br/>\n    Shields do not trigger in arenas.\n  "};var F={name:"Soul Harmony",attr:"soul-harmony",prop:"soulHarmony",rank:2,row:4,column:3,minLevel:0,maxLevel:4,attackType:"Long Range / Magic",passive:true,spirit:10,levelRequirement:[66,66,66,66,66],skillRequirements:[{skill:O,level:3}],values:{health:[145,145,157,169,181]},description:"\n    Draw animus from your soul to heal nearby allies.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Heals <span>4</span> nearby allies by <span>{health}%</span> of magic attack per tick.\n    Hold down the skill key to channel.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Consumes <span>1</span> Awakened Mantra Core to become Soul Dissonance.\n  "};var A={name:"Triune Link",attr:"triune-link",prop:"triuneLink",rank:2,row:5,column:3,minLevel:0,maxLevel:4,passive:true,levelRequirement:[68,68,68,68,68],skillRequirements:[{skill:F,level:3}],values:{increase:[3,3,6,9,12],soulHarmony:[5,5,10,15,20],critEvasion:[10,10,20,30,40],evasion:[1,1,2,3,4]},description:"\n    Strengthens the bond between the Soul Binder, Vision, and Narubashan.\n    <br/><br/>\n    <h3>[Primary Effects]</h3>\n    Increases the damage of Soul Flock, Soul Shield, and Soul Dissonance by <span>{increase}%</span>.\n    <br/><br/>\n    <h3>[Bonus Effects]</h3>\n    Increases the healing of Soul Harmony by <span>{soulHarmony}%</span>.\n    <br/>\n    Soul Clash reduces an additional <span>{critEvasion}</span> critical evasion and <span>{evasion}</span> evasion.\n  "};var H={AnimusFocus:C,ConcussionOrb:v,SoaringOrb:m,RagingTempest:f,StaticFlash:y,EnergySurge:b,ExpansionBlast:c,FlashStrike:d,Illusion:u,HealingBond:w,MantraArray:n,NarubashanUnleashed:R,OrbMastery:S,RadiantSalvo:h,ShootingStar:g,LightBarrier:k,FountOfRenewal:L};var _={AwakenedMantra:M,SpiritBound:T,SpiritCrush:x,VisionTorrent:q,AwakenedMind:E,SoulFlock:B,SoulShield:O,SoulHarmony:F,TriuneLink:A};var P=Object.assign({},H,_);var D=function(){function e(e){a(this,e);this.editable=false;this.rank=i.Basic;this.extras=false;this.ignoreMax=false;this.animusFocus=P.AnimusFocus.minLevel;this.concussionOrb=P.ConcussionOrb.minLevel;this.soaringOrb=P.SoaringOrb.minLevel;this.ragingTempest=P.RagingTempest.minLevel;this.staticFlash=P.StaticFlash.minLevel;this.energySurge=P.EnergySurge.minLevel;this.expansionBlast=P.ExpansionBlast.minLevel;this.flashStrike=P.FlashStrike.minLevel;this.illusion=P.Illusion.minLevel;this.healingBond=P.HealingBond.minLevel;this.mantraArray=P.MantraArray.minLevel;this.narubashanUnleashed=P.NarubashanUnleashed.minLevel;this.orbMastery=P.OrbMastery.minLevel;this.radiantSalvo=P.RadiantSalvo.minLevel;this.shootingStar=P.ShootingStar.minLevel;this.lightBarrier=P.LightBarrier.minLevel;this.fountOfRenewal=P.FountOfRenewal.minLevel;this.awakenedMantra=P.AwakenedMantra.minLevel;this.spiritBound=P.SpiritBound.minLevel;this.spiritCrush=P.SpiritCrush.minLevel;this.visionTorrent=P.VisionTorrent.minLevel;this.awakenedMind=P.AwakenedMind.minLevel;this.soulFlock=P.SoulFlock.minLevel;this.soulShield=P.SoulShield.minLevel;this.soulHarmony=P.SoulHarmony.minLevel;this.triuneLink=P.TriuneLink.minLevel;this.onSkillChanged=r(this,"skillchanged",7)}e.prototype.componentWillLoad=function(){o(this,P,this.ignoreMax)};e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,l(this,P)]})})};e.prototype.levelChanged=function(e,n){this[e.prop]=n;o(this,P,this.ignoreMax,e);this.host.forceUpdate();this.emitChangeEvent()};e.prototype.ignoreMaxChanged=function(){o(this,P,this.ignoreMax)};e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(l(this,P))};e.prototype.render=function(){var e=this;return s("ms-chart",{msClass:"soul-binder",rank:this.rank,onRankChange:function(n){var a=n.detail;return e.rank=a}},p(this,H,this.editable,this.extras,i.Basic),p(this,_,this.editable,this.extras,i.Awakening))};Object.defineProperty(e.prototype,"host",{get:function(){return t(this)},enumerable:true,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{ignoreMax:["ignoreMaxChanged"],extras:["emitChangeEvent"],rank:["emitChangeEvent"]}},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return":host{display:block}"},enumerable:true,configurable:true});return e}();e("ms_soul_binder",D)}}});