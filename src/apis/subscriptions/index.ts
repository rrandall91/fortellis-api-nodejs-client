import { getAPI } from "..";
import { subscriptionsV1 } from "./v1";

export const VERSIONS = { v1: subscriptionsV1.Subscriptions };

export function subscriptions(version: "v1"): subscriptionsV1.Subscriptions;
export function subscriptions(
  options: subscriptionsV1.Options
): subscriptionsV1.Subscriptions;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function subscriptions<T = subscriptionsV1.Subscriptions>(
  options: "v1" | subscriptionsV1.Options
) {
  return getAPI<T>("subscriptions", options, VERSIONS);
}

export { subscriptionsV1 };
