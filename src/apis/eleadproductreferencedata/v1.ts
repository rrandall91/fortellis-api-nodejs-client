import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace eleadproductreferencedataV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }
  
  export interface SubStatus {
    subStatus: string;
  }
    
  export interface Status {
    status: string;
    subStatus: SubStatus[];
  }

  type UpType = "Campaign" | "Internet" | "Phone" | "Showroom";

  export interface Link {
    href: string;
    rel: string;
    method: string;
    title: string;
  }

  export interface Source {
    name: string;
    upType: UpType;
    isActive: boolean;
    requestPhrase: string;
    requiresSubSource: boolean;
    hasSubSources: boolean;
    links: Link[];
  }

  interface CollectionResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: any[];
    links: Link[];
  }

  interface StatusCollectionResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Status[];
    links: Link[];
  }

  interface SourceCollectionResponse {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items: Source[];
    links: Link[];
  }
    
  export class EleadProductReferenceData {
    private baseUrl = "/sales/v1/elead/productreferencedata"

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getCompanyOpportunityStatuses(): Promise<StatusCollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companyOpportunityStatuses`,
        },
      };

      return createAPIRequest<StatusCollectionResponse>(params);
    }

    public getCompanyOpportunitySources(): Promise<SourceCollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companyOpportunitySources`,
        },
      };

      return createAPIRequest<SourceCollectionResponse>(params);
    }
    
    public getCompanyOpportunitySubSources(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/opportunitySubSources`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getCompanySalesSteps(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companySalesSteps`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getCompanyPositions(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companyPositions`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getCompanyEmployees(position: string): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companyEmployees`,
          params: { positionName: position },
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getCompanyEmails(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/companyEmails`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getEmployeeEmails(employeeId: string): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/employees/${employeeId}/emails`,
          params: { employeeId },
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getVehicleClasses(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/vehicleClasses`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getVehicleYears(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/vehicleYears`,
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getVehicleMakes(year: number, vehicleClass?: string): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/vehicleMakes`,
          params: { year, class: vehicleClass },
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getVehicleModels(year: number, make: string): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/vehicleModels`,
          params: { year, make },
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
    
    public getVehicleTrims(year: number, make: string, model: string): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }
    
      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/vehicleTrims`,
          params: { year, make, model },
        },
      };
    
      return createAPIRequest<CollectionResponse>(params);
    }
  }
}
