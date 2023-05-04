import { fortellis } from "../../src/index";
import { subscriptionsV1 } from "../../src/apis/subscriptions/v1";
import { authenticateWithoutSubscriptionId } from "../helper";

let api: subscriptionsV1.Subscriptions;

beforeAll(async () => {
  const auth = await authenticateWithoutSubscriptionId();

  api = fortellis.subscriptions({
    version: "v1",
    environment: "test",
    auth,
  });
});

describe("subscriptions", () => {
  test("get subscriptions", async () => {
    const result = await api.list();

    // check if result is defined
    expect(result).toBeDefined();

    // check if result is an array
    expect(Array.isArray(result)).toBeTruthy();

    // if result is an array, check if it has at least one item
    expect(result.length).toBeGreaterThan(0);
  });

  test("get subscription by ID", async () => {
    const { SUBSCRIPTION_ID } = process.env;

    if (!SUBSCRIPTION_ID) {
      throw new Error("SUBSCRIPTION_ID is not defined");
    }

    const result = await api.get(SUBSCRIPTION_ID);

    // check if result is defined
    expect(result).toBeDefined();

    // check if result is an object
    expect(typeof result).toBe("object");

    // check if result has a property named "organizationInfo"
    expect(result).toHaveProperty("organizationInfo");

    // check if result has a property named "appInfo"
    expect(result).toHaveProperty("appInfo");

    // check if result has a property named "entityInfo"
    expect(result).toHaveProperty("entityInfo");

    // check if result has a property named "solutionInfo"
    expect(result).toHaveProperty("solutionInfo");
  });
});
