import { iAttack } from "./iAttack";
import { iChoice } from "./iChoice";
import { iDamage } from "./iDamage";
import { iDifficultyClass } from "./iDifficultyClass";

export interface iAction {
  name: string;
  desc: string;
  options?: iChoice[];
  attack_bonus: number;
  dc: iDifficultyClass;
  attacks?: iAttack[];
  damage: iDamage[];
}
