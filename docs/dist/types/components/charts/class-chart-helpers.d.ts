import '../../stencil.core';
import { EventEmitter } from "../../stencil.core";
import { ISkill, IClassSkills } from "../../global/values/_skillValues.interfaces";
import { ISkillChangeEvent } from "./skill-change-event";
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
        locked: boolean;
        required: string;
        active: boolean;
        limitReached: boolean;
    };
}
