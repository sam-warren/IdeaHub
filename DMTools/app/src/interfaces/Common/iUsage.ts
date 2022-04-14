export interface iUsage {
  type: ["at will", "per day", "recharge after rest", "recharge on roll"];
  rest_types: string[];
  times: number;
}
