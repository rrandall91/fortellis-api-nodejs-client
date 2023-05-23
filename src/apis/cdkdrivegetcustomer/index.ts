import { getAPI } from "..";
import { cdkdrivegetcustomerV1 } from "./v1";

export const VERSIONS = { v1: cdkdrivegetcustomerV1.CDKDriveGetCustomer };

export function cdkdrivegetcustomer(version: "v1"): cdkdrivegetcustomerV1.CDKDriveGetCustomer;
export function cdkdrivegetcustomer(
  options: cdkdrivegetcustomerV1.Options
): cdkdrivegetcustomerV1.CDKDriveGetCustomer;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cdkdrivegetcustomer<T = cdkdrivegetcustomerV1.CDKDriveGetCustomer>(
  options: "v1" | cdkdrivegetcustomerV1.Options
) {
  return getAPI<T>("cdkdrivegetcustomer", options, VERSIONS);
}

export { cdkdrivegetcustomerV1 };
