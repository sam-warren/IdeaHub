import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/conditions/-index- */
export interface iCondition extends iAPIReference {
  desc: string[];
}
