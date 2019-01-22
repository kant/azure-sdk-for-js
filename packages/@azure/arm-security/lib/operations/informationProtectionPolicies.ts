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
import * as Mappers from "../models/informationProtectionPoliciesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a InformationProtectionPolicies. */
export class InformationProtectionPolicies {
  private readonly client: SecurityCenterContext;

  /**
   * Create a InformationProtectionPolicies.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param [options] The optional parameters
   * @returns Promise<Models.InformationProtectionPoliciesGetResponse>
   */
  get(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName, options?: msRest.RequestOptionsBase): Promise<Models.InformationProtectionPoliciesGetResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param callback The callback
   */
  get(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName, callback: msRest.ServiceCallback<Models.InformationProtectionPolicy>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param options The optional parameters
   * @param callback The callback
   */
  get(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InformationProtectionPolicy>): void;
  get(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InformationProtectionPolicy>, callback?: msRest.ServiceCallback<Models.InformationProtectionPolicy>): Promise<Models.InformationProtectionPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        informationProtectionPolicyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.InformationProtectionPoliciesGetResponse>;
  }

  /**
   * Details of the information protection policy.
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param [options] The optional parameters
   * @returns Promise<Models.InformationProtectionPoliciesCreateOrUpdateResponse>
   */
  createOrUpdate(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName1, options?: msRest.RequestOptionsBase): Promise<Models.InformationProtectionPoliciesCreateOrUpdateResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param callback The callback
   */
  createOrUpdate(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName1, callback: msRest.ServiceCallback<Models.InformationProtectionPolicy>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param informationProtectionPolicyName Name of the information protection policy. Possible
   * values include: 'effective', 'custom'
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName1, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InformationProtectionPolicy>): void;
  createOrUpdate(scope: string, informationProtectionPolicyName: Models.InformationProtectionPolicyName1, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InformationProtectionPolicy>, callback?: msRest.ServiceCallback<Models.InformationProtectionPolicy>): Promise<Models.InformationProtectionPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        informationProtectionPolicyName,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.InformationProtectionPoliciesCreateOrUpdateResponse>;
  }

  /**
   * Information protection policies of a specific management group.
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param [options] The optional parameters
   * @returns Promise<Models.InformationProtectionPoliciesListResponse>
   */
  list(scope: string, options?: msRest.RequestOptionsBase): Promise<Models.InformationProtectionPoliciesListResponse>;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param callback The callback
   */
  list(scope: string, callback: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): void;
  /**
   * @param scope Scope of the query, can be subscription
   * (/subscriptions/0b06d9ea-afe6-4779-bd59-30e5c2d9d13f) or management group
   * (/providers/Microsoft.Management/managementGroups/mgName).
   * @param options The optional parameters
   * @param callback The callback
   */
  list(scope: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): void;
  list(scope: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InformationProtectionPolicyList>, callback?: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): Promise<Models.InformationProtectionPoliciesListResponse> {
    return this.client.sendOperationRequest(
      {
        scope,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.InformationProtectionPoliciesListResponse>;
  }

  /**
   * Information protection policies of a specific management group.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.InformationProtectionPoliciesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.InformationProtectionPoliciesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.InformationProtectionPolicyList>, callback?: msRest.ServiceCallback<Models.InformationProtectionPolicyList>): Promise<Models.InformationProtectionPoliciesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.InformationProtectionPoliciesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}",
  urlParameters: [
    Parameters.scope,
    Parameters.informationProtectionPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "{scope}/providers/Microsoft.Security/informationProtectionPolicies/{informationProtectionPolicyName}",
  urlParameters: [
    Parameters.scope,
    Parameters.informationProtectionPolicyName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    201: {
      bodyMapper: Mappers.InformationProtectionPolicy
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "{scope}/providers/Microsoft.Security/informationProtectionPolicies",
  urlParameters: [
    Parameters.scope
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.InformationProtectionPolicyList
    },
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
      bodyMapper: Mappers.InformationProtectionPolicyList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
