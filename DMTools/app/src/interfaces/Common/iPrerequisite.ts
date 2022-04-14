import { iAPIReference } from "./iAPIReference";

export interface iPrerequisite {
  ability_score: iAPIReference;
  minimum_score: number;
}
