import { getAPI } from "..";
import { cdkdrivegetfisalesV1 } from "./v1";

export const VERSIONS = { v1: cdkdrivegetfisalesV1.CDKDriveGetFISales };

export function cdkdrivegetfisales(version: "v1"): cdkdrivegetfisalesV1.CDKDriveGetFISales;
export function cdkdrivegetfisales(
  options: cdkdrivegetfisalesV1.Options
): cdkdrivegetfisalesV1.CDKDriveGetFISales;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cdkdrivegetfisales<T = cdkdrivegetfisalesV1.CDKDriveGetFISales>(
  options: "v1" | cdkdrivegetfisalesV1.Options
) {
  return getAPI<T>("cdkdrivegetfisales", options, VERSIONS);
}

export { cdkdrivegetfisalesV1 };
