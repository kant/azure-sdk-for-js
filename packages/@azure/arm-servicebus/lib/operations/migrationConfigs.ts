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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/migrationConfigsMappers";
import * as Parameters from "../models/parameters";
import { ServiceBusManagementClientContext } from "../serviceBusManagementClientContext";

/** Class representing a MigrationConfigs. */
export class MigrationConfigs {
  private readonly client: ServiceBusManagementClientContext;

  /**
   * Create a MigrationConfigs.
   * @param {ServiceBusManagementClientContext} client Reference to the service client.
   */
  constructor(client: ServiceBusManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets all migrationConfigurations
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationConfigsListResponse>
   */
  list(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationConfigsListResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  list(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.MigrationConfigListResult>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationConfigListResult>): void;
  list(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationConfigListResult>, callback?: msRest.ServiceCallback<Models.MigrationConfigListResult>): Promise<Models.MigrationConfigsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.MigrationConfigsListResponse>;
  }

  /**
   * Creates Migration configuration and starts migration of enties from Standard to Premium
   * namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param parameters Parameters required to create Migration Configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationConfigsCreateAndStartMigrationResponse>
   */
  createAndStartMigration(resourceGroupName: string, namespaceName: string, parameters: Models.MigrationConfigProperties, options?: msRest.RequestOptionsBase): Promise<Models.MigrationConfigsCreateAndStartMigrationResponse> {
    return this.beginCreateAndStartMigration(resourceGroupName,namespaceName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.MigrationConfigsCreateAndStartMigrationResponse>;
  }

  /**
   * Deletes a MigrationConfiguration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Retrieves Migration Config
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationConfigsGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationConfigsGetResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<Models.MigrationConfigProperties>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationConfigProperties>): void;
  get(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationConfigProperties>, callback?: msRest.ServiceCallback<Models.MigrationConfigProperties>): Promise<Models.MigrationConfigsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MigrationConfigsGetResponse>;
  }

  /**
   * This operation Completes Migration of entities by pointing the connection strings to Premium
   * namespace and any enties created after the operation will be under Premium Namespace.
   * CompleteMigration operation will fail when entity migration is in-progress.
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  completeMigration(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  completeMigration(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  completeMigration(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  completeMigration(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      completeMigrationOperationSpec,
      callback);
  }

  /**
   * This operation reverts Migration
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  revert(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param callback The callback
   */
  revert(resourceGroupName: string, namespaceName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param options The optional parameters
   * @param callback The callback
   */
  revert(resourceGroupName: string, namespaceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  revert(resourceGroupName: string, namespaceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        options
      },
      revertOperationSpec,
      callback);
  }

  /**
   * Creates Migration configuration and starts migration of enties from Standard to Premium
   * namespace
   * @param resourceGroupName Name of the Resource group within the Azure subscription.
   * @param namespaceName The namespace name
   * @param parameters Parameters required to create Migration Configuration
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateAndStartMigration(resourceGroupName: string, namespaceName: string, parameters: Models.MigrationConfigProperties, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        namespaceName,
        parameters,
        options
      },
      beginCreateAndStartMigrationOperationSpec,
      options);
  }

  /**
   * Gets all migrationConfigurations
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationConfigsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationConfigsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MigrationConfigListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationConfigListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationConfigListResult>, callback?: msRest.ServiceCallback<Models.MigrationConfigListResult>): Promise<Models.MigrationConfigsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.MigrationConfigsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
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
      bodyMapper: Mappers.MigrationConfigListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName,
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
      bodyMapper: Mappers.MigrationConfigProperties
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const completeMigrationOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/upgrade",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const revertOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}/revert",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName,
    Parameters.subscriptionId
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
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const beginCreateAndStartMigrationOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceBus/namespaces/{namespaceName}/migrationConfigurations/{configName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName1,
    Parameters.configName,
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
      ...Mappers.MigrationConfigProperties,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.MigrationConfigProperties
    },
    201: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
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
      bodyMapper: Mappers.MigrationConfigListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
