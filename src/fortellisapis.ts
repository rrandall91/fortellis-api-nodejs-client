import fs from "fs";
import path from "path";
import { APIS } from "./apis";
import { Auth } from "./auth";

export enum EnvironmentOptions { // "test" | "production";
  test = "test",
  production = "production"
}

export class FortellisApis {
  public readonly auth = new Auth();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;

  constructor() {
    this.discoverAPIs();
  }

  private discoverAPIs() {
    const apis = new APIS();
    const files = fs.readdirSync(path.join(__dirname, "apis"));

    for (const file of files) {
      // eslint-disable-next-line no-prototype-builtins
      if (apis.hasOwnProperty(file)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this[file] = (apis as any)[file].bind(this);
      }
    }
  }
}
