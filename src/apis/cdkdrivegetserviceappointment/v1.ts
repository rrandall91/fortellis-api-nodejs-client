import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace cdkdrivegetserviceappointmentV1 {
  export interface Options {
    version: "v1";
    auth: AuthResponse;
    environment: EnvironmentOptions;
  }

  type Statuses = "received" | "complete";

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

  interface PostalAddress {
    addressLine1: string;
    addressLine2: string;
    cityStateZip: string;
  }

  interface Customer {
    customerId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    postalAddress: PostalAddress;
    businessPhone: number;
    businessPhoneExt: number;
    mobilePhone: number;
    homePhone: number;
    emailAddress: string;
  }

  interface Vehicle {
    color: string;
    make: string;
    makeAbbr: string;
    model: string;
    modelAbbr: string;
    modelYear: number;
    nofModel: string;
    nofYear: number;
    stockNo: string;
    stockType: string;
    trimLevel: string;
    vehId: string;
    vin: string;
  }

  interface DropOffOrPickUp {
    address: string;
    city: string;
    date: string;
    time: number;
    note: string;
    phoneExt: number;
    phoneNumber: number;
    vanNo: number;
  }

  interface AppointmentDetails {
    seqNo: number;
    comeback: boolean;
    comebackRoNum: string;
    comebackSericeAdvisorId: string;
    comebackTechnicianId: string;
    complaintCode: string;
    cost: number;
    date: string;
    estimatedDuration: number;
    laborType: string;
    lineCode: string;
    lineConcernCode: string;
    lineDispatchCode: string;
    lineServiceEstimate: number;
    lineTechnicianId: number;
    opCode: string;
    opCodeDesc: string;
    sale: number;
    serviceDesc: string;
    serviceRequest: string;
    soldHours: number;
    technicianId: number;
  }

  interface ServiceAppointmentResponse {
    apptId: number;
    apptDate: string;
    apptTime: string;
    apptMileage: number;
    apptOpenDate: string;
    apptOpenTime: string;
    comments: string;
    complaintSummary: string;
    estimatedCompletionDate: string;
    estimatedCompletionTime: string;
    estimatedRoServiceTotal: number;
    estimatedRoTotal: number;
    hostItemId: number;
    noShowFlag: boolean;
    promiseDate: string;
    promiseTime: number;
    remarks: string;
    reservationistId: number;
    salesPersonId: number;
    salesPersonName: string;
    seviceAdvisorId: number;
    seviceAdvisorName: string;
    totalDuration: number;
    transportationType: string;
    waiterFlag: boolean;
    customer: Customer;
    originAppl: string;
    originCode: string;
    apptName: string;
    apptCustName: string;
    apptContactEmail: string;
    apptContactPhone: number;
    vehIdOrCust: string;
    vehicle: Vehicle;
    dropOff: DropOffOrPickUp;
    pickUp: DropOffOrPickUp;
    appointmentDetails: AppointmentDetails[]
  }

  interface ResultResponse {
    data: ServiceAppointmentResponse[]
  }

  export class CDKDriveGetServiceAppointment {
    private baseUrl;

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};

      this.baseUrl =
        this.environment === "production"
          ? "/cdk/drive/serviceappointment/v1"
          : "/drive/serviceappointment/v1";
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getServiceAppointmentsBulk(): Promise<ResponseBody> {
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

    public getServiceAppointmentsDelta(
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
