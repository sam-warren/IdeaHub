import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";

/* https://www.dnd5eapi.co/docs/#get-/api/traits/-index- */
export interface iTrait extends iAPIReference {
  desc: string[];
  races: iAPIReference[];
  subraces: iAPIReference[];
  proficiencies: iAPIReference[];
  proficiency_choices: iChoice[];
  trait_specific: any; // TODO: Implement anyOf (https://www.dnd5eapi.co/docs/#get-/api/traits/-index-)
}
