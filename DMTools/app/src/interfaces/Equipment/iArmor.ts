import { iAPIReference } from "../Common/iAPIReference";
import { iCost } from "../Common/iCost";

/* https://www.dnd5eapi.co/docs/#get-/api/equipment/-index- */
export interface iArmor extends iAPIReference {
  desc: string[];
  equipment_category: iAPIReference;
  armor_category: string;
  armor_class: any; // TODO: Revisit this (https://www.dnd5eapi.co/docs/#tag--Equipment)
  str_minimum: number;
  stealth_disadvantage: boolean;
  cost: iCost;
  weight: number;
}
