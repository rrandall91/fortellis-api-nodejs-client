# Node.js API Client for Fortellis

This is an unofficial Node.js client for the Fortellis API libraries.

## Integrations

- [Elead Product Reference Data](https://apidocs.fortellis.io/apis/9a205e0b-dc96-4cf7-91eb-c0ade5180901)
- [Elead Sales Activities](https://apidocs.fortellis.io/apis/d7440b3e-89ce-4e93-a6ad-56f2c061a77d)
- [Elead Sales Customers](https://apidocs.fortellis.io/apis/29745963-52a6-4068-b9e4-4e0fd0438ac4)
- [Elead Sales Opportunities](https://apidocs.fortellis.io/apis/0f47e065-c996-4a09-bcfa-c89d79102f38)
- [CDK Drive Get Customer](https://apidocs.fortellis.io/apis/f83a79c6-8cf9-4c1a-b45e-b266634eaf90)
- [CDK Drive Get Service Appointment](https://apidocs.fortellis.io/apis/11a8fd45-da51-4747-9e6f-a842828cc1b6)
- [CDK Drive Get Repair Order](https://apidocs.fortellis.io/apis/cf3e1079-e617-4e4d-acd0-21e991f60408)
- [CDK Drive Get FI Sales](https://apidocs.fortellis.io/apis/b54ba111-7874-4c25-b8d9-ba3b3eb722ef)

Following sufficient adoption, additional APIs may be added.

## Usage

### Installation

```bash
npm install fortellis
```

### Example

#### CommonJS

```javascript
const fortellis = require("fortellis");

// authenticate with your Fortellis credentials
const auth = await fortellis.auth.FortellisAuth({
    apiKey: "your-fortellis-api-key",
    apiSecret: "your-fortellis-api-secret",
    subscriptionId: "your-fortellis-application-subscription-id",
});

// create a new instance of the Elead Activities API client
const salesactivities = fortellis.eleadsalesactivities({
    version: "v1",
    environment: "test", // can be "test" or "production"
    auth,
});

// make a request to the API
const response = await salesactivities.getActivityTypes();

// print the response
console.log(response);
```
#### ES6

```javascript
import fortellis from "fortellis";

// authenticate with your Fortellis credentials
const auth = await fortellis.auth.FortellisAuth({
    apiKey: "your-fortellis-api-key",
    apiSecret: "your-fortellis-api-secret",
    subscriptionId: "your-fortellis-application-subscription-id",
});

// create a new instance of the Elead Activities API client
const salesactivities = fortellis.eleadsalesactivities({
    version: "v1",
    environment: "test", // can be "test" or "production"
    auth,
});

// make a request to the API
const response = await salesactivities.getActivityTypes();

// print the response
console.log(response);
```