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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ContentModeratorClientContext } from "./contentModeratorClientContext";

class ContentModeratorClient extends ContentModeratorClientContext {
  // Operation groups
  imageModeration: operations.ImageModeration;
  textModeration: operations.TextModeration;
  listManagementImageLists: operations.ListManagementImageLists;
  listManagementTermLists: operations.ListManagementTermLists;
  listManagementImage: operations.ListManagementImage;
  listManagementTerm: operations.ListManagementTerm;
  reviews: operations.Reviews;

  /**
   * Initializes a new instance of the ContentModeratorClient class.
   * @param endpoint Supported Cognitive Services endpoints (protocol and hostname, for example:
   * https://westus.api.cognitive.microsoft.com).
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param [options] The parameter options
   */
  constructor(endpoint: string, credentials: msRest.ServiceClientCredentials, options?: msRest.ServiceClientOptions) {
    super(endpoint, credentials, options);
    this.imageModeration = new operations.ImageModeration(this);
    this.textModeration = new operations.TextModeration(this);
    this.listManagementImageLists = new operations.ListManagementImageLists(this);
    this.listManagementTermLists = new operations.ListManagementTermLists(this);
    this.listManagementImage = new operations.ListManagementImage(this);
    this.listManagementTerm = new operations.ListManagementTerm(this);
    this.reviews = new operations.Reviews(this);
  }
}

// Operation Specifications

export {
  ContentModeratorClient,
  ContentModeratorClientContext,
  Models as ContentModeratorModels,
  Mappers as ContentModeratorMappers
};
export * from "./operations";
