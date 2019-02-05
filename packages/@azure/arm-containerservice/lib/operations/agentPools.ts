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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/agentPoolsMappers";
import * as Parameters from "../models/parameters";
import { ContainerServiceClientContext } from "../containerServiceClientContext";

/** Class representing a AgentPools. */
export class AgentPools {
  private readonly client: ContainerServiceClientContext;

  /**
   * Create a AgentPools.
   * @param {ContainerServiceClientContext} client Reference to the service client.
   */
  constructor(client: ContainerServiceClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of agent pools in the specified managed cluster. The operation returns properties of
   * each agent pool.
   * @summary Gets a list of agent pools in the specified managed cluster.
   * @param managedClusterName The name of the managed cluster resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsListResponse>
   */
  list(managedClusterName: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsListResponse>;
  /**
   * @param managedClusterName The name of the managed cluster resource.
   * @param callback The callback
   */
  list(managedClusterName: string, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  /**
   * @param managedClusterName The name of the managed cluster resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(managedClusterName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  list(managedClusterName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPoolListResult>, callback?: msRest.ServiceCallback<Models.AgentPoolListResult>): Promise<Models.AgentPoolsListResponse> {
    return this.client.sendOperationRequest(
      {
        managedClusterName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AgentPoolsListResponse>;
  }

  /**
   * Gets the details of the agent pool by managed cluster and resource group.
   * @summary Gets the agent pool.
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsGetResponse>
   */
  get(resourceGroupName: string, managedClusterName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param callback The callback
   */
  get(resourceGroupName: string, managedClusterName: string, agentPoolName: string, callback: msRest.ServiceCallback<Models.AgentPool>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedClusterName: string, agentPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPool>): void;
  get(resourceGroupName: string, managedClusterName: string, agentPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPool>, callback?: msRest.ServiceCallback<Models.AgentPool>): Promise<Models.AgentPoolsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedClusterName,
        agentPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AgentPoolsGetResponse>;
  }

  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @summary Creates or updates an agent pool.
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters Parameters supplied to the Create or Update an agent pool operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, managedClusterName: string, agentPoolName: string, parameters: Models.AgentPool, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,managedClusterName,agentPoolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.AgentPoolsCreateOrUpdateResponse>;
  }

  /**
   * Deletes the agent pool in the specified managed cluster.
   * @summary Deletes an agent pool.
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, managedClusterName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,managedClusterName,agentPoolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Creates or updates an agent pool in the specified managed cluster.
   * @summary Creates or updates an agent pool.
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param parameters Parameters supplied to the Create or Update an agent pool operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, managedClusterName: string, agentPoolName: string, parameters: Models.AgentPool, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedClusterName,
        agentPoolName,
        parameters,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Deletes the agent pool in the specified managed cluster.
   * @summary Deletes an agent pool.
   * @param resourceGroupName The name of the resource group.
   * @param managedClusterName The name of the managed cluster resource.
   * @param agentPoolName The name of the agent pool.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, managedClusterName: string, agentPoolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        managedClusterName,
        agentPoolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of agent pools in the specified managed cluster. The operation returns properties of
   * each agent pool.
   * @summary Gets a list of agent pools in the specified managed cluster.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AgentPoolsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AgentPoolsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgentPoolListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgentPoolListResult>, callback?: msRest.ServiceCallback<Models.AgentPoolListResult>): Promise<Models.AgentPoolsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AgentPoolsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.managedClusterName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.managedClusterName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.managedClusterName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AgentPool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AgentPool
    },
    201: {
      bodyMapper: Mappers.AgentPool
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ContainerService/managedClusters/{managedClusterName}/agentPools/{agentPoolName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName0,
    Parameters.managedClusterName,
    Parameters.agentPoolName
  ],
  queryParameters: [
    Parameters.apiVersion3
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgentPoolListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
