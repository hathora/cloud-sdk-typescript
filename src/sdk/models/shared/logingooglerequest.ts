/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class LoginGoogleRequest extends SpeakeasyBase {
    /**
     * A Google-signed OIDC ID token representing a player's authenticated identity. Learn how to get an `idToken` [here](https://cloud.google.com/docs/authentication/get-id-token).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "idToken" })
    idToken: string;
}
