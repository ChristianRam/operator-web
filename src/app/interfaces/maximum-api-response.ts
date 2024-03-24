import { CalculationResult } from "./calculation-result";

export interface MaximumApiResponse {
  data: CalculationResult[];
  notification?: {
    description: string;
    code: number;
    timestamp: string;
  };
}
