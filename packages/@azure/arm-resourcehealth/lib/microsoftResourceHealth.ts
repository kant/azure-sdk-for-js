/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { MicrosoftResourceHealthContext } from "./microsoftResourceHealthContext";


class MicrosoftResourceHealth extends MicrosoftResourceHealthContext {
  // Operation groups
  availabilityStatuses: operations.AvailabilityStatuses;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the MicrosoftResourceHealth class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.MicrosoftResourceHealthOptions) {
    super(credentials, subscriptionId, options);
    this.availabilityStatuses = new operations.AvailabilityStatuses(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  MicrosoftResourceHealth,
  MicrosoftResourceHealthContext,
  Models as MicrosoftResourceHealthModels,
  Mappers as MicrosoftResourceHealthMappers
};
export * from "./operations";
