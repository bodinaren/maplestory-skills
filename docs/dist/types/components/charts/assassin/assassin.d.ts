import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class AssassinComponent {
    editable: boolean;
    extras: boolean;
    darkCloak: number;
    dash: number;
    deathSentence: number;
    fatalStrikes: number;
    fragmentedStar: number;
    luckyStars: number;
    markOfDeath: number;
    mirrorImageDarkBlade: number;
    shadowArts: number;
    shadowBurst: number;
    shadowChaser: number;
    shadowCutter: number;
    shadowWeb: number;
    soulGrind: number;
    starChaser: number;
    starFlurry: number;
    thrownWeaponMastery: number;
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
