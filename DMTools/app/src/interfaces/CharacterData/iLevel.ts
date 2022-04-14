import { iAPIReference } from "../Common/iAPIReference";
import { iClassSpellcasting } from "../Class/iClassSpellcasting";

export interface iLevel extends iAPIReference {
  level: number;
  ability_score_bonuses: number;
  prof_bonus: number;
  features: iAPIReference[];
  spellcasting: iClassSpellcasting;
  class_specific: any; // TODO: Implement class-specific traits (https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/levels)
}
