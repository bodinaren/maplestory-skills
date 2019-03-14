import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class KnightComponent {
    editable: boolean;
    extras: boolean;
    bulwark: number;
    crossCut: number;
    defenderOfTheFaith: number;
    divineStrike: number;
    drillThrust: number;
    ironDefense: number;
    ironShield: number;
    longswordMastery: number;
    shieldBooster: number;
    shieldCharge: number;
    shieldMastery: number;
    shieldToss: number;
    shieldWall: number;
    stingingFlurry: number;
    tornadoSlash: number;
    typhoonSlash: number;
    warhorn: number;
    skills: {
        [prop: string]: {
            locked: boolean;
            required: string;
            active: boolean;
        };
    };
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): Promise<void>;
    emitChangeEvent(): void;
    render(): JSX.Element;
}
