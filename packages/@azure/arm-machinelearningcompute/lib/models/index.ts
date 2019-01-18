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
 * An interface representing Resource.
 * Azure resource
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Specifies the resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Specifies the name of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} location Specifies the location of the resource.
   */
  location: string;
  /**
   * @member {string} [type] Specifies the type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Contains resource tags
   * defined as key/value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ErrorDetail.
 * Error detail information.
 *
 */
export interface ErrorDetail {
  /**
   * @member {string} code Error code.
   */
  code: string;
  /**
   * @member {string} message Error message.
   */
  message: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response information.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} code Error code.
   */
  code: string;
  /**
   * @member {string} message Error message.
   */
  message: string;
  /**
   * @member {ErrorDetail[]} [details] An array of error detail objects.
   */
  details?: ErrorDetail[];
}

/**
 * @interface
 * An interface representing ErrorResponseWrapper.
 * Wrapper for error response to follow ARM guidelines.
 *
 */
export interface ErrorResponseWrapper {
  /**
   * @member {ErrorResponse} [error] The error response.
   */
  error?: ErrorResponse;
}

/**
 * @interface
 * An interface representing StorageAccountProperties.
 * Properties of Storage Account.
 *
 */
export interface StorageAccountProperties {
  /**
   * @member {string} [resourceId] ARM resource ID of the Azure Storage Account
   * to store CLI specific files. If not provided one will be created. This
   * cannot be changed once the cluster is created.
   */
  resourceId?: string;
}

/**
 * @interface
 * An interface representing ContainerRegistryProperties.
 * Properties of Azure Container Registry.
 *
 */
export interface ContainerRegistryProperties {
  /**
   * @member {string} [resourceId] ARM resource ID of the Azure Container
   * Registry used to store Docker images for web services in the cluster. If
   * not provided one will be created. This cannot be changed once the cluster
   * is created.
   */
  resourceId?: string;
}

/**
 * @interface
 * An interface representing ServicePrincipalProperties.
 * The Azure service principal used by Kubernetes for configuring load
 * balancers
 *
 */
export interface ServicePrincipalProperties {
  /**
   * @member {string} clientId The service principal client ID
   */
  clientId: string;
  /**
   * @member {string} secret The service principal secret. This is not returned
   * in response of GET/PUT on the resource. To see this please call listKeys.
   */
  secret: string;
}

/**
 * @interface
 * An interface representing KubernetesClusterProperties.
 * Kubernetes cluster specific properties
 *
 */
export interface KubernetesClusterProperties {
  /**
   * @member {ServicePrincipalProperties} [servicePrincipal] The Azure Service
   * Principal used by Kubernetes
   */
  servicePrincipal?: ServicePrincipalProperties;
}

/**
 * @interface
 * An interface representing SystemService.
 * Information about a system service deployed in the cluster
 *
 */
export interface SystemService {
  /**
   * @member {SystemServiceType} systemServiceType The system service type.
   * Possible values include: 'None', 'ScoringFrontEnd', 'BatchFrontEnd'
   */
  systemServiceType: SystemServiceType;
  /**
   * @member {string} [publicIpAddress] The public IP address of the system
   * service
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly publicIpAddress?: string;
  /**
   * @member {string} [version] The state of the system service
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly version?: string;
}

/**
 * @interface
 * An interface representing AcsClusterProperties.
 * Information about the container service backing the cluster
 *
 */
export interface AcsClusterProperties {
  /**
   * @member {string} [clusterFqdn] The FQDN of the cluster.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly clusterFqdn?: string;
  /**
   * @member {OrchestratorType} orchestratorType Type of orchestrator. It
   * cannot be changed once the cluster is created. Possible values include:
   * 'Kubernetes', 'None'
   */
  orchestratorType: OrchestratorType;
  /**
   * @member {KubernetesClusterProperties} [orchestratorProperties]
   * Orchestrator specific properties
   */
  orchestratorProperties?: KubernetesClusterProperties;
  /**
   * @member {SystemService[]} [systemServices] The system services deployed to
   * the cluster
   */
  systemServices?: SystemService[];
  /**
   * @member {number} [masterCount] The number of master nodes in the container
   * service. Default value: 1 .
   */
  masterCount?: number;
  /**
   * @member {number} [agentCount] The number of agent nodes in the Container
   * Service. This can be changed to scale the cluster. Default value: 2 .
   */
  agentCount?: number;
  /**
   * @member {AgentVMSizeTypes} [agentVmSize] The Azure VM size of the agent VM
   * nodes. This cannot be changed once the cluster is created. This list is
   * non exhaustive; refer to
   * https://docs.microsoft.com/en-us/azure/virtual-machines/windows/sizes for
   * the possible VM sizes. Possible values include: 'Standard_A0',
   * 'Standard_A1', 'Standard_A2', 'Standard_A3', 'Standard_A4', 'Standard_A5',
   * 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9',
   * 'Standard_A10', 'Standard_A11', 'Standard_D1', 'Standard_D2',
   * 'Standard_D3', 'Standard_D4', 'Standard_D11', 'Standard_D12',
   * 'Standard_D13', 'Standard_D14', 'Standard_D1_v2', 'Standard_D2_v2',
   * 'Standard_D3_v2', 'Standard_D4_v2', 'Standard_D5_v2', 'Standard_D11_v2',
   * 'Standard_D12_v2', 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_G1',
   * 'Standard_G2', 'Standard_G3', 'Standard_G4', 'Standard_G5',
   * 'Standard_DS1', 'Standard_DS2', 'Standard_DS3', 'Standard_DS4',
   * 'Standard_DS11', 'Standard_DS12', 'Standard_DS13', 'Standard_DS14',
   * 'Standard_GS1', 'Standard_GS2', 'Standard_GS3', 'Standard_GS4',
   * 'Standard_GS5'. Default value: 'Standard_D3_v2' .
   */
  agentVmSize?: AgentVMSizeTypes;
}

/**
 * @interface
 * An interface representing AppInsightsProperties.
 * Properties of App Insights.
 *
 */
export interface AppInsightsProperties {
  /**
   * @member {string} [resourceId] ARM resource ID of the App Insights.
   */
  resourceId?: string;
}

/**
 * @interface
 * An interface representing SslConfiguration.
 * SSL configuration. If configured data-plane calls to user services will be
 * exposed over SSL only.
 *
 */
export interface SslConfiguration {
  /**
   * @member {Status} [status] SSL status. Allowed values are Enabled and
   * Disabled. Possible values include: 'Enabled', 'Disabled'. Default value:
   * 'Enabled' .
   */
  status?: Status;
  /**
   * @member {string} [cert] The SSL cert data in PEM format.
   */
  cert?: string;
  /**
   * @member {string} [key] The SSL key data in PEM format. This is not
   * returned in response of GET/PUT on the resource. To see this please call
   * listKeys API.
   */
  key?: string;
  /**
   * @member {string} [cname] The CName of the certificate.
   */
  cname?: string;
}

/**
 * @interface
 * An interface representing ServiceAuthConfiguration.
 * Global service auth configuration properties. These are the data-plane
 * authorization keys and are used if a service doesn't define it's own.
 *
 */
export interface ServiceAuthConfiguration {
  /**
   * @member {string} primaryAuthKeyHash The primary auth key hash. This is not
   * returned in response of GET/PUT on the resource.. To see this please call
   * listKeys API.
   */
  primaryAuthKeyHash: string;
  /**
   * @member {string} secondaryAuthKeyHash The secondary auth key hash. This is
   * not returned in response of GET/PUT on the resource.. To see this please
   * call listKeys API.
   */
  secondaryAuthKeyHash: string;
}

/**
 * @interface
 * An interface representing AutoScaleConfiguration.
 * AutoScale configuration properties.
 *
 */
export interface AutoScaleConfiguration {
  /**
   * @member {Status} [status] If auto-scale is enabled for all services. Each
   * service can turn it off individually. Possible values include: 'Enabled',
   * 'Disabled'. Default value: 'Disabled' .
   */
  status?: Status;
  /**
   * @member {number} [minReplicas] The minimum number of replicas for each
   * service. Default value: 1 .
   */
  minReplicas?: number;
  /**
   * @member {number} [maxReplicas] The maximum number of replicas for each
   * service. Default value: 100 .
   */
  maxReplicas?: number;
  /**
   * @member {number} [targetUtilization] The target utilization.
   */
  targetUtilization?: number;
  /**
   * @member {number} [refreshPeriodInSeconds] Refresh period in seconds.
   */
  refreshPeriodInSeconds?: number;
}

/**
 * @interface
 * An interface representing GlobalServiceConfiguration.
 * Global configuration for services in the cluster.
 *
 */
export interface GlobalServiceConfiguration {
  /**
   * @member {string} [etag] The configuartion ETag for updates.
   */
  etag?: string;
  /**
   * @member {SslConfiguration} [ssl] The SSL configuration properties
   */
  ssl?: SslConfiguration;
  /**
   * @member {ServiceAuthConfiguration} [serviceAuth] Optional global
   * authorization keys for all user services deployed in cluster. These are
   * used if the service does not have auth keys.
   */
  serviceAuth?: ServiceAuthConfiguration;
  /**
   * @member {AutoScaleConfiguration} [autoScale] The auto-scale configuration
   */
  autoScale?: AutoScaleConfiguration;
  /**
   * @property Describes unknown properties. The value of an unknown property
   * can be of "any" type.
   */
  [property: string]: any;
}

/**
 * @interface
 * An interface representing OperationalizationCluster.
 * Instance of an Azure ML Operationalization Cluster resource.
 *
 * @extends Resource
 */
export interface OperationalizationCluster extends Resource {
  /**
   * @member {string} [description] The description of the cluster.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] The date and time when the cluster was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] The date and time when the cluster was last
   * modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {OperationStatus} [provisioningState] The provision state of the
   * cluster. Valid values are Unknown, Updating, Provisioning, Succeeded, and
   * Failed. Possible values include: 'Unknown', 'Updating', 'Creating',
   * 'Deleting', 'Succeeded', 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: OperationStatus;
  /**
   * @member {ErrorResponseWrapper[]} [provisioningErrors] List of provisioning
   * errors reported by the resource provider.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningErrors?: ErrorResponseWrapper[];
  /**
   * @member {ClusterType} clusterType The cluster type. Possible values
   * include: 'ACS', 'Local'
   */
  clusterType: ClusterType;
  /**
   * @member {StorageAccountProperties} [storageAccount] Storage Account
   * properties.
   */
  storageAccount?: StorageAccountProperties;
  /**
   * @member {ContainerRegistryProperties} [containerRegistry] Container
   * Registry properties.
   */
  containerRegistry?: ContainerRegistryProperties;
  /**
   * @member {AcsClusterProperties} [containerService] Parameters for the Azure
   * Container Service cluster.
   */
  containerService?: AcsClusterProperties;
  /**
   * @member {AppInsightsProperties} [appInsights] AppInsights configuration.
   */
  appInsights?: AppInsightsProperties;
  /**
   * @member {GlobalServiceConfiguration} [globalServiceConfiguration] Contains
   * global configuration for the web services in the cluster.
   */
  globalServiceConfiguration?: GlobalServiceConfiguration;
}

/**
 * @interface
 * An interface representing OperationalizationClusterUpdateParameters.
 * Parameters for PATCH operation on an operationalization cluster
 *
 */
export interface OperationalizationClusterUpdateParameters {
  /**
   * @member {{ [propertyName: string]: string }} [tags] Gets or sets a list of
   * key value pairs that describe the resource. These tags can be used in
   * viewing and grouping this resource (across resource groups). A maximum of
   * 15 tags can be provided for a resource. Each tag must have a key no
   * greater in length than 128 characters and a value no greater in length
   * than 256 characters.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing StorageAccountCredentials.
 * Access information for the storage account.
 *
 */
export interface StorageAccountCredentials {
  /**
   * @member {string} [resourceId] The ARM resource ID of the storage account.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resourceId?: string;
  /**
   * @member {string} [primaryKey] The primary key of the storage account.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly primaryKey?: string;
  /**
   * @member {string} [secondaryKey] The secondary key of the storage account.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly secondaryKey?: string;
}

/**
 * @interface
 * An interface representing ContainerRegistryCredentials.
 * Information about the Azure Container Registry which contains the images
 * deployed to the cluster.
 *
 */
export interface ContainerRegistryCredentials {
  /**
   * @member {string} [loginServer] The ACR login server name. User name is the
   * first part of the FQDN.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly loginServer?: string;
  /**
   * @member {string} [password] The ACR primary password.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly password?: string;
  /**
   * @member {string} [password2] The ACR secondary password.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly password2?: string;
  /**
   * @member {string} [username] The ACR login username.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly username?: string;
}

/**
 * @interface
 * An interface representing ContainerServiceCredentials.
 * Information about the Azure Container Registry which contains the images
 * deployed to the cluster.
 *
 */
export interface ContainerServiceCredentials {
  /**
   * @member {string} [acsKubeConfig] The ACS kube config file.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly acsKubeConfig?: string;
  /**
   * @member {ServicePrincipalProperties} [servicePrincipalConfiguration]
   * Service principal configuration used by Kubernetes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly servicePrincipalConfiguration?: ServicePrincipalProperties;
  /**
   * @member {string} [imagePullSecretName] The ACR image pull secret name
   * which was created in Kubernetes.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly imagePullSecretName?: string;
}

/**
 * @interface
 * An interface representing AppInsightsCredentials.
 * AppInsights credentials.
 *
 */
export interface AppInsightsCredentials {
  /**
   * @member {string} [appId] The AppInsights application ID.
   */
  appId?: string;
  /**
   * @member {string} [instrumentationKey] The AppInsights instrumentation key.
   * This is not returned in response of GET/PUT on the resource. To see this
   * please call listKeys API.
   */
  instrumentationKey?: string;
}

/**
 * @interface
 * An interface representing OperationalizationClusterCredentials.
 * Credentials to resources in the cluster.
 *
 */
export interface OperationalizationClusterCredentials {
  /**
   * @member {StorageAccountCredentials} [storageAccount] Credentials for the
   * Storage Account.
   */
  storageAccount?: StorageAccountCredentials;
  /**
   * @member {ContainerRegistryCredentials} [containerRegistry] Credentials for
   * Azure Container Registry.
   */
  containerRegistry?: ContainerRegistryCredentials;
  /**
   * @member {ContainerServiceCredentials} [containerService] Credentials for
   * Azure Container Service.
   */
  containerService?: ContainerServiceCredentials;
  /**
   * @member {AppInsightsCredentials} [appInsights] Credentials for Azure
   * AppInsights.
   */
  appInsights?: AppInsightsCredentials;
  /**
   * @member {ServiceAuthConfiguration} [serviceAuthConfiguration] Global
   * authorization keys for all user services deployed in cluster. These are
   * used if the service does not have auth keys.
   */
  serviceAuthConfiguration?: ServiceAuthConfiguration;
  /**
   * @member {SslConfiguration} [sslConfiguration] The SSL configuration for
   * the services.
   */
  sslConfiguration?: SslConfiguration;
}

/**
 * @interface
 * An interface representing CheckSystemServicesUpdatesAvailableResponse.
 * Information about updates available for system services in a cluster.
 *
 */
export interface CheckSystemServicesUpdatesAvailableResponse {
  /**
   * @member {UpdatesAvailable} [updatesAvailable] Yes if updates are available
   * for the system services, No if not. Possible values include: 'Yes', 'No'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updatesAvailable?: UpdatesAvailable;
}

/**
 * @interface
 * An interface representing UpdateSystemServicesResponse.
 * Response of the update system services API
 *
 */
export interface UpdateSystemServicesResponse {
  /**
   * @member {OperationStatus} [updateStatus] Update status. Possible values
   * include: 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded',
   * 'Failed', 'Canceled'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updateStatus?: OperationStatus;
  /**
   * @member {Date} [updateStartedOn] The date and time when the last system
   * services update was started.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updateStartedOn?: Date;
  /**
   * @member {Date} [updateCompletedOn] The date and time when the last system
   * services update completed.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly updateCompletedOn?: Date;
}

/**
 * @interface
 * An interface representing ResourceOperationDisplay.
 * Display of the operation.
 *
 */
export interface ResourceOperationDisplay {
  /**
   * @member {string} [provider] The resource provider name.
   */
  provider?: string;
  /**
   * @member {string} [resource] The resource name.
   */
  resource?: string;
  /**
   * @member {string} [operation] The operation.
   */
  operation?: string;
  /**
   * @member {string} [description] The description of the operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing ResourceOperation.
 * Resource operation.
 *
 */
export interface ResourceOperation {
  /**
   * @member {string} [name] Name of this operation.
   */
  name?: string;
  /**
   * @member {ResourceOperationDisplay} [display] Display of the operation.
   */
  display?: ResourceOperationDisplay;
  /**
   * @member {string} [origin] The operation origin.
   */
  origin?: string;
}

/**
 * @interface
 * An interface representing AvailableOperations.
 * Available operation list.
 *
 */
export interface AvailableOperations {
  /**
   * @member {ResourceOperation[]} [value] An array of available operations.
   */
  value?: ResourceOperation[];
}

/**
 * @interface
 * An interface representing OperationalizationClustersDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface OperationalizationClustersDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {boolean} [deleteAll] If true, deletes all resources associated
   * with this cluster.
   */
  deleteAll?: boolean;
}

/**
 * @interface
 * An interface representing OperationalizationClustersListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface OperationalizationClustersListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing OperationalizationClustersListBySubscriptionIdOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface OperationalizationClustersListBySubscriptionIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing OperationalizationClustersBeginDeleteMethodOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface OperationalizationClustersBeginDeleteMethodOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {boolean} [deleteAll] If true, deletes all resources associated
   * with this cluster.
   */
  deleteAll?: boolean;
}

/**
 * @interface
 * An interface representing MachineLearningComputeManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface MachineLearningComputeManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}

/**
 * @interface
 * An interface representing OperationalizationClustersDeleteHeaders.
 * Defines headers for Delete operation.
 *
 */
export interface OperationalizationClustersDeleteHeaders {
  /**
   * @member {string} [location] URI of the async operation.
   */
  location: string;
}

/**
 * @interface
 * An interface representing OperationalizationClustersUpdateSystemServicesHeaders.
 * Defines headers for UpdateSystemServices operation.
 *
 */
export interface OperationalizationClustersUpdateSystemServicesHeaders {
  /**
   * @member {string} [location] URI of the async operation.
   */
  location: string;
}


/**
 * @interface
 * An interface representing the PaginatedOperationalizationClustersList.
 * Paginated list of operationalization clusters.
 *
 * @extends Array<OperationalizationCluster>
 */
export interface PaginatedOperationalizationClustersList extends Array<OperationalizationCluster> {
  /**
   * @member {string} [nextLink] A continuation link (absolute URI) to the next
   * page of results in the list.
   */
  nextLink?: string;
}

/**
 * Defines values for OperationStatus.
 * Possible values include: 'Unknown', 'Updating', 'Creating', 'Deleting', 'Succeeded', 'Failed',
 * 'Canceled'
 * @readonly
 * @enum {string}
 */
export type OperationStatus = 'Unknown' | 'Updating' | 'Creating' | 'Deleting' | 'Succeeded' | 'Failed' | 'Canceled';

/**
 * Defines values for ClusterType.
 * Possible values include: 'ACS', 'Local'
 * @readonly
 * @enum {string}
 */
export type ClusterType = 'ACS' | 'Local';

/**
 * Defines values for OrchestratorType.
 * Possible values include: 'Kubernetes', 'None'
 * @readonly
 * @enum {string}
 */
export type OrchestratorType = 'Kubernetes' | 'None';

/**
 * Defines values for SystemServiceType.
 * Possible values include: 'None', 'ScoringFrontEnd', 'BatchFrontEnd'
 * @readonly
 * @enum {string}
 */
export type SystemServiceType = 'None' | 'ScoringFrontEnd' | 'BatchFrontEnd';

/**
 * Defines values for AgentVMSizeTypes.
 * Possible values include: 'Standard_A0', 'Standard_A1', 'Standard_A2', 'Standard_A3',
 * 'Standard_A4', 'Standard_A5', 'Standard_A6', 'Standard_A7', 'Standard_A8', 'Standard_A9',
 * 'Standard_A10', 'Standard_A11', 'Standard_D1', 'Standard_D2', 'Standard_D3', 'Standard_D4',
 * 'Standard_D11', 'Standard_D12', 'Standard_D13', 'Standard_D14', 'Standard_D1_v2',
 * 'Standard_D2_v2', 'Standard_D3_v2', 'Standard_D4_v2', 'Standard_D5_v2', 'Standard_D11_v2',
 * 'Standard_D12_v2', 'Standard_D13_v2', 'Standard_D14_v2', 'Standard_G1', 'Standard_G2',
 * 'Standard_G3', 'Standard_G4', 'Standard_G5', 'Standard_DS1', 'Standard_DS2', 'Standard_DS3',
 * 'Standard_DS4', 'Standard_DS11', 'Standard_DS12', 'Standard_DS13', 'Standard_DS14',
 * 'Standard_GS1', 'Standard_GS2', 'Standard_GS3', 'Standard_GS4', 'Standard_GS5'
 * @readonly
 * @enum {string}
 */
export type AgentVMSizeTypes = 'Standard_A0' | 'Standard_A1' | 'Standard_A2' | 'Standard_A3' | 'Standard_A4' | 'Standard_A5' | 'Standard_A6' | 'Standard_A7' | 'Standard_A8' | 'Standard_A9' | 'Standard_A10' | 'Standard_A11' | 'Standard_D1' | 'Standard_D2' | 'Standard_D3' | 'Standard_D4' | 'Standard_D11' | 'Standard_D12' | 'Standard_D13' | 'Standard_D14' | 'Standard_D1_v2' | 'Standard_D2_v2' | 'Standard_D3_v2' | 'Standard_D4_v2' | 'Standard_D5_v2' | 'Standard_D11_v2' | 'Standard_D12_v2' | 'Standard_D13_v2' | 'Standard_D14_v2' | 'Standard_G1' | 'Standard_G2' | 'Standard_G3' | 'Standard_G4' | 'Standard_G5' | 'Standard_DS1' | 'Standard_DS2' | 'Standard_DS3' | 'Standard_DS4' | 'Standard_DS11' | 'Standard_DS12' | 'Standard_DS13' | 'Standard_DS14' | 'Standard_GS1' | 'Standard_GS2' | 'Standard_GS3' | 'Standard_GS4' | 'Standard_GS5';

/**
 * Defines values for Status.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type Status = 'Enabled' | 'Disabled';

/**
 * Defines values for UpdatesAvailable.
 * Possible values include: 'Yes', 'No'
 * @readonly
 * @enum {string}
 */
export type UpdatesAvailable = 'Yes' | 'No';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type OperationalizationClustersCreateOrUpdateResponse = OperationalizationCluster & {
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
      parsedBody: OperationalizationCluster;
    };
};

/**
 * Contains response data for the get operation.
 */
export type OperationalizationClustersGetResponse = OperationalizationCluster & {
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
      parsedBody: OperationalizationCluster;
    };
};

/**
 * Contains response data for the update operation.
 */
export type OperationalizationClustersUpdateResponse = OperationalizationCluster & {
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
      parsedBody: OperationalizationCluster;
    };
};

/**
 * Contains response data for the deleteMethod operation.
 */
export type OperationalizationClustersDeleteResponse = OperationalizationClustersDeleteHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: OperationalizationClustersDeleteHeaders;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type OperationalizationClustersListKeysResponse = OperationalizationClusterCredentials & {
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
      parsedBody: OperationalizationClusterCredentials;
    };
};

/**
 * Contains response data for the checkSystemServicesUpdatesAvailable operation.
 */
export type OperationalizationClustersCheckSystemServicesUpdatesAvailableResponse = CheckSystemServicesUpdatesAvailableResponse & {
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
      parsedBody: CheckSystemServicesUpdatesAvailableResponse;
    };
};

/**
 * Contains response data for the updateSystemServices operation.
 */
export type OperationalizationClustersUpdateSystemServicesResponse = UpdateSystemServicesResponse & OperationalizationClustersUpdateSystemServicesHeaders & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The parsed HTTP response headers.
       */
      parsedHeaders: OperationalizationClustersUpdateSystemServicesHeaders;
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: UpdateSystemServicesResponse;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type OperationalizationClustersListByResourceGroupResponse = PaginatedOperationalizationClustersList & {
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
      parsedBody: PaginatedOperationalizationClustersList;
    };
};

/**
 * Contains response data for the listBySubscriptionId operation.
 */
export type OperationalizationClustersListBySubscriptionIdResponse = PaginatedOperationalizationClustersList & {
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
      parsedBody: PaginatedOperationalizationClustersList;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type OperationalizationClustersBeginCreateOrUpdateResponse = OperationalizationCluster & {
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
      parsedBody: OperationalizationCluster;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type OperationalizationClustersListByResourceGroupNextResponse = PaginatedOperationalizationClustersList & {
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
      parsedBody: PaginatedOperationalizationClustersList;
    };
};

/**
 * Contains response data for the listBySubscriptionIdNext operation.
 */
export type OperationalizationClustersListBySubscriptionIdNextResponse = PaginatedOperationalizationClustersList & {
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
      parsedBody: PaginatedOperationalizationClustersList;
    };
};

/**
 * Contains response data for the listAvailableOperations operation.
 */
export type MachineLearningComputeListAvailableOperationsResponse = AvailableOperations & {
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
      parsedBody: AvailableOperations;
    };
};
