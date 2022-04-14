import { iAPIReference } from "./iAPIReference";

export interface iChoice {
  choose: number;
  from: iAPIReference[];
  type: string;
}
