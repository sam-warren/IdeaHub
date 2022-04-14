import { iAPIReference } from "../Common/iAPIReference";
import { iMonsterSpell } from "./iMonsterSpell";

export interface iMonsterSpellcasting {
  ability: iAPIReference;
  dc: number;
  modifier: number;
  components_required: string[];
  school: string;
  slots: any; // TODO: Revisit this (https://www.dnd5eapi.co/docs/#get-/api/monsters/-index-)
  spells: iMonsterSpell[];
}
