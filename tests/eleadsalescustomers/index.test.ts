import { fortellis } from "../../src";
import { eleadsalescustomersV1 } from "../../src/apis/eleadsalescustomers/v1";
import { authenticate } from "../helper";

let api: eleadsalescustomersV1.EleadSalesCustomers;

beforeAll(async () => {
  const auth = await authenticate();

  api = fortellis.eleadsalescustomers({
    version: "v1",
    environment: "test",
    auth,
  });
});

describe("eleadsalescustomers", () => {
  test("create customer", async () => {
    const result = await api.createCustomer({
      isBusiness: false,
      title: "Mr",
      firstName: "John",
      middleName: "A",
      lastName: "Doe",
      birthday: "1993-01-30",
      emails: [
        {
          address: "john@doe.com",
          emailType: "Personal",
        }
      ],
      phones: [
        {
          number: "(225) 282-1234",
          phoneType: "Cellular",
          preferredTimeToContact: "Day",
          
        }
      ],
      address: {
        addressLine1: "123 Main St",
        city: "Anytown",
        state: "NY",
        zip: "12345",
        country: "US",
      }
    });

    expect(result).toBeDefined();
    expect(result).toHaveProperty("id");
  });
});
