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
import * as Mappers from "../models/backupsMappers";
import * as Parameters from "../models/parameters";
import { StorSimpleManagementClientContext } from "../storSimpleManagementClientContext";

/** Class representing a Backups. */
export class Backups {
  private readonly client: StorSimpleManagementClientContext;

  /**
   * Create a Backups.
   * @param {StorSimpleManagementClientContext} client Reference to the service client.
   */
  constructor(client: StorSimpleManagementClientContext) {
    this.client = client;
  }

  /**
   * Retrieves all the backups in a manager.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupsListByManagerResponse>
   */
  listByManager(resourceGroupName: string, managerName: string, options?: Models.BackupsListByManagerOptionalParams): Promise<Models.BackupsListByManagerResponse>;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.BackupList>): void;
  /**
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManager(resourceGroupName: string, managerName: string, options: Models.BackupsListByManagerOptionalParams, callback: msRest.ServiceCallback<Models.BackupList>): void;
  listByManager(resourceGroupName: string, managerName: string, options?: Models.BackupsListByManagerOptionalParams | msRest.ServiceCallback<Models.BackupList>, callback?: msRest.ServiceCallback<Models.BackupList>): Promise<Models.BackupsListByManagerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managerName,
        options
      },
      listByManagerOperationSpec,
      callback) as Promise<Models.BackupsListByManagerResponse>;
  }

  /**
   * Retrieves all the backups in a device. Can be used to get the backups for failover also.
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupsListByDeviceResponse>
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: Models.BackupsListByDeviceOptionalParams): Promise<Models.BackupsListByDeviceResponse>;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, callback: msRest.ServiceCallback<Models.BackupList>): void;
  /**
   * @param deviceName The device name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options: Models.BackupsListByDeviceOptionalParams, callback: msRest.ServiceCallback<Models.BackupList>): void;
  listByDevice(deviceName: string, resourceGroupName: string, managerName: string, options?: Models.BackupsListByDeviceOptionalParams | msRest.ServiceCallback<Models.BackupList>, callback?: msRest.ServiceCallback<Models.BackupList>): Promise<Models.BackupsListByDeviceResponse> {
    return this.client.sendOperationRequest(
      {
        deviceName,
        resourceGroupName,
        managerName,
        options
      },
      listByDeviceOperationSpec,
      callback) as Promise<Models.BackupsListByDeviceResponse>;
  }

  /**
   * Deletes the backup.
   * @param deviceName The device name.
   * @param backupName The backup name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(deviceName: string, backupName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(deviceName,backupName,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Clones the given backup element to a new disk or share with given details.
   * @param deviceName The device name.
   * @param backupName The backup name.
   * @param elementName The backup element name.
   * @param cloneRequest The clone request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  clone(deviceName: string, backupName: string, elementName: string, cloneRequest: Models.CloneRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginClone(deviceName,backupName,elementName,cloneRequest,resourceGroupName,managerName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Deletes the backup.
   * @param deviceName The device name.
   * @param backupName The backup name.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(deviceName: string, backupName: string, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        backupName,
        resourceGroupName,
        managerName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Clones the given backup element to a new disk or share with given details.
   * @param deviceName The device name.
   * @param backupName The backup name.
   * @param elementName The backup element name.
   * @param cloneRequest The clone request.
   * @param resourceGroupName The resource group name
   * @param managerName The manager name
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginClone(deviceName: string, backupName: string, elementName: string, cloneRequest: Models.CloneRequest, resourceGroupName: string, managerName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        deviceName,
        backupName,
        elementName,
        cloneRequest,
        resourceGroupName,
        managerName,
        options
      },
      beginCloneOperationSpec,
      options);
  }

  /**
   * Retrieves all the backups in a manager.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupsListByManagerNextResponse>
   */
  listByManagerNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupsListByManagerNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByManagerNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BackupList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByManagerNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupList>): void;
  listByManagerNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupList>, callback?: msRest.ServiceCallback<Models.BackupList>): Promise<Models.BackupsListByManagerNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByManagerNextOperationSpec,
      callback) as Promise<Models.BackupsListByManagerNextResponse>;
  }

  /**
   * Retrieves all the backups in a device. Can be used to get the backups for failover also.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.BackupsListByDeviceNextResponse>
   */
  listByDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.BackupsListByDeviceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByDeviceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.BackupList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByDeviceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BackupList>): void;
  listByDeviceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BackupList>, callback?: msRest.ServiceCallback<Models.BackupList>): Promise<Models.BackupsListByDeviceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByDeviceNextOperationSpec,
      callback) as Promise<Models.BackupsListByDeviceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByManagerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/backups",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByDeviceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backups",
  urlParameters: [
    Parameters.deviceName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.forFailover,
    Parameters.apiVersion,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BackupList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backups/{backupName}",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const beginCloneOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/devices/{deviceName}/backups/{backupName}/elements/{elementName}/clone",
  urlParameters: [
    Parameters.deviceName,
    Parameters.backupName,
    Parameters.elementName,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.managerName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "cloneRequest",
    mapper: {
      ...Mappers.CloneRequest,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByManagerNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BackupList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const listByDeviceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.BackupList
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
