import { iAPIReference } from "../Common/iAPIReference";
import { iCost } from "../Common/iCost";

/* https://www.dnd5eapi.co/docs/#get-/api/equipment/-index- */
export interface iGear extends iAPIReference {
  desc: string[];
  equipment_category: iAPIReference;
  gear_category: iAPIReference;
  cost: iCost;
  weght: number;
}
