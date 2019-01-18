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
import * as Mappers from "../models/signInSettingsMappers";
import * as Parameters from "../models/parameters";
import { ApiManagementClientContext } from "../apiManagementClientContext";

/** Class representing a SignInSettings. */
export class SignInSettings {
  private readonly client: ApiManagementClientContext;

  /**
   * Create a SignInSettings.
   * @param {ApiManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApiManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the entity state (Etag) version of the SignInSettings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignInSettingsGetEntityTagResponse>
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SignInSettingsGetEntityTagResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  getEntityTag(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getEntityTag(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<Models.SignInSettingsGetEntityTagResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getEntityTagOperationSpec,
      callback) as Promise<Models.SignInSettingsGetEntityTagResponse>;
  }

  /**
   * Get Sign-In settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignInSettingsGetResponse>
   */
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SignInSettingsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, callback: msRest.ServiceCallback<Models.PortalSigninSettings>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PortalSigninSettings>): void;
  get(resourceGroupName: string, serviceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PortalSigninSettings>, callback?: msRest.ServiceCallback<Models.PortalSigninSettings>): Promise<Models.SignInSettingsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SignInSettingsGetResponse>;
  }

  /**
   * Update Sign-In settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Sign-In settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, ifMatch: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Sign-In settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, ifMatch: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Update Sign-In settings.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   * response of the GET request or it should be * for unconditional update.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, ifMatch: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  update(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, ifMatch: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        ifMatch,
        options
      },
      updateOperationSpec,
      callback);
  }

  /**
   * Create or Update Sign-In settings.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param [options] The optional parameters
   * @returns Promise<Models.SignInSettingsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, options?: msRest.RequestOptionsBase): Promise<Models.SignInSettingsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, callback: msRest.ServiceCallback<Models.PortalSigninSettings>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param parameters Create or update parameters.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PortalSigninSettings>): void;
  createOrUpdate(resourceGroupName: string, serviceName: string, parameters: Models.PortalSigninSettings, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PortalSigninSettings>, callback?: msRest.ServiceCallback<Models.PortalSigninSettings>): Promise<Models.SignInSettingsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SignInSettingsCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getEntityTagOperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signin",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.SignInSettingsGetEntityTagHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signin",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PortalSigninSettings,
      headersMapper: Mappers.SignInSettingsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signin",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch0,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.PortalSigninSettings,
      required: true
    }
  },
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/portalsettings/signin",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceName,
    Parameters.subscriptionId
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
      ...Mappers.PortalSigninSettings,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PortalSigninSettings
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
