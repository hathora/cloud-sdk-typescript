/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class AchPaymentMethod extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "bankName" })
    bankName?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "last4" })
    last4?: string;
}
