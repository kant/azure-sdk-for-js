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
import { DataLakeStorageClientContext } from "./dataLakeStorageClientContext";


class DataLakeStorageClient extends DataLakeStorageClientContext {
  // Operation groups
  filesystem: operations.FilesystemOperations;
  path: operations.PathOperations;

  /**
   * Initializes a new instance of the DataLakeStorageClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param accountName The Azure Storage account name.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, accountName: string, options?: Models.DataLakeStorageClientOptions) {
    super(credentials, accountName, options);
    this.filesystem = new operations.FilesystemOperations(this);
    this.path = new operations.PathOperations(this);
  }
}

// Operation Specifications

export {
  DataLakeStorageClient,
  DataLakeStorageClientContext,
  Models as DataLakeStorageModels,
  Mappers as DataLakeStorageMappers
};
export * from "./operations";
