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
 * An interface representing OperationDisplay.
 * Properties of the operation
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Provider name
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource name
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation name
   */
  operation?: string;
  /**
   * @member {string} [description] Description of the operation
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Operation provided by provider
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Name of the operation
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Properties of the operation
   */
  display?: OperationDisplay;
}

/**
 * Contains the possible cases for AlertRule.
 */
export type AlertRuleUnion = AlertRule | ScheduledAlertRule;

/**
 * @interface
 * An interface representing AlertRule.
 * Alert rule.
 *
 */
export interface AlertRule {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "AlertRule";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the alert rule.
   */
  etag?: string;
}

/**
 * @interface
 * An interface representing AlertRuleKind1.
 * Describes an Azure resource with kind.
 *
 */
export interface AlertRuleKind1 {
  /**
   * @member {AlertRuleKind} [kind] The kind of the alert rule. Possible values
   * include: 'Scheduled'
   */
  kind?: AlertRuleKind;
}

/**
 * @interface
 * An interface representing ScheduledAlertRule.
 * Represents scheduled alert rule.
 *
 */
export interface ScheduledAlertRule {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "Scheduled";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the alert rule.
   */
  etag?: string;
  /**
   * @member {string} ruleName The name for alerts created by this alert rule.
   */
  ruleName: string;
  /**
   * @member {string} description The description of the alert rule.
   */
  description: string;
  /**
   * @member {Severity} severity The severity for alerts created by this alert
   * rule. Possible values include: 'Low', 'Medium', 'High', 'Informational'
   */
  severity: Severity;
  /**
   * @member {boolean} enabled Determines whether this alert rule is enabled or
   * disabled.
   */
  enabled: boolean;
  /**
   * @member {string} query The query that creates alerts for this rule.
   */
  query: string;
  /**
   * @member {string} queryFrequency The frequency (in ISO 8601 duration
   * format) for this alert rule to run.
   */
  queryFrequency: string;
  /**
   * @member {string} queryPeriod The period (in ISO 8601 duration format) that
   * this alert rule looks at.
   */
  queryPeriod: string;
  /**
   * @member {TriggerOperator} triggerOperator The operation against the
   * threshold that triggers alert rule. Possible values include:
   * 'GreaterThan', 'LessThan', 'Equal', 'NotEqual'
   */
  triggerOperator: TriggerOperator;
  /**
   * @member {number} triggerThreshold The threshold triggers this alert rule.
   */
  triggerThreshold: number;
  /**
   * @member {boolean} suppressionEnabled Determines whether the suppression
   * for this alert rule is enabled or disabled.
   */
  suppressionEnabled: boolean;
  /**
   * @member {string} suppressionDuration The suppression (in ISO 8601 duration
   * format) to wait since last time this alert rule been triggered.
   */
  suppressionDuration: string;
  /**
   * @member {string} [lastModifiedUtc] The last time that this alert has been
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lastModifiedUtc?: string;
}

/**
 * Contains the possible cases for DataConnector.
 */
export type DataConnectorUnion = DataConnector | OfficeDataConnector | TIDataConnector | DataConnectorWithAlertsUnion;

/**
 * @interface
 * An interface representing DataConnector.
 * Data connector.
 *
 */
export interface DataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "DataConnector";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
}

/**
 * @interface
 * An interface representing DataConnectorKind1.
 * Describes an Azure resource with kind.
 *
 */
export interface DataConnectorKind1 {
  /**
   * @member {DataConnectorKind} [kind] The kind of the data connector.
   * Possible values include: 'AzureActiveDirectory', 'AzureSecurityCenter',
   * 'MicrosoftCloudAppSecurity', 'ThreatIntelligence', 'Office365'
   */
  kind?: DataConnectorKind;
}

/**
 * @interface
 * An interface representing DataConnectorContextId.
 * Describes an Azure resource with kind.
 *
 */
export interface DataConnectorContextId {
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
}

/**
 * @interface
 * An interface representing DataConnectorDataTypeCommon.
 * Common field for data type in data connectors.
 *
 */
export interface DataConnectorDataTypeCommon {
  /**
   * @member {DataTypeState} [state] Describe whether this data type connection
   * is enabled or not. Possible values include: 'Enabled', 'Disabled'
   */
  state?: DataTypeState;
}

/**
 * @interface
 * An interface representing OfficeDataConnectorDataTypesSharePoint.
 * SharePoint data type connection.
 *
 * @extends DataConnectorDataTypeCommon
 */
export interface OfficeDataConnectorDataTypesSharePoint extends DataConnectorDataTypeCommon {
}

/**
 * @interface
 * An interface representing OfficeDataConnectorDataTypesExchange.
 * Exchange data type connection.
 *
 * @extends DataConnectorDataTypeCommon
 */
export interface OfficeDataConnectorDataTypesExchange extends DataConnectorDataTypeCommon {
}

/**
 * @interface
 * An interface representing OfficeDataConnectorDataTypes.
 * The available data types for office data connector.
 *
 */
export interface OfficeDataConnectorDataTypes {
  /**
   * @member {OfficeDataConnectorDataTypesSharePoint} [sharePoint] SharePoint
   * data type connection.
   */
  sharePoint?: OfficeDataConnectorDataTypesSharePoint;
  /**
   * @member {OfficeDataConnectorDataTypesExchange} [exchange] Exchange data
   * type connection.
   */
  exchange?: OfficeDataConnectorDataTypesExchange;
}

/**
 * @interface
 * An interface representing OfficeDataConnector.
 * Represents office data connector.
 *
 */
export interface OfficeDataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "Office365";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {OfficeDataConnectorDataTypes} [dataTypes] The available data
   * types for the connector.
   */
  dataTypes?: OfficeDataConnectorDataTypes;
}

/**
 * @interface
 * An interface representing TIDataConnectorDataTypesIndicators.
 * Data type for indicators connection.
 *
 * @extends DataConnectorDataTypeCommon
 */
export interface TIDataConnectorDataTypesIndicators extends DataConnectorDataTypeCommon {
}

/**
 * @interface
 * An interface representing TIDataConnectorDataTypes.
 * The available data types for TI data connector.
 *
 */
export interface TIDataConnectorDataTypes {
  /**
   * @member {TIDataConnectorDataTypesIndicators} [indicators] Data type for
   * indicators connection.
   */
  indicators?: TIDataConnectorDataTypesIndicators;
}

/**
 * @interface
 * An interface representing TIDataConnector.
 * Represents threat intelligence data connector.
 *
 */
export interface TIDataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "ThreatIntelligence";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {TIDataConnectorDataTypes} [dataTypes] The available data types
   * for the connector.
   */
  dataTypes?: TIDataConnectorDataTypes;
}

/**
 * Contains the possible cases for DataConnectorWithAlerts.
 */
export type DataConnectorWithAlertsUnion = DataConnectorWithAlerts | AADDataConnector | ASCDataConnector | MCASDataConnector;

/**
 * @interface
 * An interface representing DataConnectorWithAlerts.
 * Data connector with alerts data type.
 *
 */
export interface DataConnectorWithAlerts {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "DataConnectorWithAlerts";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {AlertsDataTypeOfDataConnector} [dataTypes] The available data
   * types for the connector.
   */
  dataTypes?: AlertsDataTypeOfDataConnector;
}

/**
 * @interface
 * An interface representing AADDataConnector.
 * Represents AAD (Azure Active Directory) data connector.
 *
 */
export interface AADDataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "AzureActiveDirectory";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {AlertsDataTypeOfDataConnector} [dataTypes] The available data
   * types for the connector.
   */
  dataTypes?: AlertsDataTypeOfDataConnector;
}

/**
 * @interface
 * An interface representing ASCDataConnector.
 * Represents ASC (Azure Security Center) data connector.
 *
 */
export interface ASCDataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "AzureSecurityCenter";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {AlertsDataTypeOfDataConnector} [dataTypes] The available data
   * types for the connector.
   */
  dataTypes?: AlertsDataTypeOfDataConnector;
}

/**
 * @interface
 * An interface representing MCASDataConnector.
 * Represents MCAS (Microsoft Cloud App Security) data connector.
 *
 */
export interface MCASDataConnector {
  /**
   * @member {string} kind Polymorphic Discriminator
   */
  kind: "MicrosoftCloudAppSecurity";
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [etag] Etag of the data connector.
   */
  etag?: string;
  /**
   * @member {string} [contextId] The context id of the origin data source
   * (Like tenantID, SubscriptionID etc.).
   */
  contextId?: string;
  /**
   * @member {AlertsDataTypeOfDataConnector} [dataTypes] The available data
   * types for the connector.
   */
  dataTypes?: AlertsDataTypeOfDataConnector;
}

/**
 * @interface
 * An interface representing AlertsDataTypeOfDataConnectorAlerts.
 * Alerts data type connection.
 *
 * @extends DataConnectorDataTypeCommon
 */
export interface AlertsDataTypeOfDataConnectorAlerts extends DataConnectorDataTypeCommon {
}

/**
 * @interface
 * An interface representing AlertsDataTypeOfDataConnector.
 * Alerts data type for data connectors.
 *
 */
export interface AlertsDataTypeOfDataConnector {
  /**
   * @member {AlertsDataTypeOfDataConnectorAlerts} [alerts] Alerts data type
   * connection.
   */
  alerts?: AlertsDataTypeOfDataConnectorAlerts;
}

/**
 * @interface
 * An interface representing Resource.
 * An azure resource object
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Azure resource Id
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [type] Azure resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [name] Azure resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
}

/**
 * @interface
 * An interface representing SecurityInsightsOptions.
 * @extends AzureServiceClientOptions
 */
export interface SecurityInsightsOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationsList.
 * Lists the operations available in the SecurityInsights RP.
 *
 * @extends Array<Operation>
 */
export interface OperationsList extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to fetch the next set of operations.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the AlertRulesList.
 * List all the alert rules.
 *
 * @extends Array<AlertRuleUnion>
 */
export interface AlertRulesList extends Array<AlertRuleUnion> {
  /**
   * @member {string} [nextLink] URL to fetch the next set of alert rules.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the DataConnectorList.
 * List all the data connectors.
 *
 * @extends Array<DataConnectorUnion>
 */
export interface DataConnectorList extends Array<DataConnectorUnion> {
  /**
   * @member {string} [nextLink] URL to fetch the next set of data connectors.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * Defines values for AlertRuleKind.
 * Possible values include: 'Scheduled'
 * @readonly
 * @enum {string}
 */
export type AlertRuleKind = 'Scheduled';

/**
 * Defines values for Severity.
 * Possible values include: 'Low', 'Medium', 'High', 'Informational'
 * @readonly
 * @enum {string}
 */
export type Severity = 'Low' | 'Medium' | 'High' | 'Informational';

/**
 * Defines values for TriggerOperator.
 * Possible values include: 'GreaterThan', 'LessThan', 'Equal', 'NotEqual'
 * @readonly
 * @enum {string}
 */
export type TriggerOperator = 'GreaterThan' | 'LessThan' | 'Equal' | 'NotEqual';

/**
 * Defines values for DataConnectorKind.
 * Possible values include: 'AzureActiveDirectory', 'AzureSecurityCenter',
 * 'MicrosoftCloudAppSecurity', 'ThreatIntelligence', 'Office365'
 * @readonly
 * @enum {string}
 */
export type DataConnectorKind = 'AzureActiveDirectory' | 'AzureSecurityCenter' | 'MicrosoftCloudAppSecurity' | 'ThreatIntelligence' | 'Office365';

/**
 * Defines values for DataTypeState.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type DataTypeState = 'Enabled' | 'Disabled';

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationsList & {
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
      parsedBody: OperationsList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type OperationsListNextResponse = OperationsList & {
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
      parsedBody: OperationsList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type AlertRulesListResponse = AlertRulesList & {
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
      parsedBody: AlertRulesList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AlertRulesGetResponse = AlertRuleUnion & {
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
      parsedBody: AlertRuleUnion;
    };
};

/**
 * Contains response data for the create operation.
 */
export type AlertRulesCreateResponse = AlertRuleUnion & {
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
      parsedBody: AlertRuleUnion;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type AlertRulesListNextResponse = AlertRulesList & {
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
      parsedBody: AlertRulesList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type DataConnectorsListResponse = DataConnectorList & {
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
      parsedBody: DataConnectorList;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DataConnectorsGetResponse = DataConnectorUnion & {
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
      parsedBody: DataConnectorUnion;
    };
};

/**
 * Contains response data for the create operation.
 */
export type DataConnectorsCreateResponse = DataConnectorUnion & {
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
      parsedBody: DataConnectorUnion;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type DataConnectorsListNextResponse = DataConnectorList & {
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
      parsedBody: DataConnectorList;
    };
};
