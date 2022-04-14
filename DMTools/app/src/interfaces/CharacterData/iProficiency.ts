import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/proficiencies/-index- */
export interface iProficiency extends iAPIReference {
  type: string;
  classes: iAPIReference[];
  races: iAPIReference[];
  reference: iAPIReference;
}
