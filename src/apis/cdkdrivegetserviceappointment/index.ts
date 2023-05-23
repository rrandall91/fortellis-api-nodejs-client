import { getAPI } from "..";
import { cdkdrivegetserviceappointmentV1 } from "./v1";

export const VERSIONS = { v1: cdkdrivegetserviceappointmentV1.CDKDriveGetServiceAppointment };

export function cdkdrivegetserviceappointment(version: "v1"): cdkdrivegetserviceappointmentV1.CDKDriveGetServiceAppointment;
export function cdkdrivegetserviceappointment(
  options: cdkdrivegetserviceappointmentV1.Options
): cdkdrivegetserviceappointmentV1.CDKDriveGetServiceAppointment;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function cdkdrivegetserviceappointment<T = cdkdrivegetserviceappointmentV1.CDKDriveGetServiceAppointment>(
  options: "v1" | cdkdrivegetserviceappointmentV1.Options
) {
  return getAPI<T>("cdkdrivegetserviceappointment", options, VERSIONS);
}

export { cdkdrivegetserviceappointmentV1 };
