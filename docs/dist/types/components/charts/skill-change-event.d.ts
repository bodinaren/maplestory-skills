export interface ISkillChangeEvent {
    skills: ISkillChange[];
    other?: Array<{
        attr: string;
        value: string;
    }>;
}
export interface ISkillChange {
    /** The name of the skill */
    skill: string;
    /** The attribute for the skill (kebab-case string) */
    attr: string;
    /** How many points were put into the skill */
    level: number;
    /** The minimum amount of points that must be put into the skill */
    minLevel: number;
}
