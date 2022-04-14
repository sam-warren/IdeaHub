import { iAPIReference } from "../Common/iAPIReference";
import { iClassSpellcasting } from "../Class/iClassSpellcasting";

/* https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/levels */
export interface iClassLevel extends iAPIReference {
  level: number;
  ability_score_bonuses: number;
  prof_bonus: number;
  features: iAPIReference[];
  spellcasting: iClassSpellcasting;
  class_specific: any; // TODO: Implement class-specific traits (https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/levels/-class_level-)
}
