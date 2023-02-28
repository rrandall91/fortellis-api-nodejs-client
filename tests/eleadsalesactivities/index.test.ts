import { fortellis } from "../../src";
import { eleadsalesactivitiesV1 } from "../../src/apis/eleadsalesactivities";
import { authenticate } from "../helper";
import { validateActivityType, validateLink } from "./helper";

let api: eleadsalesactivitiesV1.EleadSalesActivities;

beforeAll(async () => {
  const auth = await authenticate();

  api = fortellis.eleadsalesactivities({
    version: "v1",
    environment: "test",
    auth,
  });
});

describe("eleadsalesactivities", () => {
  test("get activity types", async () => {
    const result = await api.getActivityTypes();
        
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
          validateActivityType(item);
        }
      }
    }

    expect(result).toHaveProperty("links"); // check if result has links property

    // if result has links property, check if it is an array
    if (result.links) {
      expect(Array.isArray(result.links)).toBeTruthy();

      // if result.links is an array, check if it has at least one item
      if (result.links.length > 0) {
        for (const item of result.links) {
          validateLink(item);
        }
      }
    }
  });
});
