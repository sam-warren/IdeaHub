import { iAbilityBonus } from "../Common/iAbilityBonus";
import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";

/* https://www.dnd5eapi.co/docs/#get-/api/subraces/-index- */
export interface iSubrace extends iAPIReference {
  desc: string;
  race: iAPIReference;
  ability_bonuses: iAbilityBonus;
  starting_proficiencies: iAPIReference[];
  languages: iAPIReference[];
  language_options: iChoice;
  racial_traits: iAPIReference[];
}
