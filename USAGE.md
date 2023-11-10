<!-- Start SDK Example Usage -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

(async () => {
    const sdk = new HathoraCloud({
        security: {
            hathoraDevToken: "",
        },
        appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
    });

    const res = await sdk.appV1.createApp({
        appName: "minecraft",
        authConfiguration: {
            anonymous: {},
            google: {
                clientId: "string",
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