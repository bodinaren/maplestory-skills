import { processSkills, renderLevelControls, toSkillChangeEventObject } from "../class-chart-helpers";
import * as ArcherSkills from "../../../global/values/archer";
export class ArcherComponent {
    constructor() {
        this.editable = false;
        this.extras = false;
        this.agileArcher = ArcherSkills.AgileArcher.minLevel;
        this.arrowBarrage = ArcherSkills.ArrowBarrage.minLevel;
        this.arrowStorm = ArcherSkills.ArrowStorm.minLevel;
        this.arrowStream = ArcherSkills.ArrowStream.minLevel;
        this.bowSwing = ArcherSkills.BowSwing.minLevel;
        this.bronzeEagle = ArcherSkills.BronzeEagle.minLevel;
        this.conditioning = ArcherSkills.Conditioning.minLevel;
        this.eagleClaw = ArcherSkills.EagleClaw.minLevel;
        this.eagleGlide = ArcherSkills.EagleGlide.minLevel;
        this.eaglesMajesty = ArcherSkills.EaglesMajesty.minLevel;
        this.evasiveSalvo = ArcherSkills.EvasiveSalvo.minLevel;
        this.iceArrow = ArcherSkills.IceArrow.minLevel;
        this.precisionShooter = ArcherSkills.PrecisionShooter.minLevel;
        this.rapidShot = ArcherSkills.RapidShot.minLevel;
        this.screwdriverShot = ArcherSkills.ScrewdriverShot.minLevel;
        this.sharpEyes = ArcherSkills.SharpEyes.minLevel;
        this.snipe = ArcherSkills.Snipe.minLevel;
    }
    componentWillLoad() {
        processSkills(this, ArcherSkills);
    }
    async getData() {
        return toSkillChangeEventObject(this, ArcherSkills);
    }
    async levelChanged(skill, level) {
        this[skill.prop] = level;
        processSkills(this, ArcherSkills);
        this.emitChangeEvent();
    }
    emitChangeEvent() {
        this.onSkillChanged.emit(toSkillChangeEventObject(this, ArcherSkills));
    }
    render() {
        return [
            h("ms-chart", { msClass: "archer" }, renderLevelControls(this, ArcherSkills, this.editable, this.extras))
        ];
    }
    static get is() { return "ms-archer"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "agileArcher": {
            "type": Number,
            "attr": "agile-archer",
            "mutable": true
        },
        "arrowBarrage": {
            "type": Number,
            "attr": "arrow-barrage",
            "mutable": true
        },
        "arrowStorm": {
            "type": Number,
            "attr": "arrow-storm",
            "mutable": true
        },
        "arrowStream": {
            "type": Number,
            "attr": "arrow-stream",
            "mutable": true
        },
        "bowSwing": {
            "type": Number,
            "attr": "bow-swing",
            "mutable": true
        },
        "bronzeEagle": {
            "type": Number,
            "attr": "bronze-eagle",
            "mutable": true
        },
        "conditioning": {
            "type": Number,
            "attr": "conditioning",
            "mutable": true
        },
        "eagleClaw": {
            "type": Number,
            "attr": "eagle-claw",
            "mutable": true
        },
        "eagleGlide": {
            "type": Number,
            "attr": "eagle-glide",
            "mutable": true
        },
        "eaglesMajesty": {
            "type": Number,
            "attr": "eagles-majesty",
            "mutable": true
        },
        "editable": {
            "type": Boolean,
            "attr": "editable",
            "reflectToAttr": true
        },
        "evasiveSalvo": {
            "type": Number,
            "attr": "evasive-salvo",
            "mutable": true
        },
        "extras": {
            "type": Boolean,
            "attr": "extras",
            "watchCallbacks": ["emitChangeEvent"]
        },
        "getData": {
            "method": true
        },
        "iceArrow": {
            "type": Number,
            "attr": "ice-arrow",
            "mutable": true
        },
        "precisionShooter": {
            "type": Number,
            "attr": "precision-shooter",
            "mutable": true
        },
        "rapidShot": {
            "type": Number,
            "attr": "rapid-shot",
            "mutable": true
        },
        "screwdriverShot": {
            "type": Number,
            "attr": "screwdriver-shot",
            "mutable": true
        },
        "sharpEyes": {
            "type": Number,
            "attr": "sharp-eyes",
            "mutable": true
        },
        "skills": {
            "state": true
        },
        "snipe": {
            "type": Number,
            "attr": "snipe",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "skillchanged",
            "method": "onSkillChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:ms-archer:**/"; }
}
