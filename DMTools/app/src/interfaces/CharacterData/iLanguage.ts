import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/languages/-index- */
export interface iLanguage extends iAPIReference {
  desc: string;
  type: ["Standard", "Exotic"];
  script: string;
  typical_speakers: string[];
}
