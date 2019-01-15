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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { SecurityCenterContext } from "./securityCenterContext";


class SecurityCenter extends SecurityCenterContext {
  // Operation groups
  pricings: operations.Pricings;
  securityContacts: operations.SecurityContacts;
  workspaceSettings: operations.WorkspaceSettings;
  autoProvisioningSettings: operations.AutoProvisioningSettings;
  compliances: operations.Compliances;
  advancedThreatProtection: operations.AdvancedThreatProtection;
  settings: operations.Settings;
  informationProtectionPolicies: operations.InformationProtectionPolicies;
  operations: operations.Operations;
  locations: operations.Locations;
  tasks: operations.Tasks;
  alerts: operations.Alerts;
  discoveredSecuritySolutions: operations.DiscoveredSecuritySolutions;
  jitNetworkAccessPolicies: operations.JitNetworkAccessPolicies;
  externalSecuritySolutions: operations.ExternalSecuritySolutions;
  adaptiveNetworkControls: operations.AdaptiveNetworkControlsOperations;
  topology: operations.Topology;
  allowedConnections: operations.AllowedConnections;

  /**
   * Initializes a new instance of the SecurityCenter class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Azure subscription ID
   * @param ascLocation The location where ASC stores the data of the subscription. can be retrieved
   * from Get locations
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, ascLocation: string, options?: Models.SecurityCenterOptions) {
    super(credentials, subscriptionId, ascLocation, options);
    this.pricings = new operations.Pricings(this);
    this.securityContacts = new operations.SecurityContacts(this);
    this.workspaceSettings = new operations.WorkspaceSettings(this);
    this.autoProvisioningSettings = new operations.AutoProvisioningSettings(this);
    this.compliances = new operations.Compliances(this);
    this.advancedThreatProtection = new operations.AdvancedThreatProtection(this);
    this.settings = new operations.Settings(this);
    this.informationProtectionPolicies = new operations.InformationProtectionPolicies(this);
    this.operations = new operations.Operations(this);
    this.locations = new operations.Locations(this);
    this.tasks = new operations.Tasks(this);
    this.alerts = new operations.Alerts(this);
    this.discoveredSecuritySolutions = new operations.DiscoveredSecuritySolutions(this);
    this.jitNetworkAccessPolicies = new operations.JitNetworkAccessPolicies(this);
    this.externalSecuritySolutions = new operations.ExternalSecuritySolutions(this);
    this.adaptiveNetworkControls = new operations.AdaptiveNetworkControlsOperations(this);
    this.topology = new operations.Topology(this);
    this.allowedConnections = new operations.AllowedConnections(this);
  }
}

// Operation Specifications

export {
  SecurityCenter,
  SecurityCenterContext,
  Models as SecurityCenterModels,
  Mappers as SecurityCenterMappers
};
export * from "./operations";
