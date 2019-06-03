import { e as registerInstance, f as createEvent, d as h, h as Host, i as getAssetPath, g as getElement } from './maplestory-skills-f2cfe95b.js';
import { a as getOptimizedAssetPath, b as ConstructibleStyle } from './chunk-ebf2270d.js';
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ChartComponent = /** @class */ (function () {
    function ChartComponent(hostRef) {
        registerInstance(this, hostRef);
        this.rank = 1;
        this.styles = ChartComponent.getStyles.bind(this, this.msClass);
        this.onRankChanged = createEvent(this, "rankChange", 7);
    }
    ChartComponent.prototype.componentDidLoad = function () {
        this.resize();
    };
    ChartComponent.prototype.resize = function () {
        var parent = this.host.parentNode;
        if (parent.host)
            parent = parent.host;
        var parentWidth = parent.offsetWidth;
        var scale = parentWidth / 928;
        if (scale < 1) {
            this.host.style.transform = "scale(" + scale + ")";
            this.host.style.marginBottom = "-" + (785 - (785 * scale)) + "px";
            this.host.style.marginRight = "-" + (928 - (928 * scale)) + "px";
        }
        else {
            this.host.style.transform = null;
            this.host.style.marginBottom = null;
            this.host.style.marginRight = null;
        }
    };
    ChartComponent.prototype.changeRank = function (rank) {
        if (this.rank !== rank) {
            this.rank = rank;
            this.onRankChanged.emit(rank);
        }
    };
    ChartComponent.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("ms-footer", null), h("div", { class: "chart-left" }, h("div", { class: "chart-ranks" }, h("a", { class: { "active": this.rank === 1 }, onClick: function () { return _this.changeRank(1); }, href: "javascript:void(0)" }, this.rank !== 1 && h("img", { src: getAssetPath("assets/" + this.msClass + "-rank-1.png") }), this.rank === 1 && h("img", { src: getAssetPath("assets/" + this.msClass + "-rank-1-active.png") }), h("span", null, "Rank 1 Skills")), h("a", { class: { "active": this.rank === 2 }, onClick: function () { return _this.changeRank(2); }, href: "javascript:void(0)" }, this.rank !== 2 && h("img", { src: getAssetPath("assets/" + this.msClass + "-rank-2.png") }), this.rank === 2 && h("img", { src: getAssetPath("assets/" + this.msClass + "-rank-2-active.png") }), h("span", null, "Rank 2 Skills"))), this.rank === 1 &&
            h("div", { class: "level-intervals" }, h("div", null, "Level 1"), h("div", null, "Level 10"), h("div", null, "Level 20"), h("div", null, "Level 30"), h("div", null, "Level 40"), h("div", null, "Level 50")), this.rank === 2 &&
            h("div", { class: "level-intervals" }, h("div", null, "Level 60"), h("div", null, "Level 62"), h("div", null, "Level 64"), h("div", null, "Level 66"), h("div", null, "Level 68"), h("div", null, "Level 70"))), h("div", { class: "chart rank-1" }, h("div", { class: "class-icon" }, h("div", { class: "chart-class" }, h("slot", { name: "rank-1" })))), h("div", { class: "chart rank-2" }, h("slot", { name: "rank-2" }))));
    };
    ChartComponent.getStyles = function (msClass) {
        return "\n      ms-chart, a {\n        cursor: url(" + getAssetPath("assets/cursor.png") + ") 5 8, auto;\n      }\n      :host, :host(:hover), ms-chart, a:hover {\n        cursor: url(" + getAssetPath("assets/cursor.png") + ") 5 8, auto;\n      }\n      ms-chart:active, a:active {\n        cursor: url(" + getAssetPath("assets/cursor-down.png") + ") 5 8, auto;\n      }\n      :host(:active) {\n        cursor: url(" + getAssetPath("assets/cursor-down.png") + ") 5 8, auto;\n      }\n      .chart-left {\n        background-image: url(" + getAssetPath("assets/charts/chart-left.jpg") + ");\n      }\n      .chart-ranks a {\n        background: url(" + getAssetPath("assets/rank-holder.png") + ") center center no-repeat;\n      }\n      .chart-ranks a.active {\n        background: url(" + getAssetPath("assets/rank-holder-active.png") + ") center center no-repeat;\n      }\n      .chart.rank-1 {\n        background-image: url(" + getAssetPath("assets/charts/chart-rank-1.jpg") + ");\n      }\n      .chart.rank-2 {\n        background-image: url(" + getAssetPath("assets/charts/chart-" + msClass + ".jpg") + ");\n      }\n      .class-icon {\n        background-image: url(" + getAssetPath("assets/charts/" + msClass + "-icon.png") + ")\n      }\n      .chart-class {\n        background-image: url(" + getOptimizedAssetPath("assets/charts/" + msClass + "-lines.png") + ");\n      }\n    ";
    };
    Object.defineProperty(ChartComponent.prototype, "host", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChartComponent, "style", {
        get: function () { return ":host{display:block;width:928px;height:785px;position:relative;-webkit-transform-origin:top left;transform-origin:top left;font-size:16px;color:#fff;font-family:Roboto,Arial}:host,:host(:active),_:-ms-lang(x){cursor:auto}:host([rank=\"1\"]) .chart.rank-2,:host([rank=\"2\"]) .chart.rank-1{display:none}.chart-left{width:202px}.chart,.chart-left{position:absolute;height:100%}.chart{left:202px;width:726px}.class-icon{background-position:50%}.chart>.class-icon>div,.class-icon{width:100%;height:100%;background-repeat:no-repeat}.chart>.class-icon>div{background-position:100px 98px}.chart-ranks{position:absolute;top:4px;left:4px}.chart-ranks a{position:relative;display:block;width:124px;height:133px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chart-ranks span{position:absolute;top:95px;left:0;width:100%;text-align:center;color:#fff;font-size:14px}.level-intervals{position:absolute;top:15px;left:143px;color:#686868;font-size:14px}.level-intervals>div{margin-bottom:107px}ms-footer{margin-top:-30px;-webkit-transition:margin-top .3s ease-in-out;transition:margin-top .3s ease-in-out}:host(:hover) ms-footer{margin-top:0}::slotted(ms-skill){position:absolute}::slotted(ms-skill[row=\"1\"]){top:14px}::slotted(ms-skill[row=\"2\"]){top:142px}::slotted(ms-skill[row=\"3\"]){top:270px}::slotted(ms-skill[row=\"4\"]){top:398px}::slotted(ms-skill[row=\"5\"]){top:526px}::slotted(ms-skill[row=\"6\"]){top:654px}::slotted(ms-skill[column=\"1\"]){left:67px}::slotted(ms-skill[column=\"2\"]){left:247px}::slotted(ms-skill[column=\"3\"]){left:427px}::slotted(ms-skill[column=\"4\"]){left:607px}"; },
        enumerable: true,
        configurable: true
    });
    return ChartComponent;
}());
__decorate([
    ConstructibleStyle({ cacheKeyProperty: "msClass" })
], ChartComponent.prototype, "styles", void 0);
var FooterComponent = /** @class */ (function () {
    function FooterComponent(hostRef) {
        registerInstance(this, hostRef);
    }
    FooterComponent.prototype.render = function () {
        return (h("a", { href: "https://bodinaren.github.io/maplestory-skills/", target: "_blank" }, "MapleStory 2 Skill Charts"));
    };
    Object.defineProperty(FooterComponent, "style", {
        get: function () { return ":host{font-family:Roboto,Arial;position:absolute;top:100%;right:0;text-align:center;font-size:11.2px;padding:0 5px 2px;border-bottom-left-radius:3px;border-bottom-right-radius:3px;background-color:#1c1c1c;border-right:1px solid #121212;-webkit-box-shadow:inset -1px 0 #222;box-shadow:inset -1px 0 #222}:host,a{color:#fff}a{cursor:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return FooterComponent;
}());
var IconComponent = /** @class */ (function () {
    function IconComponent(hostRef) {
        registerInstance(this, hostRef);
        this.sp = false;
    }
    IconComponent.prototype.render = function () {
        return (h(Host, null, h("img", { src: getOptimizedAssetPath("assets/skills/" + this.name + ".png") }), this.sp &&
            h("img", { src: getOptimizedAssetPath("assets/sp.png") })));
    };
    Object.defineProperty(IconComponent, "style", {
        get: function () { return ":host{display:-ms-inline-flexbox;display:inline-flex;position:relative;width:43px;height:50px;-ms-flex-pack:center;justify-content:center}img:nth-of-type(2){position:absolute;bottom:1px;left:-4px}"; },
        enumerable: true,
        configurable: true
    });
    return IconComponent;
}());
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SkillComponent = /** @class */ (function () {
    function SkillComponent(hostRef) {
        registerInstance(this, hostRef);
        this.level = 0;
        this.extras = false;
        this.limitReached = false;
        this.locked = false;
        this.disabled = true;
        this.loop = false;
        this.styles = SkillComponent.getStyles;
        this.onLevelChanged = createEvent(this, "levelchanged", 7);
        this.onSkillClicked = createEvent(this, "skillclicked", 7);
    }
    SkillComponent.prototype.componentWillLoad = function () {
        if (!this.skill)
            return;
        if (this.level < this.skill.minLevel)
            this.level = this.skill.minLevel;
        if (this.level > this.skill.maxLevel)
            this.level = this.skill.maxLevel;
        if (!this.column)
            this.column = this.skill.column;
        if (!this.row)
            this.row = this.skill.row;
    };
    SkillComponent.prototype.skillChanged = function () {
        this.onLevelChanged.emit(this.level);
    };
    SkillComponent.prototype.render = function () {
        var _this = this;
        if (!this.skill)
            return;
        return (h(Host, { passive: this.skill.passive }, h("div", { class: "skill", onMouseEnter: function () { return _this.showOverlay(); }, onMouseLeave: function () { return _this.hideOverlay(); }, onClick: function () { return _this.emitSkillClick(); } }, h("ms-icon", { name: this.skill.attr, sp: this.skill.sp })), h("div", { class: "controls" }, h("div", null, h("button", { class: { "minus": true, "wrap": this.loop && this.level === this.skill.minLevel }, disabled: this.shouldDisableMinus(), onClick: function () { return _this.minus(); }, onMouseEnter: function () { return _this.showOverlay(-1); }, onMouseLeave: function () { return _this.hideOverlay(); }, hidden: this.level === this.skill.minLevel && !this.loop }, h("img", { src: getOptimizedAssetPath("assets/minus.png") }), h("img", { src: getOptimizedAssetPath("assets/minus-hover.png") }), h("img", { src: getOptimizedAssetPath("assets/minus-active.png") }), h("img", { src: getOptimizedAssetPath("assets/minus-wrap.png") }), h("img", { src: getOptimizedAssetPath("assets/minus-wrap-hover.png") }), h("img", { src: getOptimizedAssetPath("assets/minus-wrap-active.png") }))), h("span", null, this.level, "/", this.skill.maxLevel), h("div", null, h("button", { class: { "plus": true, "wrap": this.loop && (this.level === this.skill.maxLevel || this.limitReached) }, disabled: this.shouldDisablePlus(), onClick: function () { return _this.plus(); }, onMouseEnter: function () { return _this.showOverlay(+1); }, onMouseLeave: function () { return _this.hideOverlay(); }, hidden: this.level === this.skill.maxLevel && !this.loop }, h("img", { src: getOptimizedAssetPath("assets/plus.png") }), h("img", { src: getOptimizedAssetPath("assets/plus-hover.png") }), h("img", { src: getOptimizedAssetPath("assets/plus-active.png") }), h("img", { src: getOptimizedAssetPath("assets/plus-wrap.png") }), h("img", { src: getOptimizedAssetPath("assets/plus-wrap-hover.png") }), h("img", { src: getOptimizedAssetPath("assets/plus-wrap-active.png") })))), h("ms-skill-overlay", { hidden: !this.overlayLevel, skill: this.skill, extras: this.extras, level: this.overlayLevel || 1, class: this.skill.prop })));
    };
    SkillComponent.prototype.shouldDisableMinus = function () {
        return this.disabled // skill are not editable
            // || this.locked // locked due to unmet requirements
            || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
            || (!this.loop && this.level === this.skill.minLevel) // can't decrease any further, unless we loop
            || (this.loop && this.limitReached && this.level === this.skill.minLevel); // if we loop, only disable if we're reached the limit and is at minimum (which would make this a plus button)
    };
    SkillComponent.prototype.shouldDisablePlus = function () {
        return this.disabled // skill are not editable
            // || this.locked // locked due to unmet requirements
            || this.skill.minLevel === this.skill.maxLevel // can't progress in this skill
            || (this.limitReached && (!this.loop || this.level === this.skill.minLevel)); // limit is reached, unless we loop, then only if we can't decrease further
    };
    SkillComponent.prototype.showOverlay = function (levelOffset) {
        if (levelOffset === void 0) { levelOffset = 0; }
        this.overlayLevel = this.level + levelOffset;
        if (this.overlayLevel === 0) {
            this.overlayLevel = 1;
        }
        else if (this.overlayLevel < 0) {
            this.overlayLevel = (this.loop ? this.skill.maxLevel : 1);
        }
        else if (this.overlayLevel > this.skill.maxLevel) {
            this.overlayLevel = (this.loop ? 1 : this.skill.maxLevel);
        }
    };
    SkillComponent.prototype.hideOverlay = function () {
        this.overlayLevel = 0;
    };
    SkillComponent.prototype.emitSkillClick = function () {
        this.onSkillClicked.emit(this.skill);
    };
    SkillComponent.prototype.plus = function () {
        if (this.level < this.skill.maxLevel || this.loop) {
            this.level++;
            if (this.level > this.skill.maxLevel || (this.limitReached && this.level > this.skill.minLevel)) {
                this.level = this.skill.minLevel;
            }
            this.skillChanged();
        }
        this.showOverlay(+1);
    };
    SkillComponent.prototype.minus = function () {
        if (this.level > this.skill.minLevel || this.loop) {
            this.level--;
            if (this.level < this.skill.minLevel) {
                this.level = this.skill.maxLevel;
            }
            this.skillChanged();
        }
        this.showOverlay(-1);
    };
    SkillComponent.getStyles = function () {
        return "\n      ms-skill .controls { background-image: url(" + getOptimizedAssetPath("assets/skill-bar.png") + "); }\n      :host .controls { background-image: url(" + getOptimizedAssetPath("assets/skill-bar.png") + "); }\n\n      ms-skill:not([passive]) .skill { background-image: url(" + getOptimizedAssetPath("assets/skill-shield.png") + "); }\n      :host(:not([passive])) .skill { background-image: url(" + getOptimizedAssetPath("assets/skill-shield.png") + "); }\n\n      ms-skill[passive] .skill { background-image: url(" + getOptimizedAssetPath("assets/skill-shield-passive.png") + "); }\n      :host([passive]) .skill { background-image: url(" + getOptimizedAssetPath("assets/skill-shield-passive.png") + "); }\n\n      ms-skill[locked] .skill:after { background-image: url(" + getOptimizedAssetPath("assets/skill-locked.png") + "); }\n      :host([locked]) .skill:after { background-image: url(" + getOptimizedAssetPath("assets/skill-locked.png") + "); }\n\n      ms-skill[required]:after { background-image: url(" + getOptimizedAssetPath("assets/skill-overlay.png") + "); }\n      :host([required]):after { background-image: url(" + getOptimizedAssetPath("assets/skill-overlay.png") + "); }\n    ";
    };
    Object.defineProperty(SkillComponent, "watchers", {
        get: function () {
            return {
                "level": ["skillChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillComponent, "style", {
        get: function () { return ":host{height:115px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.skill,:host{display:block;width:72px}.skill{height:84px;background-repeat:no-repeat}.skill>ms-icon{display:block;position:absolute;left:14px;top:17px}.controls{display:-ms-flexbox;display:flex;width:109px;height:36px;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-left:-18.5px;margin-top:-4px}.controls span{text-align:center;-ms-flex-positive:1;flex-grow:1;font-size:14.4px}.controls div{margin-top:4px;width:30px}.controls div,_:-ms-lang(x){margin-top:0}:host([locked]) .skill:after{content:\"\"}:host([locked]) .skill:after,:host([required]):after{position:absolute;width:52px;height:61px;top:11px;left:10px;pointer-events:none}:host([required]):after{content:attr(required);display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;color:#ff0;font-size:12.8px}ms-skill-overlay{position:absolute;margin:0 20px}:host([column=\"1\"]) ms-skill-overlay,:host([column=\"2\"]) ms-skill-overlay{left:100%}:host([column=\"3\"]) ms-skill-overlay,:host([column=\"4\"]) ms-skill-overlay{right:100%}:host([row=\"1\"]) ms-skill-overlay,:host([row=\"2\"]) ms-skill-overlay,:host([row=\"3\"]) ms-skill-overlay{top:0}:host([row=\"4\"]) ms-skill-overlay,:host([row=\"5\"]) ms-skill-overlay,:host([row=\"6\"]) ms-skill-overlay{bottom:0}button{width:30px;height:33px;background:none;border:none;padding:0;outline:0;cursor:inherit}.minus img,.plus img,_:-ms-lang(x){cursor:pointer}button:active{cursor:inherit}button img{display:none}button:not([disabled]):not([hidden]){display:inline-block}button.wrap:not([disabled]):active img:nth-child(6),button.wrap:not([disabled]):not(:active):hover img:nth-child(5),button.wrap:not([disabled]):not(:active):not(:hover) img:nth-child(4),button:not(.wrap):not([disabled]):active img:nth-child(3),button:not(.wrap):not([disabled]):not(:active):hover img:nth-child(2),button:not(.wrap):not([disabled]):not(:active):not(:hover) img:first-child{display:inline}.minus{left:-1px}.plus{right:0}:host-context(ms-chart) ms-skill-overlay.electricBlast{bottom:-100px}:host-context(ms-chart) ms-skill-overlay.magnumBlow{top:-75px}:host-context(ms-runeblade[sigil=flameSigil]) ms-skill-overlay.impact{top:-25px}:host-context(ms-runeblade[sigil=stormSigil]) ms-skill-overlay.impact{top:-50px}:host-context(ms-chart) ms-skill-overlay.lodestoneField{top:-75px}:host-context(ms-chart) ms-skill-overlay.playingWithFire{bottom:-55px}:host-context(ms-chart) ms-skill-overlay.archersSecrets{bottom:-20px}"; },
        enumerable: true,
        configurable: true
    });
    return SkillComponent;
}());
__decorate$1([
    ConstructibleStyle()
], SkillComponent.prototype, "styles", void 0);
var descriptionRegex = /\{(.*?)\}/;
/**
 * @private
 */
var SkillOverlayComponent = /** @class */ (function () {
    function SkillOverlayComponent(hostRef) {
        registerInstance(this, hostRef);
        this.level = 0;
        this.extras = false;
    }
    SkillOverlayComponent.prototype.componentWillLoad = function () {
        this.refreshData();
    };
    SkillOverlayComponent.prototype.componentWillUpdate = function () {
        this.refreshData();
    };
    SkillOverlayComponent.prototype.refreshData = function () {
        var _this = this;
        if (this.skill) {
            this.setRequirements();
            this.setStamina();
            this.setSpirit();
            this.setCooldown();
            this.description = this.parseDescription(this.skill);
            this.extraDescriptions = undefined;
            if (this.extras && this.skill.extras) {
                this.extraDescriptions = this.skill.extras.map(function (extraDescription) {
                    return _this.parseDescription(extraDescription);
                });
            }
        }
    };
    SkillOverlayComponent.prototype.render = function () {
        if (!this.skill)
            return;
        return (h("div", null, h("h1", { class: this.skill.element, style: this.skill.element && {
                "background": "url(" + getAssetPath("assets/" + this.skill.element.toLowerCase() + ".jpg") + "), " + this.getGradient(this.skill.element)
            } }, this.skill.name, this.skill.element &&
            h("span", { class: "element" }, this.skill.element)), h("div", { class: "content" }, h("div", null, h("div", { class: "content-header" }, h("div", { class: "icon" }, this.skill.attr
            && h("ms-icon", { slot: "icon", name: this.skill.attr, sp: this.skill.sp })
            || h("slot", { name: "icon" })), h("div", { class: "infoAndLevel" }, h("div", { class: "shortInfo" }, this.stamina && "Stamina " + this.stamina, this.spirit && "Spirit " + this.spirit, (this.stamina || this.spirit) && this.cooldown && " / ", this.cooldown && "Cooldown: " + this.cooldown + " Sec"), h("div", { class: "level" }, "Level ", this.level || 1, this.level === this.skill.maxLevel &&
            " | MAX"))), this.requirements && this.requirements.length > 0 &&
            h("div", { class: "requirements" }, h("p", null, "[Requirements]"), this.requirements.map(function (req) { return h("p", null, req); }))), h("div", null, h("p", null, this.skill.passive && "Passive" || "Active"), this.skill.attackType &&
            h("p", null, this.skill.attackType), this.skill.weaponRequired &&
            h("p", null, "Weapon Required: ", this.skill.weaponRequired)), h("div", { class: "description" }, this.description
            && h("p", { innerHTML: this.description })
            || h("p", null, h("slot", { name: "description" }))), this.extraDescriptions && this.extraDescriptions.map(function (desc) { return h("div", { class: "description extras" }, h("p", { innerHTML: desc })); }))));
    };
    SkillOverlayComponent.prototype.setRequirements = function () {
        var requirements = [];
        if (this.skill.levelRequirement && this.skill.levelRequirement[this.level] > 0) {
            requirements.push("Level " + this.skill.levelRequirement[this.level] + "+");
        }
        if (this.skill.skillRequirements) {
            Array.prototype.push.apply(requirements, this.skill.skillRequirements.map(function (req) { return req.skill.name + " [Level " + req.level + "+]"; }));
        }
        this.requirements = requirements;
    };
    SkillOverlayComponent.prototype.setStamina = function () {
        if (Array.isArray(this.skill.stamina)) {
            this.stamina = this.skill.stamina[this.level];
        }
        else if (!this.spirit) {
            this.stamina = this.skill.stamina;
        }
    };
    SkillOverlayComponent.prototype.setSpirit = function () {
        if (Array.isArray(this.skill.spirit)) {
            this.spirit = this.skill.spirit[this.level];
        }
        else if (!this.spirit) {
            this.spirit = this.skill.spirit;
        }
    };
    SkillOverlayComponent.prototype.setCooldown = function () {
        if (Array.isArray(this.skill.cooldown)) {
            this.cooldown = this.skill.cooldown[this.level];
        }
        else if (!this.cooldown) {
            this.cooldown = this.skill.cooldown;
        }
    };
    SkillOverlayComponent.prototype.parseDescription = function (skillDescription) {
        var desc = skillDescription.description;
        var match;
        while (match = descriptionRegex.exec(desc)) {
            var data = skillDescription.values && skillDescription.values[match[1]];
            if (!data)
                data = skillDescription[match[1]];
            desc = desc.replace(match[0], data[this.level].toString());
        }
        return desc;
    };
    SkillOverlayComponent.prototype.getGradient = function (element) {
        switch (element.toLowerCase()) {
            case "dark": return "linear-gradient(to bottom, #E29CD844 0%, #E29CD844 2px, #00000000 3px), linear-gradient(to right, #2F1A2B 0%, #2F1A2B 55%, #3C1C27 100%)";
            case "electric": return "linear-gradient(to bottom, #72E3F944 0%, #72E3F944 2px, #00000000 3px), linear-gradient(to right, #1B3439 0%, #1B3439 55%, #1A606A 100%)";
            case "fire": return "linear-gradient(to bottom, #FF714944 0%, #FF714944 2px, #00000000 3px), linear-gradient(to right, #3E1213 0%, #3E1213 56%, #712D16 100%)";
            case "holy": return "linear-gradient(to bottom, #FFA70F44 0%, #FFA70F44 2px, #00000000 3px), linear-gradient(to right, #4A2C12 0%, #4A2C12 60%, #865A0C 100%)";
            case "ice": return "linear-gradient(to bottom, #77D1FF44 0%, #77D1FF44 2px, #00000000 3px), linear-gradient(to right, #132845 0%, #132845 55%, #153772 100%)";
            case "toxic": return "linear-gradient(to bottom, #B96ADD44 0%, #B96ADD44 2px, #00000000 3px), linear-gradient(to right, #302239 0%, #302239 55%, #44235C 100%)";
        }
    };
    Object.defineProperty(SkillOverlayComponent, "style", {
        get: function () { return ":host{color:#fff;z-index:100;width:350px;background-color:rgba(0,0,0,.9);border:1px solid #2c2c2c;pointer-events:none;font-size:12.5px;border-radius:3px;overflow:hidden;-webkit-box-shadow:0 0 3px 1px #000;box-shadow:0 0 3px 1px #000}h1{text-transform:none;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;font-size:18.7px;margin:0;padding:.5em .7em;background:#1f1f1f;font-weight:400;text-shadow:1px 1px 1px #000;background-size:cover!important}h1 .element{font-size:15px}.content{padding:10px 0 5px}.content>div,::slotted(:not(:empty)){display:block;clear:both;padding:5px 15px 5px}.content>div:not(:first-of-type){border-top:1px solid #212121}.content>div:not(:last-child){border-bottom:1px solid #000}::slotted(:not(:empty)){border-top:1px solid #212121}.content-header{display:-ms-flexbox;display:flex;margin-bottom:15px}.icon{margin-right:15px;width:44px;height:50px;background-color:#434343;position:relative;padding:2px 5px;border-radius:3px}.icon:before{content:\" \";position:absolute;top:-2px;bottom:-2px;left:-2px;right:-2px;z-index:-1;background:-webkit-gradient(linear,left top,left bottom,from(#1b1b1b),to(#343434));background:linear-gradient(180deg,#1b1b1b 0,#343434);border-radius:3px}.infoAndLevel{color:#fff;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:5px}.level{font-size:21.6px}.requirements{clear:both}.requirements p:not(:first-child){color:#ecc400}.requirements p.fail{color:#ce3434}::slotted(*),p{color:#999;margin:1px 0;line-height:1.5em}.description span{color:#09c}.description mark{color:#873c29;background:none}.description h3{color:#ecc400;font-size:1em;font-weight:400;margin:0}.extras{font-style:italic}"; },
        enumerable: true,
        configurable: true
    });
    return SkillOverlayComponent;
}());
export { ChartComponent as ms_chart, FooterComponent as ms_footer, IconComponent as ms_icon, SkillComponent as ms_skill, SkillOverlayComponent as ms_skill_overlay };
