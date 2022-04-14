import { iAPIReference } from "../Common/iAPIReference";
import { iClassSpellcasting } from "../Class/iClassSpellcasting";

/* https://www.dnd5eapi.co/docs/#get-/api/subclasses/-index-/levels/-subclass_level- */
export interface iSubclassLevel {
  index: string;
  url: string;
  level: number;
  ability_score_bonuses: number;
  prof_bonus: number;
  features: iAPIReference[];
  spellcasting: iClassSpellcasting;
  classspecific: any; // TODO: Update this when implemented
}
