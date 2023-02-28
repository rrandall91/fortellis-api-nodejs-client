import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace eleadsalesopportunitiesV2 {
  export interface Options {
    version: "v2";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  export type UpType = "Unknown" | "Campaign" | "Internet" | "Phone" | "Showroom";

  export interface Link {
    href: string;
    rel: string;
    method: string;
    title: string;
  }

  export interface CollectionResponse {
    totalItems: number;
    totalPages: number;
    pageNumber: number;
    pageSize: number;
    links: Link[];
  }

  export interface SoughtVehicle {
    id?: string;
    isNew: boolean;
    yearFrom?: number;
    yearTo?: number;
    make?: string;
    model?: string;
    trim?: string;
    vin?: string;
    priceFrom?: number;
    priceTo?: number;
    maxMileage?: number;
    stockNumber?: string;
    isPrimary: boolean;
  }

  export interface TradeIn {
    id?: string;
    year: number;
    make: string;
    model: string;
    trim: string;
    vin: string;
    estimatedMileage: number;
    interiorColor: string;
    exteriorColor: string;
  }

  export interface SalesPerson {
    id: string;
    firstName: string;
    lastName: string;
    isPrimary: boolean;
    isPositionPrimary: boolean;
    positionName: string;
    positionCode: string;
    links: Link[];
  }

  export interface Message {
    from: string;
    recipients: string[];
    carbonCopies?: string[];
    subject: string;
    body: string;
    isHtml: boolean;
  }

  export interface SalesStep {
    name: string;
    abbreviation: string;
    isActive: boolean;
    sortOrder: number;
  }

  export interface Opportunity {
    id: string;
    customer: {
      id: string;
      links: Link[];
    };
    dateIn: string;
    source: string;
    subSource: string;
    status: string;
    subStatus: string;
    upType: UpType;
    soughtVehicles: SoughtVehicle[];
    tradeIns: TradeIn[];
    salesTeam: SalesPerson[];
    links: Link[];
  }

  export interface OpportunityCollectionResponse extends CollectionResponse {
    items: Opportunity[];
  }

  export interface CreateOpportunityRequest {
    customerId: string;
    dateIn?: string;
    source: string;
    subSource?: string;
    status?: string;
    subStatus?: string;
    upType: UpType;
    comments?: string;
    soughtVehicles: SoughtVehicle[];
    tradeIns?: TradeIn[];
    salesSteps?: SalesStep[];
    salesTeam?: SalesPerson[];
  }

  export class EleadSalesOpportunities {
    private baseUrl = "/sales/v2/elead/opportunities"

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getOpportunity(opportunityId: string): Promise<Opportunity> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${opportunityId}`,
        },
      };

      return createAPIRequest<Opportunity>(params);
    }

    public searchOpportunities(options: { page?: number, pageSize?: number, dateFrom?: string, dateTo?: string }): Promise<OpportunityCollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/search`,
          params: options,
        },
      };

      return createAPIRequest<OpportunityCollectionResponse>(params);
    }

    public searchOpportunitiesByCustomerId(customerId: string, options: { page?: number, pageSize?: number }): Promise<OpportunityCollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/search-by-customerId/${customerId}`,
          params: options,
        },
      };

      return createAPIRequest<OpportunityCollectionResponse>(params);
    }

    public searchDelta(args: { page?: number, pageSize?: number, dateFrom: string }): Promise<OpportunityCollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/searchDelta`,
          params: args,
        },
      };

      return createAPIRequest<OpportunityCollectionResponse>(params);
    }

    public sendEmail(opportunityId: string, message: Message): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/sendEmail`,
          data: {
            opportunityId,
            message,
          },
        },
      };

      return createAPIRequest<{ activityId: string }>(params);
    }

    public createOpportunity(args: CreateOpportunityRequest): Promise<{ opportunity: Opportunity, isDuplicate: boolean, opportunityActivityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}`,
          data: args,
        },
      };

      return createAPIRequest<{ opportunity: Opportunity, isDuplicate: boolean, opportunityActivityId: string }>(params);
    }

    public addComment(opportunityId: string, comment: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/comment`,
          data: {
            opportunityId,
            comment,
          },
        },
      };

      return createAPIRequest<void>(params);
    }

    public addTradeIn(opportunityId: string, tradeIn: TradeIn): Promise<TradeIn> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/tradein`,
          data: {
            opportunityId,
            ...tradeIn,
          },
        },
      };

      return createAPIRequest<TradeIn>(params);
    }

    public deleteTradeIn(tradeInId: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "DELETE",
          url: `${this.baseUrl}/tradein/${tradeInId}`,
        },
      };

      return createAPIRequest<void>(params);
    }

    public addVehicleSought(opportunityId: string, vehicleSought: SoughtVehicle): Promise<SoughtVehicle> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/vehicleSought`,
          data: {
            opportunityId,
            ...vehicleSought,
          },
        },
      };

      return createAPIRequest<SoughtVehicle>(params);
    }

    public deleteVehicleSought(vehicleSoughtId: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "DELETE",
          url: `${this.baseUrl}/vehicleSought/${vehicleSoughtId}`,
        },
      };

      return createAPIRequest<void>(params);
    }

    public reassignPrimarySalesPerson(args: { opportunityId: string, salesPersonId: string, reassignScheduledActivities?: boolean }): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/reassignPrimarySalesperson`,
          data: args,
        },
      };

      return createAPIRequest<void>(params);
    }

    public reassignPrimaryBdcAgent(args: { opportunityId: string, primaryBDCAgentId: string }): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/reassignPrimaryBdcAgent`,
          data: args,
        },
      };

      return createAPIRequest<void>(params);
    }

    public addSalesperson(opportunityId: string, args: { salespersonId: string, isPrimary: boolean, isPositionPrimary: boolean, positionCode: string, reassignPrimaryScheduledActivities?: boolean }): Promise<{ id: string, isPrimary: boolean, isPositionPrimary: boolean, positionCode: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${opportunityId}/salesteam/add`,
          data: { ...args, id: args.salespersonId },
        },
      };

      return createAPIRequest<{ id: string, isPrimary: boolean, isPositionPrimary: boolean, positionCode: string }>(params);
    }

    public removeSalesperson(opportunityId: string, args: { salespersonId: string, positionCode: string }): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${opportunityId}/salesteam/remove`,
          data: args,
        },
      };

      return createAPIRequest<void>(params);
    }

    public updateSubStatus(opportunityId: string, subStatus: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${opportunityId}/subStatus/update`,
          data: { subStatus },
        },
      };

      return createAPIRequest<void>(params);
    }

    public getSalesSteps(opportunityId: string): Promise<{ items: SalesStep[], links: Link[] }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${opportunityId}/salessteps`,
        },
      };

      return createAPIRequest<{ items: SalesStep[], links: Link[] }>(params);
    }

    public undoSalesStep(opportunityId: string, name: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${opportunityId}/salesstep/undo`,
          data: { name },
        },
      };

      return createAPIRequest<void>(params);
    }

    public completeSalesStep(opportunityId: string, name: string): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${opportunityId}/salesstep/complete`,
          data: { name },
        },
      };

      return createAPIRequest<void>(params);
    }

    public setInactive(args: { opportunityId: string, inactiveSubStatus: string, nextExpectedPurchaseDate: string, comments: string }): Promise<void> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${args.opportunityId}/salesstep/complete`,
          data: args,
        },
      };

      return createAPIRequest<void>(params);
    }
  }
}
