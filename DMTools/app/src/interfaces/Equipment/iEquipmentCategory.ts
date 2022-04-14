import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/equipment-categories/-index- */
export interface iEquipmentCategory extends iAPIReference {
  equipment: iAPIReference[];
}
