import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/subclasses/-index-/levels */
export interface iSubclassLevel {
  index: string;
  url: string;
  features: iAPIReference[];
  class: iAPIReference;
  subclass: iAPIReference;
}
