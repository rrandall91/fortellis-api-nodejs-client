import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace cdkdrivegetrepairorderV1 {
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

  export interface Fee {
    cost: string;
    id: string;
    laborType: string;
    lineCode: string;
    lopOrPartFlag: string;
    lopOrPartSeqNo: number;
    mcdPercentage: string;
    opCode: string;
    opCodeDesc: string;
    sale: string;
    sequenceNo: number;
    type: string;
  }

  export interface Fee2 {
    cost: string;
    id: string;
    laborType: string;
    lineCode: string;
    lopOrPartFlag: string;
    lopOrPartSeqNo: number;
    mcdPercentage: string;
    opCode: string;
    opCodeDesc: string;
    sale: string;
    sequenceNo: number;
    type: string;
  }
  
  export interface Address {
    addressLine1: string;
    addressLine2: string;
    cityStateZip: string;
  }

  export interface PhoneNumber {
    number: string;
    extension: string;
    description: string;
  }

  export interface EmailAddress {
    address: string;
    desc: string;
  }

  export interface Customer {
    customerId: string;
    name1: string;
    name2?: string;
    address: Address;
    phoneNumbers: PhoneNumber[];
    emailAddresses: EmailAddress[];
  }

  export interface Deductible {
    sequenceNo: number;
    lineCodes: string;
    laborType: string;
    maximumAmount: number;
    actualAmount: number;
    laborAmount: number;
    partsAmount: number;
  }

  export interface Discount {
    appliedBy: string;
    classOrType: string;
    debitAccountNo: string;
    debitControlNo: string;
    debitTargetCo: string;
    desc: string;
    id: string;
    level: string;
    lineCode: string;
    lopSeqNo: number;
    managerOverride: boolean;
    originalDiscount: number;
    overrideAmount: number;
    overrideGPAmount: number;
    overrideGPPercent: number;
    overridePercent: number;
    overrideTarget: string;
    sequenceNo: number;
    partsDiscount: number;
    laborDiscount: number;
    totalDiscount: number;
    userId: string;
  }
  
  export interface Part {
    sequenceNo: number;
    lineCode: string;
    laborSequenceNo: number;
    number: string;
    bin1: string;
    partClass: string;
    comp: string;
    compLineCode: string;
    coreCost: string;
    coreSale: string;
    cost: string;
    desc: string;
    employeeId: string;
    extendedCost: string;
    extendedSale: string;
    laborType: string;
    list: string;
    mcdPercentage: string;
    outsideSalesmanId: number;
    qtyBackOrdered: number;
    qtyFilled: number;
    qtyOnHand: number;
    qtyOrdered: number;
    qtySold: number;
    sale: string;
    source: string;
    specialStatus: string;
    unitServiceCharge: string;
    fees: Fee[];
  }
  
  export interface Hour {
    sequenceNo: number;
    lineCode: string;
    laborType: string;
    mcdPercentage: string;
    technicianId: number;
    hourType: string;
    percentage: string;
    sale: string;
    cost: string;
    actualHours: string;
    flagHours: string;
    soldHours: string;
    otherHours: string;
    timeCardHours: string;
  }
  
  export interface WarrantyList {
    lineCode: string;
    laborSequenceNo: string;
    failureCode: string;
    failedPartNo: string;
    failedPartsCount: number;
    claimType: string;
    authorizationCode: string;
    conditionCode: string;
  }

  export interface LaborOperation {
    sequenceNo: number;
    lineCode: string;
    opCode: string;
    opCodeDesc: string;
    type: string;
    mcdPercentage: string;
    forcedShopCharge: string;
    sale: string;
    cost: string;
    technicianIds: string[];
    bookedDate: string;
    bookedTime: string;
    flagHours: string;
    actualHours: string;
    soldHours: string;
    otherHours: string;
    timeCardHours: string;
    comebackFlag: boolean;
    comebackRO: string;
    comebackSA: number;
    comebackTech: number;
    parts: Part[];
    fees: Fee2[];
    hours: Hour[];
  }

  export interface Line {
    actualWork: string;
    lineCode: string;
    complaintCode: string;
    serviceRequest: string;
    campaignCode: string;
    addOnFlag: boolean;
    statusCode: string;
    statusDesc: string;
    comebackFlag: boolean;
    dispatchCode: string;
    estimatedDuration: string;
    cause: string;
    storySequenceNo: number;
    storyEmployeeNo: string;
    storyText: string;
    bookerNo: number;
    laborOperations: LaborOperation[];
    warrantyList: WarrantyList[];
  }

  export interface Operation {
    line: Line;
  }

  export interface Ml {
    sequenceNo: string;
    lineCode: string;
    type: string;
    opCode: string;
    opCodeDesc: string;
    laborType: string;
    mcdPercentage: string;
    sale: string;
    gogPrice: string;
    miscPrice: string;
    subletPrice: string;
    gogCost: string;
    subletCost: string;
    miscCost: string;
    cost: string;
  }

  export interface Payment {
    insuranceFlag: boolean;
    paymentAmount: string;
    code: string;
  }

  export interface TechnicianPunchTime {
    technicianId: number;
    workDate: string;
    timeOn: string;
    timeOff: string;
    duration: string;
    lineCode: string;
    workType: string;
    alteredFlag: boolean;
  }

  export interface Total {
    payType: string;
    roSale: string;
    roCost: string;
    laborSale: string;
    laborCost: string;
    laborCount: number;
    laborDiscount: string;
    laborSalePostDed: string;
    partsSale: string;
    partsCost: string;
    partsCount: number;
    partsDiscount: string;
    partsSalePostDed: string;
    miscSale: string;
    miscCost: string;
    miscCount: number;
    lubeSale: string;
    lubeCost: string;
    lubeCount: number;
    subletSale: string;
    subletCost: string;
    subletCount: number;
    shopChargeSale: string;
    shopChargeCost: string;
    roTax: string;
    stateTax: string;
    localTax: string;
    supp2Tax: string;
    supp3Tax: string;
    supp4Tax: string;
    actualHours: string;
    soldHours: string;
    otherHours: string;
    timeCardHours: string;
    coreCost: string;
    coreSale: string;
    discount: string;
    flagHours: string;
    forcedShopCharge: string;
    roSalePostDed: string;
  }

  export interface Vehicle {
    vin: string;
    deliveryDate: string;
    make: string;
    makeDesc: string;
    model: string;
    modelDesc: string;
    year: number;
    licenseNumber: string;
    vehicleColor: string;
    vehId: string;
    lotLocation: string;
  }

  export interface VisitInspection {
    formName: string;
    status: string;
    updateDate: string;
    updateTime: string;
    comment: string;
    technicianId: number;
    itemNo: number;
    itemOpCode: string;
    itemOpCodeDesc: string;
    itemStatus: string;
    itemStatusDesc: string;
    itemNotes: string;
  }

  export interface RepairOrderResponse {
    roNumber: string;
    hostItemId: string;
    addOnFlag: boolean;
    apptDate: string;
    apptTime: string;
    apptFlag: boolean;
    blockAutoMsg: boolean;
    bookedDate: string;
    bookedTime: string;
    bookerNo: string;
    cashier: string;
    closedDate: string;
    comebackFlag: boolean;
    comments: string;
    contactEmailAddress: string;
    contactPhoneNumber: string;
    customer: Customer;
    dedMultiValueCount: number;
    deductibles: Deductible[];
    discounts: Discount[];
    disMultiValueCount: number;
    emailMultiValueCount: number;
    estimatedCompletionDate: string;
    estimatedCompletionTime: string;
    feeMultiValueCount: number;
    hasCustPayFlag: boolean;
    hasIntPayFlag: boolean;
    hasWarrPayFlag: boolean;
    hrsMultiValueCount: number;
    lastServiceDate: string;
    warMultiValueCount: number;
    lbrMultiValueCount: number;
    linMultiValueCount: number;
    operations: Operation[];
    mileage: number;
    mileageOut: number;
    mileageLastVisit: number;
    mlsMultiValueCount: number;
    mls: Ml[];
    openDate: string;
    openTime: string;
    origPromisedDate: string;
    origPromisedTime: string;
    isOrigWaiter: boolean;
    payCPTotal: string;
    payMultiValueCount: number;
    totalPaymentMade: string;
    payBalanceDue: string;
    payments: Payment[];
    phoneMultiValueCount: number;
    postedDate: string;
    priorityValue: number;
    promisedDate: string;
    promisedTime: string;
    prtMultiValueCount: number;
    punMultiValueCount: number;
    purchaseOrderNo: string;
    rapApptId: string;
    rapMultiValueCount: number;
    remarks: string;
    rentalFlag: boolean;
    serviceAdvisor: number;
    isSoldByDealer: boolean;
    isSpecialCustomer: boolean;
    statusCode: string;
    statusDesc: string;
    tagNo: string;
    technicianPunchTimes: TechnicianPunchTime[];
    totMultiValueCount: number;
    totals: Total[];
    vehicle: Vehicle;
    visItemMultiValueCount: number;
    visitInspection: VisitInspection[];
    voidedDate: string;
    isCustomerWaiting: boolean;
  }

  interface ResultResponse {
    data: RepairOrderResponse[];
  }

  export class CDKDriveGetRepairOrder {
    private baseUrl;

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};

      this.baseUrl =
        this.environment === "production"
          ? "/cdk/drive/servicerepairorder/v1"
          : "/drive/servicerepairorder/v1";
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getWIPRepairOrders(): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/wip`,
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getOpenRepairOrdersBulk(): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/open`,
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getOpenRepairOrdersDelta(
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
          url: `${this.baseUrl}/open/delta`,
          params: {
            startDate,
            endDate,
          },
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getClosedRepairOrdersBulk(): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/closed`,
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getClosedRepairOrdersDelta(
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
          url: `${this.baseUrl}/closed/delta`,
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
