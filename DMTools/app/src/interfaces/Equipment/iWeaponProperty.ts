import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/weapon-properties/-index- */
export interface iWeaponProperty extends iAPIReference {
  desc: string[];
}
