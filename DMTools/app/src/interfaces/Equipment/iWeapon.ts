import { iAPIReference } from "../Common/iAPIReference";
import { iCost } from "../Common/iCost";
import { iDamage } from "../Common/iDamage";
import { iRange } from "../Common/iRange";

/* https://www.dnd5eapi.co/docs/#get-/api/equipment/-index- */
export interface iWeapon extends iAPIReference {
  desc: string[];
  equipment_category: iAPIReference;
  weapon_category: string;
  weapon_range: string;
  category_range: string;
  range: iRange;
  damage: iDamage;
  two_handed_damage: iDamage;
  properties: iAPIReference[];
  cost: iCost;
  weight: number;
}
