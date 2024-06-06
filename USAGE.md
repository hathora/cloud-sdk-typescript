<!-- Start SDK Example Usage [usage] -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
    hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
    appId: "app-af469a92-5b45-4565-b3c4-b79878de67d2",
});

async function run() {
    const result = await hathoraCloud.appsV1.getApps();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->