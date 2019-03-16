import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { ISkill, IClassSkills } from "../../global/values/_skillValues.interfaces";
import { ISkillChangeEvent } from "./skill-change-event";
/**
 * Verify that all distributed points are valid and correct incorrect ones.
 * * If a skill has changed, but the requirements are not met, the level of the required skills will also be added.
 * * If the skillchange resulted in a too high sum (e.g. over 68 distributed points), the points will be reduced to the maximum points available.
 * @param chart The chart that uses this skill (usually `this`)
 * @param classSkills All the skills for the relevant class
 * @param skillChanged Which skill has changed, if any.
 */
export declare function processSkills(chart: IChart, classSkills: IClassSkills, skillChanged?: ISkill): void;
export declare function toggleSkillRequirements(chart: any, skill: any, setActive: boolean): void;
export declare function renderLevelControls(chart: IChart, classSkills: IClassSkills, editable: boolean, extras?: boolean, additionalArgs?: any): JSX.Element[];
export declare function toSkillChangeEventObject(chart: any, classSkills: IClassSkills, other?: {
    [key: string]: string;
}): ISkillChangeEvent;
export interface IChart {
    editable: boolean;
    extras: boolean;
    onSkillChanged: EventEmitter;
    skills: IChartSkills;
    getData(): Promise<ISkillChangeEvent>;
    levelChanged(skill: ISkill, level: number): void;
}
export interface IChartSkills {
    [prop: string]: {
        /** If the skill should be "locked" due to unmet requirements */
        locked: boolean;
        /** Triggers the "Level +3" overlay if the skill is locked */
        required: string;
        /** If the skill cannot be added to due to having reached the maximum amount of total points across all skills (68 + 4) */
        limitReached: boolean;
    };
}
