import * as dotenv from "dotenv";
import { fortellis } from "../src/index";
import { AuthResponse } from "../src/auth";

dotenv.config();
jest.setTimeout(20000);

export async function authenticate(): Promise<AuthResponse> {
  const { API_KEY, API_SECRET, SUBSCRIPTION_ID } = process.env;

  return fortellis.auth.FortellisAuth({
    apiKey: API_KEY || "",
    apiSecret: API_SECRET || "",
    subscriptionId: SUBSCRIPTION_ID || "",
  });
}

export async function authenticateWithoutSubscriptionId(): Promise<AuthResponse> {
  const { API_KEY, API_SECRET } = process.env;

  return fortellis.auth.FortellisAuth({
    apiKey: API_KEY || "",
    apiSecret: API_SECRET || "",
  });
}
