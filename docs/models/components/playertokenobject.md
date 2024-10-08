# PlayerTokenObject

## Example Usage

```typescript
import { PlayerTokenObject } from "@hathora/cloud-sdk-typescript/models/components";

let value: PlayerTokenObject = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYW5vbnltb3VzIiwiaWQiOiJ3aDA4eWN3eTJwOSIsIm5hbWUiOiJqaXR0ZXJ5LXNhbG1vbi1ndWxsIiwiaWF0IjoxNjg5MzQ5MTk3fQ.-LzlPhZw2tw0ycZ229IRHwwmINGKWNPFMDrXOphLjEk",
};
```

## Fields

| Field                                                                                                                                                                                               | Type                                                                                                                                                                                                | Required                                                                                                                                                                                            | Description                                                                                                                                                                                         | Example                                                                                                                                                                                             |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `token`                                                                                                                                                                                             | *string*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                  | A unique Hathora-signed JWT player token.                                                                                                                                                           | eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoiYW5vbnltb3VzIiwiaWQiOiJ3aDA4eWN3eTJwOSIsIm5hbWUiOiJqaXR0ZXJ5LXNhbG1vbi1ndWxsIiwiaWF0IjoxNjg5MzQ5MTk3fQ.-LzlPhZw2tw0ycZ229IRHwwmINGKWNPFMDrXOphLjEk |