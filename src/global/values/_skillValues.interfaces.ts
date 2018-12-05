
export interface ISkill {
  /** The name of the skill */
  name: string;

  /** The attribute of the skill (dash-separated name) */
  attr: string;

  /** The attribute of the skill (camelCase name) */
  prop: string;

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

  spirit?: number | SkillArray;

  cooldown?: number | SkillArray;

  description: string;

  /**
   * Which character level that is required for each level of the skill.
   * Contains 11 numbers which represents the level required of the character.
   * The position represents the amount of points placed skill (starting at 0 points).
   * Since 0 points shows the values of the first level, the first and second position is always the same.
   */
  levelRequirement?: SkillArray;

  /** The skills and levels that are required before you can place point in this skill. */
  skillRequirements?: ISkillRequirement[];

  /**
   * Represents the various numbers that changes in a skill based on how many points are placed.
   * Each item must be an array of 11 numbers representing the value for each number of points put into the skill.
   * The position represents the amount of points placed skill (starting at 0 points).
   * Since 0 points shows the values of the first level, the first and second position is always the same.
   */
  values?: { [attribute: string]: SkillArray };
}

export interface ISkillRequirement {
  /** Which skill is required */
  skill: ISkill;

  /** How many points are required of skill. */
  level: number;
}

export type SkillArray = [number, number, number, number, number, number, number, number, number, number, number];

export type MapleStoryElement = "Dark" | "Electric" | "Fire" | "Holy" | "Ice" | "Toxic";
