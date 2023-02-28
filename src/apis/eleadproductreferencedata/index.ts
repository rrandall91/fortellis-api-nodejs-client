import { getAPI } from "..";
import { eleadproductreferencedataV1 } from "./v1";

export const VERSIONS = { v1: eleadproductreferencedataV1.EleadProductReferenceData };

export function eleadproductreferencedata(version: "v1"): eleadproductreferencedataV1.EleadProductReferenceData;
export function eleadproductreferencedata(options: eleadproductreferencedataV1.Options): eleadproductreferencedataV1.EleadProductReferenceData;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function eleadproductreferencedata<T = eleadproductreferencedataV1.EleadProductReferenceData>(options: "v1" | eleadproductreferencedataV1.Options) {
  return getAPI<T>("eleadproductreferencedata", options, VERSIONS);
}

export { eleadproductreferencedataV1 };
