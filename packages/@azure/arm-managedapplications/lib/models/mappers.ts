/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const Plan: msRest.CompositeMapper = {
  serializedName: "Plan",
  type: {
    name: "Composite",
    className: "Plan",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        required: true,
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        required: true,
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        required: true,
        serializedName: "version",
        type: {
          name: "String"
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
      },
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
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
      }
    }
  }
};

export const GenericResource: msRest.CompositeMapper = {
  serializedName: "GenericResource",
  type: {
    name: "Composite",
    className: "GenericResource",
    modelProperties: {
      ...Resource.type.modelProperties,
      managedBy: {
        serializedName: "managedBy",
        type: {
          name: "String"
        }
      },
      sku: {
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "Sku"
        }
      },
      identity: {
        serializedName: "identity",
        type: {
          name: "Composite",
          className: "Identity"
        }
      }
    }
  }
};

export const Appliance: msRest.CompositeMapper = {
  serializedName: "Appliance",
  type: {
    name: "Composite",
    className: "Appliance",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      managedResourceGroupId: {
        required: true,
        serializedName: "properties.managedResourceGroupId",
        type: {
          name: "String"
        }
      },
      applianceDefinitionId: {
        serializedName: "properties.applianceDefinitionId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Object"
        }
      },
      outputs: {
        readOnly: true,
        serializedName: "properties.outputs",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      uiDefinitionUri: {
        serializedName: "properties.uiDefinitionUri",
        type: {
          name: "String"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "Plan"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PlanPatchable: msRest.CompositeMapper = {
  serializedName: "PlanPatchable",
  type: {
    name: "Composite",
    className: "PlanPatchable",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      publisher: {
        serializedName: "publisher",
        type: {
          name: "String"
        }
      },
      product: {
        serializedName: "product",
        type: {
          name: "String"
        }
      },
      promotionCode: {
        serializedName: "promotionCode",
        type: {
          name: "String"
        }
      },
      version: {
        serializedName: "version",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppliancePatchable: msRest.CompositeMapper = {
  serializedName: "AppliancePatchable",
  type: {
    name: "Composite",
    className: "AppliancePatchable",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      managedResourceGroupId: {
        serializedName: "properties.managedResourceGroupId",
        type: {
          name: "String"
        }
      },
      applianceDefinitionId: {
        serializedName: "properties.applianceDefinitionId",
        type: {
          name: "String"
        }
      },
      parameters: {
        serializedName: "properties.parameters",
        type: {
          name: "Object"
        }
      },
      outputs: {
        readOnly: true,
        serializedName: "properties.outputs",
        type: {
          name: "Object"
        }
      },
      provisioningState: {
        readOnly: true,
        serializedName: "properties.provisioningState",
        type: {
          name: "String"
        }
      },
      uiDefinitionUri: {
        serializedName: "properties.uiDefinitionUri",
        type: {
          name: "String"
        }
      },
      plan: {
        serializedName: "plan",
        type: {
          name: "Composite",
          className: "PlanPatchable"
        }
      },
      kind: {
        serializedName: "kind",
        constraints: {
          Pattern: /^[-\w\._,\(\)]+$/
        },
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplianceProviderAuthorization: msRest.CompositeMapper = {
  serializedName: "ApplianceProviderAuthorization",
  type: {
    name: "Composite",
    className: "ApplianceProviderAuthorization",
    modelProperties: {
      principalId: {
        required: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      roleDefinitionId: {
        required: true,
        serializedName: "roleDefinitionId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ApplianceArtifact: msRest.CompositeMapper = {
  serializedName: "ApplianceArtifact",
  type: {
    name: "Composite",
    className: "ApplianceArtifact",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      uri: {
        serializedName: "uri",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "Template",
            "Custom"
          ]
        }
      }
    }
  }
};

export const ApplianceDefinition: msRest.CompositeMapper = {
  serializedName: "ApplianceDefinition",
  type: {
    name: "Composite",
    className: "ApplianceDefinition",
    modelProperties: {
      ...GenericResource.type.modelProperties,
      lockLevel: {
        required: true,
        serializedName: "properties.lockLevel",
        type: {
          name: "Enum",
          allowedValues: [
            "CanNotDelete",
            "ReadOnly",
            "None"
          ]
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        type: {
          name: "String"
        }
      },
      authorizations: {
        required: true,
        serializedName: "properties.authorizations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceProviderAuthorization"
            }
          }
        }
      },
      artifacts: {
        serializedName: "properties.artifacts",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceArtifact"
            }
          }
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      packageFileUri: {
        required: true,
        serializedName: "properties.packageFileUri",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Sku: msRest.CompositeMapper = {
  serializedName: "Sku",
  type: {
    name: "Composite",
    className: "Sku",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      tier: {
        serializedName: "tier",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "String"
        }
      },
      family: {
        serializedName: "family",
        type: {
          name: "String"
        }
      },
      model: {
        serializedName: "model",
        type: {
          name: "String"
        }
      },
      capacity: {
        serializedName: "capacity",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const Identity: msRest.CompositeMapper = {
  serializedName: "Identity",
  type: {
    name: "Composite",
    className: "Identity",
    modelProperties: {
      principalId: {
        readOnly: true,
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      tenantId: {
        readOnly: true,
        serializedName: "tenantId",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "Enum",
          allowedValues: [
            "SystemAssigned"
          ]
        }
      }
    }
  }
};

export const ErrorResponse: msRest.CompositeMapper = {
  serializedName: "ErrorResponse",
  type: {
    name: "Composite",
    className: "ErrorResponse",
    modelProperties: {
      httpStatus: {
        serializedName: "httpStatus",
        type: {
          name: "String"
        }
      },
      errorCode: {
        serializedName: "errorCode",
        type: {
          name: "String"
        }
      },
      errorMessage: {
        serializedName: "errorMessage",
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
      resource: {
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        serializedName: "operation",
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

export const ApplianceListResult: msRest.CompositeMapper = {
  serializedName: "ApplianceListResult",
  type: {
    name: "Composite",
    className: "ApplianceListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Appliance"
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

export const ApplianceDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "ApplianceDefinitionListResult",
  type: {
    name: "Composite",
    className: "ApplianceDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ApplianceDefinition"
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
