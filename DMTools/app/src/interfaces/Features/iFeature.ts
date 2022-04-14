import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/features/-index- */
export interface iFeature extends iAPIReference {
  desc: string[];
  level: number;
  class: iAPIReference;
  subclass: iAPIReference;
  feature_specific: any; // TODO: Implement this later (https://www.dnd5eapi.co/docs/#get-/api/features/-index-)
}
