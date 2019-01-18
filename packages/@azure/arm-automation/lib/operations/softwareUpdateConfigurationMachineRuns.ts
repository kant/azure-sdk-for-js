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
import * as Mappers from "../models/softwareUpdateConfigurationMachineRunsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a SoftwareUpdateConfigurationMachineRuns. */
export class SoftwareUpdateConfigurationMachineRuns {
  private readonly client: AutomationClientContext;

  /**
   * Create a SoftwareUpdateConfigurationMachineRuns.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Get a single software update configuration machine run by Id.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationMachineRunId The Id of the software update configuration
   * machine run.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationMachineRunsGetByIdResponse>
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationMachineRunId: string, options?: Models.SoftwareUpdateConfigurationMachineRunsGetByIdOptionalParams): Promise<Models.SoftwareUpdateConfigurationMachineRunsGetByIdResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationMachineRunId The Id of the software update configuration
   * machine run.
   * @param callback The callback
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationMachineRunId: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRun>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationMachineRunId The Id of the software update configuration
   * machine run.
   * @param options The optional parameters
   * @param callback The callback
   */
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationMachineRunId: string, options: Models.SoftwareUpdateConfigurationMachineRunsGetByIdOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRun>): void;
  getById(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationMachineRunId: string, options?: Models.SoftwareUpdateConfigurationMachineRunsGetByIdOptionalParams | msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRun>, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRun>): Promise<Models.SoftwareUpdateConfigurationMachineRunsGetByIdResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationMachineRunId,
        options
      },
      getByIdOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationMachineRunsGetByIdResponse>;
  }

  /**
   * Return list of software update configuration machine runs
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationMachineRunsListResponse>
   */
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationMachineRunsListOptionalParams): Promise<Models.SoftwareUpdateConfigurationMachineRunsListResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRunListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, options: Models.SoftwareUpdateConfigurationMachineRunsListOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRunListResult>): void;
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationMachineRunsListOptionalParams | msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRunListResult>, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationMachineRunListResult>): Promise<Models.SoftwareUpdateConfigurationMachineRunsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationMachineRunsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getByIdOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns/{softwareUpdateConfigurationMachineRunId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.softwareUpdateConfigurationMachineRunId
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationMachineRun
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurationMachineRuns",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter,
    Parameters.skip1,
    Parameters.top1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationMachineRunListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
