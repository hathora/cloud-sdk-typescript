<!-- Start SDK Example Usage [usage] -->
```typescript
import { HathoraCloud } from "@hathora/cloud-sdk-typescript";

const hathoraCloud = new HathoraCloud({
  hathoraDevToken: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await hathoraCloud.tokensV1.getOrgTokens(
    "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
  );

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->