/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "acceptLanguage"
  ],
  mapper: {
    serializedName: "Accept-Language",
    type: {
      name: "String"
    }
  }
};
export const aspect: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "aspect"
  ],
  mapper: {
    serializedName: "aspect",
    type: {
      name: "String"
    }
  }
};
export const clientId: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientId"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientID",
    type: {
      name: "String"
    }
  }
};
export const clientIp: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "clientIp"
  ],
  mapper: {
    serializedName: "X-MSEdge-ClientIP",
    type: {
      name: "String"
    }
  }
};
export const color: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "color"
  ],
  mapper: {
    serializedName: "color",
    type: {
      name: "String"
    }
  }
};
export const count: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "count"
  ],
  mapper: {
    serializedName: "count",
    type: {
      name: "Number"
    }
  }
};
export const countryCode: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "countryCode"
  ],
  mapper: {
    serializedName: "cc",
    type: {
      name: "String"
    }
  }
};
export const customConfig: msRest.OperationQueryParameter = {
  parameterPath: "customConfig",
  mapper: {
    required: true,
    serializedName: "customConfig",
    type: {
      name: "String"
    }
  }
};
export const freshness: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "freshness"
  ],
  mapper: {
    serializedName: "freshness",
    type: {
      name: "String"
    }
  }
};
export const height: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "height"
  ],
  mapper: {
    serializedName: "height",
    type: {
      name: "Number"
    }
  }
};
export const id: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "id"
  ],
  mapper: {
    serializedName: "id",
    type: {
      name: "String"
    }
  }
};
export const imageContent: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "imageContent"
  ],
  mapper: {
    serializedName: "imageContent",
    type: {
      name: "String"
    }
  }
};
export const imageType: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "imageType"
  ],
  mapper: {
    serializedName: "imageType",
    type: {
      name: "String"
    }
  }
};
export const license: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "license"
  ],
  mapper: {
    serializedName: "license",
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "location"
  ],
  mapper: {
    serializedName: "X-Search-Location",
    type: {
      name: "String"
    }
  }
};
export const market: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "market"
  ],
  mapper: {
    serializedName: "mkt",
    type: {
      name: "String"
    }
  }
};
export const maxFileSize: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxFileSize"
  ],
  mapper: {
    serializedName: "maxFileSize",
    type: {
      name: "Number"
    }
  }
};
export const maxHeight: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxHeight"
  ],
  mapper: {
    serializedName: "maxHeight",
    type: {
      name: "Number"
    }
  }
};
export const maxWidth: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "maxWidth"
  ],
  mapper: {
    serializedName: "maxWidth",
    type: {
      name: "Number"
    }
  }
};
export const minFileSize: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "minFileSize"
  ],
  mapper: {
    serializedName: "minFileSize",
    type: {
      name: "Number"
    }
  }
};
export const minHeight: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "minHeight"
  ],
  mapper: {
    serializedName: "minHeight",
    type: {
      name: "Number"
    }
  }
};
export const minWidth: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "minWidth"
  ],
  mapper: {
    serializedName: "minWidth",
    type: {
      name: "Number"
    }
  }
};
export const offset: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "offset"
  ],
  mapper: {
    serializedName: "offset",
    type: {
      name: "Number"
    }
  }
};
export const query: msRest.OperationQueryParameter = {
  parameterPath: "query",
  mapper: {
    required: true,
    serializedName: "q",
    type: {
      name: "String"
    }
  }
};
export const safeSearch: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "safeSearch"
  ],
  mapper: {
    serializedName: "safeSearch",
    type: {
      name: "String"
    }
  }
};
export const setLang: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "setLang"
  ],
  mapper: {
    serializedName: "setLang",
    type: {
      name: "String"
    }
  }
};
export const size: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "size"
  ],
  mapper: {
    serializedName: "size",
    type: {
      name: "String"
    }
  }
};
export const userAgent: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "userAgent"
  ],
  mapper: {
    serializedName: "User-Agent",
    type: {
      name: "String"
    }
  }
};
export const width: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "width"
  ],
  mapper: {
    serializedName: "width",
    type: {
      name: "Number"
    }
  }
};
export const xBingApisSDK: msRest.OperationParameter = {
  parameterPath: "xBingApisSDK",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "X-BingApis-SDK",
    defaultValue: 'true',
    type: {
      name: "String"
    }
  }
};