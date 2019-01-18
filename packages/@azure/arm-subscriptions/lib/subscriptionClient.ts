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
import { SubscriptionClientContext } from "./subscriptionClientContext";


class SubscriptionClient extends SubscriptionClientContext {
  // Operation groups
  operations: operations.Operations;
  subscriptionOperations: operations.SubscriptionOperations;
  subscriptionFactory: operations.SubscriptionFactory;
  subscriptions: operations.Subscriptions;
  tenants: operations.Tenants;

  /**
   * Initializes a new instance of the SubscriptionClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: Models.SubscriptionClientOptions) {
    super(credentials, options);
    this.operations = new operations.Operations(this);
    this.subscriptionOperations = new operations.SubscriptionOperations(this);
    this.subscriptionFactory = new operations.SubscriptionFactory(this);
    this.subscriptions = new operations.Subscriptions(this);
    this.tenants = new operations.Tenants(this);
  }
}

// Operation Specifications

export {
  SubscriptionClient,
  SubscriptionClientContext,
  Models as SubscriptionModels,
  Mappers as SubscriptionMappers
};
export * from "./operations";
