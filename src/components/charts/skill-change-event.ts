import { Rank } from "../../global/values/_skillValues.interfaces";

export interface ISkillChangeEvent {
  rank: Rank,
  skills: ISkillChange[];
  other?: Array<{
    attr: string,
    value: string
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

  /** The rank of the skill. 1 for basic, 2 for awakening. */
  rank: Rank;
};

