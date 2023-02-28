import { fortellis } from "../../src";
import { eleadproductreferencedataV1 } from "../../src/apis/eleadproductreferencedata/v1";
import { authenticate } from "../helper";
import { validateStatuses, validateSources } from "./helper";

let api: eleadproductreferencedataV1.EleadProductReferenceData;

beforeAll(async () => {
  const auth = await authenticate();

  api = fortellis.eleadproductreferencedata({
    version: "v1",
    environment: "test",
    auth,
  });
});

describe("eleadproductreferencedata", () => {
  test("get company opportunity statuses", async () => {
    const result = await api.getCompanyOpportunityStatuses();
        
    // check if result is defined
    expect(result).toBeDefined(); 

    // check if result has items property
    expect(result).toHaveProperty("items"); 

    // if result has items property, check if it is an array
    if (result.items) {
      expect(Array.isArray(result.items)).toBeTruthy();

      // if result.items is an array, check if it has at least one item
      if (result.items.length > 0) {
        for (const item of result.items) {
          validateStatuses(item);
        }
      }
    }
  });

  test("get company opportunity sources", async () => {
    const result = await api.getCompanyOpportunitySources();

    // check if result is defined
    expect(result).toBeDefined(); 

    // check if result has items property
    expect(result).toHaveProperty("items"); 

    // if result has items property, check if it is an array
    if (result.items) {
      expect(Array.isArray(result.items)).toBeTruthy();

      // if result.items is an array, check if it has at least one item
      if (result.items.length > 0) {
        for (const item of result.items) {
          validateSources(item);
        }
      }
    }
  });
});
