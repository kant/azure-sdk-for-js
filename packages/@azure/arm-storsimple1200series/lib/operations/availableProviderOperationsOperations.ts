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
import * as Mappers from "../models/availableProviderOperationsOperationsMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a AvailableProviderOperationsOperations. */
export class AvailableProviderOperationsOperations {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a AvailableProviderOperationsOperations.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * List of AvailableProviderOperations
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailableProviderOperationsListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.AvailableProviderOperationsListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.AvailableProviderOperations>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableProviderOperations>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableProviderOperations>, callback?: msRest.ServiceCallback<Models.AvailableProviderOperations>): Promise<Models.AvailableProviderOperationsListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.AvailableProviderOperationsListResponse>;
  }

  /**
   * List of AvailableProviderOperations
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.AvailableProviderOperationsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.AvailableProviderOperationsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.AvailableProviderOperations>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AvailableProviderOperations>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AvailableProviderOperations>, callback?: msRest.ServiceCallback<Models.AvailableProviderOperations>): Promise<Models.AvailableProviderOperationsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.AvailableProviderOperationsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.StorSimple/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AvailableProviderOperations
    },
    default: {
      bodyMapper: Mappers.ErrorModel
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
      bodyMapper: Mappers.AvailableProviderOperations
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
