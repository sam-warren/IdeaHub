import { iAbilityBonus } from "../Common/iAbilityBonus";
import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";

/* https://www.dnd5eapi.co/docs/#get-/api/races/-index- */
export interface iRace extends iAPIReference {
  speed: number;
  ability_bonuses: iAbilityBonus[];
  alignment: string;
  age: string;
  size: string;
  size_description: string;
  starting_proficiencies: iAPIReference[];
  starting_proficiency_options: iChoice[];
  languages: iAPIReference[];
  language_desc: string;
  traits: iAPIReference[];
  subraces: iAPIReference[];
}
