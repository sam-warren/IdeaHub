import { iAPIReference } from "../Common/iAPIReference";
import { iSpellPrerequisite } from "../Spells/iSpellPrerequisite";

/* https://www.dnd5eapi.co/docs/#get-/api/subclasses/-index- */
export interface iSubclass extends iAPIReference {
  desc: string[];
  class: iAPIReference;
  subclass_flavor: string;
  subclass_levels: string;
  spells: iSpellPrerequisite[];
}
