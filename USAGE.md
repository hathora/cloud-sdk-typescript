<!-- Start SDK Example Usage -->


```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";
import { CreateAppResponse, CreateAppSecurity } from "@hathora/cloud-sdk-typescript/dist/sdk/models/operations";

const sdk = new HathoraCloud();
const operationSecurity: CreateAppSecurity = {
  auth0: "",
};

sdk.appV1.createApp({
  appName: "minecraft",
  authConfiguration: {
    anonymous: {},
    google: {
      clientId: "corrupti",
    },
    nickname: {},
  },
}, operationSecurity).then((res: CreateAppResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->