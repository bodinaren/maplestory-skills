import '../../stencil.core';
import { ISkill } from "../../global/values/_skillValues.interfaces";
import { ISkillChangeEvent } from "./skill-change-event";
export declare function processSkills(chart: any, classSkills: any): void;
export declare function toggleSkillRequirements(chart: any, skill: any, setActive: boolean): void;
export declare function renderLevelControls(chart: any, skills: ISkill[] | any, editable: boolean, extras?: boolean, additionalArgs?: any): JSX.Element[];
export declare function toSkillChangeEventObject(chart: any, classSkills: {
    [key: string]: ISkill;
}, other?: {
    [key: string]: string;
}): ISkillChangeEvent;
