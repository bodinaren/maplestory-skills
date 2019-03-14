import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class BerserkerComponent {
    editable: boolean;
    extras: boolean;
    adrenalineRush: number;
    bloodPrice: number;
    bloodlust: number;
    darkAura: number;
    darkBreaker: number;
    darkMight: number;
    deathSpin: number;
    deepWounds: number;
    earthquake: number;
    greatswordMastery: number;
    groundBreaker: number;
    inhumanEndurance: number;
    intimidation: number;
    ragingSlash: number;
    voidSlash: number;
    warriorsInstinct: number;
    xSlash: number;
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
