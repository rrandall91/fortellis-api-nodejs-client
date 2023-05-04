import axios from "axios";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace subscriptionsV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  export interface Subscription {
    subscriptionId: "string";
    orgId: "string";
    orgName: "string";
    status: "string";
    activationDate: "string";
    environment: "string";
    deactivationDate: "string";
  }

  export interface OrganizationInfo {
    id: "string";
    name: "string";
    address: "string";
    countryCode: "string";
    phoneNumber: "string";
  }

  export interface AppInfo {
    id: "string";
    name: "string";
    developer: "string";
    contactEmail: "string";
  }

  export interface EntityInfo {
    id: "string";
    name: "string";
    address: "string";
    countryCode: "string";
    phoneNumber: "string";
  }

  export interface SolutionInfo {
    id: "string";
    name: "string";
    developer: "string";
    contactEmail: "string";
  }

  export interface SubscriberContext {
    organizationInfo: OrganizationInfo;
    appInfo: AppInfo;
    entityInfo: EntityInfo;
    solutionInfo: SolutionInfo;
  }

  export class Subscriptions {
    private baseUrl = "https://subscriptions.fortellis.io";

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public list(): Promise<Subscription[]> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          baseURL: this.baseUrl,
          url: "/v1/solution/subscriptions",
          headers: { Authorization: `Bearer ${this.auth.accessToken}` },
        })
          .then((res) => {
            if (this.environment === "test") {
              console.info(`[DEBUG] Request: ${res.request?.res?.responseUrl}`);
              console.info(`[DEBUG] Response: Status Code ${res.status}; ${JSON.stringify(res.data)}`);
            }

            const subscriptions = res.data.subscriptions.filter((subscription: Subscription) => subscription.environment.toLowerCase() === this.environment.toLowerCase());

            resolve(subscriptions);
          })
          .catch((error) => {
            if (this.environment === "test") {
              console.info(`[DEBUG] Request: ${error.request.res.responseUrl}`);
            }

            reject(
              new Error(
                `Request failed with status code ${error.response.status}: ${error.response.data.message}`
              )
            );
          });
      });
    }

    public get(subscriptionId: string): Promise<SubscriberContext> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      return new Promise((resolve, reject) => {
        axios({
          method: "GET",
          baseURL: this.baseUrl,
          url: `/subscriptions/${subscriptionId}/context`,
          headers: { Authorization: `Bearer ${this.auth.accessToken}` },
        })
          .then((res) => {
            if (this.environment === "test") {
              console.info(`[DEBUG] Request: ${res.request?.res?.responseUrl}`);
              console.info(
                `[DEBUG] Response: Status Code ${res.status}; ${JSON.stringify(
                  res.data
                )}`
              );
            }

            resolve(res.data);
          })
          .catch((error) => {
            if (this.environment === "test") {
              console.info(`[DEBUG] Request: ${error.request.res.responseUrl}`);
            }

            reject(
              new Error(
                `Request failed with status code ${error.response.status}: ${error.response.data.message}`
              )
            );
          });
      });
    }
  }
}
