import { iDamage } from "./iDamage";
import { iDifficultyClass } from "./iDifficultyClass";

export interface iAttack {
    name: string;
    dc: iDifficultyClass;
    damage: iDamage;
}