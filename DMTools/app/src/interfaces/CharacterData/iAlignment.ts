import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/alignments/-index- */
export interface iAlignment extends iAPIReference {
  desc: string;
  abbreviation: string;
}
