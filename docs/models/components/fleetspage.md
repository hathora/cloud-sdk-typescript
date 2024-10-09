# FleetsPage

## Example Usage

```typescript
import { FleetsPage } from "@hathora/cloud-sdk-typescript/models/components";

let value: FleetsPage = {
  fleets: [
    {
      orgId: "org-6f706e83-0ec1-437a-9a46-7d4281eb2f39",
      fleetId: "<id>",
    },
  ],
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `fleets`                                               | [components.Fleet](../../models/components/fleet.md)[] | :heavy_check_mark:                                     | N/A                                                    |