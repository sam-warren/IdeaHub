import { iAction } from "../Common/iAction";
import { iAPIReference } from "../Common/iAPIReference";
import { iSenses } from "../Common/iSenses";
import { iSpecialAbility } from "../Common/iSpecialAbility";
import { iSpeed } from "../Common/iSpeed";
import { iMonsterProficiency } from "./iMonsterProficiency";

/* https://www.dnd5eapi.co/docs/#get-/api/monsters/-index- */
export interface iMonster extends iAPIReference {
  desc: string[];
  charisma: number;
  constitution: number;
  dexterity: number;
  intelligence: number;
  strength: number;
  wisdom: number;
  size: ["Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan"];
  type: string;
  alignments: [
    "chaotic neutral",
    "chaotic evil",
    "chaotic good",
    "neutral evil",
    "neutral good",
    "neutral",
    "lawful neutral",
    "lawful evil",
    "lawful good"
  ];
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  actions: iAction[];
  legendary_actions: iAction[];
  challenge_rating: number;
  condition_immunities: iAPIReference[];
  damage_immunities: string[];
  damage_resistances: string[];
  damage_vulnerabilities: string[];
  forms: iAPIReference[];
  languages: string;
  proficiencies: iMonsterProficiency[];
  reactions: iAction[];
  senses: iSenses;
  special_abilities: iSpecialAbility[];
  speed: iSpeed;
  xp: number;
}
