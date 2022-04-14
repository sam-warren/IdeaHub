import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";

/* https://www.dnd5eapi.co/docs/#get-/api/backgrounds/-index- */
export interface iBackground extends iAPIReference {
  starting_proficiencies: iAPIReference[];
  starting_equipment: iAPIReference[];
  starting_equipment_options: iChoice[];
  language_options: iChoice[];
  feature: {
    name: string;
    desc: string[];
  };
  personality_traits: {};
  ideals: iChoice[];
  bonds: iChoice[];
  flaws: iChoice[];
}
