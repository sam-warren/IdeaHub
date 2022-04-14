import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/rules/-index- */
export interface iRule extends iAPIReference {
  desc: string;
  subsections: iAPIReference[];
}
