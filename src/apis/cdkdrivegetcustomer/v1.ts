import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace cdkdrivegetcustomerV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  type Statuses = "received" | "complete";

  type CustomerGender = "M" | "F"; // (M = male, F = female)

  type EmailAddressType = "HOME" | "WORK" | "CELL" | "VEHICLE" | "PDA/LAPTOP" | "OTHER" | "NA" | "CD"; // HOME,WORK,CELL,VEHICLE,PDA/LAPTOP,OTHER,,NA (= not available), CD (= customer declined)

  type PreferredContactMethod = "B" | "E" | "F" | "M" | "P" | "T" | "D" | "X" // Null = no preference B = Work Fax E = Main E-mail F = Home Fax M = Mail P = Pager T = Main Telephone D = Do not contact X = Text Message

  interface Link {
    href: string;
  }

  interface Links {
    status: Link;
    result: Link;
  }

  interface ResponseBody {
    operationId: string;
    status: Statuses;
    receivedDateTime: string;
    updatedDateTime: string;
    checkStatusAfterSeconds: number;
    _links: Links;
  }

  interface CustomerName {
    suffix?: string;
    title?: string;
    firstName?: string;
    middleName?: string;
    lastName?: string;
    fullName?: string;
  }

  interface SecondaryCustomerName extends CustomerName {
    companyName?: string | null;
  }

  interface BirthDate {
    day: string;
    month: string;
    year: string;
  }

  interface EmailAddress {
    type: EmailAddressType;
    address: string;
  }

  interface ContactMethod {
    mobilePhone: string;
    primaryPhone: string;
    homePhone: string;
    secondaryHomePhone: string;
    businessPhone: string;
    businessPhoneExt: string;
    textMessageCarrier: string;
    textMessagePhone: string;
    pager: string;
    homeFax: string;
    workFax: string;
    emailAddresses: EmailAddress[];
  }

  interface PostalAddress {
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    county: string;
    country: string;
  }

  interface InsurancePolicy {
    expirationDate: string;
    number: string;
    verifiedBy: string;
    verifiedDate: string;
  }

  interface InsuranceAgency {
    agencyName: string;
    agentName: string;
    phoneNumber: string;
    postalAddress: PostalAddress;
  }

  interface InsuranceCompany {
    name: string;
    phoneNumber: string;
    postalAddress: PostalAddress;
  }

  interface InsuranceInformation {
    policy: InsurancePolicy;
    insuranceAgency: InsuranceAgency;
    insuranceCompany: InsuranceCompany;
  }

  interface OverDues {
    over120Due: string;
    over90Due: string;
    over60Due: string;
    over30Due: string;
  }

  interface SpecialInstructions {
    line1: string;
    line2: string;
    line3: string;
    line4: string;
    line5: string;
  }

  interface CustomerResponse {
    customerId?: string;
    nameCode?: string;
    customerName?: CustomerName;
    secondaryCustomerName?: SecondaryCustomerName;
    birthDate: BirthDate;
    balances: number;
    gender: CustomerGender;
    language: string;
    optOutDate: string;
    optOutTime: string;
    optOutFlag: boolean;
    saleType: string;
    contactMethods: ContactMethod;
    preferredMethod: PreferredContactMethod
    preferredDay: string;
    preferredLanguage: string;
    preferredTime: string;
    blockPhoneFlag: boolean;
    blockEmailFlag: boolean;
    blockMailFlag: boolean;
    postalAddress: PostalAddress;
    preferredContact: string;
    comment: string;
    commentDate: string;
    creditLimit: string;
    currentDue: string;
    dateAdded: string;
    mailability: string;
    isDeleteDataFlag: boolean;
    deleteDataDate: string;
    deleteDataTime: string;
    employer: string;
    overDues: OverDues;
    insurance: InsuranceInformation;
    serviceCustomer: string;
    specialInstructions: SpecialInstructions;
    taxCode: string;
    partsFlag: string;
    partsType: string;
    partsCounterCode: string;
    lastUpdated: string;
    hostItemId: string;
  }

  interface ResultResponse {
    data: CustomerResponse[];
  }

  export class CDKDriveGetCustomer {
    private baseUrl;

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};

      this.baseUrl =
        this.environment === "production" ? "/cdk/drive/customer/v1" : "/drive/customer/v1";
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getCustomersBulk(): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/bulk`,
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getCustomersDelta(
      startDate: string,
      endDate?: string
    ): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/delta`,
          params: {
            startDate,
            endDate,
          },
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getQueryStatus(operationId: string): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/long-operations/${operationId}/status`,
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getQueryResult(operationId: string): Promise<ResultResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/long-operations/${operationId}/result`,
        },
      };

      return createAPIRequest<ResultResponse>(params);
    }
  }
}
