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
import * as Mappers from "../models/managementPoliciesMappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";

/** Class representing a ManagementPolicies. */
export class ManagementPolicies {
  private readonly client: StorageManagementClientContext;

  /**
   * Create a ManagementPolicies.
   * @param {StorageManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the data policy rules associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementPoliciesGetResponse>
   */
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<Models.ManagementPoliciesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): void;
  get(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.StorageAccountManagementPolicies>, callback?: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): Promise<Models.ManagementPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ManagementPoliciesGetResponse>;
  }

  /**
   * Sets the data policy rules associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<Models.ManagementPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, accountName: string, options?: Models.ManagementPoliciesCreateOrUpdateOptionalParams): Promise<Models.ManagementPoliciesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, accountName: string, options: Models.ManagementPoliciesCreateOrUpdateOptionalParams, callback: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): void;
  createOrUpdate(resourceGroupName: string, accountName: string, options?: Models.ManagementPoliciesCreateOrUpdateOptionalParams | msRest.ServiceCallback<Models.StorageAccountManagementPolicies>, callback?: msRest.ServiceCallback<Models.StorageAccountManagementPolicies>): Promise<Models.ManagementPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ManagementPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Deletes the data policy rules associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   * account names must be between 3 and 24 characters in length and use numbers and lower-case
   * letters only.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, accountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, accountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.managementPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountManagementPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.managementPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      policy: [
        "options",
        "policy"
      ]
    },
    mapper: {
      ...Mappers.ManagementPoliciesRulesSetParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.StorageAccountManagementPolicies
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/managementPolicies/{managementPolicyName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName,
    Parameters.subscriptionId,
    Parameters.managementPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion1
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
