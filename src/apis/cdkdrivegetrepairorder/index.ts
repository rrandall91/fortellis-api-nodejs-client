import { getAPI } from "..";
import { cdkdrivegetrepairorderV1 } from "./v1";

export const VERSIONS = { v1: cdkdrivegetrepairorderV1.CDKDriveGetRepairOrder };

export function cdkdrivegetrepairorder(version: "v1"): cdkdrivegetrepairorderV1.CDKDriveGetRepairOrder;
export function cdkdrivegetrepairorder(
  options: cdkdrivegetrepairorderV1.Options
): cdkdrivegetrepairorderV1.CDKDriveGetRepairOrder;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cdkdrivegetrepairorder<T = cdkdrivegetrepairorderV1.CDKDriveGetRepairOrder>(
  options: "v1" | cdkdrivegetrepairorderV1.Options
) {
  return getAPI<T>("cdkdrivegetrepairorder", options, VERSIONS);
}

export { cdkdrivegetrepairorderV1 };
