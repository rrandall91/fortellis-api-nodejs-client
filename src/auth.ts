import axios from "axios";

const FORTELLIS_AUTH_URL = "https://identity.fortellis.io/oauth2/aus1p1ixy7YL8cMq02p7/v1/token";

export interface Options {
  apiKey: string;
  apiSecret: string;
  subscriptionId: string;
}

export interface JWT {
  tokenType: string;
  expiresIn: number;
  accessToken: string;
  scope: string;
}

export interface AuthResponse {
  accessToken: string;
  subscriptionId: string;
}

export class Auth {
  private subscriptionId: string | null = null;

  private jwt: JWT | null = null;

  get accessToken(): string | null {
    if (!this.jwt?.accessToken) {
      return null;
    }

    return this.jwt.accessToken;
  }

  public FortellisAuth(credentials: Options): Promise<AuthResponse> {
    return new Promise((resolve, reject) => {
      const token = this.encodeCredentials(credentials);

      if (!token) {
        reject(new Error("Credentials not provided"));
      }

      this.subscriptionId = credentials.subscriptionId;

      axios({
        method: "post",
        url: FORTELLIS_AUTH_URL,
        params: {
          grant_type: "client_credentials",
          scope: "anonymous",
        },
        headers: { Authorization: `Basic ${token}` },
      })
        .then((res) => {
          // eslint-disable-next-line camelcase
          const { token_type, expires_in, access_token, scope } = res.data;

          this.jwt = {
            tokenType: token_type,
            expiresIn: expires_in,
            accessToken: access_token,
            scope,
          };
        })
        .then(() => {
          const { subscriptionId, accessToken } = this;

          if (subscriptionId && accessToken) {
            resolve({ subscriptionId, accessToken });
          }

          reject(new Error("Failed to obtain subscription ID and access token"));
        })
        .catch((error: Error) => {
          reject(error.message);
        });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private encodeCredentials(credentials: Options): string | null {
    if (!credentials.apiKey || !credentials.apiSecret) {
      return null;
    }

    return Buffer.from(`${credentials.apiKey}:${credentials.apiSecret}`).toString("base64");
  }
}
