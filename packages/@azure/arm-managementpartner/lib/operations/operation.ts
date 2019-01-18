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
import * as Mappers from "../models/operationMappers";
import * as Parameters from "../models/parameters";
import { ACEProvisioningManagementPartnerAPIContext } from "../aCEProvisioningManagementPartnerAPIContext";

/** Class representing a Operation. */
export class Operation {
  private readonly client: ACEProvisioningManagementPartnerAPIContext;

  /**
   * Create a Operation.
   * @param {ACEProvisioningManagementPartnerAPIContext} client Reference to the service client.
   */
  constructor(client: ACEProvisioningManagementPartnerAPIContext) {
    this.client = client;
  }

  /**
   * List all the operations.
   * @summary Get operations.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationListResponse>
   */
  list(options?: msRest.RequestOptionsBase): Promise<Models.OperationListResponse>;
  /**
   * @param callback The callback
   */
  list(callback: msRest.ServiceCallback<Models.OperationList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  list(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationList>): void;
  list(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationList>, callback?: msRest.ServiceCallback<Models.OperationList>): Promise<Models.OperationListResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listOperationSpec,
      callback) as Promise<Models.OperationListResponse>;
  }

  /**
   * List all the operations.
   * @summary Get operations.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.OperationListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.OperationListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.OperationList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.OperationList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.OperationList>, callback?: msRest.ServiceCallback<Models.OperationList>): Promise<Models.OperationListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.OperationListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.ManagementPartner/operations",
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.OperationList
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
      bodyMapper: Mappers.OperationList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
