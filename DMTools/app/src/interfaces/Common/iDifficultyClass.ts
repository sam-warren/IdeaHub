import { iAPIReference } from "./iAPIReference";

export interface iDifficultyClass {
  dc_type: iAPIReference;
  dc_value: number;
  success_type: string;
}
