import { iAPIReference } from "../Common/iAPIReference";
import { iSpellDamage } from "./iSpellDamage";

export interface iSpell extends iAPIReference {
  desc: string[];
  higher_level: string[];
  range: string;
  components: ["V", "S", "M"];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: iSpellDamage;
  school: iAPIReference;
  classes: iAPIReference[];
  subclasses: iAPIReference[];
}
