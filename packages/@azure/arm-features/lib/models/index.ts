/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing FeatureProperties.
 * Information about feature.
 *
 */
export interface FeatureProperties {
  /**
   * @member {string} [state] The registration state of the feature for the
   * subscription.
   */
  state?: string;
}

/**
 * @interface
 * An interface representing FeatureResult.
 * Previewed feature information.
 *
 */
export interface FeatureResult {
  /**
   * @member {string} [name] The name of the feature.
   */
  name?: string;
  /**
   * @member {FeatureProperties} [properties] Properties of the previewed
   * feature.
   */
  properties?: FeatureProperties;
  /**
   * @member {string} [id] The resource ID of the feature.
   */
  id?: string;
  /**
   * @member {string} [type] The resource type of the feature.
   */
  type?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Features
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Microsoft.Features operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing FeatureClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface FeatureClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Microsoft.Features operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the FeatureOperationsListResult.
 * List of previewed features.
 *
 * @extends Array<FeatureResult>
 */
export interface FeatureOperationsListResult extends Array<FeatureResult> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  nextLink?: string;
}

/**
 * Contains response data for the listOperations operation.
 */
export type ListOperationsResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listOperationsNext operation.
 */
export type ListOperationsNextResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listAll operation.
 */
export type FeaturesListAllResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type FeaturesListResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type FeaturesGetResponse = FeatureResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureResult;
    };
};

/**
 * Contains response data for the register operation.
 */
export type FeaturesRegisterResponse = FeatureResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureResult;
    };
};

/**
 * Contains response data for the listAllNext operation.
 */
export type FeaturesListAllNextResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type FeaturesListNextResponse = FeatureOperationsListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FeatureOperationsListResult;
    };
};
