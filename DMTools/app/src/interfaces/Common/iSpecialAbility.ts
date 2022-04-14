import { iMonsterSpellcasting } from "../Monsters/iMonsterSpellcasting";
import { iAction } from "./iAction";
import { iUsage } from "./iUsage";

export interface iSpecialAbility extends iAction {
  spellcasting: iMonsterSpellcasting;
  usage: iUsage;
}
