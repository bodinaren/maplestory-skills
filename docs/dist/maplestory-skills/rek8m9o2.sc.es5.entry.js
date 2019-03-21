var __awaiter=this&&this.__awaiter||function(e,n,a,t){return new(a||(a=Promise))(function(i,s){function r(e){try{o(t.next(e))}catch(e){s(e)}}function l(e){try{o(t.throw(e))}catch(e){s(e)}}function o(e){e.done?i(e.value):new a(function(n){n(e.value)}).then(r,l)}o((t=t.apply(e,n||[])).next())})},__generator=this&&this.__generator||function(e,n){var a,t,i,s,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,t&&(i=2&s[0]?t.return:s[0]?t.throw||((i=t.return)&&i.call(t),0):t.next)&&!(i=i.call(t,s[1])).done)return i;switch(t=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,t=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(i=(i=r.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(6===s[0]&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=n.call(e,r)}catch(e){s=[6,e],t=0}finally{a=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}};MaplestorySkills.loadBundle("rek8m9o2",["exports","./chunk-c1161754.js"],function(e,n){var a=window.MaplestorySkills.h,t={name:"Knuckle Missile",attr:"knuckle-missile",prop:"knuckleMissile",row:1,column:3,minLevel:1,maxLevel:1,element:"Fire",cooldown:4,sp:!0,description:"\n    Dash forward with impressive swiftness and throw a powerful punch at the nearest enemy\n    within <span>6</span> m, dealing <span>250%</span> fire damage.\n    If there is no enemy within <span>6</span> m, move forward <span>3</span> m instead.\n    Stance Change mode is activated with the skill, causing other skills to activate in changed form.\n  "},i={name:"Guard Dash",attr:"guard-dash",prop:"guardDash",row:1,column:4,minLevel:1,maxLevel:1,description:"\n    Assume a guard stance with both arms while moving forward <span>1.75</span> m <span>2</span> times.\n    Physical and magic resistances increase by <span>300</span> during Guard Dash.\n    You are immune to knockback while this skill is active.\n    Consumes <span>40</span> stamina.\n  "},s={name:"Mahar Punch",attr:"mahar-punch",prop:"maharPunch",row:1,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{damage:[37,37,40,43,46,49,52,55,58,61,64]},description:"\n    Throw two consecutive sonic jabs that deal <span>[damage]%</span> damage,\n    hitting up to <span>5</span> enemies <span>2</span> m in front of you.\n  "},r={name:"Fists of Fury",attr:"fists-of-fury",prop:"fistsOfFury",row:2,column:1,minLevel:1,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",levelRequirement:[0,0,10,12,14,16,18,20,22,24,26],values:{leftDamage:[45,45,48,51,54,57,60,63,66,69,72]},description:"\n    Throw consecutive left-right punches that deal <span>[leftDamage]%</span> damage\n    <span>2</span> times and <span>55%</span> damage on the last hit,\n    hitting up to <span>5</span> enemies <span>2</span> m in front of you.\n    Activates in changed form when in Stance Change mode.\n  "},l={name:"Magnum Blow",attr:"magnum-blow",prop:"magnumBlow",row:3,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[13,13,15,17,19,21,23,25,27,29,31],skillRequirements:[{skill:s,level:2},{skill:r,level:2}],values:{stage1:[230,230,246,262,278,294,310,326,342,358,374],stage2:[513,513,549,585,621,657,693,729,765,801,837],stage3:[792,792,849,906,963,1020,1077,1134,1191,1248,1305]},description:"\n    After concentrating all your power into your right fist,\n    move forward <span>1.5</span> m while delivering a powerful punch,\n    dealing <span>[stage1]%</span> fire damage to <span>5</span> enemies <span>3</span> m in front of you.\n    If you hold down the action key for <span>0.5</span> sec,\n    the skill enhances to stage 2 and moves you forward <span>3</span> m,\n    dealing <span>[stage2]%</span> fire damage to <span>5</span> enemies within <span>3</span> m.\n    If you hold down the action key for <span>0.5</span> sec after stage 2,\n    the skill enhances to stage 3 and moves you forward <span>4.5</span> m,\n    dealing <span>[stage3]%</span> fire damage to <span>5</span> enemies within <span>3</span> m.\n    If you maintain stage 3 for <span>3</span> sec or more, attacks become automatic.\n  "},o={name:"Beatdown",attr:"beatdown",prop:"beatdown",row:4,column:1,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[20,20,22,24,26,28,30,32,34,36,38],skillRequirements:[{skill:r,level:4},{skill:l,level:3}],values:{damage:[49,49,53,57,61,65,69,73,77,81,85]},description:"\n    Rapidly throw two-handed punches that deal <span>[damage]%</span> damage <span>5</span> times,\n    hitting up to <span>5</span> enemies <span>2.5</span> m in front of you.\n    This skill can be used up to <span>3</span> times in a row by pressing the key repeatedly,\n    and activation speed increases by <span>10%</span> per press.\n    Activates in changed form when in Stance Change mode.\n  "},p={name:"Power Puncher",attr:"power-puncher",prop:"powerPuncher",row:5,column:1,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[34,34,36,38,40,42,44,46,48,50,52],skillRequirements:[{skill:l,level:5},{skill:o,level:4}],values:{increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Increases the damage of Fists of Fury, Beatdown, Gigantic Burst,\n    and Magnum Blow by <span>[increase]%</span> by enhancing punch-type skills.\n    The damage increase is also applied to the changed form of these skills.\n  "},c={name:"Gigantic Burst",attr:"gigantic-burst",prop:"giganticBurst",row:6,column:1,minLevel:0,maxLevel:10,element:"Fire",attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[40,40,42,44,46,48,50,52,54,56,58],skillRequirements:[{skill:r,level:6},{skill:p,level:2}],values:{damage:[355,355,380,405,430,455,480,505,530,555,580]},description:"\n    After jumping into the air, slam the ground with a powerful punch that causes surrounding shockwaves.\n    The radius of the shockwaves expands from <span>3</span> m, to <span>3.75</span> m,\n    to <span>5.25</span> m, dealing <span>[damage]%</span> fire damage to <span>8</span> enemies within the area.\n  "},u={name:"Rising Kick",attr:"rising-kick",prop:"risingKick",row:3,column:2,minLevel:0,maxLevel:10,attackType:"Close Range / Physical",weaponRequired:"Two-handed Knuckles",cooldown:2,levelRequirement:[10,10,12,14,16,18,20,22,24,26,28],skillRequirements:[],values:{damage:[61,61,66,71,76,81,86,91,96,101,106]},description:"\n    Consecutively kick low, middle, and high to deal <span>[damage]%</span> damage\n    <span>3</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.\n    Activates in changed form when in Stance Change mode.\n  "},m={name:"Hurricane Cutter",attr:"hurricane-cutter",prop:"hurricaneCutter",row:3,column:3,minLevel:0,maxLevel:10,weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[16,16,18,20,22,24,26,28,30,32,34],skillRequirements:[{skill:s,level:2},{skill:u,level:2}],values:{damage:[93,93,100,107,114,121,128,135,142,149,156],additionalDamage:[110,110,118,126,134,142,150,158,166,174,182]},description:"\n    Lift your body into the air with one foot out and spin violently to deal <span>[damage]%</span> damage\n    <span>5</span> times to <span>8</span> enemies within <span>2.25</span> m.\n    Press on the directional keys to move while attacking.\n    Strength is gathered and released before the spinning stops,\n    delivering a powerful kick that deals <span>[additionalDamage]%</span> damage\n    to <span>8</span> enemies within <span>2.5</span> m.\n    Struck enemies are lifted <span>2.5</span> m in the air.\n  "},d={name:"Guillotine",attr:"guillotine",prop:"guillotine",row:4,column:3,minLevel:0,maxLevel:10,weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[25,25,27,29,31,33,35,37,39,41,43],skillRequirements:[{skill:u,level:4},{skill:m,level:3}],values:{damage:[88,88,94,100,106,112,118,124,130,136,142],additionalDamage:[117,117,125,133,141,149,157,165,173,181,189]},description:"\n    Consecutively kick left then right to deal <span>[damage]%</span> damage\n    <span>2</span> times to <span>5</span> enemies up to <span>2.5</span> m in front of you.\n    Afterwards, kick downward with a powerful blow to deal <span>[additionalDamage]%</span> damage\n    to <span>5</span> enemies within a <span>2</span> m radius.\n    Activates in changed form when in Stance Change mode.\n  "},h={name:"Kick Technician",attr:"kick-technician",prop:"kickTechnician",row:5,column:3,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[37,37,39,41,43,45,47,49,51,53,55],skillRequirements:[{skill:m,level:5},{skill:d,level:4}],values:{increase:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Increase the damage of Rising Kick, Guillotine, Hurricane Cutter, and Dragon Kick\n    by <span>[increase]%</span> by enhancing kick-type skills.\n    The damage increase is also applied to the changed form of these skills.\n  "},g={name:"Dragon Kick",attr:"dragon-kick",prop:"dragonKick",row:6,column:3,minLevel:0,maxLevel:10,element:"Fire",weaponRequired:"Two-handed Knuckles",cooldown:4,levelRequirement:[43,43,45,47,49,51,53,55,57,59,61],skillRequirements:[{skill:u,level:6},{skill:h,level:2}],values:{damage:[306,306,328,350,372,394,416,438,460,482,504]},description:"\n    Leap forward like a charging dragon with a flying kick.\n    Move forward <span>4.5</span> m while dealing <span>[damage]%</span> fire damage\n    to <span>5</span> enemies along the path.\n    You will pass through targets without colliding.\n  "},v={name:"Pace Control",attr:"pace-control",prop:"paceControl",row:3,column:4,minLevel:0,maxLevel:10,passive:!0,levelRequirement:[19,19,21,23,25,27,29,31,33,35,37],skillRequirements:[],values:{increase1:[3,3,4,5,6,7,8,9,10,11,12],increase2:[1.8,1.8,2.4,3,3.6,4.2,4.8,5.4,6,6.6,7.2]},description:"\n    Build and release your inner strength based on the amount of focus.\n    When spirit reaches <span>100%</span>, the damage for all\n    attacks increases by <span>[increase1]%</span> and movement speed increases by <span>10%</span>.\n    When spirit is under <span>100%</span> but above <span>80%</span> the abilities above\n    increase by <span>[increase2]%</span> and <span>6%</span> respectively.\n    When spirit is below <span>80%</span> but above <span>50%</span>,\n    the abilities above increase by <span>0.6%</span> and <span>2%</span> respecitvely.\n    When spirit is below <span>50%</span>, Pace Control is disabled.\n  "},k={name:"Overcome",attr:"overcome",prop:"overcome",row:4,column:4,minLevel:0,maxLevel:10,spirit:100,cooldown:50,levelRequirement:[28,28,30,32,34,36,38,40,42,44,46],skillRequirements:[{skill:v,level:3}],values:{damageIncrease:[10,10,12,14,16,18,20,22,24,26,28]},description:"\n    Energy erupts from within, unleashing abilities that overcome the limits of the physical body.\n    Increases attack speed and movement speed by <span>30%</span> and\n    both physical and magic damage by <span>[damageIncrease]%</span> for <span>20</span> sec.\n    Consumes <span>100</span> spirit.\n  "},f={name:"Fighting Spirit",attr:"fighting-spirit",prop:"fightingSpirit",row:5,column:4,minLevel:0,maxLevel:10,spirit:100,cooldown:50,levelRequirement:[31,31,33,35,37,39,41,43,45,47,49],skillRequirements:[{skill:v,level:3}],values:{resistance:[90,90,120,150,180,210,240,270,300,330,360],stack:[3,3,4,5,6,7,8,9,10,11,12]},description:"\n    Awaken your combat instinct, creating a fighting spirit within the body.\n    Increases both physical and magic resistance by <span>[resistance]</span> and\n    reduces movement speed by <span>60%</span> for <span>25</span> sec.\n    While in the fighting spirit, you are immune to knockdown,\n    and every time you're attacked all damage inflicted on the enemy increases\n    by <span>4%</span> due to building Vengeance.\n    Vengeance stacks up to <span>[stack]</span> times.\n    Consumes <span>100</span> spirit.\n  "},w={name:"Pattern Break",attr:"pattern-break",prop:"patternBreak",row:6,column:4,minLevel:0,maxLevel:10,spirit:100,cooldown:50,levelRequirement:[46,46,48,50,52,54,56,58,60,62,64],skillRequirements:[{skill:v,level:3}],values:{accuracy:[1,1,2,3,4,5,6,7,8,9,10],duration:[38,38,39,40,41,42,43,44,45,46,47]},description:"\n    Concentrate and read the enemy's movements.\n    Increases accuracy by <span>[accuracy]</span> for <span>[duration]</span> sec.\n    Decreases the enemy's evasion by <span>4</span> for <span>3</span> sec upon successful attack.\n    Consumes <span>100</span> spirit.\n  "},y=Object.freeze({KnuckleMissile:t,GuardDash:i,MaharPunch:s,FistsOfFury:r,MagnumBlow:l,Beatdown:o,PowerPuncher:p,GiganticBurst:c,RisingKick:u,HurricaneCutter:m,Guillotine:d,KickTechnician:h,DragonKick:g,PaceControl:v,Overcome:k,FightingSpirit:f,PatternBreak:w}),b=function(){function e(){this.editable=!1,this.extras=!1,this.beatdown=o.minLevel,this.dragonKick=g.minLevel,this.fightingSpirit=f.minLevel,this.fistsOfFury=r.minLevel,this.giganticBurst=c.minLevel,this.guardDash=i.minLevel,this.guillotine=d.minLevel,this.hurricaneCutter=m.minLevel,this.kickTechnician=h.minLevel,this.knuckleMissile=t.minLevel,this.magnumBlow=l.minLevel,this.maharPunch=s.minLevel,this.overcome=k.minLevel,this.paceControl=v.minLevel,this.patternBreak=w.minLevel,this.powerPuncher=p.minLevel,this.risingKick=u.minLevel}return e.prototype.componentWillLoad=function(){n.processSkills(this,y)},e.prototype.getData=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,n.toSkillChangeEventObject(this,y)]})})},e.prototype.levelChanged=function(e,a){this[e.prop]=a,n.processSkills(this,y,e),this.emitChangeEvent()},e.prototype.emitChangeEvent=function(){this.onSkillChanged.emit(n.toSkillChangeEventObject(this,y))},e.prototype.render=function(){return a("ms-chart",{msClass:"striker"},n.renderLevelControls(this,y,this.editable,this.extras))},Object.defineProperty(e,"is",{get:function(){return"ms-striker"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{beatdown:{type:Number,attr:"beatdown",mutable:!0},dragonKick:{type:Number,attr:"dragon-kick",mutable:!0},editable:{type:Boolean,attr:"editable",reflectToAttr:!0},extras:{type:Boolean,attr:"extras",watchCallbacks:["emitChangeEvent"]},fightingSpirit:{type:Number,attr:"fighting-spirit",mutable:!0},fistsOfFury:{type:Number,attr:"fists-of-fury",mutable:!0},getData:{method:!0},giganticBurst:{type:Number,attr:"gigantic-burst",mutable:!0},guardDash:{type:Number,attr:"guard-dash",mutable:!0},guillotine:{type:Number,attr:"guillotine",mutable:!0},hurricaneCutter:{type:Number,attr:"hurricane-cutter",mutable:!0},kickTechnician:{type:Number,attr:"kick-technician",mutable:!0},knuckleMissile:{type:Number,attr:"knuckle-missile",mutable:!0},magnumBlow:{type:Number,attr:"magnum-blow",mutable:!0},maharPunch:{type:Number,attr:"mahar-punch",mutable:!0},overcome:{type:Number,attr:"overcome",mutable:!0},paceControl:{type:Number,attr:"pace-control",mutable:!0},patternBreak:{type:Number,attr:"pattern-break",mutable:!0},powerPuncher:{type:Number,attr:"power-puncher",mutable:!0},risingKick:{type:Number,attr:"rising-kick",mutable:!0},skills:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"skillchanged",method:"onSkillChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ms-striker-h{display:block}"},enumerable:!0,configurable:!0}),e}();e.MsStriker=b,Object.defineProperty(e,"__esModule",{value:!0})});