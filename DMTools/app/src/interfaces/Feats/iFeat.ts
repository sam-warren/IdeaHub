import { iAPIReference } from "../Common/iAPIReference";
import { iPrerequisite } from "../Common/iPrerequisite";

/* https://www.dnd5eapi.co/docs/#get-/api/feats/-index- */
export interface iFeat extends iAPIReference {
  desc: string[];
  prerequisites: iPrerequisite[];
}
