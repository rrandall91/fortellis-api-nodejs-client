import { getAPI } from "..";
import { eleadsalesactivitiesV1 } from "./v1";

export const VERSIONS = { v1: eleadsalesactivitiesV1.EleadSalesActivities };

export function eleadsalesactivities(version: "v1"): eleadsalesactivitiesV1.EleadSalesActivities;
export function eleadsalesactivities(options: eleadsalesactivitiesV1.Options): eleadsalesactivitiesV1.EleadSalesActivities;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function eleadsalesactivities<T = eleadsalesactivitiesV1.EleadSalesActivities>(options: "v1" | eleadsalesactivitiesV1.Options) {
  return getAPI<T>("eleadsalesactivities", options, VERSIONS);
}

export { eleadsalesactivitiesV1 };
