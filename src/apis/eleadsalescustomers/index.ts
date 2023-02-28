import { getAPI } from "..";
import { eleadsalescustomersV1 } from "./v1";

export const VERSIONS = { v1: eleadsalescustomersV1.EleadSalesCustomers };

export function eleadsalescustomers(version: "v1"): eleadsalescustomersV1.EleadSalesCustomers;
export function eleadsalescustomers(options: eleadsalescustomersV1.Options): eleadsalescustomersV1.EleadSalesCustomers;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function eleadsalescustomers<T = eleadsalescustomersV1.EleadSalesCustomers>(options: "v1" | eleadsalescustomersV1.Options) {
  return getAPI<T>("eleadsalescustomers", options, VERSIONS);
}

export { eleadsalescustomersV1 };
