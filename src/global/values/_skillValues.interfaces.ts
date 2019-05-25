

export interface ISkillDescription<T = SkillArray | AwakenedSkillArray> {
  name?: string;

  description: string;

  /**
   * Represents the various numbers that changes in a skill based on how many points are placed.
   * Each item must be an array of 11 numbers representing the value for each number of points put into the skill.
   * The position represents the amount of points placed skill (starting at 0 points).
   * Since 0 points shows the values of the first level, the first and second position is always the same.
   */
  values?: { [attribute: string]: T };
}

export interface ISkillBase<T = SkillArray | AwakenedSkillArray> extends ISkillDescription<T> {
  /** The name of the skill */
  name: string;

  /** The attribute of the skill (dash-separated name) */
  attr: string;

  /** The attribute of the skill (camelCase name) */
  prop: string;

  /** Which rank the skill has, 1 for basic, 2 for awakening */
  rank: Rank;

  /** Which row in the chart the skill should be shown in */
  row: number;

  /** Which column in the chart the skill should be shown in */
  column: number;

  /** The minimum amount of skill points that must be placed in the skill */
  minLevel: number;

  /** The maximum amount of skill points that can be placed in the skill */
  maxLevel: number;

  element?: MapleStoryElement;

  attackType?: string;

  weaponRequired?: string;

  passive?: boolean;

  sp?: boolean;

  stamina?: number | T;

  spirit?: number | T;

  cooldown?: number | T;

  /**
   * Which character level that is required for each level of the skill.
   * Contains 11 numbers which represents the level required of the character.
   * The position represents the amount of points placed skill (starting at 0 points).
   * Since 0 points shows the values of the first level, the first and second position is always the same.
   */
  levelRequirement?: T;

  /** The skills and levels that are required before you can place point in this skill. */
  skillRequirements?: ISkillRequirement[];

  extras?: ISkillDescription<T>[];
}

export interface ISkill extends ISkillBase<SkillArray> {
  rank: 1;
}

export interface IAwakenedSkill extends ISkillBase<AwakenedSkillArray> {
  rank: 2;
}

export interface IClassSkills {
  [prop: string]: ISkillBase;
}

export interface ISkillRequirement {
  /** Which skill is required */
  skill: ISkillBase;

  /** How many points are required of skill. */
  level: number;
}



export type SkillArray = [number, number, number, number, number, number, number, number, number, number, number];
export type AwakenedSkillArray = [number, number, number, number, number];

export type MapleStoryElement = "Dark" | "Electric" | "Fire" | "Holy" | "Ice" | "Toxic";

export enum Rank {
  Basic = 1,
  Awakening = 2,
}
