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
import * as Mappers from "../models/favoritesMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a Favorites. */
export class Favorites {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a Favorites.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of favorites defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.FavoritesListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: Models.FavoritesListOptionalParams): Promise<Models.FavoritesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite[]>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: Models.FavoritesListOptionalParams, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite[]>): void;
  list(resourceGroupName: string, resourceName: string, options?: Models.FavoritesListOptionalParams | msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite[]>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite[]>): Promise<Models.FavoritesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.FavoritesListResponse>;
  }

  /**
   * Get a single favorite by its FavoriteId, defined within an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param [options] The optional parameters
   * @returns Promise<Models.FavoritesGetResponse>
   */
  get(resourceGroupName: string, resourceName: string, favoriteId: string, options?: msRest.RequestOptionsBase): Promise<Models.FavoritesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, favoriteId: string, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceName: string, favoriteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  get(resourceGroupName: string, resourceName: string, favoriteId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): Promise<Models.FavoritesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.FavoritesGetResponse>;
  }

  /**
   * Adds a new favorites to an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to create a new favorite and add
   * it to an Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.FavoritesAddResponse>
   */
  add(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options?: msRest.RequestOptionsBase): Promise<Models.FavoritesAddResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to create a new favorite and add
   * it to an Application Insights component.
   * @param callback The callback
   */
  add(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to create a new favorite and add
   * it to an Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  add(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  add(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): Promise<Models.FavoritesAddResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        favoriteProperties,
        options
      },
      addOperationSpec,
      callback) as Promise<Models.FavoritesAddResponse>;
  }

  /**
   * Updates a favorite that has already been added to an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to update the existing favorite.
   * @param [options] The optional parameters
   * @returns Promise<Models.FavoritesUpdateResponse>
   */
  update(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options?: msRest.RequestOptionsBase): Promise<Models.FavoritesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to update the existing favorite.
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param favoriteProperties Properties that need to be specified to update the existing favorite.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): void;
  update(resourceGroupName: string, resourceName: string, favoriteId: string, favoriteProperties: Models.ApplicationInsightsComponentFavorite, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>, callback?: msRest.ServiceCallback<Models.ApplicationInsightsComponentFavorite>): Promise<Models.FavoritesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        favoriteProperties,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.FavoritesUpdateResponse>;
  }

  /**
   * Remove a favorite that is associated to an Application Insights component.
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, favoriteId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, favoriteId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param resourceName The name of the Application Insights component resource.
   * @param favoriteId The Id of a specific favorite defined in the Application Insights component
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, favoriteId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, favoriteId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        favoriteId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.favoriteType,
    Parameters.sourceType,
    Parameters.canFetchContent,
    Parameters.tags
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplicationInsightsComponentFavorite"
            }
          }
        }
      }
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const addOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "favoriteProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponentFavorite,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "favoriteProperties",
    mapper: {
      ...Mappers.ApplicationInsightsComponentFavorite,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentFavorite
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/favorites/{favoriteId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.favoriteId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
