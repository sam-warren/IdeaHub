import { iAPIReference } from "../Common/iAPIReference";

/* https://www.dnd5eapi.co/docs/#get-/api/classes/-index-/spellcasting */
export interface iSpellcasting {
  level: number;
  info: {
    name: string;
    desc: string[];
  }[];
  spellcasting_ability: iAPIReference;
}
