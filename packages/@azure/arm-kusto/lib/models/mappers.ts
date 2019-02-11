/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const TrustedExternalTenant: msRest.CompositeMapper = {
  serializedName: "TrustedExternalTenant",
  type: {
    name: "Composite",
    className: "TrustedExternalTenant",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureSku: msRest.CompositeMapper = {
  serializedName: "AzureSku",
  type: {
    name: "Composite",
    className: "AzureSku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      },
      tier: {
        required: true,
        isConstant: true,
        serializedName: "tier",
        defaultValue: 'Standard',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AzureCapacity: msRest.CompositeMapper = {
  serializedName: "AzureCapacity",
  type: {
    name: "Composite",
    className: "AzureCapacity",
    modelProperties: {
      scaleType: {
        required: true,
        serializedName: "scaleType",
        type: {
          name: "String"
        }
      },
      minimum: {
        required: true,
        serializedName: "minimum",
        type: {
          name: "Number"
        }
      },
      maximum: {
        required: true,
        serializedName: "maximum",
        type: {
          name: "Number"
        }
      },
      default: {
        required: true,
        serializedName: "default",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const AzureResourceSku: msRest.CompositeMapper = {
  serializedName: "AzureResourceSku",
  type: {
    name: "Composite",
    className: "AzureResourceSku",
    modelProperties: {
      resourceType: {
        serializedName: "resourceType",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Composite",
          className: "AzureCapacity"
        }
      }
    }
  }
};

export const DatabaseStatistics: msRest.CompositeMapper = {
  serializedName: "DatabaseStatistics",
  type: {
    name: "Composite",
    className: "DatabaseStatistics",
    modelProperties: {
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Resource: msRest.CompositeMapper = {
  serializedName: "Resource",
  type: {
    name: "Composite",
    className: "Resource",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const TrackedResource: msRest.CompositeMapper = {
  serializedName: "TrackedResource",
  type: {
    name: "Composite",
    className: "TrackedResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        required: true,
        serializedName: "location",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cluster: msRest.CompositeMapper = {
  serializedName: "Cluster",
  type: {
    name: "Composite",
    className: "Cluster",
    modelProperties: {
      ...TrackedResource.type.modelProperties,
      sku: {
        required: true,
        serializedName: "sku",
        defaultValue: {},
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      uri: {
        readOnly: true,
        serializedName: "properties.uri",
        type: {
          name: "String"
        }
      },
      dataIngestionUri: {
        readOnly: true,
        serializedName: "properties.dataIngestionUri",
        type: {
          name: "String"
        }
      },
      trustedExternalTenants: {
        serializedName: "properties.trustedExternalTenants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrustedExternalTenant"
            }
          }
        }
      }
    }
  }
};

export const ClusterUpdate: msRest.CompositeMapper = {
  serializedName: "ClusterUpdate",
  type: {
    name: "Composite",
    className: "ClusterUpdate",
    modelProperties: {
      ...Resource.type.modelProperties,
      tags: {
        serializedName: "tags",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AzureSku"
        }
      },
      state: {
        readOnly: true,
        serializedName: "properties.state",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      uri: {
        readOnly: true,
        serializedName: "properties.uri",
        type: {
          name: "String"
        }
      },
      dataIngestionUri: {
        readOnly: true,
        serializedName: "properties.dataIngestionUri",
        type: {
          name: "String"
        }
      },
      trustedExternalTenants: {
        serializedName: "properties.trustedExternalTenants",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "TrustedExternalTenant"
            }
          }
        }
      }
    }
  }
};

export const ProxyResource: msRest.CompositeMapper = {
  serializedName: "ProxyResource",
  type: {
    name: "Composite",
    className: "ProxyResource",
    modelProperties: {
      ...Resource.type.modelProperties
    }
  }
};

export const Database: msRest.CompositeMapper = {
  serializedName: "Database",
  type: {
    name: "Composite",
    className: "Database",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      softDeletePeriod: {
        serializedName: "properties.softDeletePeriod",
        type: {
          name: "TimeSpan"
        }
      },
      hotCachePeriod: {
        serializedName: "properties.hotCachePeriod",
        type: {
          name: "TimeSpan"
        }
      },
      statistics: {
        serializedName: "properties.statistics",
        type: {
          name: "Composite",
          className: "DatabaseStatistics"
        }
      }
    }
  }
};

export const DatabaseUpdate: msRest.CompositeMapper = {
  serializedName: "DatabaseUpdate",
  type: {
    name: "Composite",
    className: "DatabaseUpdate",
    modelProperties: {
      ...Resource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      softDeletePeriod: {
        serializedName: "properties.softDeletePeriod",
        type: {
          name: "TimeSpan"
        }
      },
      hotCachePeriod: {
        serializedName: "properties.hotCachePeriod",
        type: {
          name: "TimeSpan"
        }
      },
      statistics: {
        serializedName: "properties.statistics",
        type: {
          name: "Composite",
          className: "DatabaseStatistics"
        }
      }
    }
  }
};

export const DatabasePrincipal: msRest.CompositeMapper = {
  serializedName: "DatabasePrincipal",
  type: {
    name: "Composite",
    className: "DatabasePrincipal",
    modelProperties: {
      role: {
        required: true,
        serializedName: "role",
        type: {
          name: "String"
        }
      },
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      fqn: {
        serializedName: "fqn",
        type: {
          name: "String"
        }
      },
      email: {
        serializedName: "email",
        type: {
          name: "String"
        }
      },
      appId: {
        serializedName: "appId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataConnection: msRest.CompositeMapper = {
  serializedName: "DataConnection",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    uberParent: "DataConnection",
    className: "DataConnection",
    modelProperties: {
      ...ProxyResource.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataConnectionValidationResult: msRest.CompositeMapper = {
  serializedName: "DataConnectionValidationResult",
  type: {
    name: "Composite",
    className: "DataConnectionValidationResult",
    modelProperties: {
      errorMessage: {
        serializedName: "errorMessage",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatabasePrincipalListRequest: msRest.CompositeMapper = {
  serializedName: "DatabasePrincipalListRequest",
  type: {
    name: "Composite",
    className: "DatabasePrincipalListRequest",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatabasePrincipal"
            }
          }
        }
      }
    }
  }
};

export const DataConnectionValidation: msRest.CompositeMapper = {
  serializedName: "DataConnectionValidation",
  type: {
    name: "Composite",
    className: "DataConnectionValidation",
    modelProperties: {
      dataConnectionName: {
        serializedName: "dataConnectionName",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "DataConnection"
        }
      }
    }
  }
};

export const EventHubDataConnection: msRest.CompositeMapper = {
  serializedName: "EventHub",
  type: {
    name: "Composite",
    className: "EventHubDataConnection",
    modelProperties: {
      ...DataConnection.type.modelProperties,
      eventHubResourceId: {
        required: true,
        serializedName: "properties.eventHubResourceId",
        type: {
          name: "String"
        }
      },
      consumerGroup: {
        required: true,
        serializedName: "properties.consumerGroup",
        type: {
          name: "String"
        }
      },
      tableName: {
        serializedName: "properties.tableName",
        type: {
          name: "String"
        }
      },
      mappingRuleName: {
        serializedName: "properties.mappingRuleName",
        type: {
          name: "String"
        }
      },
      dataFormat: {
        serializedName: "properties.dataFormat",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const EventGridDataConnection: msRest.CompositeMapper = {
  serializedName: "EventGrid",
  type: {
    name: "Composite",
    className: "EventGridDataConnection",
    modelProperties: {
      ...DataConnection.type.modelProperties,
      storageAccountResourceId: {
        required: true,
        serializedName: "properties.storageAccountResourceId",
        type: {
          name: "String"
        }
      },
      eventHubResourceId: {
        required: true,
        serializedName: "properties.eventHubResourceId",
        type: {
          name: "String"
        }
      },
      consumerGroup: {
        required: true,
        serializedName: "properties.consumerGroup",
        type: {
          name: "String"
        }
      },
      tableName: {
        required: true,
        serializedName: "properties.tableName",
        type: {
          name: "String"
        }
      },
      mappingRuleName: {
        serializedName: "properties.mappingRuleName",
        type: {
          name: "String"
        }
      },
      dataFormat: {
        required: true,
        serializedName: "properties.dataFormat",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DataConnectionValidationListResult: msRest.CompositeMapper = {
  serializedName: "DataConnectionValidationListResult",
  type: {
    name: "Composite",
    className: "DataConnectionValidationListResult",
    modelProperties: {
      value: {
        serializedName: "value",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataConnectionValidationResult"
            }
          }
        }
      }
    }
  }
};

export const ClusterCheckNameRequest: msRest.CompositeMapper = {
  serializedName: "ClusterCheckNameRequest",
  type: {
    name: "Composite",
    className: "ClusterCheckNameRequest",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'Microsoft.Kusto/clusters',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DatabaseCheckNameRequest: msRest.CompositeMapper = {
  serializedName: "DatabaseCheckNameRequest",
  type: {
    name: "Composite",
    className: "DatabaseCheckNameRequest",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        required: true,
        isConstant: true,
        serializedName: "type",
        defaultValue: 'Microsoft.Kusto/clusters/databases',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const CheckNameResult: msRest.CompositeMapper = {
  serializedName: "CheckNameResult",
  type: {
    name: "Composite",
    className: "CheckNameResult",
    modelProperties: {
      nameAvailable: {
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "Operation_display",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Operation: msRest.CompositeMapper = {
  serializedName: "Operation",
  type: {
    name: "Composite",
    className: "Operation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      display: {
        serializedName: "display",
        type: {
          name: "Composite",
          className: "OperationDisplay"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      }
    }
  }
};

export const AzureEntityResource: msRest.CompositeMapper = {
  serializedName: "AzureEntityResource",
  type: {
    name: "Composite",
    className: "AzureEntityResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      etag: {
        readOnly: true,
        serializedName: "etag",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ClusterListResult: msRest.CompositeMapper = {
  serializedName: "ClusterListResult",
  type: {
    name: "Composite",
    className: "ClusterListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Cluster"
            }
          }
        }
      }
    }
  }
};

export const ListSkusResult: msRest.CompositeMapper = {
  serializedName: "ListSkusResult",
  type: {
    name: "Composite",
    className: "ListSkusResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureSku"
            }
          }
        }
      }
    }
  }
};

export const ListResourceSkusResult: msRest.CompositeMapper = {
  serializedName: "ListResourceSkusResult",
  type: {
    name: "Composite",
    className: "ListResourceSkusResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "AzureResourceSku"
            }
          }
        }
      }
    }
  }
};

export const DatabaseListResult: msRest.CompositeMapper = {
  serializedName: "DatabaseListResult",
  type: {
    name: "Composite",
    className: "DatabaseListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Database"
            }
          }
        }
      }
    }
  }
};

export const DatabasePrincipalListResult: msRest.CompositeMapper = {
  serializedName: "DatabasePrincipalListResult",
  type: {
    name: "Composite",
    className: "DatabasePrincipalListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DatabasePrincipal"
            }
          }
        }
      }
    }
  }
};

export const DataConnectionListResult: msRest.CompositeMapper = {
  serializedName: "DataConnectionListResult",
  type: {
    name: "Composite",
    className: "DataConnectionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DataConnection"
            }
          }
        }
      }
    }
  }
};

export const OperationListResult: msRest.CompositeMapper = {
  serializedName: "OperationListResult",
  type: {
    name: "Composite",
    className: "OperationListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Operation"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'BaseResource.DataConnection' : DataConnection,
  'BaseResource.EventHub' : EventHubDataConnection,
  'BaseResource.EventGrid' : EventGridDataConnection

};
