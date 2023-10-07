<!-- Start SDK Example Usage -->


```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async() => {
  const sdk = new HathoraCloud({
    security: {
      auth0: "",
    },
  });

  const res = await sdk.appV1.createApp({
    appName: "minecraft",
    authConfiguration: {
      anonymous: {},
      google: {
        clientId: "models ah Southeast",
      },
      nickname: {},
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```
<!-- End SDK Example Usage -->