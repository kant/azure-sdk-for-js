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
import * as Mappers from "../models/topicsMappers";
import * as Parameters from "../models/parameters";
import { EventGridManagementClientContext } from "../eventGridManagementClientContext";

/** Class representing a Topics. */
export class Topics {
  private readonly client: EventGridManagementClientContext;

  /**
   * Create a Topics.
   * @param {EventGridManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventGridManagementClientContext) {
    this.client = client;
  }

  /**
   * Get properties of a topic
   * @summary Get a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsGetResponse>
   */
  get(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param callback The callback
   */
  get(resourceGroupName: string, topicName: string, callback: msRest.ServiceCallback<Models.Topic>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, topicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Topic>): void;
  get(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Topic>, callback?: msRest.ServiceCallback<Models.Topic>): Promise<Models.TopicsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        topicName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.TopicsGetResponse>;
  }

  /**
   * Asynchronously creates a new topic with the specified parameters.
   * @summary Create a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param topicInfo Topic information
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, topicName: string, topicInfo: Models.Topic, options?: msRest.RequestOptionsBase): Promise<Models.TopicsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,topicName,topicInfo,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TopicsCreateOrUpdateResponse>;
  }

  /**
   * Delete existing topic
   * @summary Delete a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,topicName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Asynchronously updates a topic with the specified parameters.
   * @summary Update a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param topicUpdateParameters Topic update information
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsUpdateResponse>
   */
  update(resourceGroupName: string, topicName: string, topicUpdateParameters: Models.TopicUpdateParameters, options?: msRest.RequestOptionsBase): Promise<Models.TopicsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,topicName,topicUpdateParameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.TopicsUpdateResponse>;
  }

  /**
   * List all the topics under an Azure subscription
   * @summary List topics under an Azure subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.TopicsListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.TopicsListResult>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopicsListResult>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopicsListResult>, callback?: msRest.ServiceCallback<Models.TopicsListResult>): Promise<Models.TopicsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.TopicsListBySubscriptionResponse>;
  }

  /**
   * List all the topics under a resource group
   * @summary List topics under a resource group
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.TopicsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopicsListResult>): void;
  listByResourceGroup(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopicsListResult>, callback?: msRest.ServiceCallback<Models.TopicsListResult>): Promise<Models.TopicsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.TopicsListByResourceGroupResponse>;
  }

  /**
   * List the two keys used to publish to a topic
   * @summary List keys for a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListSharedAccessKeysResponse>
   */
  listSharedAccessKeys(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListSharedAccessKeysResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, topicName: string, callback: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param options The optional parameters
   * @param callback The callback
   */
  listSharedAccessKeys(resourceGroupName: string, topicName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): void;
  listSharedAccessKeys(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopicSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): Promise<Models.TopicsListSharedAccessKeysResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        topicName,
        options
      },
      listSharedAccessKeysOperationSpec,
      callback) as Promise<Models.TopicsListSharedAccessKeysResponse>;
  }

  /**
   * Regenerate a shared access key for a topic
   * @summary Regenerate key for a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param regenerateKeyRequest Request body to regenerate key
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsRegenerateKeyResponse>
   */
  regenerateKey(resourceGroupName: string, topicName: string, regenerateKeyRequest: Models.TopicRegenerateKeyRequest, options?: msRest.RequestOptionsBase): Promise<Models.TopicsRegenerateKeyResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param regenerateKeyRequest Request body to regenerate key
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, topicName: string, regenerateKeyRequest: Models.TopicRegenerateKeyRequest, callback: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param regenerateKeyRequest Request body to regenerate key
   * @param options The optional parameters
   * @param callback The callback
   */
  regenerateKey(resourceGroupName: string, topicName: string, regenerateKeyRequest: Models.TopicRegenerateKeyRequest, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): void;
  regenerateKey(resourceGroupName: string, topicName: string, regenerateKeyRequest: Models.TopicRegenerateKeyRequest, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TopicSharedAccessKeys>, callback?: msRest.ServiceCallback<Models.TopicSharedAccessKeys>): Promise<Models.TopicsRegenerateKeyResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        topicName,
        regenerateKeyRequest,
        options
      },
      regenerateKeyOperationSpec,
      callback) as Promise<Models.TopicsRegenerateKeyResponse>;
  }

  /**
   * List event types for a topic
   * @summary List topic event types
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param providerNamespace Namespace of the provider of the topic
   * @param resourceTypeName Name of the topic type
   * @param resourceName Name of the topic
   * @param [options] The optional parameters
   * @returns Promise<Models.TopicsListEventTypesResponse>
   */
  listEventTypes(resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.TopicsListEventTypesResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param providerNamespace Namespace of the provider of the topic
   * @param resourceTypeName Name of the topic type
   * @param resourceName Name of the topic
   * @param callback The callback
   */
  listEventTypes(resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, callback: msRest.ServiceCallback<Models.EventTypesListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param providerNamespace Namespace of the provider of the topic
   * @param resourceTypeName Name of the topic type
   * @param resourceName Name of the topic
   * @param options The optional parameters
   * @param callback The callback
   */
  listEventTypes(resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.EventTypesListResult>): void;
  listEventTypes(resourceGroupName: string, providerNamespace: string, resourceTypeName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.EventTypesListResult>, callback?: msRest.ServiceCallback<Models.EventTypesListResult>): Promise<Models.TopicsListEventTypesResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        providerNamespace,
        resourceTypeName,
        resourceName,
        options
      },
      listEventTypesOperationSpec,
      callback) as Promise<Models.TopicsListEventTypesResponse>;
  }

  /**
   * Asynchronously creates a new topic with the specified parameters.
   * @summary Create a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param topicInfo Topic information
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, topicName: string, topicInfo: Models.Topic, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        topicName,
        topicInfo,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Delete existing topic
   * @summary Delete a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, topicName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        topicName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Asynchronously updates a topic with the specified parameters.
   * @summary Update a topic
   * @param resourceGroupName The name of the resource group within the user's subscription.
   * @param topicName Name of the topic
   * @param topicUpdateParameters Topic update information
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, topicName: string, topicUpdateParameters: Models.TopicUpdateParameters, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        topicName,
        topicUpdateParameters,
        options
      },
      beginUpdateOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Topic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/topics",
  urlParameters: [
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
      bodyMapper: Mappers.TopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopicsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listSharedAccessKeysOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/listKeys",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TopicSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const regenerateKeyOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}/regenerateKey",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "regenerateKeyRequest",
    mapper: {
      ...Mappers.TopicRegenerateKeyRequest,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TopicSharedAccessKeys
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listEventTypesOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerNamespace}/{resourceTypeName}/{resourceName}/providers/Microsoft.EventGrid/eventTypes",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.providerNamespace,
    Parameters.resourceTypeName,
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
      bodyMapper: Mappers.EventTypesListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "topicInfo",
    mapper: {
      ...Mappers.Topic,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Topic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
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
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/topics/{topicName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.topicName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "topicUpdateParameters",
    mapper: {
      ...Mappers.TopicUpdateParameters,
      required: true
    }
  },
  responses: {
    201: {
      bodyMapper: Mappers.Topic
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
