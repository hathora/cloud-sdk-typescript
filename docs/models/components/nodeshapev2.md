# NodeShapeV2

## Example Usage

```typescript
import { NodeShapeV2 } from "@hathora/cloud-sdk-typescript/models/components";

let value: NodeShapeV2 = {
  minMemoryMB: 2321.68,
  minCPU: 7428.25,
  minGPU: 2820.7,
  familyName: "<value>",
  familyId: "family-amd64-1-4",
  name: "<value>",
  nodeShapeId: "shape-h200sxm5-1",
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `minMemoryMB`                                                                                                                 | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The minimum MB of memory that will be in any node with this shape.<br/>Note: this number may change as new providers are added. |
| `minCPU`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The minimum number of CPUs that will be in any node with this shape.<br/>Note: this number may change as new providers are added. |
| `minGPU`                                                                                                                      | *number*                                                                                                                      | :heavy_check_mark:                                                                                                            | The minimum number of GPUs that will be in any node with this shape.<br/>Note: this number may change as new providers are added. |
| `familyName`                                                                                                                  | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | A human readable name for this node's family.                                                                                 |
| `familyId`                                                                                                                    | [components.NodeFamilyId](../../models/components/nodefamilyid.md)                                                            | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `name`                                                                                                                        | *string*                                                                                                                      | :heavy_check_mark:                                                                                                            | A human readable name for this node shape.                                                                                    |
| `nodeShapeId`                                                                                                                 | [components.NodeShapeId](../../models/components/nodeshapeid.md)                                                              | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |