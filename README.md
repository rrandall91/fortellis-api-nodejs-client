# Node.js API Client for Fortellis

This is an unofficial Node.js client for the Fortellis API.

## Roadmap

Currently, the roadmap consists of building a client for the following Elead APIs:

- [x] Elead Product Reference Data API
- [x] Elead Sales Activities API
- [x] Elead Sales Customers API
- [x] Elead Sales Opportunities API

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