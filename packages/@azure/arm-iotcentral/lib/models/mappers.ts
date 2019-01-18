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

export const AppSkuInfo: msRest.CompositeMapper = {
  serializedName: "AppSkuInfo",
  type: {
    name: "Composite",
    className: "AppSkuInfo",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
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
        constraints: {
          Pattern: /^(?![0-9]+$)(?!-)[a-zA-Z0-9-]{2,99}[a-zA-Z0-9]$/
        },
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
        required: true,
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

export const App: msRest.CompositeMapper = {
  serializedName: "App",
  type: {
    name: "Composite",
    className: "App",
    modelProperties: {
      ...Resource.type.modelProperties,
      applicationId: {
        readOnly: true,
        serializedName: "properties.applicationId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        constraints: {
          Pattern: /^.{1,200}$/
        },
        type: {
          name: "String"
        }
      },
      subdomain: {
        serializedName: "properties.subdomain",
        constraints: {
          Pattern: /^[a-z0-9-]{1,63}$/
        },
        type: {
          name: "String"
        }
      },
      template: {
        serializedName: "properties.template",
        type: {
          name: "String"
        }
      },
      sku: {
        required: true,
        serializedName: "sku",
        type: {
          name: "Composite",
          className: "AppSkuInfo"
        }
      }
    }
  }
};

export const AppPatch: msRest.CompositeMapper = {
  serializedName: "AppPatch",
  type: {
    name: "Composite",
    className: "AppPatch",
    modelProperties: {
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
      applicationId: {
        readOnly: true,
        serializedName: "properties.applicationId",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "properties.displayName",
        constraints: {
          Pattern: /^.{1,200}$/
        },
        type: {
          name: "String"
        }
      },
      subdomain: {
        serializedName: "properties.subdomain",
        constraints: {
          Pattern: /^[a-z0-9-]{1,63}$/
        },
        type: {
          name: "String"
        }
      },
      template: {
        serializedName: "properties.template",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ErrorResponseBody: msRest.CompositeMapper = {
  serializedName: "ErrorResponseBody",
  type: {
    name: "Composite",
    className: "ErrorResponseBody",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
            }
          }
        }
      }
    }
  }
};

export const ErrorDetails: msRest.CompositeMapper = {
  serializedName: "ErrorDetails",
  type: {
    name: "Composite",
    className: "ErrorDetails",
    modelProperties: {
      code: {
        readOnly: true,
        serializedName: "error.code",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "error.message",
        type: {
          name: "String"
        }
      },
      target: {
        readOnly: true,
        serializedName: "error.target",
        type: {
          name: "String"
        }
      },
      details: {
        serializedName: "error.details",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ErrorResponseBody"
            }
          }
        }
      }
    }
  }
};

export const OperationDisplay: msRest.CompositeMapper = {
  serializedName: "OperationDisplay",
  type: {
    name: "Composite",
    className: "OperationDisplay",
    modelProperties: {
      provider: {
        readOnly: true,
        serializedName: "provider",
        type: {
          name: "String"
        }
      },
      resource: {
        readOnly: true,
        serializedName: "resource",
        type: {
          name: "String"
        }
      },
      operation: {
        readOnly: true,
        serializedName: "operation",
        type: {
          name: "String"
        }
      },
      description: {
        readOnly: true,
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
        readOnly: true,
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

export const OperationInputs: msRest.CompositeMapper = {
  serializedName: "OperationInputs",
  type: {
    name: "Composite",
    className: "OperationInputs",
    modelProperties: {
      name: {
        required: true,
        serializedName: "name",
        constraints: {
          Pattern: /^[a-z0-9-]{1,63}$/
        },
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        defaultValue: 'IoTApps',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppAvailabilityInfo: msRest.CompositeMapper = {
  serializedName: "AppAvailabilityInfo",
  type: {
    name: "Composite",
    className: "AppAvailabilityInfo",
    modelProperties: {
      nameAvailable: {
        readOnly: true,
        serializedName: "nameAvailable",
        type: {
          name: "Boolean"
        }
      },
      reason: {
        readOnly: true,
        serializedName: "reason",
        type: {
          name: "String"
        }
      },
      message: {
        readOnly: true,
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const AppListResult: msRest.CompositeMapper = {
  serializedName: "AppListResult",
  type: {
    name: "Composite",
    className: "AppListResult",
    modelProperties: {
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "App"
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
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      },
      value: {
        readOnly: true,
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
      }
    }
  }
};
