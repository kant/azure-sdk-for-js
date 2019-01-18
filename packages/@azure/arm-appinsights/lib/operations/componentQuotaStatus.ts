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
import * as Mappers from "../models/componentQuotaStatusMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a ComponentQuotaStatus. */
export class ComponentQuotaStatus {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a ComponentQuotaStatus.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns daily data volume cap (quota) status for an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ComponentQuotaStatusGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.ComponentQuotaStatusGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentQuotaStatus>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentQuotaStatus>): void;
  get(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentQuotaStatus>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentQuotaStatus>): Promise<Models.ComponentQuotaStatusGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ComponentQuotaStatusGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/quotastatus",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentQuotaStatus
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
