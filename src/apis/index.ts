import axios, { AxiosRequestConfig, Method } from "axios";
import { v4 as uuidv4 } from "uuid";
import { EnvironmentOptions } from "../fortellisapis";
import { AuthResponse } from "../auth";
import { subscriptions } from "./subscriptions";
import { eleadproductreferencedata } from "./eleadproductreferencedata";
import { eleadsalesactivities } from "./eleadsalesactivities";
import { eleadsalesopportunities } from "./eleadsalesopportunities";
import { eleadsalescustomers } from "./eleadsalescustomers";
import { cdkdrivegetcustomer } from "./cdkdrivegetcustomer";
import { cdkdrivegetserviceappointment } from "./cdkdrivegetserviceappointment";
import { cdkdrivegetrepairorder } from "./cdkdrivegetrepairorder";
import { cdkdrivegetfisales } from "./cdkdrivegetfisales";

export interface GlobalOptions {
  auth?: AuthResponse;
  environment?: EnvironmentOptions
}

export interface ServiceOptions extends GlobalOptions {
  version?: string;
}

export type ResourceURLs = {
  [key in EnvironmentOptions]: string
}

interface RequestConfig extends Omit<AxiosRequestConfig, "method" | "url"> {
  url: string;
  method: Method | string;
}

export interface APIRequestParameters {
  environment: EnvironmentOptions;
  auth: AuthResponse;
  config: RequestConfig;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
export function getAPI<T>(api: string, options: ServiceOptions | string, versions: { [index: string]: any }) {
  let version: string;
  let environment: string | null = null;

  if (typeof options === "string") {
    version = options;
    options = {};
  } else if (typeof options === "object") {
    version = options.version!;
    environment = options.environment!;
    delete options.version;
    delete options.environment;
  } else {
    throw new Error("Argument error: Accepts only string or object");
  }

  try {
    const Cls = versions[version];
    const obj = new Cls(environment, options);
    
    return Object.freeze(obj) as T;
  } catch (error) {
    throw new Error(`Unable to load API ${api} ("${version}"): ${(error as Error).message}`);
  }
}

export function createAPIRequest<T>(options: APIRequestParameters): Promise<T> {
  const baseUrls: ResourceURLs = {
    "test": "https://api.fortellis.io/cdk-test",
    "production": "https://api.fortellis.io",
  };

  return new Promise((resolve, reject) => {
    const {
      environment,
      auth: { accessToken, subscriptionId },
      config,
    } = options;

    return axios({
      ...config,
      baseURL: baseUrls[environment],
      headers: {
        ...config.headers,
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
        "Request-Id": uuidv4(),
        "Subscription-Id": subscriptionId,
      },
    }).then((res) => {
      if (environment === "test") {
        console.info(`[DEBUG] Request: ${res.request?.res?.responseUrl}`);
        console.info(`[DEBUG] Response: Status Code ${res.status}; ${JSON.stringify(res.data)}`);
      }
      resolve(res.data as T);
    })
      .catch((error) => {
        if (environment === "test") {
          console.info(`[DEBUG] Request: ${error.request.res.responseUrl}`);
        }
        
        reject(new Error(`Request failed with status code ${error.response?.status}: ${error.response?.data?.message}`));
      });
  });
}

export class APIS {
  public subscriptions = subscriptions;

  public eleadproductreferencedata = eleadproductreferencedata;

  public eleadsalesactivities = eleadsalesactivities;

  public eleadsalescustomers = eleadsalescustomers;

  public eleadsalesopportunities = eleadsalesopportunities;

  public cdkdrivegetcustomer = cdkdrivegetcustomer;

  public cdkdrivegetserviceappointment = cdkdrivegetserviceappointment;

  public cdkdrivegetrepairorder = cdkdrivegetrepairorder;

  public cdkdrivegetfisales = cdkdrivegetfisales;
}
