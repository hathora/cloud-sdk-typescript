# BuildStatus

Status of creating a build.

`created`: a new `buildId` was generated

`running`: the container image is being built

`succeeded`: the container image was successfully built and stored in our registry

`failed`: there was an issue creating and storing the container image in our container registry


## Values

| Name        | Value       |
| ----------- | ----------- |
| `Created`   | created     |
| `Running`   | running     |
| `Succeeded` | succeeded   |
| `Failed`    | failed      |