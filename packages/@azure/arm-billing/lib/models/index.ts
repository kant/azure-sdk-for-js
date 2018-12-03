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
 * An interface representing Resource.
 * The Resource model definition.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing EnrollmentAccount.
 * An enrollment account resource.
 *
 * @extends Resource
 */
export interface EnrollmentAccount extends Resource {
  /**
   * @member {string} [principalName] The account owner's principal name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalName?: string;
}

/**
 * @interface
 * An interface representing BillingPeriod.
 * A billing period resource.
 *
 * @extends Resource
 */
export interface BillingPeriod extends Resource {
  /**
   * @member {Date} [billingPeriodStartDate] The start of the date range
   * covered by the billing period.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly billingPeriodStartDate?: Date;
  /**
   * @member {Date} [billingPeriodEndDate] The end of the date range covered by
   * the billing period.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly billingPeriodEndDate?: Date;
  /**
   * @member {string[]} [invoiceIds] Array of invoice ids that associated with.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly invoiceIds?: string[];
}

/**
 * @interface
 * An interface representing DownloadUrl.
 * A secure URL that can be used to download a PDF invoice until the URL
 * expires.
 *
 */
export interface DownloadUrl {
  /**
   * @member {Date} [expiryTime] The time in UTC at which this download URL
   * will expire.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly expiryTime?: Date;
  /**
   * @member {string} [url] The URL to the PDF file.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly url?: string;
}

/**
 * @interface
 * An interface representing ErrorDetails.
 * The details of the error.
 *
 */
export interface ErrorDetails {
  /**
   * @member {string} [code] Error code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [message] Error message indicating why the operation
   * failed.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {string} [target] The target of the particular error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly target?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response indicates that the service is not able to process the
 * incoming request. The reason is provided in the error message.
 *
 */
export interface ErrorResponse {
  /**
   * @member {ErrorDetails} [error] The details of the error.
   */
  error?: ErrorDetails;
}

/**
 * @interface
 * An interface representing Invoice.
 * An invoice resource can be used download a PDF version of an invoice.
 *
 * @extends Resource
 */
export interface Invoice extends Resource {
  /**
   * @member {DownloadUrl} [downloadUrl] A secure link to download the PDF
   * version of an invoice. The link will cease to work after its expiry time
   * is reached.
   */
  downloadUrl?: DownloadUrl;
  /**
   * @member {Date} [invoicePeriodStartDate] The start of the date range
   * covered by the invoice.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly invoicePeriodStartDate?: Date;
  /**
   * @member {Date} [invoicePeriodEndDate] The end of the date range covered by
   * the invoice.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly invoicePeriodEndDate?: Date;
  /**
   * @member {string[]} [billingPeriodIds] Array of billing period ids that the
   * invoice is attributed to.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly billingPeriodIds?: string[];
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Billing.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Invoice, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * A Billing REST API operation.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing BillingPeriodsListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface BillingPeriodsListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] May be used to filter billing periods by
   * billingPeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge',
   * and 'and'. It does not currently support 'ne', 'or', or 'not'.
   */
  filter?: string;
  /**
   * @member {string} [skiptoken] Skiptoken is only used if a previous
   * operation returned a partial result. If a previous response contains a
   * nextLink element, the value of the nextLink element will include a
   * skiptoken parameter that specifies a starting point to use for subsequent
   * calls.
   */
  skiptoken?: string;
  /**
   * @member {number} [top] May be used to limit the number of results to the
   * most recent N billing periods.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing InvoicesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface InvoicesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [expand] May be used to expand the downloadUrl property
   * within a list of invoices. This enables download links to be generated for
   * multiple invoices at once. By default, downloadURLs are not included when
   * listing invoices.
   */
  expand?: string;
  /**
   * @member {string} [filter] May be used to filter invoices by
   * invoicePeriodEndDate. The filter supports 'eq', 'lt', 'gt', 'le', 'ge',
   * and 'and'. It does not currently support 'ne', 'or', or 'not'.
   */
  filter?: string;
  /**
   * @member {string} [skiptoken] Skiptoken is only used if a previous
   * operation returned a partial result. If a previous response contains a
   * nextLink element, the value of the nextLink element will include a
   * skiptoken parameter that specifies a starting point to use for subsequent
   * calls.
   */
  skiptoken?: string;
  /**
   * @member {number} [top] May be used to limit the number of results to the
   * most recent N invoices.
   */
  top?: number;
}

/**
 * @interface
 * An interface representing BillingManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface BillingManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the EnrollmentAccountListResult.
 * Result of listing enrollment accounts.
 *
 * @extends Array<EnrollmentAccount>
 */
export interface EnrollmentAccountListResult extends Array<EnrollmentAccount> {
  /**
   * @member {string} [nextLink] The link (url) to the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the BillingPeriodsListResult.
 * Result of listing billing periods. It contains a list of available billing
 * periods in reverse chronological order.
 *
 * @extends Array<BillingPeriod>
 */
export interface BillingPeriodsListResult extends Array<BillingPeriod> {
  /**
   * @member {string} [nextLink] The link (url) to the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the InvoicesListResult.
 * Result of listing invoices. It contains a list of available invoices in
 * reverse chronological order.
 *
 * @extends Array<Invoice>
 */
export interface InvoicesListResult extends Array<Invoice> {
  /**
   * @member {string} [nextLink] The link (url) to the next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the OperationListResult.
 * Result listing billing operations. It contains a list of operations and a
 * URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Contains response data for the list operation.
 */
export type EnrollmentAccountsListResponse = EnrollmentAccountListResult & {
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
      parsedBody: EnrollmentAccountListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type EnrollmentAccountsGetResponse = EnrollmentAccount & {
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
      parsedBody: EnrollmentAccount;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type EnrollmentAccountsListNextResponse = EnrollmentAccountListResult & {
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
      parsedBody: EnrollmentAccountListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type BillingPeriodsListResponse = BillingPeriodsListResult & {
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
      parsedBody: BillingPeriodsListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type BillingPeriodsGetResponse = BillingPeriod & {
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
      parsedBody: BillingPeriod;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type BillingPeriodsListNextResponse = BillingPeriodsListResult & {
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
      parsedBody: BillingPeriodsListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type InvoicesListResponse = InvoicesListResult & {
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
      parsedBody: InvoicesListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type InvoicesGetResponse = Invoice & {
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
      parsedBody: Invoice;
    };
};

/**
 * Contains response data for the getLatest operation.
 */
export type InvoicesGetLatestResponse = Invoice & {
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
      parsedBody: Invoice;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type InvoicesListNextResponse = InvoicesListResult & {
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
      parsedBody: InvoicesListResult;
    };
};

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
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationListResult & {
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
