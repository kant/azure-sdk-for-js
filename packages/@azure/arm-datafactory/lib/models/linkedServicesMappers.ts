/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  LinkedServiceListResponse,
  LinkedServiceResource,
  SubResource,
  BaseResource,
  LinkedService,
  IntegrationRuntimeReference,
  ParameterSpecification,
  CloudError,
  Resource,
  Factory,
  FactoryIdentity,
  FactoryRepoConfiguration,
  IntegrationRuntimeResource,
  IntegrationRuntime,
  DatasetResource,
  Dataset,
  LinkedServiceReference,
  DatasetFolder,
  PipelineResource,
  Activity,
  ActivityDependency,
  UserProperty,
  VariableSpecification,
  PipelineFolder,
  TriggerResource,
  Trigger,
  FactoryVSTSConfiguration,
  FactoryGitHubConfiguration,
  RerunTumblingWindowTrigger,
  RerunTriggerResource,
  TumblingWindowTrigger,
  TriggerPipelineReference,
  PipelineReference,
  RetryPolicy,
  DependencyReference,
  MultiplePipelineTrigger,
  SapOpenHubLinkedService,
  SecretBase,
  AzureFunctionLinkedService,
  ResponsysLinkedService,
  AzureDatabricksLinkedService,
  AzureDataLakeAnalyticsLinkedService,
  HDInsightOnDemandLinkedService,
  ScriptAction,
  SalesforceMarketingCloudLinkedService,
  NetezzaLinkedService,
  AzureKeyVaultSecretReference,
  VerticaLinkedService,
  ZohoLinkedService,
  XeroLinkedService,
  SquareLinkedService,
  SparkLinkedService,
  ShopifyLinkedService,
  ServiceNowLinkedService,
  QuickBooksLinkedService,
  PrestoLinkedService,
  PhoenixLinkedService,
  PaypalLinkedService,
  MarketoLinkedService,
  MariaDBLinkedService,
  MagentoLinkedService,
  JiraLinkedService,
  ImpalaLinkedService,
  HubspotLinkedService,
  HiveLinkedService,
  HBaseLinkedService,
  GreenplumLinkedService,
  GoogleBigQueryLinkedService,
  EloquaLinkedService,
  DrillLinkedService,
  CouchbaseLinkedService,
  ConcurLinkedService,
  AzurePostgreSqlLinkedService,
  AmazonMWSLinkedService,
  SapHanaLinkedService,
  SapBWLinkedService,
  SftpServerLinkedService,
  FtpServerLinkedService,
  HttpLinkedService,
  AzureSearchLinkedService,
  CustomDataSourceLinkedService,
  AmazonRedshiftLinkedService,
  AmazonS3LinkedService,
  SapEccLinkedService,
  SapCloudForCustomerLinkedService,
  SalesforceLinkedService,
  AzureDataLakeStoreLinkedService,
  MongoDbLinkedService,
  CassandraLinkedService,
  WebLinkedService,
  WebLinkedServiceTypeProperties,
  ODataLinkedService,
  HdfsLinkedService,
  OdbcLinkedService,
  AzureMLLinkedService,
  TeradataLinkedService,
  Db2LinkedService,
  SybaseLinkedService,
  PostgreSqlLinkedService,
  MySqlLinkedService,
  AzureMySqlLinkedService,
  OracleLinkedService,
  FileServerLinkedService,
  HDInsightLinkedService,
  DynamicsLinkedService,
  CosmosDbLinkedService,
  AzureKeyVaultLinkedService,
  AzureBatchLinkedService,
  AzureSqlDatabaseLinkedService,
  SqlServerLinkedService,
  AzureSqlDWLinkedService,
  AzureTableStorageLinkedService,
  AzureBlobStorageLinkedService,
  AzureStorageLinkedService,
  SapOpenHubTableDataset,
  ResponsysObjectDataset,
  SalesforceMarketingCloudObjectDataset,
  VerticaTableDataset,
  NetezzaTableDataset,
  ZohoObjectDataset,
  XeroObjectDataset,
  SquareObjectDataset,
  SparkObjectDataset,
  ShopifyObjectDataset,
  ServiceNowObjectDataset,
  QuickBooksObjectDataset,
  PrestoObjectDataset,
  PhoenixObjectDataset,
  PaypalObjectDataset,
  MarketoObjectDataset,
  MariaDBTableDataset,
  MagentoObjectDataset,
  JiraObjectDataset,
  ImpalaObjectDataset,
  HubspotObjectDataset,
  HiveObjectDataset,
  HBaseObjectDataset,
  GreenplumTableDataset,
  GoogleBigQueryObjectDataset,
  EloquaObjectDataset,
  DrillTableDataset,
  CouchbaseTableDataset,
  ConcurObjectDataset,
  AzurePostgreSqlTableDataset,
  AmazonMWSObjectDataset,
  HttpDataset,
  DatasetStorageFormat,
  DatasetCompression,
  AzureSearchIndexDataset,
  WebTableDataset,
  SqlServerTableDataset,
  SapEccResourceDataset,
  SapCloudForCustomerResourceDataset,
  SalesforceObjectDataset,
  RelationalTableDataset,
  AzureMySqlTableDataset,
  OracleTableDataset,
  ODataResourceDataset,
  MongoDbCollectionDataset,
  FileShareDataset,
  AzureDataLakeStoreDataset,
  DynamicsEntityDataset,
  DocumentDbCollectionDataset,
  CustomDataset,
  CassandraTableDataset,
  AzureSqlDWTableDataset,
  AzureSqlTableDataset,
  AzureTableDataset,
  AzureBlobDataset,
  AmazonS3Dataset,
  ExecutionActivity,
  ActivityPolicy,
  ControlActivity,
  SelfHostedIntegrationRuntime,
  LinkedIntegrationRuntimeType,
  ManagedIntegrationRuntime,
  IntegrationRuntimeComputeProperties,
  IntegrationRuntimeVNetProperties,
  IntegrationRuntimeSsisProperties,
  IntegrationRuntimeSsisCatalogInfo,
  SecureString,
  IntegrationRuntimeCustomSetupScriptProperties,
  SelfDependencyTumblingWindowTriggerReference,
  TriggerDependencyReference,
  TriggerReference,
  BlobEventsTrigger,
  BlobTrigger,
  ScheduleTrigger,
  ScheduleTriggerRecurrence,
  RecurrenceSchedule,
  RecurrenceScheduleOccurrence,
  WebClientCertificateAuthentication,
  WebBasicAuthentication,
  WebAnonymousAuthentication,
  DatasetZipDeflateCompression,
  DatasetDeflateCompression,
  DatasetGZipCompression,
  DatasetBZip2Compression,
  ParquetFormat,
  OrcFormat,
  AvroFormat,
  JsonFormat,
  TextFormat,
  AzureFunctionActivity,
  DatabricksSparkPythonActivity,
  DatabricksSparkJarActivity,
  DatabricksNotebookActivity,
  DataLakeAnalyticsUSQLActivity,
  AzureMLUpdateResourceActivity,
  AzureMLBatchExecutionActivity,
  AzureMLWebServiceFile,
  GetMetadataActivity,
  DatasetReference,
  WebActivity,
  WebActivityAuthentication,
  LookupActivity,
  CopySource,
  DeleteActivity,
  LogStorageSettings,
  SqlServerStoredProcedureActivity,
  StoredProcedureParameter,
  CustomActivity,
  CustomActivityReferenceObject,
  ExecuteSSISPackageActivity,
  SSISPackageLocation,
  SSISExecutionCredential,
  SSISExecutionParameter,
  SSISPropertyOverride,
  HDInsightSparkActivity,
  HDInsightStreamingActivity,
  HDInsightMapReduceActivity,
  HDInsightPigActivity,
  HDInsightHiveActivity,
  CopyActivity,
  CopySink,
  CopyTranslator,
  StagingSettings,
  RedirectIncompatibleRowSettings,
  AppendVariableActivity,
  SetVariableActivity,
  FilterActivity,
  Expression,
  UntilActivity,
  WaitActivity,
  ForEachActivity,
  IfConditionActivity,
  ExecutePipelineActivity,
  LinkedIntegrationRuntimeRbacAuthorization,
  LinkedIntegrationRuntimeKeyAuthorization,
  TumblingWindowTriggerDependencyReference,
  SapOpenHubSource,
  AmazonRedshiftSource,
  RedshiftUnloadSettings,
  ResponsysSource,
  SalesforceMarketingCloudSource,
  VerticaSource,
  NetezzaSource,
  ZohoSource,
  XeroSource,
  SquareSource,
  SparkSource,
  ShopifySource,
  ServiceNowSource,
  QuickBooksSource,
  PrestoSource,
  PhoenixSource,
  PaypalSource,
  MarketoSource,
  MariaDBSource,
  MagentoSource,
  JiraSource,
  ImpalaSource,
  HubspotSource,
  HiveSource,
  HBaseSource,
  GreenplumSource,
  GoogleBigQuerySource,
  EloquaSource,
  DrillSource,
  CouchbaseSource,
  ConcurSource,
  AzurePostgreSqlSource,
  AmazonMWSSource,
  HttpSource,
  AzureDataLakeStoreSource,
  MongoDbSource,
  CassandraSource,
  WebSource,
  OracleSource,
  AzureMySqlSource,
  HdfsSource,
  DistcpSettings,
  FileSystemSource,
  SqlDWSource,
  SqlSource,
  SapEccSource,
  SapCloudForCustomerSource,
  SalesforceSource,
  RelationalSource,
  DynamicsSource,
  DocumentDbCollectionSource,
  BlobSource,
  AzureTableSource,
  TabularTranslator,
  SalesforceSink,
  DynamicsSink,
  OdbcSink,
  AzureSearchIndexSink,
  AzureDataLakeStoreSink,
  OracleSink,
  SqlDWSink,
  PolybaseSettings,
  SqlSink,
  DocumentDbCollectionSink,
  FileSystemSink,
  BlobSink,
  AzureTableSink,
  AzureQueueSink,
  SapCloudForCustomerSink
} from "../models/mappers";

