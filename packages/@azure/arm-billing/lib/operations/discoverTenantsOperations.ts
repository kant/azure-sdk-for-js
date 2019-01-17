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
import * as Mappers from "../models/discoverTenantsOperationsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a DiscoverTenantsOperations. */
export class DiscoverTenantsOperations {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a DiscoverTenantsOperations.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a Tenant Properties.
   * @param billingProfileId Billing Profile Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.DiscoverTenantsGetResponse>
   */
  get(billingProfileId: string, options?: msRest.RequestOptionsBase): Promise<Models.DiscoverTenantsGetResponse>;
  /**
   * @param billingProfileId Billing Profile Id.
   * @param callback The callback
   */
  get(billingProfileId: string, callback: msRest.ServiceCallback<Models.DiscoverTenants>): void;
  /**
   * @param billingProfileId Billing Profile Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(billingProfileId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.DiscoverTenants>): void;
  get(billingProfileId: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.DiscoverTenants>): Promise<Models.DiscoverTenantsGetResponse> {
    return this.client.sendOperationRequest(
      {
        billingProfileId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.DiscoverTenantsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/discoverTenants",
  urlParameters: [
    Parameters.billingProfileId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DiscoverTenants
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};