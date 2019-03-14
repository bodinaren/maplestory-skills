import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class SoulBinderComponent {
    editable: boolean;
    extras: boolean;
    animusFocus: number;
    concussionOrb: number;
    soaringOrb: number;
    ragingTempest: number;
    staticFlash: number;
    energySurge: number;
    expansionBlast: number;
    flashStrike: number;
    illusion: number;
    healingBond: number;
    mantraArray: number;
    narubashanUnleashed: number;
    orbMastery: number;
    radiantSalvo: number;
    shootingStar: number;
    lightBarrier: number;
    fountOfRenewal: number;
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
