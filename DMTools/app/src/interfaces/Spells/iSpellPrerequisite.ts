import { iAPIReference } from "../Common/iAPIReference";

export interface iSpellPrerequisite {
  prerequisites: {
    index: string;
    name: string;
    url: string;
    type: string;
  }[];
  spell: iAPIReference;
}
