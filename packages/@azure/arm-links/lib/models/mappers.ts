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

export const ResourceLinkFilter: msRest.CompositeMapper = {
  serializedName: "ResourceLinkFilter",
  type: {
    name: "Composite",
    className: "ResourceLinkFilter",
    modelProperties: {
      targetId: {
        required: true,
        serializedName: "targetId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceLinkProperties: msRest.CompositeMapper = {
  serializedName: "ResourceLinkProperties",
  type: {
    name: "Composite",
    className: "ResourceLinkProperties",
    modelProperties: {
      sourceId: {
        readOnly: true,
        serializedName: "sourceId",
        type: {
          name: "String"
        }
      },
      targetId: {
        required: true,
        serializedName: "targetId",
        type: {
          name: "String"
        }
      },
      notes: {
        serializedName: "notes",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ResourceLink: msRest.CompositeMapper = {
  serializedName: "ResourceLink",
  type: {
    name: "Composite",
    className: "ResourceLink",
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
          name: "Object"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Composite",
          className: "ResourceLinkProperties"
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

export const ResourceLinkResult: msRest.CompositeMapper = {
  serializedName: "ResourceLinkResult",
  type: {
    name: "Composite",
    className: "ResourceLinkResult",
    modelProperties: {
      value: {
        required: true,
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceLink"
            }
          }
        }
      },
      nextLink: {
        readOnly: true,
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
