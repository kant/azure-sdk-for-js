/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing CheckNameAvailabilityInput.
 * Input of check name availability API.
 *
 */
export interface CheckNameAvailabilityInput {
  /**
   * @member {string} name The Search service name to validate. Search service
   * names must only contain lowercase letters, digits or dashes, cannot use
   * dash as the first two or last one characters, cannot contain consecutive
   * dashes, and must be between 2 and 60 characters in length.
   */
  name: string;
}

/**
 * @interface
 * An interface representing CheckNameAvailabilityOutput.
 * Output of check name availability API.
 *
 */
export interface CheckNameAvailabilityOutput {
  /**
   * @member {boolean} [isNameAvailable] A value indicating whether the name is
   * available.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly isNameAvailable?: boolean;
  /**
   * @member {UnavailableNameReason} [reason] The reason why the name is not
   * available. 'Invalid' indicates the name provided does not match the naming
   * requirements (incorrect length, unsupported characters, etc.).
   * 'AlreadyExists' indicates that the name is already in use and is therefore
   * unavailable. Possible values include: 'Invalid', 'AlreadyExists'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly reason?: UnavailableNameReason;
  /**
   * @member {string} [message] A message that explains why the name is invalid
   * and provides resource naming requirements. Available only if 'Invalid' is
   * returned in the 'reason' property.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
}

/**
 * @interface
 * An interface representing AdminKeyResult.
 * Response containing the primary and secondary admin API keys for a given
 * Azure Search service.
 *
 */
export interface AdminKeyResult {
  /**
   * @member {string} [primaryKey] The primary admin API key of the Search
   * service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly primaryKey?: string;
  /**
   * @member {string} [secondaryKey] The secondary admin API key of the Search
   * service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly secondaryKey?: string;
}

/**
 * @interface
 * An interface representing QueryKey.
 * Describes an API key for a given Azure Search service that has permissions
 * for query operations only.
 *
 */
export interface QueryKey {
  /**
   * @member {string} [name] The name of the query API key; may be empty.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [key] The value of the query API key.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly key?: string;
}

/**
 * @interface
 * An interface representing Sku.
 * Defines the SKU of an Azure Search Service, which determines price tier and
 * capacity limits.
 *
 */
export interface Sku {
  /**
   * @member {SkuName} [name] The SKU of the Search service. Valid values
   * include: 'free': Shared service. 'basic': Dedicated service with up to 3
   * replicas. 'standard': Dedicated service with up to 12 partitions and 12
   * replicas. 'standard2': Similar to standard, but with more capacity per
   * search unit. 'standard3': Offers maximum capacity per search unit with up
   * to 12 partitions and 12 replicas (or up to 3 partitions with more indexes
   * if you also set the hostingMode property to 'highDensity'). Possible
   * values include: 'free', 'basic', 'standard', 'standard2', 'standard3'
   */
  name?: SkuName;
}

/**
 * @interface
 * An interface representing Resource.
 * Base type for all Azure resources.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] The ID of the resource. This can be used with the
   * Azure Resource Manager to link resources together.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] The name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] The resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] The geographic location of the resource. This
   * must be one of the supported and registered Azure Geo Regions (for
   * example, West US, East US, Southeast Asia, and so forth). This property is
   * required when creating a new resource.
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Tags to help
   * categorize the resource in the Azure portal.
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
}

/**
 * @interface
 * An interface representing SearchService.
 * Describes an Azure Search service and its current state.
 *
 * @extends Resource
 */
export interface SearchService extends Resource {
  /**
   * @member {number} [replicaCount] The number of replicas in the Search
   * service. If specified, it must be a value between 1 and 12 inclusive for
   * standard SKUs or between 1 and 3 inclusive for basic SKU. Default value: 1
   * .
   */
  replicaCount?: number;
  /**
   * @member {number} [partitionCount] The number of partitions in the Search
   * service; if specified, it can be 1, 2, 3, 4, 6, or 12. Values greater than
   * 1 are only valid for standard SKUs. For 'standard3' services with
   * hostingMode set to 'highDensity', the allowed values are between 1 and 3.
   * Default value: 1 .
   */
  partitionCount?: number;
  /**
   * @member {HostingMode} [hostingMode] Applicable only for the standard3 SKU.
   * You can set this property to enable up to 3 high density partitions that
   * allow up to 1000 indexes, which is much higher than the maximum indexes
   * allowed for any other SKU. For the standard3 SKU, the value is either
   * 'default' or 'highDensity'. For all other SKUs, this value must be
   * 'default'. Possible values include: 'default', 'highDensity'. Default
   * value: 'default' .
   */
  hostingMode?: HostingMode;
  /**
   * @member {SearchServiceStatus} [status] The status of the Search service.
   * Possible values include: 'running': The Search service is running and no
   * provisioning operations are underway. 'provisioning': The Search service
   * is being provisioned or scaled up or down. 'deleting': The Search service
   * is being deleted. 'degraded': The Search service is degraded. This can
   * occur when the underlying search units are not healthy. The Search service
   * is most likely operational, but performance might be slow and some
   * requests might be dropped. 'disabled': The Search service is disabled. In
   * this state, the service will reject all API requests. 'error': The Search
   * service is in an error state. If your service is in the degraded,
   * disabled, or error states, it means the Azure Search team is actively
   * investigating the underlying issue. Dedicated services in these states are
   * still chargeable based on the number of search units provisioned. Possible
   * values include: 'running', 'provisioning', 'deleting', 'degraded',
   * 'disabled', 'error'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly status?: SearchServiceStatus;
  /**
   * @member {string} [statusDetails] The details of the Search service status.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly statusDetails?: string;
  /**
   * @member {ProvisioningState} [provisioningState] The state of the last
   * provisioning operation performed on the Search service. Provisioning is an
   * intermediate state that occurs while service capacity is being
   * established. After capacity is set up, provisioningState changes to either
   * 'succeeded' or 'failed'. Client applications can poll provisioning status
   * (the recommended polling interval is from 30 seconds to one minute) by
   * using the Get Search Service operation to see when an operation is
   * completed. If you are using the free service, this value tends to come
   * back as 'succeeded' directly in the call to Create Search service. This is
   * because the free service uses capacity that is already set up. Possible
   * values include: 'succeeded', 'provisioning', 'failed'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {Sku} [sku] The SKU of the Search Service, which determines price
   * tier and capacity limits. This property is required when creating a new
   * Search Service.
   */
  sku?: Sku;
}

/**
 * @interface
 * An interface representing Identity.
 * Identity for the resource.
 *
 */
export interface Identity {
  /**
   * @member {string} [principalId] The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that describes the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] The friendly name of the resource provider.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [operation] The operation type: read, write, delete,
   * listKeys/action, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
  /**
   * @member {string} [resource] The resource type on which the operation is
   * performed.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [description] The friendly name of the operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Describes a REST API operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] The name of the operation. This name is of the
   * form {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The object that describes the
   * operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing SearchManagementRequestOptions.
 * Additional parameters for a set of operations.
 *
 */
export interface SearchManagementRequestOptions {
  /**
   * @member {string} [clientRequestId] A client-generated GUID value that
   * identifies this request. If specified, this will be included in response
   * information as a way to track the request.
   */
  clientRequestId?: string;
}

/**
 * @interface
 * An interface representing AdminKeysGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AdminKeysGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing AdminKeysRegenerateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AdminKeysRegenerateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing QueryKeysCreateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface QueryKeysCreateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing QueryKeysListBySearchServiceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface QueryKeysListBySearchServiceOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing QueryKeysDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface QueryKeysDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesGetOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesGetOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesListBySubscriptionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesListBySubscriptionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesCheckNameAvailabilityOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesCheckNameAvailabilityOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing ServicesBeginCreateOrUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ServicesBeginCreateOrUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {SearchManagementRequestOptions} [searchManagementRequestOptions]
   * Additional parameters for the operation
   */
  searchManagementRequestOptions?: SearchManagementRequestOptions;
}

/**
 * @interface
 * An interface representing SearchManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface SearchManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * The result of the request to list REST API operations. It contains a list of
 * operations and a URL  to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] The URL to get the next set of operation list
   * results, if any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the ListQueryKeysResult.
 * Response containing the query API keys for a given Azure Search service.
 *
 * @extends Array<QueryKey>
 */
export interface ListQueryKeysResult extends Array<QueryKey> {
}

/**
 * @interface
 * An interface representing the SearchServiceListResult.
 * Response containing a list of Azure Search services.
 *
 * @extends Array<SearchService>
 */
export interface SearchServiceListResult extends Array<SearchService> {
}

/**
 * Defines values for UnavailableNameReason.
 * Possible values include: 'Invalid', 'AlreadyExists'
 * @readonly
 * @enum {string}
 */
export type UnavailableNameReason = 'Invalid' | 'AlreadyExists';

/**
 * Defines values for SkuName.
 * Possible values include: 'free', 'basic', 'standard', 'standard2', 'standard3'
 * @readonly
 * @enum {string}
 */
export type SkuName = 'free' | 'basic' | 'standard' | 'standard2' | 'standard3';

/**
 * Defines values for HostingMode.
 * Possible values include: 'default', 'highDensity'
 * @readonly
 * @enum {string}
 */
export type HostingMode = 'default' | 'highDensity';

/**
 * Defines values for SearchServiceStatus.
 * Possible values include: 'running', 'provisioning', 'deleting', 'degraded', 'disabled', 'error'
 * @readonly
 * @enum {string}
 */
export type SearchServiceStatus = 'running' | 'provisioning' | 'deleting' | 'degraded' | 'disabled' | 'error';

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'succeeded', 'provisioning', 'failed'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'succeeded' | 'provisioning' | 'failed';

/**
 * Defines values for AdminKeyKind.
 * Possible values include: 'primary', 'secondary'
 * @readonly
 * @enum {string}
 */
export type AdminKeyKind = 'primary' | 'secondary';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
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
 * Contains response data for the get operation.
 */
export type AdminKeysGetResponse = AdminKeyResult & {
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
      parsedBody: AdminKeyResult;
    };
};

/**
 * Contains response data for the regenerate operation.
 */
export type AdminKeysRegenerateResponse = AdminKeyResult & {
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
      parsedBody: AdminKeyResult;
    };
};

/**
 * Contains response data for the create operation.
 */
export type QueryKeysCreateResponse = QueryKey & {
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
      parsedBody: QueryKey;
    };
};

/**
 * Contains response data for the listBySearchService operation.
 */
export type QueryKeysListBySearchServiceResponse = ListQueryKeysResult & {
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
      parsedBody: ListQueryKeysResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServicesCreateOrUpdateResponse = SearchService & {
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
      parsedBody: SearchService;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ServicesUpdateResponse = SearchService & {
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
      parsedBody: SearchService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServicesGetResponse = SearchService & {
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
      parsedBody: SearchService;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ServicesListByResourceGroupResponse = SearchServiceListResult & {
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
      parsedBody: SearchServiceListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type ServicesListBySubscriptionResponse = SearchServiceListResult & {
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
      parsedBody: SearchServiceListResult;
    };
};

/**
 * Contains response data for the checkNameAvailability operation.
 */
export type ServicesCheckNameAvailabilityResponse = CheckNameAvailabilityOutput & {
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
      parsedBody: CheckNameAvailabilityOutput;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ServicesBeginCreateOrUpdateResponse = SearchService & {
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
      parsedBody: SearchService;
    };
};
