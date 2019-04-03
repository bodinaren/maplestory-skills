import '../../../stencil.core';
import { EventEmitter } from "../../../stencil.core";
import { IChart, IChartSkills } from "../class-chart-helpers";
import { ISkill } from "../../../global/values/_skillValues.interfaces";
export declare class BerserkerComponent implements IChart {
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
    skills: IChartSkills;
    onSkillChanged: EventEmitter;
    componentWillLoad(): void;
    getData(): Promise<import("../skill-change-event").ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
    emitChangeEvent(): void;
    render()
}
