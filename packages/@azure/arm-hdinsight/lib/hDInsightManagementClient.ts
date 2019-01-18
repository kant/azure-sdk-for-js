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
import { HDInsightManagementClientContext } from "./hDInsightManagementClientContext";


class HDInsightManagementClient extends HDInsightManagementClientContext {
  // Operation groups
  clusters: operations.Clusters;
  applications: operations.Applications;
  locations: operations.Locations;
  configurations: operations.Configurations;
  extensions: operations.Extensions;
  scriptActions: operations.ScriptActions;
  scriptExecutionHistory: operations.ScriptExecutionHistory;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the HDInsightManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.HDInsightManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.clusters = new operations.Clusters(this);
    this.applications = new operations.Applications(this);
    this.locations = new operations.Locations(this);
    this.configurations = new operations.Configurations(this);
    this.extensions = new operations.Extensions(this);
    this.scriptActions = new operations.ScriptActions(this);
    this.scriptExecutionHistory = new operations.ScriptExecutionHistory(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  HDInsightManagementClient,
  HDInsightManagementClientContext,
  Models as HDInsightManagementModels,
  Mappers as HDInsightManagementMappers
};
export * from "./operations";
