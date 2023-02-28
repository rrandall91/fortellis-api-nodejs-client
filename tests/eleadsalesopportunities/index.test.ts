import { fortellis } from "../../src";
import { eleadproductreferencedataV1 } from "../../src/apis/eleadproductreferencedata/v1";
import { eleadsalescustomersV1 } from "../../src/apis/eleadsalescustomers/v1";
import { eleadsalesopportunitiesV2 } from "../../src/apis/eleadsalesopportunities/v2";
import { authenticate } from "../helper";

let api: eleadsalesopportunitiesV2.EleadSalesOpportunities;
let sourceApi: eleadproductreferencedataV1.EleadProductReferenceData;
let customerApi: eleadsalescustomersV1.EleadSalesCustomers;

beforeAll(async () => {
  const auth = await authenticate();

  api = fortellis.eleadsalesopportunities({
    version: "v2",
    environment: "test",
    auth,
  });

  sourceApi = fortellis.eleadproductreferencedata({
    version: "v1",
    environment: "test",
    auth,
  });

  customerApi = fortellis.eleadsalescustomers({
    version: "v1",
    environment: "test",
    auth,
  });
});

describe("eleadsalesopportunities", () => {
  test("create opportunity", async () => {
    const { items: sources } = await sourceApi.getCompanyOpportunitySources();
    const selectedSource = sources[0];

    const { items: customers } = await customerApi.searchCustomers({ firstName: "John" });
    const selectedCustomer = customers[0];

    const result = await api.createOpportunity({
      customerId: selectedCustomer.id,
      source: selectedSource.name,
      upType: selectedSource.upType,
      soughtVehicles: [
        {
          isNew: true,
          yearFrom: 2019,
          yearTo: 2021,
          make: "Make 1",
          model: "Model 1",
          trim: "Trim 1",
          vin: "1GJGG25U441140658",
          priceFrom: 20000,
          priceTo: 30000,
          maxMileage: 1000,
          stockNumber: "12345",
          isPrimary: true,
        },
      ],
      tradeIns: [
        {
          year: 2015,
          make: "Make 1",
          model: "Model 1",
          trim: "Trim 1",
          vin: "4A32B2FF0CE049620",
          estimatedMileage: 100000,
          interiorColor: "Color 1",
          exteriorColor: "Color 2",
        },
      ],
    });

    expect(result).toBeDefined();

    console.log(result);
  });
});
