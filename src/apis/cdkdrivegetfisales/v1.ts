import { APIRequestParameters, createAPIRequest } from "..";
import { AuthResponse } from "../../auth";
import { EnvironmentOptions } from "../../fortellisapis";

export namespace cdkdrivegetfisalesV1 {
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

  interface BirthDate {
    day: string;
    month: string;
    year: string;
  }

  interface EmailAddress {
    address: string;
    type: string;
  }

  interface PostalAddress {
    addressLine1: string;
    city: string;
    state: string;
    county: string;
    country: string;
    postalCode: string;
  }

  interface Buyer {
    customerId: string;
    fullName: string;
    secondaryFullName: string;
    birthDate: BirthDate;
    businessPhone: string;
    homePhone: string;
    emailAddresses: EmailAddress[];
    custOrCompanyCode: string;
    postalAddress: PostalAddress;
  }

  interface CommissionsDeal {
    commissionsGross: number;
    commissionsPack: number;
    commOnSaleDlr: number;
    surplusCash: string;
    optionsCommDlr: number;
  }

  interface CommissionsBase {
    dealerCommFeeOption1: string;
    dealerCommFeeOption2: string;
    dealerCommFeeOption3: string;
    dealerCommFeeOption4: string;
    dealerCommFeeOption5: string;
    dealerCommFeeOption6: string;
    dealerCommFeeOption7: string;
    dealerCommFeeOption8: string;
    dealerCommFeeOption9: string;
    dealerCommFeeOption10: string;
    initFee3DealerCommissionBase: string;
    initFee4DealerCommissionBase: string;
    initFee5DealerCommissionBase: string;
    initFee6DealerCommissionBase: string;
    initFee7DealerCommissionBase: string;
    initFee8DealerCommissionBase: string;
    initFee9DealerCommissionBase: string;
    initFee10DealerCommissionBase: string;
    insuranceCommDlr: string;
    levelizedLifeDealerComm: number;
    surplusCashCommBaseForGPComp: string;
    texasGAPInsuranceDealerCommissionBase: number;
    addCapCostFee3DealerCommBase: string;
    addCapCostFee4DealerCommBase: string;
    addCapCostFee5DealerCommBase: string;
    addCapCostFee6DealerCommBase: string;
    addCapCostFee7DealerCommBase: string;
    annualFee3DealerCommBase: string;
    annualFee4DealerCommBase: string;
    annualFee5DealerCommBase: string;
  }

  interface CommissionsSalesPerson1 {
    bonus: number;
    commission: string;
    saleCreditSP: string;
    salesPersonSurplusCash: string;
    totalCommission: number;
  }

  interface CommissionsSalesPerson2 {
    bonus: number;
    commission: string;
    saleCreditSP: string;
    salesPersonSurplusCash: string;
    totalCommission: number;
    purchaseMBISPCommAmount: number;
  }

  interface CommissionsSalesPerson3 {
    bonus: number;
    commission: string;
    saleCreditSP: string;
    salesPersonSurplusCash: string;
  }

  interface Commissions {
    commissionsDeal: CommissionsDeal;
    commissionsBase: CommissionsBase;
    commissionsSalesPerson1: CommissionsSalesPerson1;
    commissionsSalesPerson2: CommissionsSalesPerson2;
    commissionsSalesPerson3: CommissionsSalesPerson3;
  }

  interface CRMEmployee {
    employeeId: string;
    employeeName: string;
    commission: number;
    saleCredit: number;
    spiff: string;
  }

  interface CRM {
    crmCommissionTotal: number;
    crmFlag: boolean;
    crmSalesCreditTotal: number;
    crmSaleType: string;
    crmSpiffTotal: number;
    crmClosingMgr: CRMEmployee;
    crmFIMgr: CRMEmployee;
    crmSalesMgr: CRMEmployee;
    crmSalesPerson1: CRMEmployee;
    crmSalesPerson2: CRMEmployee;
    crmSalesPerson3: CRMEmployee;
  }

  interface Deal {
    accountingAccount: string;
    accountingDate: string;
    adjustedCapCost: number;
    adjustedCostofVehicle: number;
    adjustmentsDealerDefined: number;
    adjustmentsROPO: number;
    adjustmentsStandard: number;
    amountDueAtStart: number;
    apr: number;
    backGross: number;
    balloonAmount: number;
    balloonRate: string;
    bankFee: string;
    baseMSRP: string;
    msrpFee1: string;
    msrpFee2: string;
    baseResidual: number;
    branch: string;
    buyRateAddOn: number;
    buyRateAPR: number;
    buyRateLMF: string;
    calcMethod: string;
    cashCapReduction: number;
    capCostReductionTax2Amount: number;
    cashDown: string;
    cashPrice: number;
    contractDate: string;
    costPrice: number;
    creationDate: string;
    customerCashDown: number;
    customerComments: string;
    dealerDefined1: string;
    dealerDefined2: string;
    dealerDefined3: string;
    dealerDefined4: string;
    dealerDefined5: string;
    dealerDefined6: string;
    dealerDefined7: string;
    dealerDefined8: string;
    dealNo: string;
    dealSource: string;
    dealType: string;
    depositAmount: string;
    depositType: string;
    dmvRosNumber: string;
    dueOnDelivery: number;
    fiDealType: string;
    fiIncome: number;
    financeAmt: number;
    financeCharge: number;
    financeSource: string;
    finInstituteCode: string;
    firstPayDate: string;
    fiWipStatusCode: string;
    frontEndGrossProfit: number;
    frontGross: number;
    grossProfit: number;
    hostItemId: string;
    initialCapCost: string;
    lastPayAmount: number;
    lastPayDate: string;
    leaseEndPercentageRate: number;
    leaseEndValue: number;
    leaseMileageAllowance: number;
    leasePayment: string;
    leaseType: string;
    levelizedLifeAmount: number;
    levelizedLifeCost: string;
    levelizedLifeIncome: string;
    lienHolderAddress: string;
    lienHolderCity: string;
    lienHolderName: string;
    lienHolderName2: string;
    lienHolderPhone: string;
    lienHolderState: string;
    lienHolderZip: string;
    mileageExpected: number;
    mileageExpectedFlag: string;
    mileageMonthlyLimit: string;
    mileagePenaltyAmount: number;
    mileagePenaltyRate: number;
    miscellaneous1: string;
    miscellaneous2: string;
    miscellaneous3: string;
    miscellaneous4: string;
    miscellaneous5: string;
    miscellaneous6: string;
    miscellaneous7: string;
    miscellaneous8: string;
    miscellaneous9: string;
    miscellaneous10: string;
    mSRP: number;
    onePayAmount: string;
    outTheDoorPrice: number;
    paymentAmt: number;
    paymentCode: string;
    payments: number;
    paymentStyle: string;
    pickupPay1: string;
    pickupDate1: string;
    pickupPay2: string;
    pickupDate2: string;
    pickupPay3: string;
    pickupDate3: string;
    salePriceWithWeOwes: number;
    salesAccount: string;
    salesDate: string;
    salesManagementDealType: string;
    saleType: string;
    securityDepositAmount: number;
    securityDepositName: string;
    sellRateAddOn: number;
    sellRateAPR: string;
    sellRateLMF: string;
    slsDealType: string;
    term: number;
    unpaidBalance: number;
    waqNumber: string;
  }

  interface DealAuxiliary {
    fiAux1: string;
    fiAux2: string;
    fiAux3: string;
    fiAux4: string;
    fiAux5: string;
    fiAux6: string;
    fiAux7: string;
    fiAux8: string;
    fiAux9: string;
    fiAux10: string;
    fiAux11: string;
    fiAux12: string;
    fiAux13: string;
    fiAux14: string;
    fiAux15: string;
    fiAux16: string;
    fiAux17: string;
    fiAux18: string;
    fiAux19: string;
    fiAux20: string;
    fiAux21: string;
    fiAux22: string;
    fiAux23: string;
    fiAux24: string;
    fiAux25: string;
    fiAux26: string;
    fiAux27: string;
    fiAux28: string;
    fiAux29: string;
    fiAux30: string;
    fiAux31: string;
    fiAux32: string;
    fiAux33: string;
    fiAux34: string;
    fiAux35: string;
    fiAux36: string;
    fiAux37: string;
    fiAux38: string;
    fiAux39: string;
    fiAux40: string;
    fiAux41: string;
    fiAux42: string;
    fiAux43: string;
    fiAux44: string;
    fiAux45: string;
    fiAux46: string;
    fiAux47: string;
    fiAux48: string;
    fiAux49: string;
    fiAux50: string;
  }

  interface SpecialContract {
    date: string;
    reason: string;
  }

  interface Event {
    dealEvent: string;
    dealEventDate: string;
  }

  interface DealEvent {
    specialContract1: SpecialContract;
    specialContract2: SpecialContract;
    events: Event[];
  }

  interface FeeDetails {
    amount: number;
    name: string;
    costAmount: number;
    profitType: string;
  }

  interface FeeWithFlag extends FeeDetails {
    flag: string;
  }

  interface AnnualFee {
    amount: number;
    name: string;
  }

  interface Fee {
    addToCapCostFee: FeeWithFlag[];
    addToPriceFeeName: string[];
    annualFee: AnnualFee[];
    feeOption: FeeDetails[];
    initialFee: FeeDetails[];
    warrantyFee: number;
    addToCapAmount: string;
  }

  interface Total {
    totalTradeAllowance: number;
    totalTradesACV: number;
    totalTradesNet: number;
    totalTradesOver: number;
    totalTradesPayoff: number;
    totalAnnFees: number;
    totalBackCostAdjustments: number;
    totalBasePrice: number;
    totalCapReduction: number;
    totalCashSurplus: number;
    totalCommission: number;
    totalDMVLicenseFeeCalifornia: number;
    totalDown: number;
    totalFinancedFeeOptions: number;
    totalFrontCostAdjustments: number;
    totalInsurancePremiums: number;
    totalGross: number;
    totalInitFees: number;
    totalOfMonthlyPayments: number;
    totalOptionsFees: number;
    totalTaxableFees: number;
    totalTaxRate: number;
    weOweCostTotal: number;
    weOweSaleTotal: number;
    tax: number;
  }

  interface RebateDetails {
    id: string;
    amount: number;
    code: string;
    description: string;
  }

  interface Incentive {
    incentiveDealer: number;
    incentiveProgram: number;
    rebateAmount: number;
    commonRebateDetails: RebateDetails[];
  }

  interface InsuranceDetails {
    cost: number;
    fee: number;
    income: number;
    deductible: number;
    limit: number;
    limitMiles: number;
    name: string;
    term: number;
  }

  interface InsuranceDetailsWithUnemploymentFlag extends InsuranceDetails {
    unemploymentInsuranceFlag: boolean;
  }

  interface AccidentalHealthInsurance {
    cost: number;
    income: number;
    monthlyMaxAmount: number;
    premium: number;
    rate: number;
    term: number;
  }

  interface CreditLifeInsurance {
    cost: number;
    income: number;
    monthlyMaxAmount: number;
    premium: number;
    rate: number;
    term: number;
    insuranceType: string;
  }

  interface MechanicalBreakDownInsurance {
    carrier: string;
    cost: number;
    deductible: number;
    eligComment: string;
    eligFlag: string;
    fee: number;
    income: number;
    limit: number;
    limitMax: string;
    name: string;
    term: number;
    policyNo: string;
    purchaseCost: number;
  }

  interface Insurance {
    extWarrantyExpMilesLease: number;
    extWarrantyTermLease: number;
    insuranceTypeCode: string;
    texasGAPInsuranceAmount: number;
    insurance1: InsuranceDetails;
    insurance2: InsuranceDetails;
    insurance3: InsuranceDetailsWithUnemploymentFlag;
    accidentalHealthInsurance: AccidentalHealthInsurance;
    creditLifeInsurance: CreditLifeInsurance;
    mechanicalBreakDownInsurance: MechanicalBreakDownInsurance;
  }

  interface SalesPerson {
    assnSlsperson: string;
    billingClerk: string;
    closingMgr: string;
    deliveryCoord: string;
    fiMgr1: string;
    fiMgr2: string;
    salesMgr: string;
    salesperson1: string;
    salesperson2: string;
    salesperson3: string;
  }

  interface Vehicle {
    vin: string;
    make: string;
    makeName: string;
    model: string;
    modelName: string;
    modelNo: string;
    modelType: string;
    year: number;
    age: number;
    bodyStyle: string;
    color: string;
    stockNo: string;
    vehicleMileage: number;
    vehInventoryCompany: string;
    vehSaleCompany: string;
    gLVehicleCost: number;
  }

  interface GoodsAndServicesTaxDetails {
    lstgstAmount: number;
    lstgstRate: number;
    lstgstRateFlat: string;
    lstgstType: string;
    upFrontGST: number;
    upFrontPST: number;
  }

  interface LuxuryTaxDetails {
    amount: number;
    financedAmount: number;
    monthlyAmount: number;
    totalMonthlyAmount: number;
    uSLuxuryExciseTaxAmount: number;
    upFrontAmount: number;
  }

  interface SalesTaxDetails {
    amount: number;
    financedAmount: number;
    monthlyAmount: number;
    totalMonthlyAmount: number;
    uSLuxuryExciseTaxAmount: number;
    upFrontAmount: number;
  }

  interface PurchaseFlexibleTaxDetails {
    amount: number;
    base: number;
    name: string;
    rate: number;
    max: number;
    maxCode: number;
  }

  interface TaxCommonDetails {
    amount: number;
    base: number;
    name: string;
    rate: number;
  }

  interface TaxDetails {
    serviceTaxAmount: number;
    leaseFlexibleTax1Amount: number;
    leaseFlexibleTax2Amount: number;
    goodsAndServicesTaxDetails: GoodsAndServicesTaxDetails;
    luxuryTaxDetails: LuxuryTaxDetails;
    salesTaxDetails: SalesTaxDetails;
    purchaseFlexibleTaxDetails: PurchaseFlexibleTaxDetails[];
    taxCommonDetails: TaxCommonDetails[];
  }
  
  interface TradeDetails {
    netTrade: number;
    tradeACV: string;
    tradeColor: string;
    tradeGross: string;
    tradeMake: string;
    tradeMakeName: string;
    tradeMileage: string;
    tradeModel: string;
    tradeModelName: string;
    tradeModelNo: string;
    tradeModelType: string;
    tradeOver: number;
    tradePayOff: string;
    tradeStock: string;
    tradeStyle: string;
    tradeVIN: string;
    tradeYear: string;
  }

  interface Trade {
    tradeDetails: TradeDetails[];
    tradeDealerDefined1: string;
    tradeDealerDefined2: string;
    tradeDealerDefined3: string;
    tradeDealerDefined4: string;
    tradeDealerDefined5: string;
    tradeDealerDefined6: string;
    tradeDealerDefined7: string;
    tradeDealerDefined8: string;
  }

  interface WeOwes {
    backWeOwes: number;
    frontWeOwes: number;
    frontWeOwesGrossCost: number;
    frontWeOwesGrossSales: number;
    weOweBackCostTotal: number;
    weOweBackSaleTotal: number;
    weOweFrontGrossSales: number;
    weOweResidualTableTotal: number;
    weOweResidualTotal: number;
    weOweSaleHardTotal: number;
    weOweSaleSoftTotal: number;
  }
  
  interface FISaleResponse {
    buyer: Buyer;
    cobuyer: Buyer;
    commissions: Commissions;
    crm: CRM;
    deal: Deal;
    dealAuxiliary: DealAuxiliary;
    dealEvents: DealEvent;
    fees: Fee;
    totals: Total;
    incentives: Incentive;
    insurance: Insurance;
    salesPersons: SalesPerson;
    vehicle: Vehicle;
    tax: TaxDetails;
    trade: Trade;
    weOwes: WeOwes;
  }

  interface ResultResponse {
    data: FISaleResponse[];
  }

  export class CDKDriveGetFISales {
    private baseUrl;

    private environment: EnvironmentOptions;

    private options: Options;

    constructor(environment: EnvironmentOptions, options: Options) {
      this.environment = EnvironmentOptions[environment] || "test";
      this.options = options || {};

      this.baseUrl =
        this.environment === "production"
          ? "/cdk/drive/fisales/v1"
          : "/drive/fisales/v1";
    }

    get auth(): AuthResponse {
      return this.options.auth;
    }

    public getFISalesBulk(startDate: string, endDate?: string): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/bulk`,
          params: {
            startDate,
            endDate,
          },
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getFISalesOpenBulk(startDate: string, endDate?: string): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/open`,
          params: {
            startDate,
            endDate,
          },
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getFISalesOpenDelta(
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

    public getFISalesClosedBulk(startDate: string, endDate?: string): Promise<ResponseBody> {
      if (!this.auth) {
        throw new Error("Not authenticated");
      }

      const params: APIRequestParameters = {
        environment: this.environment,
        auth: this.auth,
        config: {
          method: "GET",
          url: `${this.baseUrl}/closed`,
          params: {
            startDate,
            endDate,
          },
        },
      };

      return createAPIRequest<ResponseBody>(params);
    }

    public getFISalesClosedDelta(
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
