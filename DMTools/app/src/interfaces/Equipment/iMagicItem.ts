import { iAPIReference } from "../Common/iAPIReference";
import { iRarity } from "./iRarity";

/* https://www.dnd5eapi.co/docs/#get-/api/magic-items/-index- */
export interface iMagicItem extends iAPIReference {
  desc: string[];
  equipment_category: iAPIReference;
  rarity: iRarity;
  variants: iAPIReference[];
  variant: boolean;
}
