/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureMLCommitmentPlansManagementClientContext } from "./azureMLCommitmentPlansManagementClientContext";


class AzureMLCommitmentPlansManagementClient extends AzureMLCommitmentPlansManagementClientContext {
  // Operation groups
  skus: operations.Skus;
  commitmentAssociations: operations.CommitmentAssociations;
  commitmentPlans: operations.CommitmentPlans;
  usageHistory: operations.UsageHistory;

  /**
   * Initializes a new instance of the AzureMLCommitmentPlansManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure Subscription ID.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.AzureMLCommitmentPlansManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.skus = new operations.Skus(this);
    this.commitmentAssociations = new operations.CommitmentAssociations(this);
    this.commitmentPlans = new operations.CommitmentPlans(this);
    this.usageHistory = new operations.UsageHistory(this);
  }
}

// Operation Specifications

export {
  AzureMLCommitmentPlansManagementClient,
  AzureMLCommitmentPlansManagementClientContext,
  Models as AzureMLCommitmentPlansManagementModels,
  Mappers as AzureMLCommitmentPlansManagementMappers
};
export * from "./operations";
