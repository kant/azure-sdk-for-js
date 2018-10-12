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
import * as Mappers from "../models/oAuth2Mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClientContext } from "../graphRbacManagementClientContext";

/** Class representing a OAuth2. */
export class OAuth2 {
  private readonly client: GraphRbacManagementClientContext;

  /**
   * Create a OAuth2.
   * @param {GraphRbacManagementClientContext} client Reference to the service client.
   */
  constructor(client: GraphRbacManagementClientContext) {
    this.client = client;
  }

  /**
   * Queries OAuth2 permissions for the relevant SP ObjectId of an app.
   * @param [options] The optional parameters
   * @returns Promise<Models.OAuth2GetResponse>
   */
  get(options?: Models.OAuth2GetOptionalParams): Promise<Models.OAuth2GetResponse>;
  /**
   * @param callback The callback
   */
  get(callback: msRest.ServiceCallback<Models.Permissions>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  get(options: Models.OAuth2GetOptionalParams, callback: msRest.ServiceCallback<Models.Permissions>): void;
  get(options?: Models.OAuth2GetOptionalParams, callback?: msRest.ServiceCallback<Models.Permissions>): Promise<Models.OAuth2GetResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getOperationSpec,
      callback) as Promise<Models.OAuth2GetResponse>;
  }

  /**
   * Grants OAuth2 permissions for the relevant resource Ids of an app.
   * @param [options] The optional parameters
   * @returns Promise<Models.OAuth2GrantResponse>
   */
  grant(options?: Models.OAuth2GrantOptionalParams): Promise<Models.OAuth2GrantResponse>;
  /**
   * @param callback The callback
   */
  grant(callback: msRest.ServiceCallback<Models.Permissions>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  grant(options: Models.OAuth2GrantOptionalParams, callback: msRest.ServiceCallback<Models.Permissions>): void;
  grant(options?: Models.OAuth2GrantOptionalParams, callback?: msRest.ServiceCallback<Models.Permissions>): Promise<Models.OAuth2GrantResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      grantOperationSpec,
      callback) as Promise<Models.OAuth2GrantResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{tenantID}/oauth2PermissionGrants",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Permissions
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const grantOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "{tenantID}/oauth2PermissionGrants",
  urlParameters: [
    Parameters.tenantID
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "body"
    ],
    mapper: Mappers.Permissions
  },
  responses: {
    201: {
      bodyMapper: Mappers.Permissions
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};