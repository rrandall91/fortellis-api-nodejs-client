import { getAPI } from "..";
import { eleadsalesopportunitiesV2 } from "./v2";

export const VERSIONS = { v2: eleadsalesopportunitiesV2.EleadSalesOpportunities };

export function eleadsalesopportunities(version: "v2"): eleadsalesopportunitiesV2.EleadSalesOpportunities;
export function eleadsalesopportunities(options: eleadsalesopportunitiesV2.Options): eleadsalesopportunitiesV2.EleadSalesOpportunities;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function eleadsalesopportunities<T = eleadsalesopportunitiesV2.EleadSalesOpportunities>(options: "v2" | eleadsalesopportunitiesV2.Options) {
  return getAPI<T>("eleadsalesopportunities", options, VERSIONS);
}

export { eleadsalesopportunitiesV2 };
