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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as Parameters from "./models/parameters";
import { EventGridClientContext } from "./eventGridClientContext";


class EventGridClient extends EventGridClientContext {
  /**
   * Initializes a new instance of the EventGridClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, options?: msRestAzure.AzureServiceClientOptions) {
    super(credentials, options);
  }

  /**
   * Publishes a batch of events to an Azure Event Grid topic.
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  publishEvents(topicHostname: string, events: Models.EventGridEvent[], options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param callback The callback
   */
  publishEvents(topicHostname: string, events: Models.EventGridEvent[], callback: msRest.ServiceCallback<void>): void;
  /**
   * @param topicHostname The host name of the topic, e.g. topic1.westus2-1.eventgrid.azure.net
   * @param events An array of events to be published to Event Grid.
   * @param options The optional parameters
   * @param callback The callback
   */
  publishEvents(topicHostname: string, events: Models.EventGridEvent[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  publishEvents(topicHostname: string, events: Models.EventGridEvent[], options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.sendOperationRequest(
      {
        topicHostname,
        events,
        options
      },
      publishEventsOperationSpec,
      callback);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const publishEventsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "api/events",
  urlParameters: [
    Parameters.topicHostname
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "events",
    mapper: {
      required: true,
      serializedName: "events",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "Composite",
            className: "EventGridEvent"
          }
        }
      }
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

export {
  EventGridClient,
  EventGridClientContext,
  Models as EventGridModels,
  Mappers as EventGridMappers
};
