import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace eleadsalesactivitiesV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  export interface Link {
    href: string;
    rel: string;
    method: string;
    title: string;
  }

  export interface ActivityType {
    id: number;
    name: string;
    links: Link[];
  }

  interface CollectionResponse {
    items: ActivityType[];
    links: Link[];
    next(): Promise<CollectionResponse>;
  }

  interface ActivityOutcome {
    id: string;
    name: string;
  }

  interface ActivityHistoryParams {
    fromDate?: string;
    toDate: string;
    activityTypes?: string[];
    openActivitiesOnly?: boolean;
    outcomes?: string[];
  }

  export interface ActivityMessage {
    date: string;
    from: string;
    to: string;
    subject: string;
    body: string;
  }

  export interface Activity {
    id: string;
    activityType: string;
    category: string;
    name: string;
    completedDate: string;
    dueDate: string;
    closedDate: string;
    outcome: string;
    createdBy: string;
    assignedTo: string;
    completedBy: string;
    opportunityId: string;
    upType: string;
    source: string;
    subSource: string;
    createdByUserId: string;
    assignedToUserId: string;
    completedByUserId: string;
    message?: ActivityMessage[];
  }

  interface ActivityHistoryResponse {
    items: Activity[];
    links: Link[];
  }

  interface Call {
    callIdentifier: string;
    startDateTime: string;
    durationSeconds: number;
    numberDialed: string;
    messageUrl?: string;
  }

  interface InboundCall extends Call {
    callerNumber: string;
  }

  interface OutboundCall extends Call {
    agentId: string;
  }

  export class EleadSalesActivities {
    private baseUrl = "/sales/v1/elead/activities"

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getActivityTypes(): Promise<CollectionResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/types`,
        },
      };

      return createAPIRequest<CollectionResponse>(params);
    }

    public completeActivity(args: { opportunityId: string, completedDate: string, activityName: string, activityType: number, comments?: string, message?: { from: string, recipients: string[], carbonCopies?: string[], subject: string, body: string, isHtml: boolean }, completedByEmployeeId?: string }): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/complete`,
          data: args,
        },
      };

      return createAPIRequest<{ activityId: string}>(params);
    }

    public scheduleActivity(args: { opportunityId: string, dueDate: string, activityName: string, activityType: number, comments?: string, assignToEmployeeId?: string }): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/schedule`,
          data: args,
        },
      };

      return createAPIRequest<{ activityId: string}>(params);
    }

    public createActivityMessage(args: { activityId: string, message?: { from: string, recipients: string[], carbonCopies?: string[], subject: string, body: string, isHtml: boolean } }): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/message`,
          data: args,
        },
      };

      return createAPIRequest<{ activityId: string}>(params);
    }

    public updateActivity(activityId: string, args: { currentActivity: { assignedToUserId: string, comments: string, dueDate: string }, nextActivity: { assignedToUserId: string, comments: string, dueDate: string, outcomeId: string } }): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/update/${activityId}`,
          data: args,
        },
      };

      return createAPIRequest<{ activityId: string}>(params);
    }

    public getActivityHistoryByCustomerId(customerId: string, args?: ActivityHistoryParams): Promise<ActivityHistoryResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/history/byCustomerId/${customerId}`,
          params: args,
        },
      };

      return createAPIRequest<ActivityHistoryResponse>(params);
    }

    public getActivityHistoryByOpportunityId(opportunityId: string, args?: ActivityHistoryParams): Promise<ActivityHistoryResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/history/byOpportunityId/${opportunityId}`,
          params: args,
        },
      };

      return createAPIRequest<ActivityHistoryResponse>(params);
    }

    public getActivityHistoryByUserId(userId: string, args?: ActivityHistoryParams): Promise<ActivityHistoryResponse> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/history/byUserId/${userId}`,
          params: args,
        },
      };

      return createAPIRequest<ActivityHistoryResponse>(params);
    }

    public getActivityOutcomes(activityId: string): Promise<{ items: ActivityOutcome[], links: Link[]}> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${activityId}/outcomes`,
        },
      };

      return createAPIRequest<{ items: ActivityOutcome[], links: Link[]}>(params);
    }

    public getActivityById(activityId: string): Promise<{ items: ActivityOutcome[], links: Link[]}> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/${activityId}`,
        },
      };

      return createAPIRequest<{ items: ActivityOutcome[], links: Link[]}>(params);
    }

    public addInboundCallActivity(activityId: string, inboundCall: InboundCall): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${activityId}/inboundCall`,
          data: {
            activityId,
            inboundCall,
          }
        },
      };

      return createAPIRequest<{ activityId: string }>(params);
    }

    public addOutboundCallActivity(activityId: string, outboundCall: OutboundCall): Promise<{ activityId: string }> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "POST",
          url: `${this.baseUrl}/${activityId}/outboundCall`,
          data: {
            activityId,
            outboundCall,
          }
        },
      };

      return createAPIRequest<{ activityId: string }>(params);
    }
  }
}

