import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/ability-scores/-index- */
export interface iAbilityScore extends iAPIReference {
  desc: string[];
  full_name: string;
  skills: iAPIReference[];
}
