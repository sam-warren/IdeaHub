import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/skills/-index- */
export interface iSkill extends iAPIReference {
  desc: string[];
  ability_score: iAPIReference;
}
