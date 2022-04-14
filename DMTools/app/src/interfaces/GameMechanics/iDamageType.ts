import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/damage-types/-index- */
export interface iDamageType extends iAPIReference {
  desc: string[];
}
