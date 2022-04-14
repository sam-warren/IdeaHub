import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";
import { iPrerequisite } from "../Common/iPrerequisite";

/* https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/multi-classing */
export interface iMulticlass {
  prerequisites: iPrerequisite[];
  prerequisite_options: iChoice[];
  proficiencies: iAPIReference[];
  proficiency_choices: iChoice[];
}
