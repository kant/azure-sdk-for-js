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
import * as Models from "../models";
import * as Mappers from "../models/accessPoliciesMappers";
import * as Parameters from "../models/parameters";
import { TimeSeriesInsightsClientContext } from "../timeSeriesInsightsClientContext";

/** Class representing a AccessPolicies. */
export class AccessPolicies {
  private readonly client: TimeSeriesInsightsClientContext;

  /**
   * Create a AccessPolicies.
   * @param {TimeSeriesInsightsClientContext} client Reference to the service client.
   */
  constructor(client: TimeSeriesInsightsClientContext) {
    this.client = client;
  }

  /**
   * Create or update an access policy in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName Name of the access policy.
   * @param parameters Parameters for creating an access policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, environmentName: string, accessPolicyName: string, parameters: Models.AccessPolicyCreateOrUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccessPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName Name of the access policy.
   * @param parameters Parameters for creating an access policy.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, environmentName: string, accessPolicyName: string, parameters: Models.AccessPolicyCreateOrUpdateParameters, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName Name of the access policy.
   * @param parameters Parameters for creating an access policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, environmentName: string, accessPolicyName: string, parameters: Models.AccessPolicyCreateOrUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  createOrUpdate(resourceGroupName: string, environmentName: string, accessPolicyName: string, parameters: Models.AccessPolicyCreateOrUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessPolicyResource>, callback?: msRest.ServiceCallback<Models.AccessPolicyResource>): Promise<Models.AccessPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.AccessPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Gets the access policy with the specified name in the specified environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessPoliciesGetResponse>
   */
  get(resourceGroupName: string, environmentName: string, accessPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccessPoliciesGetResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param callback The callback
   */
  get(resourceGroupName: string, environmentName: string, accessPolicyName: string, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, environmentName: string, accessPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  get(resourceGroupName: string, environmentName: string, accessPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessPolicyResource>, callback?: msRest.ServiceCallback<Models.AccessPolicyResource>): Promise<Models.AccessPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AccessPoliciesGetResponse>;
  }

  /**
   * Updates the access policy with the specified name in the specified subscription, resource group,
   * and environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param accessPolicyUpdateParameters Request object that contains the updated information for the
   * access policy.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessPoliciesUpdateResponse>
   */
  update(resourceGroupName: string, environmentName: string, accessPolicyName: string, accessPolicyUpdateParameters: Models.AccessPolicyUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.AccessPoliciesUpdateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param accessPolicyUpdateParameters Request object that contains the updated information for the
   * access policy.
   * @param callback The callback
   */
  update(resourceGroupName: string, environmentName: string, accessPolicyName: string, accessPolicyUpdateParameters: Models.AccessPolicyUpdateParameters, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param accessPolicyUpdateParameters Request object that contains the updated information for the
   * access policy.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, environmentName: string, accessPolicyName: string, accessPolicyUpdateParameters: Models.AccessPolicyUpdateParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessPolicyResource>): void;
  update(resourceGroupName: string, environmentName: string, accessPolicyName: string, accessPolicyUpdateParameters: Models.AccessPolicyUpdateParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessPolicyResource>, callback?: msRest.ServiceCallback<Models.AccessPolicyResource>): Promise<Models.AccessPoliciesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        accessPolicyUpdateParameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.AccessPoliciesUpdateResponse>;
  }

  /**
   * Deletes the access policy with the specified name in the specified subscription, resource group,
   * and environment
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, environmentName: string, accessPolicyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, environmentName: string, accessPolicyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param accessPolicyName The name of the Time Series Insights access policy associated with the
   * specified environment.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, environmentName: string, accessPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, environmentName: string, accessPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        accessPolicyName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Lists all the available access policies associated with the environment.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AccessPoliciesListByEnvironmentResponse>
   */
  listByEnvironment(resourceGroupName: string, environmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AccessPoliciesListByEnvironmentResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param callback The callback
   */
  listByEnvironment(resourceGroupName: string, environmentName: string, callback: msRest.ServiceCallback<Models.AccessPolicyListResponse>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param environmentName The name of the Time Series Insights environment associated with the
   * specified resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByEnvironment(resourceGroupName: string, environmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AccessPolicyListResponse>): void;
  listByEnvironment(resourceGroupName: string, environmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AccessPolicyListResponse>, callback?: msRest.ServiceCallback<Models.AccessPolicyListResponse>): Promise<Models.AccessPoliciesListByEnvironmentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        environmentName,
        options
      },
      listByEnvironmentOperationSpec,
      callback) as Promise<Models.AccessPoliciesListByEnvironmentResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName0
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AccessPolicyCreateOrUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    201: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "accessPolicyUpdateParameters",
    mapper: {
      ...Mappers.AccessPolicyUpdateParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies/{accessPolicyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1,
    Parameters.accessPolicyName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByEnvironmentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.TimeSeriesInsights/environments/{environmentName}/accessPolicies",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.environmentName1
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AccessPolicyListResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
