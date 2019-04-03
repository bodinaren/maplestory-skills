import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class SoulBinderComponent implements IChart {
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
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render()
}
