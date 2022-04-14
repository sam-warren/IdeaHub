import { iAPIReference } from "../Common/iAPIReference";

export interface iSpellDamage {
  damage_at_slot_level: any; // TODO: Update this (https://www.dnd5eapi.co/docs/#get-/api/subclasses/-index-)
  damage_type: iAPIReference;
}
