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
import * as Models from "../models";
import * as Mappers from "../models/adminKeysMappers";
import * as Parameters from "../models/parameters";
import { SearchManagementClientContext } from "../searchManagementClientContext";

/** Class representing a AdminKeys. */
export class AdminKeys {
  private readonly client: SearchManagementClientContext;

  /**
   * Create a AdminKeys.
   * @param {SearchManagementClientContext} client Reference to the service client.
   */
  constructor(client: SearchManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the primary and secondary admin API keys for the specified Azure Search service.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.AdminKeysGetResponse>
   */
  get(resourceGroupName: string, searchServiceName: string, options?: Models.AdminKeysGetOptionalParams): Promise<Models.AdminKeysGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param callback The callback
   */
  get(resourceGroupName: string, searchServiceName: string, callback: msRest.ServiceCallback<Models.AdminKeyResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, searchServiceName: string, options: Models.AdminKeysGetOptionalParams, callback: msRest.ServiceCallback<Models.AdminKeyResult>): void;
  get(resourceGroupName: string, searchServiceName: string, options?: Models.AdminKeysGetOptionalParams | msRest.ServiceCallback<Models.AdminKeyResult>, callback?: msRest.ServiceCallback<Models.AdminKeyResult>): Promise<Models.AdminKeysGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AdminKeysGetResponse>;
  }

  /**
   * Regenerates either the primary or secondary admin API key. You can only regenerate one key at a
   * time.
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param keyKind Specifies which key to regenerate. Valid values include 'primary' and
   * 'secondary'. Possible values include: 'primary', 'secondary'
   * @param [options] The optional parameters
   * @returns Promise<Models.AdminKeysRegenerateResponse>
   */
  regenerate(resourceGroupName: string, searchServiceName: string, keyKind: Models.AdminKeyKind, options?: Models.AdminKeysRegenerateOptionalParams): Promise<Models.AdminKeysRegenerateResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param keyKind Specifies which key to regenerate. Valid values include 'primary' and
   * 'secondary'. Possible values include: 'primary', 'secondary'
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, searchServiceName: string, keyKind: Models.AdminKeyKind, callback: msRest.ServiceCallback<Models.AdminKeyResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the current subscription. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param searchServiceName The name of the Azure Search service associated with the specified
   * resource group.
   * @param keyKind Specifies which key to regenerate. Valid values include 'primary' and
   * 'secondary'. Possible values include: 'primary', 'secondary'
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerate(resourceGroupName: string, searchServiceName: string, keyKind: Models.AdminKeyKind, options: Models.AdminKeysRegenerateOptionalParams, callback: msRest.ServiceCallback<Models.AdminKeyResult>): void;
  regenerate(resourceGroupName: string, searchServiceName: string, keyKind: Models.AdminKeyKind, options?: Models.AdminKeysRegenerateOptionalParams | msRest.ServiceCallback<Models.AdminKeyResult>, callback?: msRest.ServiceCallback<Models.AdminKeyResult>): Promise<Models.AdminKeysRegenerateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        searchServiceName,
        keyKind,
        options
      },
      regenerateOperationSpec,
      callback) as Promise<Models.AdminKeysRegenerateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/listAdminKeys",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdminKeyResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Search/searchServices/{searchServiceName}/regenerateAdminKey/{keyKind}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.searchServiceName,
    Parameters.keyKind,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage,
    Parameters.clientRequestId
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdminKeyResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
