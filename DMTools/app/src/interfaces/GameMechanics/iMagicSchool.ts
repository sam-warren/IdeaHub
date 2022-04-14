import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/magic-schools/-index- */
export interface iMagicSchool extends iAPIReference {
  desc: string[];
}
