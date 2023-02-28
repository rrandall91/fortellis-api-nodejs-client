import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace eleadsalescustomersV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  type TitleOptions = "Unspecified" | "Mr" | "Mrs" | "Ms" | "Dr" | "Sir" | "Miss" | "Rev" | "MrAndMrs" | "Admr" | "Capt" | "Cdr" | "Chief" | "Col" | "Gen" | "Judge" | "Lt" | "Sgt";
  type EmailTypeOptions = "Unknown" | "Personal" | "Work" | "Pager" | "Alternate";
  type PhoneTypeOptions = "Unknown" | "Home" | "Cellular" | "Work";
  type PhonePreferredTimeToContactOptions = "Unspecified" | "Day" | "Evening"

  interface Email {
    address: string;
    emailType: EmailTypeOptions;
    doNotEmail?: boolean;
    isPreferred?: boolean;
  }

  interface Phone {
    number: string;
    phoneType: PhoneTypeOptions;
    preferredTimeToContact: PhonePreferredTimeToContactOptions
    doNotCall?: boolean;
    doNotText?: boolean;
    preferCall?: boolean;
    preferText?: boolean;
  }

  interface Address {
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
    county?: string;
    doNotMail?: boolean;
    isPreferred?: boolean;
  }

  interface privacySettings {
    name: string;
    value: string;
  }

  interface Link {
    href: string;
    rel: string;
    method: string;
    title: string;
  }

  export interface Customer {
    id: string;
    isBusiness: boolean;
    businessName: string;
    businessContact: string;
    title: TitleOptions;
    firstName: string;
    middleName: string;
    lastName: string;
    nickname: string;
    birthday: string;
    emails: Email[];
    phones: Phone[];
    address: Address;
    privacySettings: privacySettings[];
    links: Link[];
  }

  export interface CustomerRequest {
    isBusiness?: boolean;
    businessName?: string;
    businessContact?: string;
    title?: TitleOptions;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    nickname?: string;
    birthday?: string;
    emails?: Email[];
    phones?: Phone[];
    address?: Address;
  }

  export interface CollectionResponse {
    items: Customer[];
    links: Link[];
  }

  export interface VehicleOptions {
    fuelType: string;
    interiorType: string;
    vehicleCondition: string;
    bodyStyle: string;
    engineDescription: string;
    modelCode: string;
    numberOfCylinders: number;
    numberOfDoors: number;
    transmission: string;
    isAutomaticTransmission: boolean;
    hasAirBags: boolean;
    hasCruiseControl: boolean;
    hasAirConditioning: boolean;
  }

  export interface VehicleOwner {
    isActive: boolean;
    customerId: string;
    vehicleId: string;
  }

  export interface CustomerVehicle {
    id: string;
    exteriorColor: string;
    interiorColor: string;
    mileage: number;
    milesPerWeek: number;
    year: number;
    make: string;
    model: string;
    trim: string;
    vin: string;
    options: VehicleOptions;
    vehicleOwner: VehicleOwner;
  }

  export interface CustomerSearchResult {
    id: string;
    firstName: string;
    lastName: string;
    emails: Email[];
    phones: Phone[];
    address: Address;
    rank: number;
    privacySettings: privacySettings[];
  }

  export class EleadSalesCustomers {
    private baseUrl = "/sales/v1/elead/customers";

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getCustomer(customerId: string): Promise<Customer> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${customerId}`,
        },
      };

      return createAPIRequest<Customer>(params);
    }

    public updateCustomer(customerId: string, customer: CustomerRequest): Promise<Customer> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${customerId}`,
          data: customer,
        },
      };

      return createAPIRequest<Customer>(params);
    }

    public getCustomerOwnedVehicles(customerId: string): Promise<CustomerVehicle> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${customerId}/ownedVehicles`,
        },
      };

      return createAPIRequest<CustomerVehicle>(params);
    }

    public createCustomer(customer: CustomerRequest): Promise<Customer> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}`,
          data: customer,
        },
      };

      return createAPIRequest<Customer>(params);
    }

    public searchCustomers(args: { firstName?: string, lastName?: string, phoneNumber?: string, emailAddress?: string }, options?: { page: number, pageSize: number }): Promise<{ items: CustomerSearchResult[], totalItems: number, totalPages: number, pageNumber: number, pageSize: number, links: Link[] }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/search`,
          params: options,
          data: args,
        },
      };

      return createAPIRequest<{ items: CustomerSearchResult[], totalItems: number, totalPages: number, pageNumber: number, pageSize: number, links: Link[] }>(params);
    }
  }
}
