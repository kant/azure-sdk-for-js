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
import * as Mappers from "../models/transformationsMappers";
import * as Parameters from "../models/parameters";
import { StreamAnalyticsManagementClientContext } from "../streamAnalyticsManagementClientContext";

/** Class representing a Transformations. */
export class Transformations {
  private readonly client: StreamAnalyticsManagementClientContext;

  /**
   * Create a Transformations.
   * @param {StreamAnalyticsManagementClientContext} client Reference to the service client.
   */
  constructor(client: StreamAnalyticsManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates a transformation or replaces an already existing transformation under an existing
   * streaming job.
   * @param transformation The definition of the transformation that will be used to create a new
   * transformation or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransformationsCreateOrReplaceResponse>
   */
  createOrReplace(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options?: Models.TransformationsCreateOrReplaceOptionalParams): Promise<Models.TransformationsCreateOrReplaceResponse>;
  /**
   * @param transformation The definition of the transformation that will be used to create a new
   * transformation or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param callback The callback
   */
  createOrReplace(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, callback: msRest.ServiceCallback<Models.Transformation>): void;
  /**
   * @param transformation The definition of the transformation that will be used to create a new
   * transformation or replace the existing one under the streaming job.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrReplace(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options: Models.TransformationsCreateOrReplaceOptionalParams, callback: msRest.ServiceCallback<Models.Transformation>): void;
  createOrReplace(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options?: Models.TransformationsCreateOrReplaceOptionalParams | msRest.ServiceCallback<Models.Transformation>, callback?: msRest.ServiceCallback<Models.Transformation>): Promise<Models.TransformationsCreateOrReplaceResponse> {
    return this.client.sendOperationRequest(
      {
        transformation,
        resourceGroupName,
        jobName,
        transformationName,
        options
      },
      createOrReplaceOperationSpec,
      callback) as Promise<Models.TransformationsCreateOrReplaceResponse>;
  }

  /**
   * Updates an existing transformation under an existing streaming job. This can be used to
   * partially update (ie. update one or two properties) a transformation without affecting the rest
   * the job or transformation definition.
   * @param transformation A Transformation object. The properties specified here will overwrite the
   * corresponding properties in the existing transformation (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing transformation will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransformationsUpdateResponse>
   */
  update(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options?: Models.TransformationsUpdateOptionalParams): Promise<Models.TransformationsUpdateResponse>;
  /**
   * @param transformation A Transformation object. The properties specified here will overwrite the
   * corresponding properties in the existing transformation (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing transformation will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param callback The callback
   */
  update(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, callback: msRest.ServiceCallback<Models.Transformation>): void;
  /**
   * @param transformation A Transformation object. The properties specified here will overwrite the
   * corresponding properties in the existing transformation (ie. Those properties will be updated).
   * Any properties that are set to null here will mean that the corresponding property in the
   * existing transformation will remain the same and not change as a result of this PATCH operation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options: Models.TransformationsUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Transformation>): void;
  update(transformation: Models.Transformation, resourceGroupName: string, jobName: string, transformationName: string, options?: Models.TransformationsUpdateOptionalParams | msRest.ServiceCallback<Models.Transformation>, callback?: msRest.ServiceCallback<Models.Transformation>): Promise<Models.TransformationsUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        transformation,
        resourceGroupName,
        jobName,
        transformationName,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.TransformationsUpdateResponse>;
  }

  /**
   * Gets details about the specified transformation.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param [options] The optional parameters
   * @returns Promise<Models.TransformationsGetResponse>
   */
  get(resourceGroupName: string, jobName: string, transformationName: string, options?: msRest.RequestOptionsBase): Promise<Models.TransformationsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, transformationName: string, callback: msRest.ServiceCallback<Models.Transformation>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param jobName The name of the streaming job.
   * @param transformationName The name of the transformation.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, jobName: string, transformationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Transformation>): void;
  get(resourceGroupName: string, jobName: string, transformationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Transformation>, callback?: msRest.ServiceCallback<Models.Transformation>): Promise<Models.TransformationsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        jobName,
        transformationName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TransformationsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrReplaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "transformation",
    mapper: {
      ...Mappers.Transformation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsCreateOrReplaceHeaders
    },
    201: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsCreateOrReplaceHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "transformation",
    mapper: {
      ...Mappers.Transformation,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.StreamAnalytics/streamingjobs/{jobName}/transformations/{transformationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.jobName,
    Parameters.transformationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Transformation,
      headersMapper: Mappers.TransformationsGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
