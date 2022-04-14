import { iAPIReference } from "../Common/iAPIReference";
import { iChoice } from "../Common/iChoice";
import { iMulticlass } from "./iMulticlass";
import { iSpellcasting } from "../CharacterData/iSpellcasting";
import { iStartingEquipment } from "../Equipment/iStartingEquipment";

/* https://www.dnd5eapi.co/docs/#get-/api/classes/-index- */
export interface iClass extends iAPIReference {
  hit_die: number;
  class_levels: string;
  multi_classing: iMulticlass;
  spellcasting: iSpellcasting;
  spells: string;
  starting_equipment: iStartingEquipment[];
  starting_equipment_options: iChoice[]; // TODO: Revisit this, modified Choice[]; (https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/spellcasting)
  proficiency_choices: iChoice[];
  proficiencies: iAPIReference[];
  saving_throws: iAPIReference[];
  subclasses: iAPIReference[];
}
